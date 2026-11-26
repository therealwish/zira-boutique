import { Navbar } from "@/components/Navbar";
import { ProductCard } from "@/components/ProductCard";
import { products, categories } from "@/lib/products";
import { notFound } from "next/navigation";

// THIS IS THE FIX: Tell Next.js which pages to build at compile time
export function generateStaticParams() {
  return categories.map((cat) => ({
    category: cat.toLowerCase(),
  }));
}

export default async function CategoryPage({ params }: { params: Promise<{ category: string }> }) {
  const { category } = await params;
  const formattedCategory = category.charAt(0).toUpperCase() + category.slice(1);
  
  const filteredProducts = products.filter((p) => p.category.toLowerCase() === category.toLowerCase());

  if (filteredProducts.length === 0) {
    notFound();
  }

  return (
    <main className="min-h-screen">
      <Navbar />
      <section className="bg-olive text-cream py-20 px-6 text-center">
        <h1 className="font-serif text-4xl md:text-6xl">{formattedCategory}</h1>
      </section>
      <section className="max-w-7xl mx-auto px-6 py-24">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-10">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>
    </main>
  );
}