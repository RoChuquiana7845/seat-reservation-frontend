'use client';

import ProductForm from './productForm';

export default function CreateProductPage() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Create a New Product</h1>
      <ProductForm />
    </div>
  );
}
