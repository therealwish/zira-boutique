import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { ProductCard } from "@/components/ProductCard";
import { products, categories } from "@/lib/products";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      
      {/* Hero */}
      <section className="bg-olive text-cream py-32 px-6 text-center">
        <h1 className="font-serif text-5xl md:text-7xl mb-4">Dress. Style. Elegance.</h1>
        <p className="text-cream/80 tracking-widest uppercase text-sm">Discover the exclusive ZIRA Collection</p>
      </section>

      {/* Shop by Category */}
      <section className="max-w-7xl mx-auto px-6 pt-24">
        <h2 className="font-serif text-3xl text-olive text-center mb-12">Shop by Category</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {categories.map((cat) => (
            <Link 
              key={cat} 
              href={`/shop/${cat.toLowerCase()}`}
              className="border border-olive/20 p-8 text-center hover:bg-olive hover:text-cream transition-colors group"
            >
              <h3 className="font-serif text-xl group-hover:text-cream">{cat}</h3>
            </Link>
          ))}
        </div>
      </section>

      {/* Featured Products */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <h2 className="font-serif text-3xl text-olive text-center mb-12">Featured Collection</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-10">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>
    </main>
  );
}