import * as Yup from 'yup';

const validationSchemaForgotPassword = Yup.object().shape({
  email: Yup.string().email('Input correct email').required('Email is a required field'),
  
});

export default validationSchemaForgotPassword;
