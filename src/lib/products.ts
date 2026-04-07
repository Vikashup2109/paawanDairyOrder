import { Product, Category } from "@/types";  

// Updated products data
// export const FALLBACK_PRODUCTS: Product[] = [
//   // ================= DAIRY PRODUCTS =================
//   {
//     id: "amul-d1",
//     name: "Amul Gold Milk 1L",
//     subtitle: "Full Cream 1L 12pcs",
//     price: 65,
//     mrp: 68,
//     image: "https://amul.com/files/products/amul-gold.jpg",
//     category: "dairy",
//     inStock: true,
//   },
//   {
//     id: "amul-d2",
//     name: "Amul Taaza Milk 500ml",
//     subtitle: "Toned Milk 500ml 20pcs",
//     price: 32,
//     mrp: 34,
//     image: "https://amul.com/files/products/taaza.jpg",
//     category: "dairy",
//     inStock: true,
//   },
//   {
//     id: "amul-d3",
//     name: "Amul Shakti Milk 500ml",
//     subtitle: "Standard Milk 500ml 20pcs",
//     price: 29,
//     mrp: 32,
//     image: "https://amul.com/files/products/shakti.jpg",
//     category: "dairy",
//     inStock: true,
//   },
//   {
//     id: "amul-d4",
//     name: "Amul Slim Milk 1L",
//     subtitle: "Skim Milk 1L 12pcs",
//     price: 75,
//     mrp: 80,
//     image: "https://amul.com/files/products/slim.jpg",
//     category: "dairy",
//     inStock: true,
//   },
//   {
//     id: "amul-d5",
//     name: "Amul Paneer 200g",
//     subtitle: "Fresh Paneer 200g 20pcs",
//     price: 95,
//     mrp: 105,
//     image: "https://amul.com/files/products/paneer.jpg",
//     category: "dairy",
//     inStock: true,
//   },
//   {
//     id: "amul-d6",
//     name: "Amul Butter 100g",
//     subtitle: "Salted Butter 100g 40pcs",
//     price: 52,
//     mrp: 56,
//     image: "https://amul.com/files/products/butter.jpg",
//     category: "dairy",
//     inStock: true,
//   },
//   {
//     id: "amul-d7",
//     name: "Amul Cheese Cubes 200g",
//     subtitle: "Cheese Cubes 200g 20pcs",
//     price: 120,
//     mrp: 135,
//     image: "https://amul.com/files/products/cheese.jpg",
//     category: "dairy",
//     inStock: true,
//   },
//   {
//     id: "amul-d8",
//     name: "Amul Fresh Cream 250ml",
//     subtitle: "Fresh Cream 250ml 12pcs",
//     price: 70,
//     mrp: 75,
//     image: "https://amul.com/files/products/cream.jpg",
//     category: "dairy",
//     inStock: true,
//   },
//   {
//     id: "amul-d9",
//     name: "Amul Pure Ghee 1L",
//     subtitle: "Cow Ghee 1L 12pcs",
//     price: 570,
//     mrp: 620,
//     image: "https://amul.com/files/products/ghee.jpg",
//     category: "dairy",
//     inStock: true,
//   },

//   // ================= BEVERAGES =================
//   {
//     id: "amul-b1",
//     name: "Amul Masti Buttermilk 200ml",
//     subtitle: "Spiced Drink 200ml 30pcs",
//     price: 10,
//     mrp: 12,
//     image: "https://amul.com/files/products/masti.jpg",
//     category: "beverages",
//     inStock: true,
//   },
//   {
//     id: "amul-b2",
//     name: "Amul Lassi 200ml",
//     subtitle: "Sweet Lassi 200ml 30pcs",
//     price: 20,
//     mrp: 25,
//     image: "https://amul.com/files/products/lassi.jpg",
//     category: "beverages",
//     inStock: true,
//   },
//   {
//     id: "amul-b3",
//     name: "Amul Kool Badam 180ml",
//     subtitle: "Badam Drink 180ml 24pcs",
//     price: 25,
//     mrp: 30,
//     image: "https://amul.com/files/products/kool-badam.jpg",
//     category: "beverages",
//     inStock: true,
//   },
//   {
//     id: "amul-b4",
//     name: "Amul Kool Coffee 180ml",
//     subtitle: "Cold Coffee 180ml 24pcs",
//     price: 25,
//     mrp: 30,
//     image: "https://amul.com/files/products/kool-coffee.jpg",
//     category: "beverages",
//     inStock: true,
//   },

