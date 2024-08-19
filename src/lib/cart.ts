import api from "./api";
import { AxiosError } from "axios";

export const createCart = async (token: string) => {
    try {
        const response = await api.post("api/cart/", {}, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
        return response.data;
    } catch (error) {
        if (error instanceof AxiosError && error.response) {
            throw error.response.data;
        } else {
            throw new Error("An unexpected error occurred");
        }
    }
}

export const getCart = async(cartId : string) => {
    try {
        const response = await api.get(`api/cart/${cartId}`);
        return response.data;
    } catch (error) {
        if (error instanceof AxiosError && error.response) {
            throw error.response.data;
        } else {
            throw new Error("An unexpected error occurred");
        }
    }
}

export const addItemToCart = async(quantity: number, cartId: string, productId: string) => {
    try {
        const response = await api.post("api/cart-items", {
            quantity,
            cart: cartId,
            product: productId
        });
        return response.data;
    } catch (error) {
        if (error instanceof AxiosError && error.response) {
            throw error.response.data;
        } else {
            throw new Error("An unexpected error occurred");
        }
    }
}

export const removeItemFromCart = async(productId: string) => {
    try {
        const response = await api.delete(`api/cart-items/${productId}`);
        return response.data;
    } catch (error) {
        if (error instanceof AxiosError && error.response) {
            throw error.response.data;
        } else {
            throw new Error("An unexpected error occurred");
        }
    }
}

export const getCartItems = async(userId: string) => {
    try {
        const response = await api.get(`api/cart/${userId}/items`);
        return response.data;
    } catch (error) {
        if (error instanceof AxiosError && error.response) {
            throw error.response.data;
        } else {
            throw new Error("An unexpected error occurred");
        }
    }
}