import React, {useState} from 'react';
import PropTypes from 'prop-types';

import InputField from '../commons/InputField';

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
        <div style={{display: 'flex', justifyContent: 'center', width: '100%', paddingTop: 10}}>
            <div style={{width: 800, display: 'flex', flexDirection: 'row'}}>
                <InputField
                    value={title}
                    placeholder={'Título'}
                    onChange={handleChange('title')}
                />
                <InputField
                    value={description}
                    placeholder={'Descripción'}
                    onChange={handleChange('description')}
                />
                <InputField
                    value={email}
                    placeholder={'Correo del encargado'}
                    onChange={handleChange('email')}
                />
                <button onClick={onUpdate} disabled={!isValid()}>
                    Editar
                </button>
            </div>
        </div>
    );
};

TaskUpdate.propTypes = {
    id: PropTypes.string,
    title: PropTypes.string,
    description: PropTypes.string,
    email: PropTypes.string,
    //updateTask: PropTypes.func,
};

TaskUpdate.defaultProps = {
    id: '',
    title: '',
    description: '',
    email: '',
    //updateTask: () => {},
};

export default TaskUpdate;
