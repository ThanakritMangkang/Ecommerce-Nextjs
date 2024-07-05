"use client";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Products from "./components/Products";

export default function Home() {
  return (
    <div className="px-5 max-w-[1280px] mx-auto">
      <Navbar />
      <Products />
      <Footer />
    </div>
  );
}