//   // ================= FROZEN ITEMS =================
//   {
//     id: "amul-f1",
//     name: "Amul Vanilla Ice Cream 1L",
//     subtitle: "Vanilla Ice 1L 12pcs",
//     price: 220,
//     mrp: 240,
//     image: "https://amul.com/files/products/vanilla.jpg",
//     category: "frozen",
//     inStock: true,
//   },
//   {
//     id: "amul-f2",
//     name: "Amul Chocolate Ice Cream 1L",
//     subtitle: "Chocolate Ice 1L 12pcs",
//     price: 240,
//     mrp: 260,
//     image: "https://amul.com/files/products/chocolate.jpg",
//     category: "frozen",
//     inStock: true,
//   },
// ];

export const FALLBACK_PRODUCTS: Product[] = [

  // ================= LOOSE =================
  {
    id: "loose-p1",
    name: "Loose Paneer",
    subtitle: "Low Fat 1kg Loose",
    price: 220,
    mrp: 0,
    image: "https://kuvmbhsqvydimdilpffm.supabase.co/storage/v1/object/public/Images/LowFatPaneer.svg",
    category: "loose",
    inStock: true
  },
  {
    id: "loose-p2",
    name: "Malayi Paneer",
    subtitle: "Rich Paneer 1kg Loose",
    price: 300,
    mrp: 0,
    image: "https://kuvmbhsqvydimdilpffm.supabase.co/storage/v1/object/public/Images/Malayi%20Paneer.svg",
    category: "loose",
    inStock: true
  },
  {
    id: "loose-p3",
    name: "Curd Matka",
    subtitle: "Fresh Curd 5kg 1pc",
    price: 230,
    mrp: 280,
    image: "https://amul.com/files/products/amul-gold.jpg",
    category: "loose",
    inStock: true
  },
  {
    id: "loose-p4",
    name: "Pure Ghee",
    subtitle: "Cow Ghee 1kg Loose",
    price: 700,
    mrp: 0,
    image: "https://kuvmbhsqvydimdilpffm.supabase.co/storage/v1/object/public/Images/DeshiGhee.svg",
    category: "loose",
    inStock: true
  },
  {
    id: "loose-p5",
    name: "Khoya",
    subtitle: "Pure Khoya 1kg Loose",
    price: 280,
    mrp: 0,
    image: "https://kuvmbhsqvydimdilpffm.supabase.co/storage/v1/object/public/Images/Khoya.svg",
    category: "loose",
    inStock: true
  },

  // ================= DAIRY =================
  {
    id: "amul-d1",
    name: "Amul Gold Milk 6L Pouch",
    subtitle: "Full Cream 6L 2pcs",
    price: 800,
    mrp: 840,
    image: "https://amul.com/files/products/amul-gold.jpg",
    category: "dairy",
    inStock: true
  },
  {
    id: "amul-d2",
    name: "Amul Gold Milk 500ml Pouch",
    subtitle: "Full Cream 500ml 24pcs",
    price: 816,
    mrp: 840,
    image: "https://amul.com/files/products/amul-gold.jpg",
    category: "dairy",
    inStock: true
  },
  {
    id: "amul-d3",
    name: "Amul Dahi 390g Pouch",
    subtitle: "Masti Dahi 390g 30pcs",
    price: 990,
    mrp: 1050,
    image: "https://amul.com/files/products/taaza.jpg",
    category: "dairy",
    inStock: true
  },
  {
    id: "amul-d4",
    name: "Amul Dahi 1kg Pouch",
    subtitle: "Masti Dahi 1kg 12pcs",
    price: 900,
    mrp: 924,
    image: "https://amul.com/files/products/shakti.jpg",
    category: "dairy",
    inStock: true
  },
  {
    id: "amul-d5",
    name: "Amul Plain Chhach 680ml",
    subtitle: "Plain Chhach 680ml 16pcs",
    price: 304,
    mrp: 320,
    image: "https://amul.com/files/products/slim.jpg",
    category: "dairy",
    inStock: true
  },
  {
    id: "amul-d6",
    name: "Amul Tadka Chhach 280ml",
    subtitle: "Masala Chhach 280ml 40pcs",
    price: 360,
    mrp: 400,
    image: "https://amul.com/files/products/paneer.jpg",
    category: "dairy",
    inStock: true
  },
  {
    id: "amul-d7",
    name: "Amul Plain Chhach 440ml",
    subtitle: "Plain Chhach 440ml 26pcs",
    price: 364,
    mrp: 390,
    image: "https://amul.com/files/products/butter.jpg",
    category: "dairy",
    inStock: true
  },
  {
    id: "amul-d8",
    name: "Amul Sweet Lassi 320ml",
    subtitle: "Sweet Lassi 320ml 32pcs",
    price: 288,
    mrp: 320,
    image: "https://amul.com/files/products/cheese.jpg",
    category: "dairy",
    inStock: true
  },
  {
    id: "amul-d9",
    name: "Amul Curd Matka 5kg",
    subtitle: "Lite Curd 5kg 1pc",
    price: 320,
    mrp: 350,
    image: "https://amul.com/files/products/cheese.jpg",
    category: "dairy",
    inStock: true
  },
  {
    id: "amul-d10",
    name: "Amul Curd Matka Green 5kg",
    subtitle: "Mast Curd 5kg 1pc",
    price: 390,
    mrp: 420,
    image: "https://amul.com/files/products/cheese.jpg",
    category: "dairy",
    inStock: true
  },
  {
    id: "amul-d11",
    name: "Amul Khoya 1kg",
    subtitle: "Dhap Khoya 1kg 1pc",
    price: 320,
    mrp: 450,
    image: "https://amul.com/files/products/cheese.jpg",
    category: "dairy",
    inStock: true
  },

  // ================= BUTTER & CREAM =================
  {
    id: "amul-bt1",
    name: "Amul Butter 100g",
    subtitle: "Salted Butter 100g 150pcs",
    price: 8100,
    mrp: 8700,
    image: "https://amul.com/files/products/masti.jpg",
    category: "butterNcream",
    inStock: true
  },
  {
    id: "amul-bt2",
    name: "Amul Butter 20g",
    subtitle: "Salted Butter 20g 16pkt",
    price: 8640,
    mrp: 9440,
    image: "https://amul.com/files/products/masti.jpg",
    category: "butterNcream",
    inStock: true
  },
  {
    id: "amul-bt3",
    name: "Amul Butter 500g",
    subtitle: "Salted Butter 500g 30pcs",
    price: 8250,
    mrp: 8850,
    image: "https://amul.com/files/products/masti.jpg",
    category: "butterNcream",
    inStock: true
  },
  {
    id: "amul-bt4",
    name: "Amul Butter 10g",
    subtitle: "Salted Butter 10g 10pkt",
    price: 5900,
    mrp: 6300,
    image: "https://amul.com/files/products/masti.jpg",
    category: "butterNcream",
    inStock: true
  },
  {
    id: "amul-bt5",
    name: "Amul Unsalted Butter 100g",
    subtitle: "Unsalted Butter 100g 150pcs",
    price: 9300,
    mrp: 10050,
    image: "https://amul.com/files/products/masti.jpg",
    category: "butterNcream",
    inStock: true
  },
  {
    id: "amul-bt6",
    name: "Amul Unsalted Butter 500g",
    subtitle: "Unsalted Butter 500g 30pcs",
    price: 9150,
    mrp: 9900,
    image: "https://amul.com/files/products/masti.jpg",
    category: "butterNcream",
    inStock: true
  },
  {
    id: "amul-bt7",
    name: "Amul Fresh Cream 250ml",
    subtitle: "Fresh Cream 250ml 32pcs",
    price: 2208,
    mrp: 2304,
    image: "https://amul.com/files/products/masti.jpg",
    category: "butterNcream",
    inStock: true
  },
  {
    id: "amul-bt8",
    name: "Amul Fresh Cream 1L",
    subtitle: "Fresh Cream 1L 12pcs",
    price: 2760,
    mrp: 2880,
    image: "https://amul.com/files/products/masti.jpg",
    category: "butterNcream",
    inStock: true
  },
  {
    id: "amul-bt9",
    name: "Delicious Butter 500g",
    subtitle: "Fat Spread 500g 30pcs",
    price: 2700,
    mrp: 3150,
    image: "https://amul.com/files/products/masti.jpg",
    category: "butterNcream",
    inStock: true
  },
  {
    id: "amul-bt10",
    name: "Delicious Butter 100g",
    subtitle: "Fat Spread 100g 150pcs",
    price: 2850,
    mrp: 3300,
    image: "https://amul.com/files/products/masti.jpg",
    category: "butterNcream",
    inStock: true
  },
  {
    id: "amul-bt11",
    name: "Amul Cheese Block 1kg",
    subtitle: "Processed Cheese 1kg 1pc",
    price: 490,
    mrp: 550,
    image: "https://amul.com/files/products/masti.jpg",
    category: "butterNcream",
    inStock: true
  },
  {
    id: "amul-bt12",
    name: "Amul Cheese Slice 750g",
    subtitle: "Cheese Slice 750g 1pc",
    price: 450,
    mrp: 500,
    image: "https://amul.com/files/products/masti.jpg",
    category: "butterNcream",
    inStock: true
  },

  // ================= BEVERAGES =================
  {
    id: "amul-b1",
    name: "Amul Masti Buttermilk 200ml",
    subtitle: "Spiced Chhach 200ml 30pcs",
    price: 405,
    mrp: 450,
    image: "https://amul.com/files/products/masti.jpg",
    category: "beverages",
    inStock: true
  },
  {
    id: "amul-b2",
    name: "Amul Premium Buttermilk 200ml",
    subtitle: "Premium Chhach 200ml 30pcs",
    price: 480,
    mrp: 600,
    image: "https://amul.com/files/products/masti.jpg",
    category: "beverages",
    inStock: true
  },
  {
    id: "amul-b3",
    name: "Amul Lassi 200ml",
    subtitle: "Sweet Lassi 200ml 30pcs",
    price: 720,
    mrp: 800,
    image: "https://amul.com/files/products/masti.jpg",
    category: "beverages",
    inStock: true
  },
  {
    id: "amul-b4",
    name: "Amul Rose Lassi 200ml",
    subtitle: "Rose Lassi 200ml 30pcs",
    price: 645,
    mrp: 750,
    image: "https://amul.com/files/products/lassi.jpg",
    category: "beverages",
    inStock: true
  },
  {
    id: "amul-b5",
    name: "Amul Kool Kesar 180ml",
    subtitle: "Kesar Milk 180ml 30pcs",
    price: 720,
    mrp: 900,
    image: "https://amul.com/files/products/lassi.jpg",
    category: "beverages",
    inStock: true
  },
  {
    id: "amul-b6",
    name: "Amul Kool Elaichi 180ml",
    subtitle: "Elaichi Milk 180ml 30pcs",
    price: 720,
    mrp: 900,
    image: "https://amul.com/files/products/lassi.jpg",
    category: "beverages",
    inStock: true
  },
  {
    id: "amul-b7",
    name: "Amul Kool Koko 200ml",
    subtitle: "Chocolate Milk 200ml 30pcs",
    price: 1050,
    mrp: 1800,
    image: "https://amul.com/files/products/lassi.jpg",
    category: "beverages",
    inStock: true
  },
  {
    id: "amul-b8",
    name: "Amul Kool Badam 180ml",
    subtitle: "Badam Milk 180ml 30pcs",
    price: 1200,
    mrp: 1500,
    image: "https://amul.com/files/products/kool-badam.jpg",
    category: "beverages",
    inStock: true
  },
  {
    id: "amul-b9",
    name: "Amul Kool Cafe 180ml",
    subtitle: "Cold Coffee 180ml 24pcs",
    price: 900,
    mrp: 1800,
    image: "https://amul.com/files/products/kool-coffee.jpg",
    category: "beverages",
    inStock: true
  },

  // ================= FROZEN =================
  {
    id: "frozen-p1",
    name: "Green Peas 5kg",
    subtitle: "Fresh Matar 5kg 1pc",
    price: 320,
    mrp: 380,
    image: "https://kuvmbhsqvydimdilpffm.supabase.co/storage/v1/object/public/Images/matar.svg",
    category: "frozen",
    inStock: true
  },
  {
    id: "frozen-p2",
    name: "Sweet Corn 1kg",
    subtitle: "Sweet Corn 1kg 5pcs",
    price: 110,
    mrp: 180,
    image: "https://amul.com/files/products/vanilla.jpg",
    category: "frozen",
    inStock: true
  },
  {
    id: "frozen-p3",
    name: "Strawberry Ice Cream 5L",
    subtitle: "Strawberry Ice 5L 1pc",
    price: 500,
    mrp: 550,
    image: "https://amul.com/files/products/vanilla.jpg",
    category: "frozen",
    inStock: true
  },
  {
    id: "frozen-p4",
    name: "Vanilla Ice Cream 5L",
    subtitle: "Vanilla Ice 5L 1pc",
    price: 540,
    mrp: 550,
    image: "https://amul.com/files/products/vanilla.jpg",
    category: "frozen",
    inStock: true
  },
  {
    id: "frozen-p5",
    name: "Chocolate Ice Cream 5L",
    subtitle: "Chocolate Ice 5L 1pc",
    price: 600,
    mrp: 620,
    image: "https://amul.com/files/products/chocolate.jpg",
    category: "frozen",
    inStock: true
  },
  {
    id: "frozen-p6",
    name: "Butterscotch Ice Cream 5L",
    subtitle: "Butterscotch Ice 5L 1pc",
    price: 600,
    mrp: 620,
    image: "https://amul.com/files/products/chocolate.jpg",
    category: "frozen",
    inStock: true
  },
  {
    id: "frozen-p7",
    name: "French Fries 2.5kg",
    subtitle: "French Fries 2.5kg 1pc",
    price: 140,
    mrp: 180,
    image: "https://amul.com/files/products/chocolate.jpg",
    category: "frozen",
    inStock: true
  }

];

