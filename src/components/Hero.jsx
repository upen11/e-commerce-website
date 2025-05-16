import React from "react";

const Hero = () => {
  return (
    <section className="bg-blue-600 text-white py-20 px-6 text-center">
      <h1 className="text-4xl md:text-6xl font-bold mb-4">
        Discover Our Amazing Products
      </h1>
      <p className="text-lg md:text-2xl mb-8 max-w-xl mx-auto">
        Quality you can trust, delivered right to your door.
      </p>
      <button className="bg-white text-blue-600 font-semibold px-8 py-3 rounded-md hover:bg-gray-200 transition">
        Shop Now
      </button>
    </section>
  );
};

export default Hero;
