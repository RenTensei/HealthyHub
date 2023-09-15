import * as Yup from 'yup';

const ProfileSettingsSchema = Yup.object().shape({
  name: Yup.string()
    .matches(
      /^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/,
      'Name may contain only letters, apostrophe, dash and spaces.'
    )
    .required('Name is required'),
  age: Yup.number()
    .min(0, 'Age must be a positive number')
    .required('Age is required'),
  height: Yup.number()
    .min(0, 'Height must be a positive number')
    .required('Height is required'),
  weight: Yup.number()
    .min(0, 'Weight must be a positive number')
    .required('Weight is required'),
});

export default ProfileSettingsSchema;
