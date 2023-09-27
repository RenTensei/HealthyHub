import * as Yup from 'yup';

const validationSchemaSignUp = Yup.object().shape({
  name: Yup.string().min(3).required('Name is a required field'),
  email: Yup.string()
    .email()
    .test('has-dot', 'Email must contain a dot (.)', value => {
      return value.includes('@') && value.split('@')[1].includes('.');
    })
    .required('Email is a required field'),
  password: Yup.string()
    .min(6, 'Password must be at least 6 characters')
    .max(16, 'Password can be at most 16 characters')
    .matches(/[A-Z]/, 'Password must contain at least one uppercase letter')
    .matches(/[a-z]/, 'Password must contain at least one lowercase letter')
    .matches(/[0-9]/, 'Password must contain at least one digit')
    .required('Enter a valid Password'),
});

export default validationSchemaSignUp;
