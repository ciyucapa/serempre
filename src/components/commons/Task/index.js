import React, {useState} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

import styled from 'styled-components';
import useTasks from '../../../hooks/useTasks';
import TaskUpdate from '../../TaskUpdate';
import TextField, {HIGH_SIZE} from '../../commons/TextField';
import {STRAPI_URL} from '../../../config/constants';
import {Assets} from '../../../resources';
import {deleteTask, updateTask} from '../../../state/ducks/task/actions';

const ContainerTask = styled.div`
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-content: center;
        align-items: center;
        padding-top: 5px;
        padding-bottom: 5px;
        width: 100%;
`;

const ContainTask = styled.div`
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-content: center;
        align-items: center;
        border-radius: 25px;
        border: 1px solid black;
        padding: 5px 30px;
        width: 100%;
        min-width: 400px;
        max-width: 400px;
        @media (max-width: 768px) {
        min-width: 300px;
        max-width: 300px;
        }
`;

const ContentField = styled.div`
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-content: center;
        text-align: left;
`;

const BoxImage = styled.div`
        display: flex;
        justify-content: center;
        flex-direction: column;
        align-content: center;
        align-items: center;
        padding-left: 20px;
        padding-right: 20px;
        cursor: pointer;
        @media (max-width: 768px) {
        padding-left: 10px;
        padding-right: 10px;
        }
`;

const Image = styled.img`
        width: 15px;
        height: 15px;
`;

const ButtonContent = styled.div`
       display: flex;
       flex-direction: row;
       justify-content: center;
       align-items: center;
`;

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
    const hook = useTasks();

    const deleteTaskHandler = () => {
        hook.deleteTask({variables: {id}});
        deleteTask(id);
    };

    const showOrHiddenUpdate = () => {
      setUpdate(!isUpdate);
    };

    const updateTaskHandler = (newValues, id) => {
        if (!STRAPI_URL) {
            console.log('Aqui entro');
            updateTask({...newValues, id});
        }

        hook.updateTask({
            variables: {
                input: {
                    where: {
                        id: id
                    },
                    data: newValues,
                }
            }
        });

        setUpdate(false);
    };

    return (
        <ContainerTask>
            <ContainTask>
                <ContentField>
                    <TextField text={title} type={HIGH_SIZE} />
                    <TextField text={description} />
                    <TextField text={email} />
                </ContentField>
                <ButtonContent>
                    <BoxImage onClick={showOrHiddenUpdate}>
                        <Image src={Assets.images.edit} alt={'Editar tarea'} />
                    </BoxImage>
                    <BoxImage onClick={deleteTaskHandler}>
                        <Image src={Assets.images.trash} alt={'Borrar tarea'} />
                    </BoxImage>
                </ButtonContent>
            </ContainTask>
            {isUpdate && (<TaskUpdate {...props} updateTask={updateTaskHandler} />)}
        </ContainerTask>
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
