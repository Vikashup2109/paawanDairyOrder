import { NextResponse } from "next/server";
import { FALLBACK_PRODUCTS } from "@/lib/products";
import { Product, Category } from "@/types";

async function fetchFromGoogleSheets(): Promise<Product[] | null> {
  const sheetId = process.env.GOOGLE_SHEET_ID;
  const apiKey = process.env.GOOGLE_SHEETS_API_KEY;
  
  if (!sheetId || !apiKey) return null;

  try {
    const range = "Products!A2:I100";
    const url = `https://sheets.googleapis.com/v4/spreadsheets/${sheetId}/values/${range}?key=${apiKey}`;
    const res = await fetch(url, { next: { revalidate: 300 } });
    if (!res.ok) return null;

    const data = await res.json();
    const rows: string[][] = data.values || [];

    return rows
      .filter((row) => row.length >= 7)
      .map((row, idx) => ({
        id: row[0] || `gs-${idx}`,
        name: row[1] || "",
        subtitle: row[2] || "",
        price: parseFloat(row[3]) || 0,
        mrp: parseFloat(row[4]) || 0,
        image: row[5] || "",
        category: (row[6]?.toLowerCase() as Category) || "dairy",
        isPopular: row[7]?.toLowerCase() === "true",
        inStock: row[8]?.toLowerCase() !== "false",
      }));
  } catch {
    return null;
  }
}

async function fetchFromAirtable(): Promise<Product[] | null> {
  const baseId = process.env.AIRTABLE_BASE_ID;
  const apiKey = process.env.AIRTABLE_API_KEY;
  const tableId = process.env.AIRTABLE_TABLE_ID || "Products";

  if (!baseId || !apiKey) return null;

  try {
    const url = `https://api.airtable.com/v0/${baseId}/${tableId}`;
    const res = await fetch(url, {
      headers: { Authorization: `Bearer ${apiKey}` },
      next: { revalidate: 300 },
    });
    if (!res.ok) return null;

    const data = await res.json();
    return data.records.map((record: { id: string; fields: Record<string, unknown> }) => ({
      id: record.id,
      name: (record.fields["Name"] as string) || "",
      subtitle: (record.fields["Subtitle"] as string) || "",
      price: parseFloat(String(record.fields["Price"] || "0")),
      mrp: parseFloat(String(record.fields["MRP"] || "0")),
      image: (record.fields["Image URL"] as string) || "",
      category: ((record.fields["Category"] as string)?.toLowerCase() as Category) || "dairy",
      isPopular: Boolean(record.fields["Popular"]),
      inStock: record.fields["In Stock"] !== false,
    }));
  } catch {
    return null;
  }
}

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const category = searchParams.get("category");
  const search = searchParams.get("search")?.toLowerCase();

  let products: Product[] | null = null;

  // Try Google Sheets first, then Airtable, then fallback
  products = await fetchFromGoogleSheets();
  if (!products) products = await fetchFromAirtable();
  if (!products) products = FALLBACK_PRODUCTS;

  let filtered = products;
  if (category && category !== "all") {
    filtered = filtered.filter((p) => p.category === category);
  }
  if (search) {
    filtered = filtered.filter(
      (p) =>
        p.name.toLowerCase().includes(search) ||
        p.subtitle.toLowerCase().includes(search)
    );
  }

  return NextResponse.json({ products: filtered, source: products === FALLBACK_PRODUCTS ? "static" : "api" });
}
