"use client";
import { useState, useEffect, useMemo } from "react";
import Link from "next/link";
import { ChevronLeft, SlidersHorizontal } from "lucide-react";
import { Product } from "@/types";
import { CATEGORY_CONFIG } from "@/lib/products";
import ProductCard from "@/components/ui/ProductCard";
import ProductSkeleton from "@/components/ui/ProductSkeleton";
import SearchBar from "@/components/ui/SearchBar";
import { useCart } from "@/context/CartContext";
import { ShoppingCart } from "lucide-react";

interface Props {
  slug: string;
  config: (typeof CATEGORY_CONFIG)[keyof typeof CATEGORY_CONFIG];
}

export default function CategoryProducts({ slug, config }: Props) {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [sortBy, setSortBy] = useState<"default" | "price-asc" | "price-desc">("default");
  const { totalItems, toggleCart } = useCart();

  useEffect(() => {
    setLoading(true);
    fetch(`/api/products?category=${slug}`)
      .then((r) => r.json())
      .then((data) => setProducts(data.products))
      .finally(() => setLoading(false));
  }, [slug]);

  const filtered = useMemo(() => {
    let list = products;
    if (search) {
      const q = search.toLowerCase();
      list = list.filter((p) => p.name.toLowerCase().includes(q) || p.subtitle.toLowerCase().includes(q));
    }
    if (sortBy === "price-asc") list = [...list].sort((a, b) => a.price - b.price);
    if (sortBy === "price-desc") list = [...list].sort((a, b) => b.price - a.price);
    return list;
  }, [products, search, sortBy]);

  return (
    <div className="max-w-md mx-auto animate-fade-in">
      {/* Top bar */}
      <div className="sticky top-16 z-30 bg-[#FAFAFA] px-4 pt-3 pb-2 space-y-2">
        <div className="flex items-center gap-3">
          <Link href="/" className="p-2 rounded-xl bg-white border border-gray-100 shadow-sm">
            <ChevronLeft className="w-4 h-4 text-gray-600" />
          </Link>
          <div className="flex-1">
            <h1 className="font-display font-900 text-gray-900 text-lg leading-tight">
              {config.emoji} {config.label}
            </h1>
          </div>
          <button onClick={toggleCart} className="relative p-2 rounded-xl bg-white border border-gray-100 shadow-sm">
            <ShoppingCart className="w-4 h-4 text-primary" />
            {totalItems > 0 && (
              <span className="absolute -top-1 -right-1 bg-accent text-white text-[9px] font-bold rounded-full w-4 h-4 flex items-center justify-center">
                {totalItems}
              </span>
            )}
          </button>
        </div>

        <SearchBar value={search} onChange={setSearch} placeholder={`Search ${config.label}...`} />

        {/* Sort */}
        <div className="flex gap-2 overflow-x-auto pb-1 scrollbar-hide">
          {[
            { key: "default", label: "All" },
            { key: "price-asc", label: "Price ↑" },
            { key: "price-desc", label: "Price ↓" },
          ].map(({ key, label }) => (
            <button
              key={key}
              onClick={() => setSortBy(key as typeof sortBy)}
              className={`flex-shrink-0 px-3 py-1.5 rounded-xl text-xs font-bold border transition-all ${
                sortBy === key
                  ? "bg-primary text-white border-primary"
                  : "bg-white text-gray-500 border-gray-200"
              }`}
            >
              {label}
            </button>
          ))}
        </div>
      </div>

      {/* Products */}
      <div className="px-4 pb-4">
        {loading ? (
          <div className="grid grid-cols-2 gap-3">
            {[...Array(6)].map((_, i) => <ProductSkeleton key={i} />)}
          </div>
        ) : filtered.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-20 text-center">
            <div className="text-5xl mb-4">🔍</div>
            <p className="font-display font-700 text-gray-400 text-lg">No products found</p>
            <p className="text-gray-400 text-sm mt-1">Try a different search</p>
            {search && (
              <button onClick={() => setSearch("")} className="mt-4 text-primary font-semibold text-sm">
                Clear search
              </button>
            )}
          </div>
        ) : (
          <>
            <p className="text-gray-400 text-xs mb-3">{filtered.length} items</p>
            <div className="grid grid-cols-2 gap-3">
              {filtered.map((p) => <ProductCard key={p.id} product={p} />)}
            </div>
          </>
        )}
      </div>
    </div>
  );
}
