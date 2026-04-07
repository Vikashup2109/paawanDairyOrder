import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CATEGORY_CONFIG } from "@/lib/products";
import CategoryProducts from "./CategoryProducts";

interface Props {
  params: { slug: string };
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const config = CATEGORY_CONFIG[params.slug as keyof typeof CATEGORY_CONFIG];
  if (!config) return {};
  return {
    title: `${config.label} — Paawan Dairy`,
    description: config.description,
  };
}

export function generateStaticParams() {
  return Object.keys(CATEGORY_CONFIG).map((slug) => ({ slug }));
}

export default function CategoryPage({ params }: Props) {
  const config = CATEGORY_CONFIG[params.slug as keyof typeof CATEGORY_CONFIG];
  if (!config) notFound();

  return <CategoryProducts slug={params.slug} config={config} />;
}
