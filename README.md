# 🐄 Paawan Dairy — Web Ordering App

A production-ready, mobile-first ordering web application for **Paawan Dairy**. Customers can browse dairy products, beverages, and frozen items, add them to cart, and place orders directly via **WhatsApp**.

---

## ✨ Features

- 📱 **Mobile-first** responsive design
- 🛒 **Cart system** with persistent state (localStorage)
- 💬 **WhatsApp integration** — pre-filled order messages
- 🔍 **Product search** within categories
- 📊 **Dynamic products** via Google Sheets or Airtable
- ⭐ **Popular items** section on homepage
- 🏷️ **Discount badges** (% off)
- 🧊 Out-of-stock handling
- ♻️ **Repeat last order** (localStorage-based)
- ⚡ Fast loading with skeleton screens
- 🎨 Custom brand colors (#683489 purple + #91A13A green)

---

## 🚀 Quick Start

### 1. Install dependencies
```bash
npm install
```

### 2. Run development server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000)

### 3. Build for production
```bash
npm run build
npm start
```

---

## 🗂️ Project Structure

```
src/
├── app/
│   ├── page.tsx              # Home page
│   ├── PopularItems.tsx      # Popular items client component
│   ├── layout.tsx            # Root layout with metadata
│   ├── globals.css           # Global styles
│   ├── not-found.tsx         # 404 page
│   ├── cart/
│   │   └── page.tsx          # Cart + checkout (3-step)
│   ├── category/[slug]/
│   │   ├── page.tsx          # Category page (SSG)
│   │   └── CategoryProducts.tsx  # Products grid with search
│   └── api/products/
│       └── route.ts          # Products API (Google Sheets/Airtable/static)
├── components/
│   ├── layout/
│   │   ├── Header.tsx        # Top header with cart icon
│   │   └── BottomNav.tsx     # Bottom navigation
│   └── ui/
│       ├── CartDrawer.tsx    # Slide-up cart drawer
│       ├── ProductCard.tsx   # Product card with add/remove
│       ├── ProductSkeleton.tsx # Loading skeleton
│       └── SearchBar.tsx     # Search input
├── context/
│   └── CartContext.tsx       # Cart state management
├── lib/
│   └── products.ts           # Product data, utils, WhatsApp logic
└── types/
    └── index.ts              # TypeScript types
```

---

## 🔌 Product Data Sources

The app tries sources in this order:
1. **Google Sheets** (if `GOOGLE_SHEET_ID` and `GOOGLE_SHEETS_API_KEY` are set)
2. **Airtable** (if `AIRTABLE_API_KEY` and `AIRTABLE_BASE_ID` are set)
3. **Built-in static data** (always works, no config needed)

### Option A: Google Sheets Setup

1. Create a Google Sheet with these columns (Row 1 = headers):
   ```
   ID | Name | Subtitle | Price | MRP | Image URL | Category | Popular | In Stock
   ```
2. **Categories** must be: `dairy`, `beverages`, or `frozen`
3. Enable the **Google Sheets API** in Google Cloud Console
4. Create an **API Key** (restrict to Sheets API)
5. Add to `.env.local`:
   ```
   GOOGLE_SHEET_ID=1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs74OgVE2upms
   GOOGLE_SHEETS_API_KEY=AIzaSy...
   ```
6. Make the sheet **publicly readable** (Share → Anyone with link → Viewer)

### Option B: Airtable Setup

1. Create an Airtable base with a table named `Products`
2. Add fields: `Name`, `Subtitle`, `Price`, `MRP`, `Image URL`, `Category`, `Popular` (checkbox), `In Stock` (checkbox)
3. Get your **API key** from airtable.com/account
4. Add to `.env.local`:
   ```
   AIRTABLE_API_KEY=patXXXXXXXX
   AIRTABLE_BASE_ID=appXXXXXXXX
   AIRTABLE_TABLE_ID=Products
   ```

---

## 🌐 Deploy to Vercel

### One-click deploy:

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new)

### Manual steps:
1. Push code to GitHub
2. Go to [vercel.com](https://vercel.com) → **New Project**
3. Import your GitHub repo
4. Add environment variables (if using Google Sheets/Airtable)
5. Click **Deploy** 🚀

The `vercel.json` is already configured with `bom1` (Mumbai) region for best performance in India.

---

## 📱 WhatsApp Integration

**Business number:** `+91 63778 74808`

When a customer places an order, they get redirected to:
```
https://wa.me/916377874808?text=🛒 New Order - Paawan Dairy...
```

The message includes customer name, mobile, all items with quantities, and total amount.

---

## 🎨 Brand Colors

| Color | Hex | Usage |
|-------|-----|-------|
| Primary Purple | `#683489` | Buttons, accents, nav |
| Accent Green | `#91A13A` | Discounts, savings, badges |
| Background | `#FAFAFA` | Page background |

---

## 🛠️ Customization

### Add/edit products (static fallback)
Edit `src/lib/products.ts` → `FALLBACK_PRODUCTS` array.

### Change WhatsApp number
Edit `src/lib/products.ts` → `WHATSAPP_NUMBER` constant.

### Add a new category
1. Add to `CATEGORY_CONFIG` in `src/lib/products.ts`
2. Add to `Category` type in `src/types/index.ts`
3. Page auto-generates via `[slug]` dynamic route

---

## 📋 Tech Stack

| Technology | Purpose |
|-----------|---------|
| Next.js 14 (App Router) | Framework |
| TypeScript | Type safety |
| Tailwind CSS | Styling |
| React Context | Cart state |
| Lucide React | Icons |
| Google Fonts (Nunito + Poppins) | Typography |

---

Made with ❤️ for Paawan Dairy
