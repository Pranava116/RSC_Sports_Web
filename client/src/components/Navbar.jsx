import React, { useState } from "react";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-transparent p-7">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="text-white text-xl font-semibold">
            Logo
        </div>
        <div className="hidden md:flex space-x-10">
          <a href="#" className="navLinks">Home</a>
          <a href="#" className="navLinks">Step Up</a>
          <a href="#" className="navLinks">Agones</a>
          <a href="#" className="navLinks">About Us</a>
        </div>
        <div className="md:hidden flex items-center">
          <button
            onClick={toggleMenu}
            className="text-white focus:outline-none"
          >
            <svg class="h-8 w-8 text-white-200"  width="24" height="24" viewBox="0 0 24 24" stroke-width="1" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round" >  
            <path stroke="none" d="M0 0h24v24H0z"/>  <circle cx="12" cy="12" r="9" />   
            <path d="M12 12a8 8 0 0 0 8 4M7.5 13.5a12 12 0 0 0 8.5 6.5" />  
            <path d="M12 12a8 8 0 0 0 8 4M7.5 13.5a12 12 0 0 0 8.5 6.5" transform="rotate(120 12 12)" />    
            <path d="M12 12a8 8 0 0 0 8 4M7.5 13.5a12 12 0 0 0 8.5 6.5" transform="rotate(240 12 12)" />  
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden ${isOpen ? "block" : "hidden"} bg-grey-800 text-white p-7 px-0 space-y-5 `}
      >
        <a href="#" className="block">Home</a>
        <a href="#" className="block">About</a>
        <a href="#" className="block">Services</a>
        <a href="#" className="block">Contact</a>
      </div>
    </nav>
  );
};

export default Navbar;
