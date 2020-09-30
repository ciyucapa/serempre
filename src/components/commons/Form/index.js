import React from 'react';
import PropTypes from 'prop-types';
import {Formik} from 'formik';

const Form = (props) => {
    const {Child, initialValues, validationSchema} = props;
    const Component = (componentProps) => {
        const {onSubmit} = componentProps;

        return (
            <Formik
                onSubmit={onSubmit}
                initialValues={initialValues}
                validationSchema={validationSchema}>
                {(propsForm) => <Child {...propsForm} {...componentProps} />}
            </Formik>
        );
    };

    Component.propTypes = {
        onSubmit: PropTypes.func,
    };

    return Component;
};

Form.propTypes = {
    Child: PropTypes.func.isRequired,
    validationSchema: PropTypes.func.isRequired,
    initialValues: PropTypes.shape.isRequired,
};

export default Form;
