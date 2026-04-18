"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import {
  ChevronLeft, Trash2, Plus, Minus, User, Phone,
  CheckCircle2, ShoppingBag, RotateCcw, MessageCircle,
} from "lucide-react";
import { useCart } from "@/context/CartContext";
import { generateWhatsAppMessage, getWhatsAppLink, saveLastOrder, getLastOrder, FALLBACK_PRODUCTS } from "@/lib/products";

type Step = "cart" | "details" | "confirm";

interface FormData {
  name: string;
  mobile: string;
  errors: { name?: string; mobile?: string };
}

export default function CartPage() {
  const { state, updateQuantity, removeItem, clearCart, totalAmount, totalItems } = useCart();
  const [step, setStep] = useState<Step>("cart");
  const [form, setForm] = useState<FormData>({ name: "", mobile: "", errors: {} });
  const [orderPlaced, setOrderPlaced] = useState(false);
  const router = useRouter();

  const validateForm = () => {
    const errors: FormData["errors"] = {};
    if (!form.name.trim() || form.name.trim().length < 2) {
      errors.name = "Please enter your full name";
    }
    const mobileRegex = /^[6-9]\d{9}$/;
    if (!mobileRegex.test(form.mobile.replace(/\s/g, ""))) {
      errors.mobile = "Please enter a valid 10-digit mobile number";
    }
    setForm((f) => ({ ...f, errors }));
    return Object.keys(errors).length === 0;
  };

  const handlePlaceOrder = () => {
    if (!validateForm()) return;
    const items = state.items.map((i) => ({
      name: i.product.name,
      quantity: i.quantity,
      price: i.product.price,
    }));
    const msg = generateWhatsAppMessage(form.name.trim(), form.mobile.trim(), items, totalAmount);
    saveLastOrder(state.items.map((i) => ({ productId: i.product.id, quantity: i.quantity })));
    setOrderPlaced(true);
    clearCart();
    setTimeout(() => {
      window.open(getWhatsAppLink(msg), "_blank");
    }, 300);
  };

  // const handleRepeatLastOrder = () => {
  //   const last = getLastOrder();
  //   if (!last) return;
  //   // Re-add items from last order (using fallback products as reference)
  //   last.forEach(({ productId, quantity }) => {
  //     const product = FALLBACK_PRODUCTS.find((p) => p.id === productId);
  //     if (product) {
  //       for (let i = 0; i < quantity; i++) {
  //         // addItem handled by cart - but we need it from context
  //       }
  //     }
  //   });
  //   alert("Please browse products to re-add them to cart.");
  // };

  if (orderPlaced) {
    return (
      <div className="max-w-md mx-auto px-4 py-10 flex flex-col items-center text-center animate-fade-in">
        <div className="w-24 h-24 bg-green-50 rounded-full flex items-center justify-center mb-5 text-5xl animate-bounce-in">
          ✅
        </div>
        <h1 className="font-display font-900 text-2xl text-gray-900 mb-2">Order Sent!</h1>
        <p className="text-gray-500 text-sm mb-1">Your order has been sent to WhatsApp.</p>
        <p className="text-gray-400 text-sm">We&apos;ll confirm your delivery soon.</p>
        <div className="mt-8 w-full space-y-3">
          <a
            href={`https://wa.me/916377874808`}
            target="_blank"
            rel="noopener noreferrer"
            className="whatsapp-btn w-full py-3.5 text-white font-display font-800 rounded-2xl flex items-center justify-center gap-2 shadow-lg"
          >
            <MessageCircle className="w-5 h-5" />
            Open WhatsApp Chat
          </a>
          <button
            onClick={() => { setOrderPlaced(false); router.push("/"); }}
            className="w-full py-3.5 bg-primary/10 text-primary font-display font-800 rounded-2xl"
          >
            Continue Shopping
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-md mx-auto animate-fade-in">
      {/* Header */}
      <div className="sticky top-16 z-30 bg-[#FAFAFA] px-4 pt-3 pb-3">
        <div className="flex items-center gap-3">
          <button
            onClick={() => step === "cart" ? router.back() : setStep("cart")}
            className="p-2 rounded-xl bg-white border border-gray-100 shadow-sm"
          >
            <ChevronLeft className="w-4 h-4 text-gray-600" />
          </button>
          <h1 className="font-display font-900 text-gray-900 text-lg">
            {step === "cart" ? "My Cart" : step === "details" ? "Your Details" : "Confirm Order"}
          </h1>
        </div>

        {/* Progress */}
        <div className="flex items-center gap-2 mt-3">
          {(["cart", "details", "confirm"] as Step[]).map((s, idx) => (
            <div key={s} className="flex items-center gap-2 flex-1">
              <div
                className={`flex items-center justify-center w-6 h-6 rounded-full text-[10px] font-bold transition-all ${
                  step === s ? "bg-primary text-white" :
                  (["cart", "details", "confirm"].indexOf(step) > idx) ? "bg-accent text-white" : "bg-gray-200 text-gray-400"
                }`}
              >
                {(["cart", "details", "confirm"].indexOf(step) > idx) ? "✓" : idx + 1}
              </div>
              {idx < 2 && <div className={`flex-1 h-0.5 rounded-full ${(["cart", "details", "confirm"].indexOf(step) > idx) ? "bg-accent" : "bg-gray-200"}`} />}
            </div>
          ))}
        </div>
      </div>

      <div className="px-4 pb-32">
        {/* STEP 1: CART */}
        {step === "cart" && (
          <div className="space-y-3">
            {state.items.length === 0 ? (
              <div className="flex flex-col items-center justify-center py-20 text-center">
                <div className="text-6xl mb-4">🛒</div>
                <p className="font-display font-700 text-gray-400 text-xl">Your cart is empty</p>
                <p className="text-gray-400 text-sm mt-2">Add items to get started</p>
                <Link href="/" className="mt-6 bg-primary text-white px-8 py-3 rounded-2xl font-display font-800">
                  Show Products
                </Link>
                {/* {getLastOrder() && (
                  <button onClick={handleRepeatLastOrder} className="mt-3 flex items-center gap-1.5 text-primary text-sm font-semibold">
                    <RotateCcw className="w-4 h-4" /> Repeat Last Order
                  </button>
                )} */}
              </div>
            ) : (
              <>
                {state.items.map(({ product, quantity }) => (
                  <div key={product.id} className="bg-white rounded-2xl p-3.5 shadow-sm border border-gray-100 flex gap-3">
                    <div className="relative w-16 h-16 rounded-xl overflow-hidden flex-shrink-0 bg-gray-50">
                      <Image src={product.image} loading="lazy" decoding="async"  alt={product.name} fill className="object-cover" unoptimized />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="font-display font-700 text-gray-900 text-sm line-clamp-1">{product.name}</p>
                      <p className="text-gray-400 text-[11px]">{product.subtitle}</p>
                      <div className="flex items-center gap-1.5 mt-1">
                        <span className="text-primary font-bold text-sm">₹{product.price}</span>
                        {product.mrp > product.price && (
                          <span className="text-gray-400 text-xs line-through">₹{product.mrp}</span>
                        )}
                      </div>
                      <p className="text-accent font-bold text-xs">= ₹{product.price * quantity}</p>
                    </div>
                    <div className="flex flex-col items-end justify-between">
                      <button onClick={() => removeItem(product.id)} className="p-1.5 bg-red-50 rounded-lg">
                        <Trash2 className="w-3.5 h-3.5 text-red-400" />
                      </button>
                      <div className="flex items-center gap-2 bg-primary/5 rounded-xl p-1">
                        <button onClick={() => updateQuantity(product.id, quantity - 1)} className="qty-btn w-6 h-6 bg-primary rounded-lg flex items-center justify-center text-white">
                          <Minus className="w-2.5 h-2.5" />
                        </button>
                        <span className="font-display font-900 text-primary text-sm min-w-[16px] text-center">{quantity}</span>
                        <button onClick={() => updateQuantity(product.id, quantity + 1)} className="qty-btn w-6 h-6 bg-primary rounded-lg flex items-center justify-center text-white">
                          <Plus className="w-2.5 h-2.5" />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}

                {/* Savings summary */}
                {state.items.some((i) => i.product.mrp > i.product.price) && (
                  <div className="bg-accent/10 border border-accent/20 rounded-2xl p-3 flex items-center gap-2">
                    <span className="text-lg">🎉</span>
                    <p className="text-accent font-bold text-sm">
                      You save ₹{state.items.reduce((s, i) => s + (i.product.mrp - i.product.price) * i.quantity, 0)} on this order!
                    </p>
                  </div>
                )}
              </>
            )}
          </div>
        )}

        {/* STEP 2: CUSTOMER DETAILS */}
        {step === "details" && (
          <div className="space-y-4">
            <p className="text-gray-500 text-sm">We need these details for your order confirmation on WhatsApp.</p>

            {/* Name */}
            <div className="space-y-1.5">
              <label className="text-sm font-semibold text-gray-700 flex items-center gap-1.5">
                <User className="w-4 h-4 text-primary" /> Full Name *
              </label>
              <input
                type="text"
                value={form.name}
                onChange={(e) => setForm((f) => ({ ...f, name: e.target.value, errors: { ...f.errors, name: undefined } }))}
                placeholder="e.g. Ramesh Kumar"
                className={`w-full px-4 py-3.5 rounded-2xl border text-sm bg-white ${form.errors.name ? "border-red-400" : "border-gray-200"}`}
              />
              {form.errors.name && <p className="text-red-500 text-xs">{form.errors.name}</p>}
            </div>

            {/* Mobile */}
            <div className="space-y-1.5">
              <label className="text-sm font-semibold text-gray-700 flex items-center gap-1.5">
                <Phone className="w-4 h-4 text-primary" /> Mobile Number *
              </label>
              <div className="flex gap-2">
                <div className="px-3 py-3.5 rounded-2xl border border-gray-200 bg-gray-50 text-sm font-semibold text-gray-500 flex-shrink-0">
                  🇮🇳 +91
                </div>
                <input
                  type="tel"
                  value={form.mobile}
                  onChange={(e) => setForm((f) => ({ ...f, mobile: e.target.value.replace(/\D/g, "").slice(0, 10), errors: { ...f.errors, mobile: undefined } }))}
                  placeholder="9876543210"
                  maxLength={10}
                  className={`flex-1 px-4 py-3.5 rounded-2xl border text-sm bg-white ${form.errors.mobile ? "border-red-400" : "border-gray-200"}`}
                />
              </div>
              {form.errors.mobile && <p className="text-red-500 text-xs">{form.errors.mobile}</p>}
            </div>

            {/* Order summary preview */}
            <div className="bg-gray-50 rounded-2xl p-4 space-y-2">
              <p className="font-display font-700 text-gray-700 text-sm flex items-center gap-1.5">
                <ShoppingBag className="w-4 h-4 text-primary" /> Order Summary
              </p>
              {state.items.map((i) => (
                <div key={i.product.id} className="flex justify-between text-sm">
                  <span className="text-gray-500 line-clamp-1 flex-1">{i.product.name} × {i.quantity}</span>
                  <span className="text-gray-700 font-semibold ml-2 flex-shrink-0">₹{i.product.price * i.quantity}</span>
                </div>
              ))}
              <div className="border-t border-gray-200 pt-2 flex justify-between">
                <span className="font-display font-800 text-gray-900">Total</span>
                <span className="font-display font-900 text-primary text-lg">₹{totalAmount}</span>
              </div>
            </div>
          </div>
        )}

        {/* STEP 3: CONFIRM */}
        {step === "confirm" && (
          <div className="space-y-4">
            <div className="bg-primary/5 border border-primary/20 rounded-2xl p-4 space-y-2">
              <div className="flex items-center gap-2 mb-3">
                <CheckCircle2 className="w-5 h-5 text-primary" />
                <p className="font-display font-800 text-primary">Order Preview</p>
              </div>
              <div className="space-y-1">
                <div className="flex gap-2 text-sm">
                  <span className="text-gray-500 w-28 flex-shrink-0">Customer:</span>
                  <span className="text-gray-900 font-semibold">{form.name}</span>
                </div>
                <div className="flex gap-2 text-sm">
                  <span className="text-gray-500 w-28 flex-shrink-0">Mobile:</span>
                  <span className="text-gray-900 font-semibold">+91 {form.mobile}</span>
                </div>
              </div>
              <div className="border-t border-primary/10 mt-3 pt-3 space-y-1.5">
                {state.items.map((i) => (
                  <div key={i.product.id} className="flex justify-between text-sm">
                    <span className="text-gray-600">{i.product.name} × {i.quantity}</span>
                    <span className="text-gray-800 font-semibold">₹{i.product.price * i.quantity}</span>
                  </div>
                ))}
                <div className="flex justify-between pt-2 border-t border-primary/10">
                  <span className="font-display font-800 text-gray-900">Total Amount</span>
                  <span className="font-display font-900 text-primary text-xl">₹{totalAmount}</span>
                </div>
              </div>
            </div>

            <div className="bg-[#25D366]/10 border border-[#25D366]/30 rounded-2xl p-4">
              <p className="text-sm text-gray-600">
                Clicking <strong>"Place Order via WhatsApp"</strong> will open WhatsApp with your complete order details pre-filled. Just hit Send! 🚀
              </p>
            </div>
          </div>
        )}
      </div>

      {/* Sticky Footer CTA */}
      {state.items.length > 0 && (
        <div className="fixed bottom-16 left-0 right-0 max-w-md mx-auto px-4 py-3 bg-[#FAFAFA] border-t border-gray-100">
          {step !== "confirm" && (
            <div className="flex justify-between text-sm mb-2">
              <span className="text-gray-500">{totalItems} items</span>
              <span className="font-display font-800 text-primary">₹{totalAmount}</span>
            </div>
          )}
          {step === "cart" && (
            <button
              onClick={() => setStep("details")}
              className="w-full py-3.5 bg-primary text-white font-display font-800 text-base rounded-2xl shadow-lg shadow-primary/25 active:scale-[0.98] transition-transform"
            >
              Continue →
            </button>
          )}
          {step === "details" && (
            <button
              onClick={() => validateForm() && setStep("confirm")}
              className="w-full py-3.5 bg-primary text-white font-display font-800 text-base rounded-2xl shadow-lg shadow-primary/25 active:scale-[0.98] transition-transform"
            >
              Review Order →
            </button>
          )}
          {step === "confirm" && (
            <button
              onClick={handlePlaceOrder}
              className="whatsapp-btn w-full py-3.5 text-white font-display font-800 text-base rounded-2xl shadow-lg flex items-center justify-center gap-2"
            >
              <MessageCircle className="w-5 h-5" />
              Place Order via WhatsApp
            </button>
          )}
        </div>
      )}
    </div>
  );
}
