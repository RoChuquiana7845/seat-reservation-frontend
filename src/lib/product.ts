import api from "./api";
import { AxiosError } from "axios";

// Función para obtener todos los productos
export const getProducts = async () => {
  try {
    const response = await api.get("/product");
    return response.data;
  } catch (error) {
    const axiosError = error as AxiosError;
    return axiosError.response?.data;
  }
};

// Función para obtener un producto por su id
export const getProductById = async (id: string) => {
  try {
    const response = await api.get(`/product/${id}`);
    return response.data;
  } catch (error) {
    const axiosError = error as AxiosError;
    return axiosError.response?.data;
  }
};

// Función para crear un producto
export const createProduct = async (productData: { name: string, price: number, description: string, stock: number }) => {
  try {
    const response = await api.post("/product", productData);
    return response.data;
  } catch (error) {
    const axiosError = error as AxiosError;
    return axiosError.response?.data;
  }
};

// **Función para actualizar un producto**
export const updateProduct = async (id: string, productData: { name: string, price: number, description: string, stock: number }) => {
  try {
    const response = await api.patch(`/product/${id}`, productData);
    return response.data;
  } catch (error) {
    const axiosError = error as AxiosError;
    return axiosError.response?.data;
  }
};

// **Función para eliminar un producto**
export const deleteProduct = async (id: string) => {
  try {
    const response = await api.delete(`/product/${id}`);
    return response.data;
  } catch (error) {
    const axiosError = error as AxiosError;
    return axiosError.response?.data;
  }
};