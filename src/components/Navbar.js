import React, { useState } from "react";
import { Menu, Transition } from "@headlessui/react";
import { FaBars, FaChevronDown, FaDumbbell } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-black text-white shadow-lg ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Left Section: Animated Icon and Logo */}
          <div className="flex items-center space-x-2">
            <FaDumbbell
              className="text-white text-3xl animate-spin-slow"
              title="Gymfluencer Logo"
            />
            <h1 className="text-2xl font-bold text-white">
              <span className="text-red-500">GYM</span>FLUENCER
            </h1>
            <FaDumbbell
              className="text-red-500 text-3xl animate-spin-slow"
              title="Gymfluencer Logo"
            />
          </div>

          {/* Center Section: Menu Items */}
          <div className="hidden md:flex space-x-8">
            <a
              href="#features"
              className="hover:text-red-500 transition duration-300 font-medium"
            >
              FEATURES
            </a>
            <Menu as="div" className="relative">
              <Menu.Button className="inline-flex items-center space-x-1 hover:text-red-500 transition duration-300 font-medium">
                <span>DIET PLANS</span>
                <FaChevronDown />
              </Menu.Button>
              <Transition
                enter="transition duration-300 ease-out"
                enterFrom="transform scale-95 opacity-0"
                enterTo="transform scale-100 opacity-100"
                leave="transition duration-200 ease-in"
                leaveFrom="transform scale-100 opacity-100"
                leaveTo="transform scale-95 opacity-0"
              >
                <Menu.Items className="absolute z-50 mt-2 w-56 bg-gray-900 text-white rounded-lg shadow-lg ring-1 ring-gray-700">
                  {["Keto Diet Plan", "Vegan Diet Plan", "Low-Carb Plan"].map(
                    (item, index) => (
                      <Menu.Item key={index}>
                        <a
                          href={`#${item.toLowerCase().replace(" ", "-")}`}
                          className="block px-4 py-2 hover:bg-red-500 transition"
                        >
                          {item}
                        </a>
                      </Menu.Item>
                    )
                  )}
                </Menu.Items>
              </Transition>
            </Menu>
            <Menu as="div" className="relative z-50">
              <Menu.Button className="inline-flex items-center space-x-1 hover:text-red-500 transition duration-300 font-medium">
                <span>WORKOUT PLANS</span>
                <FaChevronDown />
              </Menu.Button>
              <Transition
                enter="transition duration-300 ease-out"
                enterFrom="transform scale-95 opacity-0"
                enterTo="transform scale-100 opacity-100"
                leave="transition duration-200 ease-in"
                leaveFrom="transform scale-100 opacity-100"
                leaveTo="transform scale-95 opacity-0"
              >
                <Menu.Items className="absolute mt-2 w-56 bg-gray-900 text-white rounded-lg shadow-lg ring-1 ring-gray-700">
                  {["Strength Training", "Cardio Plan", "HIIT Plan"].map(
                    (item, index) => (
                      <Menu.Item key={index}>
                        <a
                          href={`#${item.toLowerCase().replace(" ", "-")}`}
                          className="block px-4 py-2 hover:bg-red-500 transition"
                        >
                          {item}
                        </a>
                      </Menu.Item>
                    )
                  )}
                </Menu.Items>
              </Transition>
            </Menu>
            <a
              href="#faqs"
              className="hover:text-red-500 transition duration-300 font-medium"
            >
              FAQ'S
            </a>
            <a
              href="#contact"
              className="hover:text-red-500 transition duration-300 font-medium"
            >
              CONTACT US
            </a>
          </div>

          {/* Right Section: Buttons */}
          <div className="hidden md:flex space-x-4">
            <button className="border-2 border-red-500 text-red-600 px-4 py-2 rounded-md font-medium hover:bg-gradient-to-r from-red-500 to-yellow-500 hover:text-white transition">
              Get Started
            </button>
            <button className="bg-red-500 text-white px-4 py-2 rounded-md font-medium hover:bg-gradient-to-r from-red-500 to-yellow-500 hover:text-white transition">
              Login
            </button>
          </div>

          {/* Hamburger Menu for Mobile */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white focus:outline-none"
            >
              <FaBars size={24} />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-gray-900 text-white shadow-lg">
          {["Features", "Diet Plans", "Workout Plans", "FAQs", "Contact Us"].map(
            (item, index) => (
              <a
                key={index}
                href={`#${item.toLowerCase().replace(" ", "-")}`}
                className="block px-4 py-2 hover:bg-gray-700"
              >
                {item}
              </a>
            )
          )}
          <div className="border-t border-gray-700 mt-2">
            <button className="w-full bg-red-500 text-white px-4 py-2 rounded-md font-medium hover:bg-red-500 transition">
              Get Started
            </button>
            <button className="w-full border-2 border-red-500 text-red-500 px-4 py-2 rounded-md font-medium hover:bg-red-600 hover:text-white transition">
              Login
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
