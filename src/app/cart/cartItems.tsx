"use client";
import { useCart } from "@/hooks/useCart";

export default function CartListItems() {
    const { cart, loading } = useCart();
    return (
        <div>
            {loading ? (
                <p>Loading...</p>
            ) : (
                <ul>
                    
                </ul>
            )}
        </div>
    )
}