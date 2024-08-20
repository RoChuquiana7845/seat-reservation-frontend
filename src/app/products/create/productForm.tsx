"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { createProduct } from "@/lib/product";
import Button from "@/components/Button";

export default function ProductForm() {
  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);
  const [description, setDescription] = useState("");
  const [stock, setStock] = useState(0);
  const [error, setError] = useState("");
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    try {
      await createProduct({ name, precio: price, description, stock });
      router.push("/products"); // Redirige al usuario después de crear el producto
    } catch (err: any) {
      setError("Failed to create product. Please try again.");
      console.error("Product creation error:", err);
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
        <Button type="submit">Create Product</Button>
      </form>
    </div>
  );
}
