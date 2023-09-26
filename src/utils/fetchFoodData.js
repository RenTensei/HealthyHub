import { axiosAuth } from './network';

export const fetchFoodData = async () => {
  try {
    const { data } = await axiosAuth.get('/user/recomended-food');
    return data;
  } catch (err) {
    console.log(err);
  }
};
