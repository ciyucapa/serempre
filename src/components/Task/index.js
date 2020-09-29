import React from 'react';
import PropTypes from 'prop-types';

import TextField, {HIGH_SIZE} from '../commons/TextField';
import {Assets} from '../../resources';

const Task = (props) => {
    const {title, description} = props;
    return (
        <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center', paddingTop: 10, paddingBottom: 10}}>
            <div style={{display: 'flex', flexDirection: 'column'}}>
                <TextField text={title} type={HIGH_SIZE} />
                <TextField text={description} />
            </div>
            <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', paddingLeft: 30, cursor: 'pointer'}}>
                <img src={Assets.images.trash} alt={'Borrar tarea'} />
            </div>
        </div>
    );
};

Task.propTypes = {
    title: PropTypes.string,
    description: PropTypes.string,
};

Task.defaultProps = {
  title: '',
  description: '',
};

export default Task;
