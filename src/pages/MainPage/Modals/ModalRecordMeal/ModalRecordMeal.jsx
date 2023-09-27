import { Field, FieldArray, Form, Formik } from 'formik';
import { useEffect } from 'react';
import OutsideClickHandler from 'react-outside-click-handler';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';

import styles from './ModalRecordMeal.module.scss';

import { ReactComponent as AddMoreSvg } from '@/assets/svg/add.svg';
import { selectFoodIntakeByMealType } from '@/store/features/foodIntake/selectors';
import {
  postMyFoodIntake,
  updateMyFoodIntake,
} from '@/store/features/foodIntake/thunks';
import { mealTypeSrcSets } from '@/utils/mealTypeSrcSets';

const foodIntakeTemplate = {
  mealName: '',
  carbonohidrates: '',
  protein: '',
  fat: '',
  calories: '',
};

const ModalRecordMeal = ({ onClose, mealType, mealId }) => {
  useEffect(() => {
    const handleEscClose = e => (e.code === 'Escape' ? onClose() : null);

    document.body.style.overflowY = 'hidden';
    window.addEventListener('keydown', handleEscClose);

    return () => {
      document.body.style.overflowY = 'auto';
      window.removeEventListener('keydown', handleEscClose);
    };
  }, [onClose]);

  const foodIntake = useSelector(selectFoodIntakeByMealType);

  const isInEditMode = Boolean(mealId);
  const current = foodIntake[mealType].find(item => item._id === mealId);

  const src1x = mealTypeSrcSets[mealType][0];
  const src2x = mealTypeSrcSets[mealType][1];

  const dispatch = useDispatch();

  // TODO rewrite backend to accept array, so we perform only one network request
  const handleCreate = values => {
    values.foodIntakes.forEach(foodIntake =>
      dispatch(postMyFoodIntake({ mealType, ...foodIntake }))
    );
    onClose();
  };

  const handleUpdate = values => {
    values.foodIntakes.forEach(updatedFoodIntake => {
      dispatch(updateMyFoodIntake({ id: mealId, updatedFoodIntake }));
    });
    onClose();
  };

  return (
    <OutsideClickHandler onOutsideClick={onClose}>
      <div className={styles.modal_container}>
        <h2 className={styles.title}>Record your meal</h2>
        <div className={styles.meal_container}>
          <img src={src1x} srcSet={`${src1x} 1x, ${src2x} 2x`} />
          <h3 className={styles.subtitle}>{mealType}</h3>
        </div>

        <Formik
          initialValues={{
            foodIntakes: isInEditMode
              ? [
                  {
                    mealType,
                    mealName: current.mealName,
                    carbonohidrates: current.carbonohidrates,
                    protein: current.protein,
                    fat: current.fat,
                    calories: current.calories,
                  },
                ]
              : [foodIntakeTemplate],
          }}
          onSubmit={isInEditMode ? handleUpdate : handleCreate}
        >
          {({ values }) => (
            <Form>
              <FieldArray name="foodIntakes">
                {({ push }) => (
                  <div className={styles.fieldArrayWrapper}>
                    {values?.foodIntakes.map((intake, index) => (
                      <div key={index} className={styles.input_row}>
                        <Field
                          name={`foodIntakes.${index}.mealName`}
                          placeholder="The name of the product or dish"
                          type="text"
                          required
                        />
                        <Field
                          name={`foodIntakes.${index}.carbonohidrates`}
                          placeholder="Carbonoh."
                          type="number"
                          min={0}
                          required
                        />
                        <Field
                          name={`foodIntakes.${index}.protein`}
                          placeholder="Protein"
                          type="number"
                          min={0}
                          required
                        />
                        <Field
                          name={`foodIntakes.${index}.fat`}
                          placeholder="Fat"
                          type="number"
                          min={0}
                          required
                        />
                        <Field
                          name={`foodIntakes.${index}.calories`}
                          placeholder="Calories"
                          type="number"
                          min={0}
                          required
                        />
                      </div>
                    ))}

                    {!isInEditMode && (
                      <button
                        type="button"
                        className={styles.button_add}
                        onClick={() => {
                          const foodIntake =
                            values.foodIntakes[values.foodIntakes.length - 1];
                          const fieldMissing = Object.values(foodIntake).some(
                            value => typeof value === 'string' && !value.trim()
                          );
                          fieldMissing
                            ? toast.warn(
                                'Fill empty fields before adding more!'
                              )
                            : push(foodIntakeTemplate);
                        }}
                      >
                        <AddMoreSvg
                          strokeWidth={3}
                          width={16}
                          height={16}
                          stroke="#e3ffa8"
                        />
                        Add more
                      </button>
                    )}
                  </div>
                )}
              </FieldArray>

              <div className={styles.buttons_container}>
                <button
                  type="button"
                  onClick={onClose}
                  className={styles.button_cancel}
                >
                  Cancel
                </button>
                <button type="submit" className={styles.button_confirm}>
                  Confirm
                </button>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </OutsideClickHandler>
  );
};

export default ModalRecordMeal;
