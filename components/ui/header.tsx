"use client";

import Link from "next/link";
import Logo from "./logo";
import { useState, useEffect } from "react";

const ProgressBar = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const updateScrollProgress = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (scrollTop / docHeight) * 100;
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', updateScrollProgress);
    return () => window.removeEventListener('scroll', updateScrollProgress);
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full h-2 z-[9999] bg-gray-800/20">
      <div 
        className="h-full"
        style={{ 
          width: `${scrollProgress}%`,
          transition: 'width 0.1s ease-out',
          background: 'linear-gradient(90deg, #FFD700 0%, #FFA500 50%, #FFD700 100%)',
          boxShadow: '0 0 15px rgba(255, 215, 0, 0.8), 0 0 30px rgba(255, 215, 0, 0.5)',
          filter: 'drop-shadow(0 0 8px rgba(255, 215, 0, 0.9))'
        }}
      />
    </div>
  );
};

const HeaderView = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <ProgressBar />
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
                <span 
                  className="text-white font-inter font-semibold text-sm lg:text-base cursor-pointer hover:text-gray-200"
                  onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                >
                  Home
                </span>
              </div>
              <span 
                className="text-white font-inter text-sm lg:text-base hover:text-gray-200 cursor-pointer"
                onClick={() => scrollToSection('theme2025')}
              >
                About
              </span>
              <span 
                className="text-white font-inter text-sm lg:text-base hover:text-gray-200 cursor-pointer"
                onClick={() => scrollToSection('speakers')}
              >
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
    </>
  );
};

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
   <HeaderView/>
  );
}
