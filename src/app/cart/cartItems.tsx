"use client";
import { useEffect, useState } from "react";
import { useCartContext } from "@/context/cartContext";
import { getCartItem } from "@/lib/cart";
import CartItemCard from "./cartItemCard";

export default function CartListItems() {
    const { cart, loading, fetchCart } = useCartContext();
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

    const handleRemoveItem = async (id: string) => {
        // Assuming there's a function to remove item from the cart
        await fetchCart();
        setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
    };

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <>
            {cartItems.length === 0 ? (
                <div>No items in cart</div>
            ) : (
                cartItems.map((item) => (
                    <CartItemCard
                        key={item.id}
                        item={item}
                        onRemove={() => handleRemoveItem(item.id)}
                    />
                ))
            )}
        </>
    );
}
