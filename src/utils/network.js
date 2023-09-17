import axios from 'axios';

export const axiosAuth = axios.create({
  baseURL: 'http://localhost:3333/api/',
  timeout: 3000,
});

export const setGlobalAuthHeader = token => {
  axiosAuth.defaults.headers.common['Authorization'] = `Bearer ${token}`;
};

export const resetGlobalAuthHeader = () => {
  delete axiosAuth.defaults.headers.common['Authorization'];
};
