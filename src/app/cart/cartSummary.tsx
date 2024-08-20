"use client";

import { useCart } from "@/hooks/useCart";
import { useEffect, useState } from "react";
import {getCartItem} from "@/lib/cart";

export default function CartSummary() {
    const { cart, loading } = useCart();
    const [total, setTotal] = useState(0);

    useEffect(() => {
        if (cart && cart.id) {
            const calculateTotal = async () => {
                const total = await Promise.all(
                    cart.cartItems.map(async (item) => {
                        const data = await getCartItem(item.id);
                        const price = parseFloat(data.product.precio);
                        return price * item.quantity;
                    })
                );
                const sum = total.reduce((acc, item) => acc + item, 0);
                setTotal(sum);
            };
            calculateTotal();
        }
    }, [cart]);

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
