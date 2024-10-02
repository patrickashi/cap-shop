"use client";

import { useState } from 'react';
import Link from 'next/link';
import { FaShoppingCart } from 'react-icons/fa';

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white shadow-lg fixed w-full z-10 top-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <Link href="/" className="text-2xl font-bold text-gray-900">MyShop</Link> 
          </div>

          {/* Toggle button for mobile */}
          <div className="block lg:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-500 hover:text-gray-700 focus:outline-none focus:text-gray-700"
            >
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
              </svg>
            </button>
          </div>

          {/* Links */}
          <div className={`lg:flex lg:items-center ${isOpen ? "block" : "hidden"} w-full lg:w-auto`}>
            <ul className="lg:flex lg:mt-0 text-center">
              <li>
                <Link href="/" className="block py-2 px-4 text-gray-700 hover:text-gray-900">Home</Link> {/* Removed the <a> tag */}
              </li>
              <li>
                <Link href="/products" className="block py-2 px-4 text-gray-700 hover:text-gray-900">Products</Link> {/* Removed the <a> tag */}
              </li>
              <li>
                <Link href="/about" className="block py-2 px-4 text-gray-700 hover:text-gray-900">About Us</Link> {/* Removed the <a> tag */}
              </li>
              <li>
                <Link href="/contact" className="block py-2 px-4 text-gray-700 hover:text-gray-900">Contact</Link> {/* Removed the <a> tag */}
              </li>
            </ul>
          </div>

          {/* Cart Icon */}
          <div className="flex items-center lg:ml-6">
            <Link href="/cart" className="relative">
              <FaShoppingCart className="text-gray-700 h-6 w-6" />
              {/* If there are items in the cart, show the count */}
              <span className="absolute top-0 right-0 inline-block w-4 h-4 text-xs text-white bg-red-500 rounded-full text-center">3</span>
            </Link> {/* Removed the <a> tag */}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
