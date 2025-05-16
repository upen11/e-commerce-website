import React from "react";

const ProductCard = ({ image, name, price }) => {
  return (
    <div className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
      <img src={image} alt={name} className="w-full h-64 object-cover" />
      <div className="p-4">
        <h2 className="text-lg font-semibold">{name}</h2>
        <p className="text-gray-600">₹{price}</p>
        <button className="mt-2 bg-black text-white px-4 py-2 rounded hover:bg-gray-800">
          View Product
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
