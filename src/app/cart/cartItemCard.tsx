"use client";

import Image from "next/image";
import React from "react";
import { removeItemFromCart } from "@/lib/cart";
import Cookies from "js-cookie";

export default function CartItemCard({ item, onRemove }: { item: CartItem, onRemove: (id: string) => void }) {

    const handleRemove = async () => {
        try {
            const token = Cookies.get("jwt");
            if (token) {
                await removeItemFromCart(token, item.id);
                onRemove(item.id);
            }
        } catch (error) {
            console.error("Error removing product from cart", error);
        }
    };

    return (
        <div className="flex border-button border-gray-300 p-4 rounded-lg ">
            <figure className="mr-4 flex-shrink-0">
                <Image
                    src="/picture/default-product.png"
                    alt={item.product.name}
                    className="w-24 h-24 object-cover rounded-md"
                    width={96}
                    height={96}
                />
            </figure>
            <div className="flex-grow">
                <h3 className="text-lg font-semibold text-blue-200">{item.product.name}</h3>
                <p className="text-sm text-gray-500">Quantity: {item.quantity}</p>
                <button
                    onClick={handleRemove}
                    className="mt-2 text-xs text-white bg-primary py-2 px-4 rounded-md hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-primary-light focus:ring-opacity-75"
                >
                    Remove
                </button>
            </div>
        </div>
    );
}
