"use client";

import { useEffect, useState } from "react";
import { getProductById } from "@/lib/product";
import ProductDetail from "../productDetail";
import ProductDetailSkeleton from "@/components/skeletons/ProductDetailSkeleton";

interface Product {
  id: string;
  name: string;
  precio: number;
  description: string;
}

export default function ProductsPage({ params }: { params: { id: string; } }) {
  const [product, setProduct] = useState<Product | null>(null);
  const { id } = params;
  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const productData = await getProductById(id);
        setProduct(productData);
      } catch (error) {
        console.error("Error fetching product:", error);
      }
    };
    fetchProduct();
  }, [id]);

  if (!product) {
    return (<ProductDetailSkeleton/>)
  }
  return (<ProductDetail product={product} />);
}
