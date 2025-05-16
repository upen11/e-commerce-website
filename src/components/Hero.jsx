import React from "react";

const Hero = () => {
  return (
    <section className="bg-gray-50 py-10">
      <div className="container mx-auto flex flex-col-reverse md:flex-row items-center px-6 md:px-0">
        {/* Text Content */}
        <div className="md:w-1/2 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Discover Elegant Jewellery
          </h1>
          <p className="text-gray-600 mb-6">
            Uniquely handcrafted designs for your every moment. Shop the latest
            collection now.
          </p>
          <button className="bg-pink-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-pink-700 transition">
            Shop Now
          </button>
        </div>

        {/* Image */}
        <div className="md:w-1/2 mb-6 md:mb-0">
          <img
            src="https://images.unsplash.com/photo-1618354691415-bde8f8655c9d"
            alt="Jewellery"
            className="w-full rounded-lg shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
