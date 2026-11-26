"use client";
import { useCart } from "@/context/CartContext";
import { Product } from "@/lib/types";

export function ProductCard({ product }: { product: Product }) {
  const { addToCart } = useCart();

  return (
    <div className="group flex flex-col">
      <div className="relative aspect-[3/4] overflow-hidden bg-olive/5 mb-4">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img 
          src={product.image} 
          alt={product.name} 
          className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-700"
        />
      </div>
      <h3 className="font-serif text-xl text-olive">{product.name}</h3>
      <p className="text-sm text-olive/60 mb-2">{product.category}</p>
      <p className="font-sans font-medium text-ink mb-4">${product.price.toLocaleString()}</p>
      <button 
        onClick={() => addToCart(product)}
        className="mt-auto border border-olive text-olive py-3 uppercase tracking-widest text-xs hover:bg-olive hover:text-cream transition-colors"
      >
        Add to Cart
      </button>
    </div>
  );
}