import React from 'react';
import PropTypes from 'prop-types';

const InputField = (props) => {
    const {error} = props;
    return (
        <div style={{padding: 10}}>
            <input {...props} />
            {error && (
                <div style={{color: '#FF0000'}}>{error}</div>
            )}
        </div>
    );
};

InputField.propTypes = {
    value: PropTypes.string,
    onChange: PropTypes.func,
    placeholder: PropTypes.string,
    error: PropTypes.string,
};

InputField.defaultProps = {
    value: '',
    onChange: '',
    placeholder: '',
    error: '',
};

export default InputField;
