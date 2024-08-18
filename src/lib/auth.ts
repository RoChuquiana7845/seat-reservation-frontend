import api from "./api";
import { AxiosError } from "axios";

// Función para verificar el estado de autenticación (Check Auth Status)
export const checkAuthStatus = async () => {
  try {
    const response = await api.get("/api/auth/check-status");
    if (response && response.data) {
      return response.data.isAuthenticated; // Asegúrate de que el backend devuelve este campo
    }
    return false; // En caso de que la respuesta no sea como se espera
  } catch (error) {
    const axiosError = error as AxiosError; // Aquí usamos una type assertion
    if (axiosError.response) {
      if (axiosError.response.status === 401) {
        return false; // El usuario no está autenticado
      }
      console.error("Error response:", axiosError.response.data);
      throw axiosError.response.data;
    } else {
      console.error("Unexpected error:", axiosError.message);
      throw new Error("An unexpected error occurred");
    }
  }
};
