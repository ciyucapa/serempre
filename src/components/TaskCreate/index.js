import React from 'react';
import {connect} from 'react-redux';

import styled from "styled-components"
import useGeo from '../../hooks/useGeo';
import InputField from '../commons/InputField';
import Form from '../commons/Form';
import useTasks from '../../hooks/useTasks';
import {addTask} from '../../state/ducks/task/actions';

import {validationSchema, initialValues} from './utils';
import TextField, {HIGH_SIZE} from "../commons/TextField";
import {resetCaches} from "@apollo/client";

const Container = styled.div`
        display: flex;
        flex-direction: column;
        justify-content: center;
        width: 100%;
        padding-top: 30px;
        align-content: center;
        align-items: center;
        text-align: center;
        @media (max-width: 768px) {
                
        background: red;
        }
`
const Contain = styled.div`
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-content: center;
        align-item: center;
        width: 100%;
        padding-top: 20px;
        padding-bottom: 20px;
        @media (max-width: 768px) {
                
        background: pink;
        }
`

const InputContent = styled.div`
        display: flex;
        flex-direction: row;
        justify-content: center;
        @media (max-width: 768px) {
        flex-direction: column;
        text-align: center;
        background: blue;
        }
`
const ButtonContent = styled.div`
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        width: 100%;
        padding-top: 20px;
        padding-bottom: 20px;
       
`

const Text = styled.div`
        text-align: center;
        @media (max-width: 768px) {
        }       
`

const Button = styled.button`
        display: flex;
        font-size: 1rem;
        background: #4848EF;
        color: #f6f6f6;
        border: 50px;
        border-radius: 50px;
        padding: 5px 20px;
        
        @media (max-width: 768px) {
        font-size: 0.8rem;
        
        }
        
`

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

            hook.createTask({variables: {input: {data: taskItem}}});
            addTask(taskItem);
            handleReset();
        }
    };

    return (
        <Container>
            <Text text={'CREAR NUEVA TAREA'} type={HIGH_SIZE}/>
            <Contain>
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
            </Contain>
        </Container>
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
