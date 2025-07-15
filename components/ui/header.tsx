"use client";

import Link from "next/link";
import Logo from "./logo";
import { useState } from "react";


const HeaderView = () => (
  <header className="w-full h-24 md:h-28 bg-udgaar-gradient relative z-50">
    <div className="max-w-screen-xl mx-auto px-4 md:px-8 lg:px-16 h-full">
      <div className="flex items-center justify-between h-full">
        {/* Logo */}
        <div className="flex-shrink-0">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/355658e7c167d2aa87b5266f95113d41c95cee3a?width=400"
            alt="UDGAAR Logo"
            className="h-12 md:h-16 w-auto"
          />
        </div>

        {/* Navigation and Register Button */}
        <div className="hidden md:flex items-center gap-8 lg:gap-16">
          {/* Navigation Links */}
          <nav className="flex items-center gap-6 lg:gap-8">
            <div className="flex flex-col items-center">
              <span className="text-white font-inter font-semibold text-sm lg:text-base">
                Home
              </span>
              <div className="w-12 h-0.5 bg-white mt-1"></div>
            </div>
            <span className="text-white font-inter text-sm lg:text-base hover:text-gray-200 cursor-pointer">
              About
            </span>
            <span className="text-white font-inter text-sm lg:text-base hover:text-gray-200 cursor-pointer">
              Event
            </span>
            <span className="text-white font-inter text-sm lg:text-base hover:text-gray-200 cursor-pointer">
              Contact Us
            </span>
          </nav>

          {/* Register Button */}
          <button className="bg-[#ECD387] text-black px-6 py-2 rounded-full font-inter text-sm lg:text-base font-medium hover:bg-yellow-300 transition-colors">
            Register
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-white">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
            <path d="M3 12h18m-9-9v18" />
          </svg>
        </button>
      </div>
    </div>
  </header>
);

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
   <HeaderView/>
  );
}
