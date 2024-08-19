"use client";

import Image from 'next/image';
import { ProductProps } from "@/props/product";
import React from "react";
import {addItemToCart} from "@/lib/cart";
import {useCart} from "@/hooks/useCart";
import Cookies from "js-cookie";

export default function ProductDetail({ product }: { product: ProductProps }) {
    const { cart, loading, error } = useCart();
    const handleAddToCart = async (e: React.FormEvent) => {
        e.preventDefault();
        if (loading) {
            console.log("Loading cart, please wait...");
            return;
        }
        if (!cart) {
            console.error("Cart not found or failed to load");
            return;
        }
        try {
            const cartId = cart.id;
            const token = Cookies.get('jwt');
            if (token) {
                await addItemToCart(token, 1, cartId, product.id);
                console.log("Product added to cart successfully");
            }
        } catch (error) {
            console.error("Error adding product to cart", error);
        }
    };
    return (
        <div className="container mx-auto p-4">
            <section className="flex flex-col md:flex-row items-start justify-center w-full space-y-4 md:space-y-0 md:space-x-4">
                <figure className="w-full md:w-2/3 lg:w-1/2 flex justify-center">
                    <Image
                        src={"/picture/default-product.png"}
                        className="object-cover object-center max-w-full max-h-80 rounded-lg shadow-lg"
                        alt={`Imagen de ${product.name}`}
                        width={300}
                        height={300}
                    />
                </figure>

                <aside className="w-full md:w-1/3 lg:w-1/3 p-6 rounded-lg shadow-lg border border-gray-200">
                    <h2 className="text-2xl font-semibold mb-4">{product.name}</h2>
                    <p className="text-xl font-semibold text-primary mb-4">${product.precio}</p>
                    <button onClick={handleAddToCart}
                        className="w-full py-3 px-4 bg-primary text-white font-semibold rounded-lg shadow-md hover:bg-primary-light">
                        Agregar al carrito
                    </button>
                </aside>
            </section>

            <section className="mt-8 p-6 rounded-lg shadow-lg border border-gray-200">
                <header>
                    <h2 className="text-2xl font-bold mb-4">Descripción del Producto</h2>
                </header>
                <article className="prose max-w-none text-gray-700">
                    {product.description}
                </article>
            </section>
        </div>
    );
}
