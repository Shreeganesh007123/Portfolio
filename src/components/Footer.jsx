import React from "react";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#0e0e0e] text-white py-10 border-t border-white/10">
      <div className="max-w-6xl mx-auto px-6  text-sm text-center md:text-center">
        © {new Date().getFullYear()} <span className="text-green-500">Shree Ganesh</span>. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
