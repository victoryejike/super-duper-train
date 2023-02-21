import { Inter } from "@next/font/google";
import { Product, Footer, HeroBanner } from "@/components";
import { client } from "@/lib/client";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <HeroBanner />
      <div className="products-heading">
        <h2>Best selling products</h2>
        <p>Speaker of many variation</p>
      </div>
      <div className="products-container">
        <Product />
      </div>
      <Footer />
    </>
  );
}
