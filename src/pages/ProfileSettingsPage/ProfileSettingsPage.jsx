import React, { useEffect, useState } from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import { activityLevels } from './activityLevel';
import ProfileSettingsSchema from './ProfileSettingsSchema';
import picture from './image/Setting.png';
import svg from './image/direct-inbox.png';
import style from './ProfileSettingsPage.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { selectIsLoggedIn } from '@/store/features/auth/selectors';
import { useNavigate } from 'react-router-dom';
import { ReactComponent as AddPhotoSvg } from '@/assets/svg/direct-inbox.svg';
import defaultPhoto from './image/photo-user.jpg';
import { ROUTES } from '@/constants/routes';

function ProfileSettingsPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // const isLoggedIn = useSelector(selectIsLoggedIn);

  // const { name, age, height, gender, weight, height, physicalActivityRatio } =
  //   useSelector(state => state.auth.user);

  // const [initialValues, setInitialValues] = useState({
  //   name: '',
  //   age: '',
  //   height: '',
  //   gender: '',
  //   weight: '',
  //   activityLevel: '',
  //   photo: null,
  // });

  // const [values, setValues] = useState({ ...initialValues });

  const userInfo = useSelector(state => state.auth.user);

  console.log(userInfo);

  const handleSave = values => {
    console.log(values);
  };

  const handleCancel = () => {
    navigate('/main');
    // setValues({ ...initialValues });
  };

  const handlePhotoChange = (e, setFieldValue) => {
    const photo = e.target.files[0];
    setFieldValue('photo', photo ? URL.createObjectURL(photo) : defaultPhoto);
  };

  return (
    <div className={style.container}>
      <div className={style.containerTitle}>
        <h2>Profile setting</h2>
        <div>
          <button className={style.cancelBtn} onClick={handleCancel}>
            Cancel
          </button>
          <button type="submit" className={style.saveBtn} onClick={handleSave}>
            Save
          </button>
        </div>
      </div>
      <div className={style.containerContent}>
        <div>
          <img src={picture} alt="Picture" className={style.mainImg}></img>
        </div>
        <div className={style.containerSettings}>
          <Formik
            initialValues={userInfo}
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
                          src={values.photo || defaultPhoto}
                          // src={avatar}
                          alt="Profile"
                          style={{ width: '36px', height: '36px' }}
                          className={style.photo}
                        />
                      </div>

                      <AddPhotoSvg
                        className={style.svg}
                        width={16}
                        height={16}
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
                        <Field type="radio" name="gender" value="male" />
                        Male
                      </label>

                      <label>
                        <Field type="radio" name="gender" value="female" />
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
                    <label htmlFor="activityLevel" className={style.text}>
                      Your activity
                    </label>
                    {activityLevels.map(level => (
                      <div key={level.value}>
                        <Field
                          type="radio"
                          id={`activityLevel-${level.value}`}
                          name="activityLevel"
                          value={level.value}
                          className={style.boxActivity}
                        />
                        <label
                          className={style.text}
                          htmlFor={`activityLevel-${level.value}`}
                        >
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
        <button type="submit" className={style.saveBtnM} onClick={handleSave}>
          Save
        </button>
        <button className={style.cancelBtnM} onClick={handleCancel}>
          Cancel
        </button>
      </div>
    </div>
  );
}

export default ProfileSettingsPage;
