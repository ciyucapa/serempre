import React from 'react';
import PropTypes from 'prop-types';
import styled from "styled-components"

const BoxInput = styled.div`
        padding-left: 10px;
        padding-right: 10px;
        @media (max-width: 768px) {
        padding-top: 5px;
        padding-bottom: 5px;
        }
`

const Input = styled.input`
        border: inset ;
        border-radius: 25px;
        outline:none;
        padding: 7px;
        text-align: center;
        @media (max-width: 768px) {
        padding: 5px;
        }
`

const Error = styled.div`
        color: #FF0000;
        text-align: center;
        @media (max-width: 768px) {
        font-size: 12px;
        }
`

const InputField = (props) => {
    const {error} = props;
    return (
        <BoxInput>
            <Input {...props} />
            {error && (
                <Error>{error}</Error>
            )}
        </BoxInput>
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
