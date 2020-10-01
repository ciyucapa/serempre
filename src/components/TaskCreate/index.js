import React from 'react';
import {connect} from 'react-redux';
import styled from 'styled-components';

import useGeo from '../../hooks/useGeo';
import InputField from '../commons/InputField';
import Form from '../commons/Form';
import useTasks from '../../hooks/useTasks';
import {STRAPI_URL} from '../../config/constants';
import {addTask} from '../../state/ducks/task/actions';

import {validationSchema, initialValues} from './utils';
import TextField, {HIGH_SIZE} from '../commons/TextField';

const ContainerTaskCreate = styled.div`
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-content: center;
        align-items: center;
        text-align: center;
        width: 100%;
        padding-top: 20px;
        padding-bottom: 20px;
        @media (max-width: 768px) {
        padding-top: 10px
        padding-bottom: 10px;    
        }
`;

const ContainTaskCreate = styled.div`
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-content: center;
        align-item: center;
        width: 100%;
        padding-top: 20px;
        padding-bottom: 20px;
        @media (max-width: 768px) {
        padding-top: 10px;
        padding-bottom: 5px;        
        }
`;

const InputContent = styled.div`
        display: flex;
        justify-content: center;
        flex-direction: row;
        align-items: center;
        @media (max-width: 768px) {
        flex-direction: column;
        }
`;

const ButtonContent = styled.div`
        display: flex;
        justify-content: center;
        align-items: center;
`;

const Button = styled.button`
        text-align: center;
        color: #f6f6f6;
        background: #4848EF;
        padding: 5px;
        margin-top: 20px;
        width: 90px;
        border-radius: 50px;
        border: none;
`;

const TaskCreate = (props) => {
    const {
        values,
        errors,
        handleChange,
        addTask,
        handleReset,
    } = props;
    const {currentPosition} = useGeo();
    const hook = useTasks();

    const isValid = () => {
        return values.title && values.description && values.email;
    };

    const onCreate = async () => {
        if (isValid()) {
            const {title, description, email} = values;
            const taskItem = {
                title,
                description,
                email,
                position: currentPosition,
            };

            if (!STRAPI_URL) {
                taskItem.id = `${Math.floor(Math.random() * (100000 - 1)) + 1}`;
            }

            hook.createTask({variables: {input: {data: taskItem}}});
            addTask(taskItem);
            handleReset();
        }
    };

    return (
        <ContainerTaskCreate>
            <TextField text={'CREAR NUEVA TAREA'} type={HIGH_SIZE}/>
            <ContainTaskCreate>
                <InputContent>
                    <InputField
                        value={values.title}
                        placeholder={'Título...'}
                        onChange={handleChange('title')}
                        error={errors.title}
                    />
                    <InputField
                        value={values.description}
                        placeholder={'Descripción...'}
                        onChange={handleChange('description')}
                        error={errors.description}
                    />
                    <InputField
                        value={values.email}
                        placeholder={'Correo del encargado...'}
                        onChange={handleChange('email')}
                        error={errors.email}
                    />
                </InputContent>
                <ButtonContent>
                    <Button onClick={onCreate} disabled={!isValid()}>
                        Guardar
                    </Button>
                </ButtonContent>
            </ContainTaskCreate>
        </ContainerTaskCreate>
    );
};

const mapDispatchToProps = {
    addTask,
};

export default connect(
    null, mapDispatchToProps
)(Form({
    Child: TaskCreate,
    initialValues,
    validationSchema
}));
