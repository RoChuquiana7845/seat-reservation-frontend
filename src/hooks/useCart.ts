import { useState, useEffect } from 'react';
import { getCurrentUser } from '@/lib/auth';
import { getCart, createCart } from '@/lib/cart';
import { AxiosError } from 'axios';
import Cookies from 'js-cookie';

export const useCart = () => {
    const [cart, setCart] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const initializeCart = async () => {
            try {
                const token = Cookies.get('jwt');
                if (token) {
                    let cartData = await createCart(token);
                    setCart(cartData);
                }
            } catch (error) {
                // Capturar y manejar el error adecuadamente
                if (error instanceof Error) {
                    setError(error.message);
                } else {
                    setError('An unexpected error occurred');
                }
                console.error(error);
            } finally {
                // Asegurarse de que el loading se detenga al final
                setLoading(false);
            }
        };

        // Ejecutar la inicialización del carrito al montar el componente
        initializeCart();
    }, []);

    return { cart, loading, error };
};
