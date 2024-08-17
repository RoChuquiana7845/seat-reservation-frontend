import api from './api';
import { AxiosError } from 'axios';

// Función para registrarse (Sign Up)
export const signup = async (userData: { username: string; email: string; password: string }) => {
  try {
    const response = await api.post('/auth/signup', userData);
    return response.data;
  } catch (error) {
    if (error instanceof AxiosError && error.response) {
      throw error.response.data;
    } else {
      throw new Error('An unexpected error occurred');
    }
  }
};

// Función para iniciar sesión (Login)
export const login = async (credentials: { email: string; password: string }) => {
  try {
    const response = await api.post('/auth/login', credentials);
    return response.data;
  } catch (error) {
    if (error instanceof AxiosError && error.response) {
      throw error.response.data;
    } else {
      throw new Error('An unexpected error occurred');
    }
  }
};

// Función para verificar el estado de autenticación (Check Auth Status)
export const checkAuthStatus = async () => {
  try {
    const response = await api.get('/auth/check-status');
    return response.data;
  } catch (error) {
    if (error instanceof AxiosError && error.response) {
      if (error.response.status === 401) {
        // Redirigir al login si la respuesta es 401
        window.location.href = '/login';
      }
      throw error.response.data;
    } else {
      throw new Error('An unexpected error occurred');
    }
  }
};

// Función para cerrar sesión (Logout)
export const logout = async () => {
  try {
    await api.post('/auth/logout');
    window.location.href = '/login'; // Redirige al usuario al login después de cerrar sesión
  } catch (error) {
    if (error instanceof AxiosError && error.response) {
      throw error.response.data;
    } else {
      throw new Error('An unexpected error occurred');
    }
  }
};
