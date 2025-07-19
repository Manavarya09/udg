"use client";

import Link from "next/link";
import Logo from "./logo";
import { useState } from "react";


const HeaderView = () => (
  <header className="sticky top-0 z-50 w-full h-16 md:h-20 bg-udgaar-gradient relative">
    <div className="relative h-full flex items-center justify-between">
      {/* Logo - absolutely positioned to the far left */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 flex-shrink-0 h-10 md:h-14 flex items-center pl-2" style={{marginLeft: 0}}>
        <Logo />
      </div>
      {/* Main navbar container, centered, with left padding for logo space */}
      <div className="max-w-screen-xl mx-auto w-full h-full flex items-center justify-between pl-40">
        {/* Navigation Links - centered */}
        <nav className="hidden md:flex flex-1 items-center justify-center gap-4 lg:gap-8">
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
        {/* Register Button - right aligned */}
        <div className="hidden md:flex flex-shrink-0">
          <button className="bg-[#ECD387] text-black px-6 py-2 rounded-full font-inter text-sm lg:text-base font-medium hover:bg-yellow-300 transition-colors">
            Register
          </button>
        </div>
        {/* Mobile Menu Button */}
        <button className="md:hidden text-white ml-4">
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
