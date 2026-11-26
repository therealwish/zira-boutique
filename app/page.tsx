import { Navbar } from "@/components/Navbar";
import { ProductCard } from "@/components/ProductCard";
import { products } from "@/lib/products";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      
      <section className="bg-olive text-cream py-32 px-6 text-center">
        <h1 className="font-serif text-5xl md:text-7xl mb-4">Dress. Style. Elegance.</h1>
        <p className="text-cream/80 tracking-widest uppercase text-sm">Discover the exclusive ZIRA Collection</p>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-24">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-10">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>
    </main>
  );
}