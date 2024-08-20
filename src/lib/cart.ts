import api from "./api";
import { AxiosError } from "axios";

export const createCart = async (token: string) => {
    try {
        const response = await api.post("/cart/", {}, {
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

export const getCart = async(userId : string) => {
    try {
        const response = await api.get(`/cart/user/${userId}`);
        return response.data;
    } catch (error) {
        if (error instanceof AxiosError && error.response) {
            throw error.response.data;
        } else {
            throw new Error("An unexpected error occurred");
        }
    }
}

export const addItemToCart = async(token: string, quantity: number, cartId: string, productId: string) => {
    try {
        const response = await api.post("/cart-items", {
            quantity: quantity,
            cart: cartId,
            product: productId
        }, {
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

export const removeItemFromCart = async(token: string, cartItemID: string) => {
    try {
        const response = await api.delete(`/cart-items/${cartItemID}`, {
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

export const getCartItem = async (cartItemId: string) => {
    try {
        const response = await api.get(`/cart-items/${cartItemId}`);
        return response.data;
    } catch (error) {
        if (error instanceof AxiosError && error.response) {
            throw error.response.data;
        } else {
            throw new Error("An unexpected error occurred");
        }
    }
}