import { Product } from "./types";

export const products: Product[] = [
  { id: "s1", name: "24k Gold Elixir", category: "Skincare", price: 245, image: "https://placehold.co/600x800/3b4d2e/d4af37?text=Gold+Elixir", description: "Luxurious overnight serum." },
  { id: "s2", name: "Botanical Cream", category: "Skincare", price: 190, image: "https://placehold.co/600x800/3b4d2e/d4af37?text=Botanical+Cream", description: "Barrier restoring moisturizer." },
  { id: "c1", name: "Silk Evening Gown", category: "Clothing", price: 1480, image: "https://placehold.co/600x800/3b4d2e/d4af37?text=Silk+Gown", description: "Deep olive mulberry silk." },
  { id: "c2", name: "Cashmere Trench", category: "Clothing", price: 1850, image: "https://placehold.co/600x800/3b4d2e/d4af37?text=Cashmere+Trench", description: "Italian virgin wool." },
  { id: "w1", name: "Souverain 38mm", category: "Watches", price: 4600, image: "https://placehold.co/600x800/3b4d2e/d4af37?text=Souverain+Watch", description: "18k gold, olive dial." },
  { id: "w2", name: "Minimaliste Watch", category: "Watches", price: 3250, image: "https://placehold.co/600x800/3b4d2e/d4af37?text=Minimaliste+Watch", description: "Cream enamel dial." },
  { id: "p1", name: "Titanium Edition", category: "Phones", price: 2490, image: "https://placehold.co/600x800/3b4d2e/d4af37?text=Titanium+Phone", description: "Olive-anodized titanium." },
  { id: "p2", name: "Monolith Fold", category: "Phones", price: 2950, image: "https://placehold.co/600x800/3b4d2e/d4af37?text=Fold+Phone", description: "Olive calfskin wrap." },
];

export const categories = ["Skincare", "Clothing", "Watches", "Phones"];