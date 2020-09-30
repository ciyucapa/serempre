import * as yup from 'yup';

export const initialValues = {
    initialValues: {
        title: '',
        description: '',
        email: '',
    },
};

export const validationSchema =
    yup.object().shape({
        title: yup.string().required('Título requerido'),
        description: yup.string().required('Descripción requerido'),
        email: yup.string().email().required('Email requerido'),
    });
