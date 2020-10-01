import React, {useState} from 'react';
import PropTypes from 'prop-types';

import InputField from '../commons/InputField';
import styled from 'styled-components'

const ContainerTaskUpdate = styled.div`
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
`;

const ContainTaskUpdate = styled.div`
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-content: center;
        align-items: center;
        padding-top: 20px;
        padding-bottom: 20px;
        @media (max-width: 768px) {
        padding-top: 10px;
        padding-bottom: 10px;
        }
`;

const ButtonContent = styled.div`
        display: flex;
        justify-content: center;
        align-items: center;
`;

const ButtonInput = styled.div`
        display: flex;
        justify-content: center;
        flex-direction: row;
        align-items: center;
        @media (max-width: 768px) {
        flex-direction: column;
        }
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

const TaskUpdate = (props) => {
    const {id, updateTask} = props;
    const [title, setTitle] = useState(props.title);
    const [description, setDescription] = useState(props.description);
    const [email, setEmail] = useState(props.email);

    const onUpdate = () => {
        if (isValid()) {
            updateTask({
                title,
                description,
                email,
            }, id);
        }
    };

    const isValid = () => {
        return title && description && email;
    };

    const handleChange = (property) => {
        return (event) => {
          if (property === 'title') {
              setTitle(event.target.value);
              return;
          }

          if (property === 'description') {
              setDescription(event.target.value);
              return;
          }

          setEmail(event.target.value);
        };
    };

    return (
        <ContainerTaskUpdate>
            <ContainTaskUpdate>
                <ButtonInput>
                    <InputField
                        value={title}
                        placeholder={'Título...'}
                        onChange={handleChange('title')}
                    />
                    <InputField
                        value={description}
                        placeholder={'Descripción...'}
                        onChange={handleChange('description')}
                    />
                    <InputField
                        value={email}
                        placeholder={'Correo del encargado...'}
                        onChange={handleChange('email')}
                    />
                </ButtonInput>
                <ButtonContent>
                    <Button onClick={onUpdate} disabled={!isValid()}>
                        Editar
                    </Button>
                </ButtonContent>
            </ContainTaskUpdate>
        </ContainerTaskUpdate>
    );
};

TaskUpdate.propTypes = {
    id: PropTypes.string,
    title: PropTypes.string,
    description: PropTypes.string,
    email: PropTypes.string,
    updateTask: PropTypes.func,
};

TaskUpdate.defaultProps = {
    id: '',
    title: '',
    description: '',
    email: '',
    updateTask: () => {},
};

export default TaskUpdate;
