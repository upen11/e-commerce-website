import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ProductCard from "./components/ProductCard";
import Products from "./components/Products";

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Products />

      {/* Test ProductCard directly */}
    </div>
  );
};

export default App;
