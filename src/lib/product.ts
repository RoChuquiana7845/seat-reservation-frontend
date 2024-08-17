import api from "./api";
import { AxiosError } from "axios";

// Funcion para obtener todos los productos
export const getProducts = async () => {
  try {
    const response = await api.get("api/product");
    return response.data;
  } catch (error) {
    const axiosError = error as AxiosError;
    return axiosError.response?.data;
  }
};

// Funcion para obtener un producto por su id
export const getProductById = async (id: string) => {
  try {
    const response = await api.get(`api/product/${id}`);
    return response.data;
  } catch (error) {
    const axiosError = error as AxiosError;
    return axiosError.response?.data;
  }
}