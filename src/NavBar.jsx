import React, { useState } from "react";
import { FaBars } from "react-icons/fa";

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="sticky top-0 z-50">
      {/* Navigation */}
      <nav className="bg-white/60 backdrop-blur-sm py-4 px-4 md:px-8 shadow-md">
        <div className="max-w-6xl mx-auto">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <div className="flex items-center">
              <span className="text-red-500 text-3xl font-bold">▲</span>
              <span className="text-2xl font-bold ml-1">amiso</span>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-expanded={isMenuOpen}
              aria-label="Toggle Menu"
            >
              <FaBars className="w-6 h-6 text-gray-600" />
            </button>

            {/* Desktop Menu */}
            <div className="hidden md:flex gap-8 text-sm">
              <a href="#" className="hover:text-cyan-400 transition">
                HOME
              </a>
              <a href="#" className="hover:text-cyan-400 transition">
                ABOUT
              </a>
              <a href="#" className="hover:text-cyan-400 transition">
                PAGES
              </a>
              <a href="#" className="hover:text-cyan-400 transition">
                GALLERY
              </a>
              <a href="#" className="hover:text-cyan-400 transition">
                BLOG
              </a>
              <a href="#" className="hover:text-cyan-400 transition">
                CONTACT
              </a>
            </div>
          </div>

          {/* Mobile Menu */}
          <div
            className={`md:hidden transition-all duration-300 ${
              isMenuOpen ? "block" : "hidden"
            } mt-4`}
          >
            <div className="flex flex-col gap-4 text-sm">
              <a href="#" className="hover:text-cyan-400 transition">
                HOME
              </a>
              <a href="#" className="hover:text-cyan-400 transition">
                ABOUT
              </a>
              <a href="#" className="hover:text-cyan-400 transition">
                PAGES
              </a>
              <a href="#" className="hover:text-cyan-400 transition">
                GALLERY
              </a>
              <a href="#" className="hover:text-cyan-400 transition">
                BLOG
              </a>
              <a href="#" className="hover:text-cyan-400 transition">
                CONTACT
              </a>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
