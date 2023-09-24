export const extractChangedFields = (initialState, formValues) => {
  const changedFields = {};

  for (const key in formValues) {
    if (formValues[key] !== initialState[key]) {
      changedFields[key] = formValues[key];
    }
  }

  return changedFields;
};
