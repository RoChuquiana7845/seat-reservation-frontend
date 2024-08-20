"use client";
import {useEffect, useState} from "react";
import {useCart} from "@/hooks/useCart";
import {getCartItem} from "@/lib/cart";
import CartItemCard from "@/app/cart/cartItemCard";

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
                <CartItemCard key={item.id} item={item} />
            ))}
        </div>
    );
}