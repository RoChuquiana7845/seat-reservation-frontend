"use client";
import {useEffect, useState} from "react";
import {useCart} from "@/hooks/useCart";
import {getCartItem} from "@/lib/cart";

export default function CartListItems() {
    const { cart, loading } = useCart();
    const [cartItems, setCartItems] = useState<CartItem[]>([]);

    useEffect(() => {
        if (cart && cart.id) {
            const fetchCartItems = async () => {
                const items = await Promise.all(
                    cart.cartItems.map(async (item) => {
                        return await getCartItem(item.id);
                    })
                );
                setCartItems(items);
            };
            fetchCartItems();
        }
    }, [cart]);

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            {cartItems.map((item) => (
                <div key={item.id}>
                    <h3>{item.product.name}</h3>
                    <p>Quantity: {item.quantity}</p>
                </div>
            ))}
        </div>
    );
}