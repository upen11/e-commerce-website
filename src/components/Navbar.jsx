import React, { useState } from "react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <nav className="bg-white shadow-md p-4 sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="text-2xl font-bold text-gray-800">PALMONAS</div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-6 text-gray-700 font-medium">
          <li className="cursor-pointer hover:text-pink-500">Shop</li>
          <li className="cursor-pointer hover:text-pink-500">New Arrivals</li>
          <li className="cursor-pointer hover:text-pink-500">Best Sellers</li>
          <li className="cursor-pointer hover:text-pink-500">Collections</li>
        </ul>

        {/* Icons */}
        <div className="flex items-center gap-4">
          <span className="cursor-pointer">🔍</span>
          <span className="cursor-pointer">🛒</span>
          {/* Hamburger menu */}
          <span
            className="md:hidden cursor-pointer text-xl"
            onClick={toggleMenu}
          >
            ☰
          </span>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <ul className="md:hidden bg-white shadow-md p-4 space-y-4 text-gray-700 font-medium">
          <li className="cursor-pointer hover:text-pink-500">Shop</li>
          <li className="cursor-pointer hover:text-pink-500">New Arrivals</li>
          <li className="cursor-pointer hover:text-pink-500">Best Sellers</li>
          <li className="cursor-pointer hover:text-pink-500">Collections</li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
