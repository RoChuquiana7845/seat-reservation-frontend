"use client";
import { useCart } from "@/hooks/useCart";

export default function CartListItems() {
    const { cart, loading } = useCart();
    return (
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <h1>Cart</h1>
                    {loading ? (
                        <p>Loading...</p>
                    ) : (
                        <ul>

                        </ul>
                    )}
                </div>
            </div>
        </div>
    )
}