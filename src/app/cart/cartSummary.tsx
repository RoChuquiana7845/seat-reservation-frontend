"use client";

import { useCartContext } from "@/context/cartContext";
import { useEffect, useState } from "react";
import { getCartItem } from "@/lib/cart";

export default function CartSummary() {
    const { cart, loading, fetchCart } = useCartContext();
    const [total, setTotal] = useState(0);

    useEffect(() => {
        const calculateTotal = async () => {
            if (cart && cart.id && cart.cartItems.length > 0) {
                const total = await Promise.all(
                    cart.cartItems.map(async (item) => {
                        const data = await getCartItem(item.id);
                        const price = parseFloat(data.product.precio);
                        return price * item.quantity;
                    })
                );
                const sum = total.reduce((acc, item) => acc + item, 0);
                setTotal(sum);
            } else {
                setTotal(0);
            }
        };
        calculateTotal();
    }, [cart]);

    useEffect(() => {
        fetchCart();
    }, [cart?.cartItems.length]);

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <h2 className="text-2xl font-semibold">Resumen del carrito</h2>
            <p>Total: ${total}</p>
            <button className="bg-blue-500 text-white px-4 py-2 rounded">Pagar</button>
        </div>
    );
}
