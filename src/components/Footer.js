import React from "react";
import { FaDumbbell } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-8 border-y-2 border-red-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Left Section: Logo and Branding */}
          <div className="flex items-center space-x-2">
            <FaDumbbell className="text-red-500 text-3xl animate-spin-slow" title="Gymfluencer Logo" />
            <h1 className="text-2xl font-bold text-white">
              <span className="text-red-500">GYM</span>FLUENCER
            </h1>
            <FaDumbbell className="text-red-500 text-3xl animate-spin-slow" title="Gymfluencer Logo" />
          </div>

          {/* Center Section: Footer Links */}
          <div className="hidden md:flex space-x-8">
            <a href="#features" className="hover:text-red-500 transition duration-300 font-medium">
            Instagram
            </a>
            <a href="#diet-plans" className="hover:text-red-500 transition duration-300 font-medium">
            Gmail
            </a>
            <a href="#workout-plans" className="hover:text-red-500 transition duration-300 font-medium">
            Facebook
            </a>
            <a href="#faqs" className="hover:text-red-500 transition duration-300 font-medium">
            Discord
            </a>
            <a href="#contact" className="hover:text-red-500 transition duration-300 font-medium">
              Contact Us
            </a>
          </div>
        </div>

        {/* Mobile Footer Links */}
        <div className="md:hidden mt-6 space-y-4">
          <a href="#features" className="block text-center hover:text-red-500 transition duration-300">
            Instagram
          </a>
          <a href="#diet-plans" className="block text-center hover:text-red-500 transition duration-300">
            Gmail
          </a>
          <a href="#workout-plans" className="block text-center hover:text-red-500 transition duration-300">
            Facebook
          </a>
          <a href="#faqs" className="block text-center hover:text-red-500 transition duration-300">
            Discord
          </a>
          <a href="#contact" className="block text-center hover:text-red-500 transition duration-300">
          Contact Us
          </a>
        </div>

        {/* Footer Bottom Section */}
        <div className="mt-8 text-center text-sm text-gray-400">
          <p>&copy; {new Date().getFullYear()} Gymfluencer. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
