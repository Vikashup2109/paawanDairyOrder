import type { Metadata, Viewport } from "next";
import "./globals.css";
import { CartProvider } from "@/context/CartContext";
import Header from "@/components/layout/Header";
import BottomNav from "@/components/layout/BottomNav";
import CartDrawer from "@/components/ui/CartDrawer";

export const metadata: Metadata = {
  title: "Paawan Dairy — Fresh Dairy, Beverages & Frozen Items",
  description: "Order fresh dairy products, beverages, and frozen items from Paawan Dairy. Quick delivery via WhatsApp.",
  keywords: ["dairy", "milk", "paneer", "dahi", "ice cream", "lassi", "order online", "Paawan Dairy"],
  openGraph: {
    title: "Paawan Dairy",
    description: "Fresh Dairy, Beverages & Frozen Items — Order via WhatsApp",
    type: "website",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  themeColor: "#683489",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-[#FAFAFA]">
        <CartProvider>
          <Header />
          <main className="pb-20 pt-16">
            {children}
          </main>
          <BottomNav />
          <CartDrawer />
        </CartProvider>
      </body>
    </html>
  );
}
