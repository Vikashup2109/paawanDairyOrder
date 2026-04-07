"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, Grid3X3, ShoppingCart, Phone } from "lucide-react";
import { useCart } from "@/context/CartContext";

const navItems = [
  { href: "/", icon: Home, label: "Home" },
  // { href: "/category/dairy", icon: Grid3X3, label: "Products" },
  { href: "/cart", icon: ShoppingCart, label: "Cart" },
];

export default function BottomNav() {
  const pathname = usePathname();
  const { totalItems } = useCart();

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-40 bg-white border-t border-gray-100 shadow-[0_-4px_20px_rgba(0,0,0,0.06)] pb-safe">
      <div className="max-w-md mx-auto flex items-center justify-around h-16 px-4">
        {navItems.map(({ href, icon: Icon, label }) => {
          const isActive = pathname === href || (href !== "/" && pathname.startsWith(href));
          const isCart = href === "/cart";
          return (
            <Link
              key={href}
              href={href}
              className={`flex flex-col items-center gap-0.5 py-1 px-4 rounded-xl transition-all ${
                isActive ? "text-primary" : "text-gray-400"
              }`}
            >
              <div className="relative">
                <Icon className={`w-5 h-5 transition-transform ${isActive ? "scale-110" : ""}`} />
                {isCart && totalItems > 0 && (
                  <span className="absolute -top-1.5 -right-1.5 bg-accent text-white text-[9px] font-bold rounded-full min-w-[14px] h-[14px] flex items-center justify-center px-0.5">
                    {totalItems}
                  </span>
                )}
              </div>
              <span className={`text-[10px] font-semibold ${isActive ? "text-primary" : "text-gray-400"}`}>
                {label}
              </span>
              {isActive && <div className="w-4 h-0.5 bg-primary rounded-full" />}
            </Link>
          );
        })}
        
      </div>
    </nav>
  );
}
