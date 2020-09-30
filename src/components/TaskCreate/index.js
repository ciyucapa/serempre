import React from 'react';
import {connect} from 'react-redux';

import useGeo from '../../hooks/useGeo';
import InputField from '../commons/InputField';
import Form from '../commons/Form';
import {addTask} from '../../state/ducks/task/actions';

import {validationSchema, initialValues} from './utils';
import TextField, {HIGH_SIZE} from "../commons/TextField";

const TaskCreate = (props) => {
    const {
        values,
        errors,
        handleChange,
        addTask,
        handleReset,
    } = props;
    const {currentPosition} = useGeo();

    console.log('Props: ', props);

    const isValid = () => {
        return values.title && values.description && values.email;
    };

    const onCreate = () => {
        if (isValid()) {
            const {title, description, email} = values;
            addTask({
                title,
                description,
                email,
                id: Math.floor(Math.random() * (100000 - 1)) + 1,
                position: currentPosition,
            });

            handleReset();
        }
    };

    return (
        <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', width: '100%', paddingBottom: 20}}>
            <TextField text={'CREAR NUEVA TAREA'} type={HIGH_SIZE} style={{textAlign: 'center'}} />
            <div style={{display: 'flex', justifyContent: 'center', width: '100%', paddingTop: 20}}>
                <div style={{width: 800, display: 'flex', flexDirection: 'row'}}>
                    <InputField
                        value={values.title}
                        placeholder={'Título'}
                        onChange={handleChange('title')}
                        error={errors.title}
                    />
                    <InputField
                        value={values.description}
                        placeholder={'Descripción'}
                        onChange={handleChange('description')}
                        error={errors.description}
                    />
                    <InputField
                        value={values.email}
                        placeholder={'Correo del encargado'}
                        onChange={handleChange('email')}
                        error={errors.email}
                    />
                    <button onClick={onCreate} disabled={!isValid()}>
                        Guardar
                    </button>
                </div>
            </div>
        </div>
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
