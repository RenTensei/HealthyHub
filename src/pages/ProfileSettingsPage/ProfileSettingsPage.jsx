
import React, { useState } from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import { activityLevels } from './activityLevel';
import ProfileSettingsSchema from './ProfileSettingsSchema';
import picture from './image/Setting.png'
import svg from './image/direct-inbox.png'
import avatar from './image/Avatar.png'
import style from './ProfileSettingsPage.module.scss'



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
    <div className={style.container}>
     <div className={style.containerTitle}>  
      <h2>Profile setting</h2>
      <div>
      <button className={style.cancelBtn}>Cancel</button>
      <button type="submit" className={style.saveBtn}>Save</button>
      </div>
     </div> 
     <div className={style.containerContent}>
        <div>
      <img src={picture} alt="Picture" className={style.mainImg}></img>
      </div>
      <div className={style.containerSettings}>
      <Formik
        initialValues={initialValues}
        validationSchema={ProfileSettingsSchema}
        onSubmit={handleSave}
      >
        {({ values, setFieldValue }) => (
            
          <Form>
            <div className={style.containerSetting}>
            <div className={style.containerSettingFirst}>
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
            </div>
            <div>
            
              <label className={style.text}>Your photo</label>
              <div className={style.containerPhoto}>
              <div>
                <img
                //   src={values.photo}
                src={avatar}
                  alt="Profile"
                  style={{ width: '36px', height: '36px' }}
                  className={style.photo}
                />
              </div>
               <img
                  src={svg}
                  alt="Profile"
                  className={style.svg}
                  style={{ width: '16px', height: '16px' }}
                />
              <label htmlFor="photo">Download new photo</label>
              <input
              className={style.inputPhoto}
                type="file"
                id="photo"
                accept="image/*"
                onChange={e => handlePhotoChange(e, setFieldValue)}
              />
            </div>

            
              <label className={style.text}>Gender</label>
              <div className={style.contairGender}>
              <label>
                <Field type="radio" name="selectedGender" value="male" />
                Male
              </label>

              <label>
                <Field type="radio" name="selectedGender" value="female" />
                Female
              </label>
            </div>
            <label className={style.text}>Weight</label>
            <div className={style.containerWeight}>
            <label>
        
              <Field type="number" name="weight" min="0" />
              <ErrorMessage name="weight" component="div" />
            </label>
            </div>
</div>
</div>
            <div>
                <div className={style.containerActivity}>
              <label htmlFor="activityLevel" className={style.text}>Your activity</label>
              {activityLevels.map(level => (
                <div key={level.value} >
                  <Field
                    type="radio"
                    id={`activityLevel-${level.value}`}
                    name="activityLevel"
                    value={level.value}
                    className={style.boxActivity}
                  />
                  <label className={style.text} htmlFor={`activityLevel-${level.value}`}>
                    {level.value} - {level.label}
                  </label>
                </div>
              ))}
            </div>
            </div>
          </Form>
          
        )}
      </Formik>
      </div>
      </div>
<div className={style.mobileBtn}>
      <button className={style.cancelBtnM}>Cancel</button>
      <button type="submit" className={style.saveBtnM}>Save</button>
      </div>
    </div>
  );
}




export default ProfileSettingsPage;
