import api from "./api";
import { AxiosError } from "axios";

// Función para registrarse (Sign Up)
export const signup = async (userData: {
  username: string;
  email: string;
  password: string;
}) => {
  try {
    const response = await api.post("/auth/signup", userData);
    return response.data;
  } catch (error) {
    if (error instanceof AxiosError && error.response) {
      throw error.response.data;
    } else {
      throw new Error("An unexpected error occurred");
    }
  }
};

// Función para iniciar sesión (Login)
export const login = async (credentials: {
  email: string;
  password: string;
}) => {
  try {
    const response = await api.post("/auth/login", credentials);
    return response.data;
  } catch (error) {
    if (error instanceof AxiosError && error.response) {
      throw error.response.data;
    } else {
      throw new Error("An unexpected error occurred");
    }
  }
};

// Función para verificar el estado de autenticación (Check Auth Status)
export const checkAuthStatus = async (token:string) => {
  try {
    const response = await api.get("/auth/check-status", {headers: { Authorization: `Bearer ${token}`}});
    return response.data; // Asegúrate de que el backend devuelve este campo
  } catch (error) {
    const axiosError = error as AxiosError; // Aquí usamos una type assertion
    if (axiosError.response) {
      if (axiosError.response.status === 401) {
        return false; // El usuario no está autenticado
      }
      console.error('Error response:', axiosError.response.data);
      throw axiosError.response.data;
    } else {
      console.error('Unexpected error:', axiosError.message);
      throw new Error("An unexpected error occurred");
    }
  }
};


// Función para cerrar sesión (Logout)
export const logout = async () => {
  try {
    await api.post("/auth/logout");
    window.location.href = "/auth/login"; // Redirige al usuario al login después de cerrar sesión
  } catch (error) {
    if (error instanceof AxiosError && error.response) {
      throw error.response.data;
    } else {
      throw new Error("An unexpected error occurred");
    }
  }
};

export const getCurrentUser = async (token:string) => {
  try {
    const response = await api.get("/auth/user", {headers: { Authorization: `Bearer ${token}`}});
    return response.data;
  } catch (error) {
    if (error instanceof AxiosError && error.response) {
      throw error.response.data;
    } else {
      throw new Error("An unexpected error occurred");
    }
  }
}