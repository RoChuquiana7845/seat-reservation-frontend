"use client";

import { getProducts, deleteProduct } from "@/lib/product";
import { useEffect, useState } from "react";
import { ProductProps } from "@/props/product";
import ProductCard from "./productCard";
import ProductCardSkeleton from "@/components/skeletons/ProductCartSkeleton";
import { useRouter } from "next/navigation";

export default function ProductList() {
  const [products, setProducts] = useState<ProductProps[]>([]); // Asegúrate de que el tipo esté correctamente definido
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    getProducts().then((data) => {
      setProducts(data);
      setLoading(false);
    });
  }, []);

  const handleEdit = (id: string) => {
    router.push(`/products/create?id=${id}`); // Redirige a la página de edición con el ID del producto
  };

  const handleDelete = async (id: string) => {
    if (confirm("Are you sure you want to delete this product?")) {
      await deleteProduct(id); // Llama a la función para eliminar el producto
      setProducts(products.filter((product) => product.id !== id)); // Actualiza la lista de productos
    }
  };

  const handleAddProduct = () => {
    router.push("/products/create"); // Redirige a la página de creación de productos
  };

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Product List</h1>
        <button 
          className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg"
          onClick={handleAddProduct}
        >
          Add Product
        </button>
      </div>

      {loading ? (
        Array.from({ length: 8 }).map((_, index) => (
          <ProductCardSkeleton key={index} />
        ))
      ) : (
        products.length === 0 ? <div>No products</div> :
        products.map((product: ProductProps) => (
          <div key={product.id} className="mb-4">
            <ProductCard product={product} />
            <div className="flex justify-end gap-2 mt-2">
              <button
                className="btn btn-sm btn-primary"
                onClick={() => handleEdit(product.id)}
              >
                Edit
              </button>
              <button
                className="btn btn-sm btn-danger"
                onClick={() => handleDelete(product.id)}
              >
                Delete
              </button>
            </div>
          </div>
        ))
      )}
    </div>
  );
}
