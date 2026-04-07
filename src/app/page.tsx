import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Star, Zap } from "lucide-react";
import { CATEGORY_CONFIG, FALLBACK_PRODUCTS } from "@/lib/products";
import PopularItems from "./PopularItems";

export const metadata: Metadata = {
  title: "Paawan Dairy — Fresh Dairy, Beverages & Frozen Items",
};

export default function HomePage() {
  const categories = Object.entries(CATEGORY_CONFIG) as [
    keyof typeof CATEGORY_CONFIG,
    (typeof CATEGORY_CONFIG)[keyof typeof CATEGORY_CONFIG]
  ][];

  return (
    <div className="max-w-md mx-auto px-4 py-5 space-y-6 animate-fade-in">
      {/* Hero Banner */}
      <div className="bg-gradient-to-br from-primary to-[#8B4BB8] rounded-3xl p-5 text-white shadow-lg shadow-primary/30 relative overflow-hidden">
        <div className="absolute -top-6 -right-6 w-32 h-32 bg-white/10 rounded-full" />
        <div className="absolute -bottom-8 -right-2 w-24 h-24 bg-white/5 rounded-full" />
        <div className="relative">
          <div className="flex items-center gap-2 mb-2">
            <Zap className="w-4 h-4 text-accent fill-current" />
            <span className="text-accent text-xs font-bold uppercase tracking-wider">Quick Delivery</span>
          </div>
          <h1 className="font-display font-900 text-2xl leading-tight mb-1">
            Fresh from Farm<br />to Your Door 🐄
          </h1>
          <p className="text-white/70 text-sm">Order via WhatsApp — Fast & Easy!</p>
          <Link
            href="/category/dairy"
            className="inline-flex items-center gap-1.5 mt-4 bg-white text-primary font-display font-800 text-sm px-4 py-2 rounded-xl shadow-sm active:scale-95 transition-transform"
          >
            Shop Now <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>

      {/* Categories */}
      <section>
        <h2 className="font-display font-800 text-gray-900 text-lg mb-3">Browse Categories</h2>
        <div className="grid grid-cols-1 gap-3">
          {categories.map(([slug, config]) => (
            <Link
              key={slug}
              href={`/category/${slug}`}
              className="category-card flex items-center gap-4 bg-white rounded-2xl p-4 shadow-sm border border-gray-100 hover:border-primary/20 hover:shadow-md"
            >
              <div className={`w-14 h-14 rounded-2xl ${config.iconBg} flex items-center justify-center text-3xl flex-shrink-0`}>
                {config.emoji}
              </div>
              <div className="flex-1">
                <h3 className="font-display font-800 text-gray-900">{config.label}</h3>
                <p className="text-gray-400 text-xs mt-0.5">{config.description}</p>
              </div>
              <ArrowRight className="w-4 h-4 text-gray-300 flex-shrink-0" />
            </Link>
          ))}
        </div>
      </section>

      {/* Popular Items */}
      <section>
        <div className="flex items-center gap-2 mb-3">
          <Star className="w-4 h-4 text-accent fill-current" />
          <h2 className="font-display font-800 text-gray-900 text-lg">Popular Items</h2>
        </div>
        <PopularItems />
      </section>

      {/* WhatsApp CTA */}
      <div className="bg-gradient-to-br from-[#25D366]/10 to-[#128C7E]/10 rounded-2xl p-4 border border-[#25D366]/20">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-[#25D366] rounded-xl flex items-center justify-center text-white flex-shrink-0 text-lg">
            💬
          </div>
          <div className="flex-1">
            <p className="font-display font-700 text-gray-900 text-sm">Need help ordering?</p>
            <p className="text-gray-500 text-xs">Chat with us on WhatsApp</p>
          </div>
          <a
            href="https://wa.me/916377874808"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#25D366] text-white text-xs font-bold px-3 py-1.5 rounded-xl flex-shrink-0 active:scale-95 transition-transform"
          >
            Chat
          </a>
        </div>
      </div>
    </div>
  );
}
