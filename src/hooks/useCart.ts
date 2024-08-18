import { useState, useEffect } from 'react';
import { getCart, createCart } from '@/lib/cart';
import { getCurrentUser } from '@/lib/auth';
import { AxiosError } from 'axios';

export const useCart = () => {
    const [cart, setCart] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const initializeCart = async () => {
            try {
                const user = await getCurrentUser();
                if (!user) throw new Error('User not found');
                const { id } = user;
                let cartData;
                try {
                    cartData = await getCart(id);
                } catch (error) {
                    if (error instanceof AxiosError && error.response?.status === 404) {
                        cartData = await createCart(id);
                    } else {
                        throw new Error('Error fetching cart');
                    }
                }
                setCart(cartData);
            } catch (error) {
                if (error instanceof AxiosError && error.response?.status === 404) {
                    console.error(error.message || 'Error initializing cart');
                }
            } finally {
                setLoading(false);
            }
        };
        initializeCart();
    }, []);
    return { cart, loading };
};
