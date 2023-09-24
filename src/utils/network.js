import axios from 'axios';

export const axiosAuth = axios.create({
  baseURL: 'https://healthyhub.onrender.com/api/',
  // baseURL: 'http://localhost:3000/api/',
  timeout: 5000,
});

export const setGlobalAuthHeader = token => {
  axiosAuth.defaults.headers.common['Authorization'] = `Bearer ${token}`;
};

export const resetGlobalAuthHeader = () => {
  delete axiosAuth.defaults.headers.common['Authorization'];
};
