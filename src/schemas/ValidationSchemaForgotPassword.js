import * as Yup from 'yup';

const validationSchemaForgotPassword = Yup.object().shape({
  email: Yup.string()
    .email()
    .test('has-dot', 'Email must contain a dot (.)', value => {
      return value.includes('@') && value.split('@')[1].includes('.');
    })
    .required('Email is a required field'),
});

export default validationSchemaForgotPassword;
