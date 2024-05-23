import axios from 'axios';
import {useAuthStore} from '../store/authStore';

const api = axios.create({
  baseURL: process.env.BASE_URL,
});

api.interceptors.request.use((config) => {
  const token = localStorage.getItem('auth-storage');
  if (token) {
    config.headers.Authorization = JSON.parse(token).state.token;
  }
  return config;
}, (error) => {
  return Promise.reject(error);
});

export default api;