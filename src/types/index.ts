export type Category = "loose" | "dairy" | "beverages" | "frozen" | "butterNcream";

export interface Product {
  id: string;
  name: string;
  subtitle: string;
  price: number;
  mrp: number;
  image: string;
  category: Category;
  isPopular?: boolean;
  inStock?: boolean;
}

export interface CartItem {
  product: Product;
  quantity: number;
}

export interface CustomerDetails {
  name: string;
  mobile: string;
}

export interface Order {
  customer: CustomerDetails;
  items: CartItem[];
  total: number;
  timestamp: Date;
}
