import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ProductCard from "./components/ProductCard";

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />

      <div className="product-grid">
        {/* Just render one ProductCard for now as a test */}
        <ProductCard
          title="Sample Product"
          price="99"
          imageUrl="https://via.placeholder.com/150"
        />
      </div>
    </div>
  );
};

export default App;
