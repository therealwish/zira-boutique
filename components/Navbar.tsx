"use client";
import Link from "next/link";
import { ShoppingBag } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { categories } from "@/lib/products";

export function Navbar() {
  const { cartCount } = useCart();

  return (
    <header className="sticky top-0 z-50 bg-cream border-b border-olive/20">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <Link href="/" className="font-serif text-xl md:text-2xl tracking-widest text-olive font-bold">
          ZIRA BOUTIQUE
        </Link>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-8 text-sm uppercase tracking-widest text-olive">
          {categories.map((cat) => (
            <Link key={cat} href={`/shop/${cat.toLowerCase()}`} className="hover:text-gold transition-colors">
              {cat}
            </Link>
          ))}
        </nav>

        <Link href="/cart" className="relative text-olive hover:text-gold transition-colors">
          <ShoppingBag size={24} strokeWidth={1.5} />
          {cartCount > 0 && (
            <span className="absolute -top-2 -right-2 bg-gold text-olive text-xs font-bold w-5 h-5 flex items-center justify-center rounded-full">
              {cartCount}
            </span>
          )}
        </Link>
      </div>

      {/* Mobile Scrollable Navigation */}
      <div className="md:hidden flex overflow-x-auto whitespace-nowrap border-t border-olive/10 px-6 py-3 gap-6 text-xs uppercase tracking-widest text-olive">
        {categories.map((cat) => (
          <Link key={cat} href={`/shop/${cat.toLowerCase()}`} className="hover:text-gold transition-colors">
            {cat}
          </Link>
        ))}
      </div>
    </header>
  );
}