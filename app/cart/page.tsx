"use client";
import { Navbar } from "@/components/Navbar";
import { useCart } from "@/context/CartContext";
import Link from "next/link";

export default function CartPage() {
  const { cart, cartTotal, removeFromCart } = useCart();

  const handleWhatsAppCheckout = () => {
    // REPLACE THIS WITH THE CLIENT'S ACTUAL WHATSAPP NUMBER
    const phoneNumber = "263771234567"; 
    
    let message = "Hi ZIRA Boutique! I would like to order:\n\n";
    cart.forEach((item) => {
      message += `- ${item.quantity}x ${item.name} ($${item.price})\n`;
    });
    message += `\n*Total: $${cartTotal.toLocaleString()}*`;
    
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <main className="min-h-screen">
      <Navbar />
      <div className="max-w-3xl mx-auto px-6 py-24">
        <h1 className="font-serif text-4xl text-olive mb-12 text-center">Your Shopping Bag</h1>
        
        {cart.length === 0 ? (
          <div className="text-center">
            <p className="text-olive/70 mb-6">Your bag is currently empty.</p>
            <Link href="/" className="border border-olive text-olive px-8 py-3 uppercase tracking-widest text-sm hover:bg-olive hover:text-cream transition-colors">
              Continue Shopping
            </Link>
          </div>
        ) : (
          <div>
            <div className="space-y-6 border-t border-olive/20 pt-6">
              {cart.map((item) => (
                <div key={item.id} className="flex justify-between items-center border-b border-olive/10 pb-6">
                  <div className="flex items-center gap-4">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={item.image} alt={item.name} className="w-20 h-24 object-cover" />
                    <div>
                      <h3 className="font-serif text-xl text-olive">{item.name}</h3>
                      <p className="text-sm text-olive/60">Qty: {item.quantity}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="font-medium">${(item.price * item.quantity).toLocaleString()}</p>
                    <button onClick={() => removeFromCart(item.id)} className="text-xs text-red-500 underline mt-2">
                      Remove
                    </button>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-8 flex justify-between items-center text-xl font-serif text-olive">
              <span>Total</span>
              <span>${cartTotal.toLocaleString()}</span>
            </div>

            <button 
              onClick={handleWhatsAppCheckout}
              className="w-full mt-8 bg-olive text-cream py-4 uppercase tracking-widest text-sm hover:bg-[#5c724b] transition-colors"
            >
              Checkout via WhatsApp
            </button>
          </div>
        )}
      </div>
    </main>
  );
}