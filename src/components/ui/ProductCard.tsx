"use client";
import Image from "next/image";
import { Plus, Minus } from "lucide-react";
import { Product } from "@/types";
import { useCart } from "@/context/CartContext";
import { calculateDiscount } from "@/lib/products";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const { addItem, updateQuantity, getItemQuantity } = useCart();
  const quantity = getItemQuantity(product.id);
  const discount = calculateDiscount(product.mrp, product.price);

  return (
    <div className="product-card bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 flex flex-col">
      {/* Image */}
      <div className="relative w-full aspect-[4/3] bg-gray-50">
        <Image
          src={product.image}
          loading="lazy" decoding="async" 
          alt={product.name}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 50vw, 33vw"
          unoptimized
        />
        {discount > 0 && (
          <div className="absolute top-2 left-2 bg-accent text-white text-[10px] font-bold px-1.5 py-0.5 rounded-full shadow">
            {discount}% OFF
          </div>
        )}
        {product.isPopular && (
          <div className="absolute top-2 right-2 bg-primary text-white text-[10px] font-bold px-1.5 py-0.5 rounded-full shadow">
            ⭐ Popular
          </div>
        )}
        {!product.inStock && (
          <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
            <span className="bg-white text-gray-700 text-xs font-bold px-3 py-1.5 rounded-full shadow">
              Out of Stock
            </span>
          </div>
        )}
      </div>

      {/* Info */}
      <div className="p-3 flex flex-col flex-1">
        <h3 className="font-display font-800 text-gray-900 text-sm leading-tight line-clamp-1">
          {product.name}
        </h3>
        <p className="text-[11px] text-gray-400 mt-0.5 line-clamp-1">{product.subtitle}</p>

        {/* Price */}
        <div className="mt-2 flex items-baseline gap-1.5">
          <span className="text-primary font-display font-900 text-base">₹{product.price}</span>
          {product.mrp > product.price && (
            <span className="text-gray-400 text-xs line-through">₹{product.mrp}</span>
          )}
        </div>

        {/* Add to Cart */}
        <div className="mt-2.5">
          {quantity === 0 ? (
            <button
              onClick={() => product.inStock && addItem(product)}
              disabled={!product.inStock}
              className={`w-full py-2 rounded-xl text-xs font-bold transition-all ${
                product.inStock
                  ? "bg-primary text-white active:scale-95 shadow-sm shadow-primary/20"
                  : "bg-gray-100 text-gray-400 cursor-not-allowed"
              }`}
            >
              {product.inStock ? "Add to Cart" : "Out of Stock"}
            </button>
          ) : (
            <div className="flex items-center justify-between bg-primary/5 rounded-xl p-1">
              <button
                onClick={() => updateQuantity(product.id, quantity - 1)}
                className="qty-btn w-7 h-7 bg-primary rounded-lg flex items-center justify-center text-white shadow-sm"
              >
                <Minus className="w-3 h-3" />
              </button>
              <span className="font-display font-900 text-primary text-sm min-w-[20px] text-center">
                {quantity}
              </span>
              <button
                onClick={() => addItem(product)}
                className="qty-btn w-7 h-7 bg-primary rounded-lg flex items-center justify-center text-white shadow-sm"
              >
                <Plus className="w-3 h-3" />
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
