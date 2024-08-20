"use client";

import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { getCurrentUser } from '@/lib/auth';
import { getCart, createCart } from '@/lib/cart';
import Cookies from 'js-cookie';
import { AxiosError } from 'axios';

interface CartContextType {
    cart: Cart | null;
    loading: boolean;
    error: string | null;
    fetchCart: () => Promise<void>;
}

const CartContext = createContext<CartContextType>({
    cart: null,
    loading: true,
    error: null,
    fetchCart: async () => {},
});

interface CartProviderProps {
    children: ReactNode;
}

export const CartProvider = ({ children }: CartProviderProps) => {
    const [cart, setCart] = useState<Cart | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    const fetchCart = async () => {
        try {
            const token = Cookies.get('jwt');
            if (token) {
                const user = await getCurrentUser(token);
                if (!user) throw new Error('User not found');
                const { id } = user;
                let cartData;
                try {
                    cartData = await getCart(id);
                } catch (error) {
                    if (error instanceof AxiosError) {
                        cartData = await createCart(id);
                    } else {
                        throw new Error("Unexpected error occurred while fetching the cart");
                    }
                }
                setCart(cartData);
            }
        } catch (error) {
            if (error instanceof Error) {
                setError(error.message);
            } else {
                setError('An unexpected error occurred');
            }
            console.error(error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchCart();
    }, []);

    return (
        <CartContext.Provider value={{ cart, loading, error, fetchCart }}>
            {children}
        </CartContext.Provider>
    );
};

export const useCartContext = () => useContext(CartContext);