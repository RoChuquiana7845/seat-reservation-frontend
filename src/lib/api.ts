import axios from 'axios';
import Cookies from 'js-cookie';

// Crear la instancia de Axios
const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_BASE_URL || 'http://localhost:3004/',
  withCredentials: true, 
});

// Función para obtener el token JWT de las cookies
export const getJwtToken = async (): Promise<string | undefined> => {
  if (typeof window !== 'undefined') {
    const token = document.cookie;
    console.log('Token:', token); // Debería mostrar el valor de la cookie o `undefined`
  }
  return await Cookies.get('jwt'); // Devuelve el valor de la cookie 'jwt', o undefined si no está presente
};

// Interceptores de solicitud
api.interceptors.request.use(
  (config) => {
    const token = getJwtToken(); // Obtener el token JWT
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`; // Agregar el token JWT a la cabecera Authorization
    }
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
      console.error('No autorizado:', error.response.data);
    }
    return Promise.reject(error);
  }
);

export default api;
