"use client";

import Link from "next/link";
import Logo from "./logo";
import { useState, useEffect } from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";

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
  const pathname = usePathname();
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
        <div className="relative h-full flex items-center">
          {/* Logo - absolutely positioned to the far left */}
          <div className="absolute left-0 top-1/2 -translate-y-1/2 flex-shrink-0 h-10 md:h-14 flex items-center pl-2" style={{marginLeft: 0}}>
            <Logo />
          </div>
          {/* Main navbar container: nav centered */}
          <div className="max-w-screen-xl mx-auto w-full h-full flex items-center justify-center pl-40 pr-40">
            {/* Navigation Links - centered */}
            <nav className="hidden md:flex flex-1 items-center justify-center gap-4 lg:gap-8">
              <div className="flex flex-col items-center">
                <Link 
                  href="/"
                  className={`text-white font-inter font-semibold text-sm lg:text-base cursor-pointer hover:text-gray-200 ${pathname === '/' ? 'border-b-2 border-yellow-400' : ''}`}
                >
                  Home
                </Link>
              </div>
              <span 
                className={`text-white font-inter text-sm lg:text-base hover:text-gray-200 cursor-pointer ${pathname === '/#theme2025' ? 'border-b-2 border-yellow-400' : ''}`}
                onClick={() => scrollToSection('theme2025')}
              >
                About
              </span>
              <span 
                className={`text-white font-inter text-sm lg:text-base hover:text-gray-200 cursor-pointer ${pathname === '/#speakers' ? 'border-b-2 border-yellow-400' : ''}`}
                onClick={() => scrollToSection('speakers')}
              >
                Event
              </span>
              <Link href="/contact" className={`text-white font-inter text-sm lg:text-base hover:text-gray-200 cursor-pointer ${pathname === '/contact' ? 'border-b-2 border-yellow-400' : ''}`}>
                Contact Us
              </Link>
            </nav>
            {/* Register Button - absolutely right */}
            <div className="hidden md:flex flex-shrink-0 items-center" style={{position: 'absolute', right: 0, top: '50%', transform: 'translateY(-50%)', minWidth: '140px'}}>
              <button className="px-0 py-0 rounded-full overflow-hidden flex items-center justify-center" style={{background: 'none', border: 'none', boxShadow: 'none'}} aria-label="Register">
                <Image src="/images/Button.png" alt="Register" width={120} height={40} priority />
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
