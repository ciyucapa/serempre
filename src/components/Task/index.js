import React from 'react';
import PropTypes from 'prop-types';

const Task = (props) => {
    const {title, description} = props;
    return (
        <div>
            <div>
                <div>{title}</div>
                <div>{description}</div>
            </div>
            <div>
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
