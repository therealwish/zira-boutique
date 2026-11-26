import type { Metadata } from "next";
import { Playfair_Display, Montserrat } from "next/font/google";
import { CartProvider } from "@/context/CartContext";
import "./globals.css";

const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair", display: "swap" });
const montserrat = Montserrat({ subsets: ["latin"], variable: "--font-montserrat", display: "swap" });

export const metadata: Metadata = {
  title: "ZIRA Boutique | Dress • Style • Elegance",
  description: "High-end luxury curated Skincare, Clothing, Watches, and Phones.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${playfair.variable} ${montserrat.variable}`}>
        <CartProvider>
          {children}
        </CartProvider>
      </body>
    </html>
  );
}