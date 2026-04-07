"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { X, ShoppingCart, Trash2, Plus, Minus } from "lucide-react";
import { useCart } from "@/context/CartContext";
import Image from "next/image";

export default function CartDrawer() {
  const { state, toggleCart, updateQuantity, removeItem, totalAmount, totalItems } = useCart();

  useEffect(() => {
    if (state.isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [state.isOpen]);

  const router = useRouter();

  if (!state.isOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/50 z-50 animate-fade-in"
        onClick={toggleCart}
      />

      {/* Drawer */}
      <div className="fixed bottom-0 left-0 right-0 max-w-md mx-auto z-50 bg-white rounded-t-3xl shadow-2xl animate-slide-up max-h-[85vh] flex flex-col">
        {/* Handle */}
        <div className="w-10 h-1 bg-gray-200 rounded-full mx-auto mt-3 mb-1" />

        {/* Header */}
        <div className="flex items-center justify-between px-5 py-3 border-b border-gray-100">
          <div className="flex items-center gap-2">
            <ShoppingCart className="w-5 h-5 text-primary" />
            <h2 className="font-display font-800 text-gray-900 text-lg">
              My Cart
              {totalItems > 0 && (
                <span className="ml-2 bg-primary/10 text-primary text-sm px-2 py-0.5 rounded-full">
                  {totalItems}
                </span>
              )}
            </h2>
          </div>
          <button onClick={toggleCart} className="p-2 rounded-xl hover:bg-gray-100">
            <X className="w-5 h-5 text-gray-500" />
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto px-4 py-3 space-y-3">
          {state.items.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-16 text-center">
              <div className="text-5xl mb-4">🛒</div>
              <p className="font-display font-700 text-gray-400 text-lg">Cart is empty</p>
              <p className="text-gray-400 text-sm mt-1">Add some delicious items!</p>
              <button
                onClick={toggleCart}
                className="mt-5 bg-primary text-white px-6 py-2.5 rounded-xl font-semibold text-sm"
              >
                Browse Products
              </button>
            </div>
          ) : (
            state.items.map(({ product, quantity }) => (
              <div key={product.id} className="flex items-center gap-3 bg-gray-50 rounded-2xl p-2.5">
                <div className="relative w-14 h-14 rounded-xl overflow-hidden flex-shrink-0 bg-white">
                  <Image src={product.image} alt={product.name} fill className="object-cover" unoptimized />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="font-display font-700 text-gray-900 text-sm line-clamp-1">{product.name}</p>
                  <p className="text-primary font-bold text-sm">₹{product.price}</p>
                </div>
                <div className="flex items-center gap-2 flex-shrink-0">
                  <button
                    onClick={() => updateQuantity(product.id, quantity - 1)}
                    className="w-7 h-7 bg-primary rounded-lg flex items-center justify-center text-white"
                  >
                    <Minus className="w-3 h-3" />
                  </button>
                  <span className="font-display font-800 text-primary text-sm min-w-[20px] text-center">{quantity}</span>
                  <button
                    onClick={() => updateQuantity(product.id, quantity + 1)}
                    className="w-7 h-7 bg-primary rounded-lg flex items-center justify-center text-white"
                  >
                    <Plus className="w-3 h-3" />
                  </button>
                  <button
                    onClick={() => removeItem(product.id)}
                    className="w-7 h-7 bg-red-50 rounded-lg flex items-center justify-center ml-0.5"
                  >
                    <Trash2 className="w-3 h-3 text-red-400" />
                  </button>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer */}
        {state.items.length > 0 && (
          <div className="px-4 py-4 border-t border-gray-100 bg-white rounded-b-3xl">
            <div className="flex items-center justify-between mb-3">
              <span className="text-gray-600 font-semibold">Total Amount</span>
              <span className="font-display font-900 text-primary text-xl">₹{totalAmount}</span>
            </div>
            <button
              onClick={() => { toggleCart(); router.push("/cart"); }}
              className="w-full py-3.5 bg-primary text-white font-display font-800 text-base rounded-2xl shadow-lg shadow-primary/25 active:scale-[0.98] transition-transform"
            >
              Proceed to Order →
            </button>
          </div>
        )}
      </div>
    </>
  );
}
