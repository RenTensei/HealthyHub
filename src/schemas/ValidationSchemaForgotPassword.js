import * as Yup from 'yup';

const validationSchemaForgotPassword = Yup.object().shape({
  email: Yup.string().email().required('Email is a required field'),
  
});

export default validationSchemaForgotPassword;
