import React, { useState } from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import { activityLevels } from './activityLevel';
import ProfileSettingsSchema from './ProfileSettingsSchema';

function ProfileSettingsPage() {
  const initialValues = {
    name: '',
    age: '',
    height: '',
    selectedGender: '',
    weight: '',
    activityLevel: '',
    photo: null,
  };

  const handleSave = values => {
    console.log('Saving profile settings:', values);
  };

  const handlePhotoChange = (e, setFieldValue) => {
    const selectedPhoto = e.target.files[0];
    setFieldValue('photo', URL.createObjectURL(selectedPhoto));
  };

  return (
    <>
      <h2>Profile setting</h2>
      <button>Cancel</button>
      <button type="submit">Save</button>
      <Formik
        initialValues={initialValues}
        validationSchema={ProfileSettingsSchema}
        onSubmit={handleSave}
      >
        {({ values, setFieldValue }) => (
          <Form>
            <label>
              Your name
              <Field type="text" name="name" />
              <ErrorMessage name="name" component="div" />
            </label>

            <label>
              Your age
              <Field type="number" name="age" min="0" />
              <ErrorMessage name="age" component="div" />
            </label>

            <label>
              Height
              <Field type="number" name="height" min="0" />
              <ErrorMessage name="height" component="div" />
            </label>

            <div>
              <label htmlFor="photo">Your photo</label>
              <div>
                <img
                  src={values.photo}
                  alt="Profile"
                  style={{ width: '150px', height: '150px' }}
                />
              </div>
              <input
                type="file"
                id="photo"
                label="Enter your height"
                accept="image/*"
                onChange={e => handlePhotoChange(e, setFieldValue)}
              />
            </div>

            <div>
              <h3>Gender</h3>
              <label>
                <Field type="radio" name="selectedGender" value="male" />
                Male
              </label>

              <label>
                <Field type="radio" name="selectedGender" value="female" />
                Female
              </label>
            </div>

            <label>
              Weight
              <Field type="number" name="weight" min="0" />
              <ErrorMessage name="weight" component="div" />
            </label>

            <div>
              <label htmlFor="activityLevel">Your activity</label>
              {activityLevels.map(level => (
                <div key={level.value}>
                  <Field
                    type="radio"
                    id={`activityLevel-${level.value}`}
                    name="activityLevel"
                    value={level.value}
                  />
                  <label htmlFor={`activityLevel-${level.value}`}>
                    {level.value} - {level.label}
                  </label>
                </div>
              ))}
            </div>
          </Form>
        )}
      </Formik>
    </>
  );
}

//     <>
//       <h2>Profile setting</h2>
//       <button>Cancel</button>
//       <button onClick={handleSave}>Save</button>
//       <form>
//         <label>
//           Your name
//           <input
//             type="text"
//             value={name}
//             name="name"
//             label="Enter your name"
//             pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
//             onChange={e => setName(e.target.value)}
//             title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
//           />
//         </label>
//         <label>
//           Your age
//           <input
//             type="number"
//             id="age"
//             name="age"
//             label="Enter your age"
//             value={age}
//             onChange={e => setAge(e.target.value)}
//             min="0"
//           />
//         </label>
//         <label>
//           Height
//           <input
//             type="number"
//             id="height"
//             name="height"
//             label="Enter your height"
//             value={height}
//             onChange={e => setHeight(e.target.value)}
//             min="0"
//           />
//         </label>
//       </form>
//       <div>
//         <label htmlFor="photo">Your photo</label>
//         <div>
//           <img
//             src={photo}
//             alt="Profile"
//             style={{ width: '150px', height: '150px' }}
//           />
//         </div>
//         <input
//           type="file"
//           id="photo"
//           label="Enter your height"
//           accept="image/*"
//           onChange={handlePhotoChange}
//         />
//       </div>
//       <div>
//         <h3>Gender</h3>
//         <label>
//           <input
//             type="radio"
//             name="gender"
//             value="male"
//             checked={selectedGender === 'male'}
//             onChange={e => setSelectedGender(e.target.value)}
//           />
//           Male
//         </label>

//         <label>
//           <input
//             type="radio"
//             name="gender"
//             value="female"
//             checked={selectedGender === 'female'}
//             onChange={e => setSelectedGender(e.target.value)}
//           />
//           Female
//         </label>
//         <label>
//           Weight
//           <input
//             type="number"
//             id="weight"
//             name="weight"
//             label="Enter your weight"
//             value={weight}
//             onChange={e => setWeight(e.target.value)}
//             min="0"
//           />
//         </label>
//       </div>
//       <div>
//         <label htmlFor="activityLevel">Your activity</label>
//         {activityLevels.map(level => (
//           <div key={level.value}>
//             <input
//               type="radio"
//               id={`activityLevel-${level.value}`}
//               name="activityLevel"
//               value={level.value}
//               checked={activityLevel === level.value}
//               onChange={e => setActivityLevel(e.target.value)}
//             />
//             <label htmlFor={`activityLevel-${level.value}`}>
//               {level.value} - {level.label}
//             </label>
//           </div>
//         ))}
//       </div>
//     </>
//   );
// }

export default ProfileSettingsPage;
