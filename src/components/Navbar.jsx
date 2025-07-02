import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import logo from "../assets/logo1.jpg";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = ["Home", "Skills", "Projects", "Contact"];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-black/40 backdrop-blur-md shadow-md" : "bg-gray-900"
      }`}
    >
      <nav className="max-w-screen-xl mx-auto px-6 md:px-16 lg:px-24 py-3 flex items-center justify-between text-white">
        <div className="flex items-center gap-4">
          <img
            src={logo}
            alt="Logo"
            className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl object-cover shadow-lg hover:scale-105 transition duration-300"
          />
          <h1 className="text-lg font-semibold hidden sm:block">
            Shree Ganesh
          </h1>
        </div>

        <div className="hidden md:flex gap-8">
          {navLinks.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="hover:text-green-500 transition"
            >
              {item}
            </a>
          ))}
        </div>

        <button
          className="md:hidden"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {isOpen && (
        <div className="md:hidden bg-black/95 backdrop-blur-lg border-t border-gray-700 animate-fade-down">
          <div className="px-6 py-4 space-y-2">
            {navLinks.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="block text-white hover:text-gray-400 transition py-1"
                onClick={() => setIsOpen(false)}
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
