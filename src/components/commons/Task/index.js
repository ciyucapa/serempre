import React, {useState} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

import TaskUpdate from '../../TaskUpdate';
import TextField, {HIGH_SIZE} from '../../commons/TextField';
import {Assets} from '../../../resources';
import {deleteTask, updateTask} from '../../../state/ducks/task/actions';

const Task = (props) => {
    const {
        id,
        title,
        description,
        email,
        deleteTask,
        updateTask,
    } = props;
    const [isUpdate, setUpdate] = useState(false);

    const deleteTaskHandler = () => {
        deleteTask(id);
    };

    const showOrHiddenUpdate = () => {
      setUpdate(!isUpdate);
    };

    const updateTaskHandler = (newValues) => {
      updateTask(newValues);
      setUpdate(false);
    };

    return (
        <div style={{width: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', paddingTop: 20, paddingBottom: 20}}>
            <div style={{width: 500, display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
                <div style={{display: 'flex', flexDirection: 'column'}}>
                    <TextField text={title} type={HIGH_SIZE} />
                    <TextField text={description} />
                </div>
                <div style={{display: 'flex', flexDirection: 'column', paddingLeft: 30, paddingRight: 30}}>
                    Correo del encargado
                    <TextField text={email} type={HIGH_SIZE} />
                </div>
                <div onClick={showOrHiddenUpdate} style={{display: 'flex', justifyContent: 'center', alignItems: 'center', paddingLeft: 30, cursor: 'pointer'}}>
                    <img src={Assets.images.edit} alt={'Editar tarea'} />
                </div>
                <div onClick={deleteTaskHandler} style={{display: 'flex', justifyContent: 'center', alignItems: 'center', paddingLeft: 30, cursor: 'pointer'}}>
                    <img src={Assets.images.trash} alt={'Borrar tarea'} />
                </div>
            </div>
            {isUpdate && (<TaskUpdate {...props} updateTask={updateTaskHandler} />)}
        </div>
    );
};

Task.propTypes = {
    title: PropTypes.string,
    description: PropTypes.string,
    email: PropTypes.string,
};

Task.defaultProps = {
    title: '',
    description: '',
    email: '',
};

const mapDispatchToProps = {
    deleteTask,
    updateTask,
};

export default connect(null, mapDispatchToProps)(Task);
