"use client";

import { getProducts } from "@/lib/product";
import { useEffect, useState } from "react";
import { ProductProps } from "@/props/product";
import ProductCard from "./productCard";
import ProductCardSkeleton from "@/components/skeletons/ProductCartSkeleton";

export default function ProductList() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getProducts().then((data) => {
      setProducts(data);
      setLoading(false);
    });
  }, []);

  return (
    loading ? Array.from({ length: 8 }).map((_, index) => (
      <ProductCardSkeleton key={index} />
    )):
    products.length === 0 ? <div>No products</div> :
    products.map((producto : ProductProps) => (
        <ProductCard key={producto.id} product={producto} />
    ))
  );
}