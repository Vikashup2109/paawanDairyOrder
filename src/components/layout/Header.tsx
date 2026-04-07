"use client";
import Link from "next/link";
import { ShoppingCart } from "lucide-react";
import { useCart } from "@/context/CartContext";
import Image from "next/image";
import paawanLogo from "@/assets/paawanLogo.png";
export default function Header() {
  const { totalItems, toggleCart } = useCart();

  return (
    <header className="fixed top-0 left-0 right-0 z-40 bg-white border-b border-gray-100 shadow-sm">
      <div className="max-w-md mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <Image src={paawanLogo} alt="Paawan Dairy Logo" width={32} height={32} className="rounded-xl" />
          <div className="leading-tight">
            <p className="font-display font-900 text-primary text-base leading-none">Paawan</p>
            <p className="font-display font-700 text-accent text-xs leading-tight tracking-widest uppercase">Dairy</p>
          </div>
        </Link>

        <button
          onClick={toggleCart}
          className="relative p-2.5 rounded-xl bg-primary/5 hover:bg-primary/10 transition-colors active:scale-95"
          aria-label={`Cart (${totalItems} items)`}
        >
          <ShoppingCart className="w-5 h-5 text-primary" />
          {totalItems > 0 && (
            <span className="cart-badge absolute -top-1 -right-1 bg-accent text-white text-xs font-bold rounded-full min-w-[18px] h-[18px] flex items-center justify-center px-1 shadow">
              {totalItems > 99 ? "99+" : totalItems}
            </span>
          )}
        </button>
      </div>
    </header>
  );
}
