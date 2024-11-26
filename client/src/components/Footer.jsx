// Footer.jsx
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Left Section */}
          <div className="text-lg font-semibold mb-4 md:mb-0">
            RNSIT Sports Club 
          </div>

          {/* Center Section (Links) */}
          <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-6">
            <a href="#about" className="hover:text-gray-400">
              About
            </a>
            <a href="#services" className="hover:text-gray-400">
              Services
            </a>
            <a href="#contact" className="hover:text-gray-400">
              Contact
            </a>
          </div>

          {/* Right Section (Copyright) */}
          <div className="text-sm mt-4 md:mt-0">
            &copy; {new Date().getFullYear()} RNSIT Sports Club. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
