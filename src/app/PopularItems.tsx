"use client";
import { useState, useEffect } from "react";
import { Product } from "@/types";
import ProductCard from "@/components/ui/ProductCard";
import ProductSkeleton from "@/components/ui/ProductSkeleton";

export default function PopularItems() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/products")
      .then((r) => r.json())
      .then((data) => {
        const popular = (data.products as Product[]).filter((p) => p.isPopular).slice(0, 4);
        setProducts(popular);
      })
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return (
      <div className="grid grid-cols-2 gap-3">
        {[...Array(4)].map((_, i) => <ProductSkeleton key={i} />)}
      </div>
    );
  }

  return (
    <div className="grid grid-cols-2 gap-3">
      {products.map((p) => <ProductCard key={p.id} product={p} />)}
    </div>
  );
}