export const CATEGORY_CONFIG = {
  loose: {
    label: "Loose Paawan Products",
    emoji: "🥛",
    description: "Fresh Paneer, Dahi, Khoya & more",
    gradient: "from-purple-50 to-purple-100",
    iconBg: "bg-primary/10",
  },
  dairy: {
    label: "Dairy Products",
    emoji: "🥛",
    description: "Fresh milk, paneer, dahi & more",
    gradient: "from-purple-50 to-purple-100",
    iconBg: "bg-primary/10",
  },
  butterNcream: {
    label: "Butter & Cream",
    emoji: "🥛",
    description: "Fresh butter and cream products",
    gradient: "from-purple-50 to-purple-100",
    iconBg: "bg-primary/10",
  },
  beverages: {
    label: "Beverages",
    emoji: "🥤",
    description: "Lassi, sharbat, chaach & more",
    gradient: "from-green-50 to-accent/10",
    iconBg: "bg-accent/10",
  },
  frozen: {
    label: "Frozen Items",
    emoji: "🧊",
    description: "Ice cream, kulfi, frozen veggies",
    gradient: "from-blue-50 to-blue-100",
    iconBg: "bg-blue-100",
  },
};

export function generateWhatsAppMessage(
  customerName: string,
  mobile: string,
  items: { name: string; quantity: number; price: number }[],
  total: number
): string {
  const orderLines = items
    .map((item) => `• ${item.name} - Qty ${item.quantity} × ₹${item.price} = ₹${item.quantity * item.price}`)
    .join("\n");

  const message = `🛒 *New Order - Paawan Dairy*

👤 *Customer Name:* ${customerName}
📱 *Mobile Number:* ${mobile}

📦 *Order Details:*
${orderLines}

💰 *Total Amount: ₹${total}*

_Order placed via Paawan Dairy App_`;

  return encodeURIComponent(message);
}

export const WHATSAPP_NUMBER = "916377874808";

export function getWhatsAppLink(message: string): string {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${message}`;
}

export function calculateDiscount(mrp: number, price: number): number {
  return Math.round(((mrp - price) / mrp) * 100);
}

export function saveLastOrder(items: { productId: string; quantity: number }[]): void {
  if (typeof window !== "undefined") {
    localStorage.setItem("lastOrder", JSON.stringify(items));
  }
}

export function getLastOrder(): { productId: string; quantity: number }[] | null {
  if (typeof window !== "undefined") {
    const data = localStorage.getItem("lastOrder");
    return data ? JSON.parse(data) : null;
  }
  return null;
}
