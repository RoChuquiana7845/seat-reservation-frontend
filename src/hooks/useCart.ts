import { useState, useEffect } from 'react';
import { getCurrentUser } from '@/lib/auth';
import { getCart, createCart } from '@/lib/cart';
import { AxiosError } from 'axios';
import Cookies from 'js-cookie';

export const useCart = () => {
    const [cart, setCart] = useState<Cart | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const initializeCart = async () => {
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
                        cartData = await createCart(token);
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
        initializeCart();
    }, []);

    return { cart, loading, error };
};
