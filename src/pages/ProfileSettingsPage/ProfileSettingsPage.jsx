import { useState } from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import { physicalActivityRatio } from './activityLevel';
import ProfileSettingsSchema from './ProfileSettingsSchema';
import picture from './image/Setting.png';

import style from './ProfileSettingsPage.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { selectUserInfo } from '@/store/features/auth/selectors';

import { ReactComponent as AddPhotoSvg } from '@/assets/svg/direct-inbox.svg';

import { updateUser } from '@/store/features/auth/thunks';
import { extractChangedFields } from '@/utils/extractChangedFields';

const ProfileSettingsPage = () => {
  const dispatch = useDispatch();

  const userInfo = useSelector(selectUserInfo);
  const [avatarPreviewURL, setAvatarPreviewURL] = useState(userInfo.avatarURL);
  const [avatarBlob, setAvatarBlob] = useState(null);

  const initialValues = {
    name: userInfo.name,
    age: userInfo.age,
    gender: userInfo.gender,
    weight: userInfo.weight,
    height: userInfo.height,
    physicalActivityRatio: userInfo.physicalActivityRatio,
  };

  const handleSave = values => {
    const changedFields = extractChangedFields(userInfo, values);
    if (avatarBlob) Object.assign(changedFields, { avatarURL: avatarBlob });

    dispatch(updateUser(changedFields));
    setAvatarBlob(null);
  };

  return (
    <div className={style.container}>
      <div className={style.containerTitle}>
        <h2>Profile settings</h2>
        <div>
          <img src={picture} alt="Picture" className={style.mainImg}></img>
        </div>
      </div>
      <div className={style.containerSettings}>
        <Formik
          initialValues={initialValues}
          validationSchema={ProfileSettingsSchema}
          onSubmit={handleSave}
        >
          {({ values, setFieldValue }) => (
            <Form>
              <div className={style.button}>
                <button
                  type="button"
                  className={style.cancelBtn}
                  onClick={() => {
                    Object.keys(initialValues).forEach(key =>
                      setFieldValue(key, userInfo[key])
                    );
                    setAvatarPreviewURL(userInfo['avatarURL']);
                    setAvatarBlob(null);
                  }}
                >
                  Cancel
                </button>
                <button type="submit" className={style.saveBtn}>
                  Save
                </button>
              </div>
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
                    <Field type="number" name="height" min="140" max="230" />
                    <ErrorMessage name="height" component="div" />
                  </label>
                </div>
                <div>
                  <label className={style.text}>Your photo</label>
                  <div className={style.containerPhoto}>
                    <div>
                      <img
                        src={avatarPreviewURL}
                        alt="Profile"
                        style={{ width: '36px', height: '36px' }}
                        className={style.photo}
                      />
                    </div>

                    <AddPhotoSvg className={style.svg} width={16} height={16} />
                    <label htmlFor="avatarURL" style={{ cursor: 'pointer' }}>
                      Download new photo
                      <input
                        className={style.inputPhoto}
                        type="file"
                        id="avatarURL"
                        accept="image/*"
                        onChange={e => {
                          const file = e.target.files[0];
                          setAvatarBlob(file);
                          setAvatarPreviewURL(URL.createObjectURL(file));
                        }}
                      />
                    </label>
                  </div>

                  <label className={style.text}>Gender</label>
                  <div className={style.contairGender}>
                    <label>
                      <Field
                        type="radio"
                        name="gender"
                        value="Male"
                        checked={values.gender === 'Male'}
                      />
                      Male
                    </label>

                    <label>
                      <Field
                        type="radio"
                        name="gender"
                        value="Female"
                        checked={values.gender === 'Female'}
                      />
                      Female
                    </label>
                  </div>
                  <label className={style.text}>Weight</label>
                  <div className={style.containerWeight}>
                    <label>
                      <Field type="number" name="weight" min="40" max="170" />
                      <ErrorMessage name="weight" component="div" />
                    </label>
                  </div>
                </div>
              </div>

              <div>
                <div className={style.containerActivity}>
                  <label htmlFor="physicalActivityRatio" className={style.text}>
                    Your activity
                  </label>
                  {physicalActivityRatio.map(level => (
                    <div key={level.value}>
                      <Field
                        type="radio"
                        id={`physicalActivityRatio-${level.value}`}
                        name="physicalActivityRatio"
                        value={level.value}
                        className={style.boxActivity}
                        checked={values.physicalActivityRatio == level.value}
                      />
                      <label
                        className={style.text}
                        htmlFor={`physicalActivityRatio-${level.value}`}
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
  );
};

export default ProfileSettingsPage;
