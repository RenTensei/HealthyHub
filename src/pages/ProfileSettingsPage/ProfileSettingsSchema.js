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
  // photo: Yup.mixed()
  //   .test('fileSize', 'File size is too large', value => {
  //     if (value) {
  //       return value.size <= 2000000;
  //     }
  //     return true;
  //   })
  //   .test('fileType', 'Invalid file type', value => {
  //     if (value) {
  //       return (
  //         value && ['image/jpeg', 'image/png', 'image/gif'].includes(value.type)
  //       );
  //     }
  //     return true;
  //   }),
});

export default ProfileSettingsSchema;
