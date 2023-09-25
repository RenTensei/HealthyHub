import axios from 'axios';
const { token } = JSON.parse(localStorage.getItem('persist:auth'));
const normatizedToken = JSON.parse(token);

axios.defaults.baseURL = 'https://healthyhub.onrender.com/';
axios.defaults.headers.common.Authorization = `Bearer ${normatizedToken}`;

export const fetchFoodData = async () => {
  try {
    const { data } = await axios.get('/api/user/recomended-food');
    return data;
  } catch (e) {
    console.log(e);
  }
};
