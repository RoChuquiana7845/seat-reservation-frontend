"use client";
import { useEffect, useState } from "react";
import { useCart } from "@/hooks/useCart";
import { getCartItem } from "@/lib/cart";

export default function CartListItems() {
    const { cart, loading } = useCart();
    const [cartItems, setCartItems] = useState<CartItem[]>([]);

    useEffect(() => {
        if (cart && cart.id) {
            const fetchCartItems = async () => {
                const items = await Promise.all(
                    cart.cartItems.map(async (item) => {
                        const cartItem = await getCartItem(item.id);
                        return cartItem;
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
            {cartItems.length > 0 ? (
                <ul>

                </ul>
            ) : (
                <div>No items in the cart</div>
            )}
        </div>
    );
}