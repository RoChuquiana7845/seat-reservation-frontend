"use client";

import React, { useState, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { createProduct, updateProduct, getProductById } from "@/lib/product";
import Button from "@/components/Button";

export default function ProductForm() {
  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);
  const [description, setDescription] = useState("");
  const [stock, setStock] = useState(0);
  const [error, setError] = useState("");
  const router = useRouter();
  const searchParams = useSearchParams();
  const productId = searchParams.get("id");

  useEffect(() => {
    const loadProduct = async () => {
      if (productId) {
        const product = await getProductById(productId);
        setName(product.name);
        setPrice(product.price); // Cambiado de "precio" a "price"
        setDescription(product.description);
        setStock(product.stock);
      }
    };
    loadProduct();
  }, [productId]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    try {
      if (productId) {
        await updateProduct(productId, { name, price, description, stock });
      } else {
        await createProduct({ name, price, description, stock }); // Cambiado de "precio" a "price"
      }
      router.push("/products"); // Redirige al usuario después de crear o actualizar el producto
    } catch (err: any) {
      setError("Failed to save product. Please try again.");
      console.error("Product save error:", err);
    }
  };

  return (
    <div className="flex justify-center">
      <form
        onSubmit={handleSubmit}
        className="w-1/2 p-6 bg-white rounded-md shadow-2xl"
      >
        <div className="form-group mb-4">
          <label className="input input-bordered flex items-center gap-2">
            Name
            <input
              type="text"
              className="grow"
              placeholder="Product Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </label>
        </div>
        <div className="form-group mb-4">
          <label className="input input-bordered flex items-center gap-2">
            Price
            <input
              type="number"
              className="grow"
              placeholder="Product Price"
              value={price}
              onChange={(e) => setPrice(Number(e.target.value))}
              required
            />
          </label>
        </div>
        <div className="form-group mb-4">
          <label className="input input-bordered flex items-center gap-2">
            Description
            <input
              type="text"
              className="grow"
              placeholder="Product Description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </label>
        </div>
        <div className="form-group mb-4">
          <label className="input input-bordered flex items-center gap-2">
            Stock
            <input
              type="number"
              className="grow"
              placeholder="Stock Quantity"
              value={stock}
              onChange={(e) => setStock(Number(e.target.value))}
              required
            />
          </label>
        </div>
        {error && <p className="text-red-600 mb-4">{error}</p>}
        <Button type="submit">{productId ? "Update Product" : "Create Product"}</Button>
      </form>
    </div>
  );
}
