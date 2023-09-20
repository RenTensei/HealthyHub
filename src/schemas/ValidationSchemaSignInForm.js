import * as Yup from 'yup';

const validationSchemaSignIn = Yup.object().shape({
  email: Yup.string().email().required('Email is a required field'),
  password: Yup.string().required('Password is a required field'),
});

export default validationSchemaSignIn;
