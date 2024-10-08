import axios from 'axios';
import router from 'next/router';

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_BASE_URL || 'http://localhost:3004/api',
  withCredentials: true, 
});

// Interceptores de solicitud
api.interceptors.request.use(
  (config) => {
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Interceptores de respuesta
api.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    // Manejar errores de manera centralizada
    if (error.response && error.response.status === 401) {
      router.push('/login');
      return null;
    }
    return Promise.reject(error);
  }
);

export default api;
