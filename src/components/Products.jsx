import React from "react";
import ProductCard from "./ProductCard";

const productsData = [
  {
    id: 1,
    name: "Product 1",
    price: "$29.99",
    image: "https://via.placeholder.com/200",
  },
  {
    id: 2,
    name: "Product 2",
    price: "$49.99",
    image: "https://via.placeholder.com/200",
  },
  // add more products
];

const Products = () => {
  return (
    <section className="py-12 px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {productsData.map((product) => (
        <ProductCard
          key={product.id}
          name={product.name}
          price={product.price}
          image={product.image}
        />
      ))}
    </section>
  );
};

export default Products;
