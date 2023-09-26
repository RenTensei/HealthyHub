import styles from './ModalRecordMeal.module.scss';

import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import OutsideClickHandler from 'react-outside-click-handler';
import { Field, FieldArray, Form, Formik } from 'formik';
import { toast } from 'react-toastify';

import { selectFoodIntakeByMealType } from '@/store/features/foodIntake/selectors';
import { postMyFoodIntake } from '@/store/features/foodIntake/thunks';
import { ReactComponent as AddMoreSvg } from '@/assets/svg/add.svg';
import { mealTypeSrcSets } from '@/utils/mealTypeSrcSets';

const foodIntakeTemplate = {
  mealName: '',
  carbonohidrates: '',
  protein: '',
  fat: '',
  calories: '',
};

const ModalRecordMeal = ({ onClose, mealType }) => {
  useEffect(() => {
    const handleEscClose = e => (e.code === 'Escape' ? onClose() : null);

    document.body.style.overflowY = 'hidden';
    window.addEventListener('keydown', handleEscClose);

    return () => {
      document.body.style.overflowY = 'auto';
      window.removeEventListener('keydown', handleEscClose);
    };
  }, [onClose]);

  const src1x = mealTypeSrcSets[mealType][0];
  const src2x = mealTypeSrcSets[mealType][1];

  const dispatch = useDispatch();

  const handleSubmit = values => {
    console.log(values);
    // eslint-disable-next-line no-constant-condition
    if (false) dispatch(postMyFoodIntake(values));

    onClose();
  };

  const foodIntake = useSelector(selectFoodIntakeByMealType);

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
            foodIntakes: [...foodIntake[mealType], foodIntakeTemplate],
          }}
          onSubmit={handleSubmit}
        >
          {({ values }) => (
            <Form>
              <FieldArray name="foodIntakes">
                {({ push }) => (
                  <div className={styles.fieldArrayWrapper}>
                    {values?.foodIntakes.map((foodIntake, index) => (
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
                          ? toast.warn('Fill empty fields before adding more!')
                          : push(foodIntakeTemplate);
                      }}
                    >
                      <AddMoreSvg strokeWidth={3} width={16} height={16} />
                      Add more
                    </button>
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
