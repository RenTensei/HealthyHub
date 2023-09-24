import * as Yup from 'yup';

const ProfileSettingsSchema = Yup.object().shape({
  name: Yup.string()
    .matches(
      /^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/,
      'Name may contain only letters, apostrophe, dash and spaces.'
    )
    .min(3, 'Name must be at least 3 characters')
    .nullable()
    .optional(),
  avatarURL: Yup.string().url().nullable().optional(),
  gender: Yup.string().oneOf(['Male', 'Female']).nullable().optional(),
  goal: Yup.string()
    .oneOf(['Lose fat', 'Maintain', 'Gain Muscle'])
    .nullable()
    .optional(),
  age: Yup.number()
    .integer('Age must be an integer')
    .min(0, 'Age must be a positive number')
    .nullable()
    .optional(),
  weight: Yup.number()
    .min(40, 'Weight must be at least 40')
    .max(170, 'Weight cannot exceed 170')
    .nullable()
    .optional(),
  height: Yup.number()
    .min(140, 'Height must be at least 140')
    .max(230, 'Height cannot exceed 230')
    .nullable()
    .optional(),
  physicalActivityRatio: Yup.number()
    .min(1.2, 'Physical Activity Ratio must be at least 1.2')
    .max(2.5, 'Physical Activity Ratio cannot exceed 2.5')
    .nullable()
    .optional(),
});

export default ProfileSettingsSchema;
