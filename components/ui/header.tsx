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

const HeaderView = ({ menuOpen, setMenuOpen }: { menuOpen: boolean, setMenuOpen: (open: boolean) => void }) => {
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
        {/* Mobile: 3-column flex row */}
        <div className="flex md:hidden items-center h-full w-full px-4">
          {/* Logo left */}
          <div className="flex-shrink-0 h-10 flex items-center">
            <Logo />
          </div>
          {/* Register Button center, flex-1 and centered */}
          <div className="flex-1 flex justify-center">
            <button className="px-0 py-0 rounded-full overflow-hidden flex items-center justify-center" style={{background: 'none', border: 'none', boxShadow: 'none'}} aria-label="Register">
              <Image src="/images/Button.png" alt="Register" width={120} height={40} priority />
            </button>
          </div>
          {/* Hamburger right */}
          <button
            className="text-white z-30 ml-2 flex-shrink-0"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Open menu"
            aria-expanded={menuOpen}
          >
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="3" y1="12" x2="21" y2="12" />
              <line x1="3" y1="6" x2="21" y2="6" />
              <line x1="3" y1="18" x2="21" y2="18" />
            </svg>
          </button>
          {/* Mobile Dropdown Menu */}
          {menuOpen && (
            <div className="absolute right-2 top-14 w-48 bg-white rounded-lg shadow-lg py-4 flex flex-col gap-2 z-40 animate-fade-in">
              <Link
                href="/"
                className="px-6 py-2 text-gray-900 font-semibold hover:bg-gray-100 rounded"
                onClick={() => setMenuOpen(false)}
              >
                Home
              </Link>
              <button
                className="px-6 py-2 text-gray-900 font-semibold text-left hover:bg-gray-100 rounded"
                onClick={() => { scrollToSection('theme2025'); setMenuOpen(false); }}
              >
                About
              </button>
              <button
                className="px-6 py-2 text-gray-900 font-semibold text-left hover:bg-gray-100 rounded"
                onClick={() => { scrollToSection('speakers'); setMenuOpen(false); }}
              >
                Event
              </button>
              <Link
                href="/contact"
                className="px-6 py-2 text-gray-900 font-semibold hover:bg-gray-100 rounded"
                onClick={() => setMenuOpen(false)}
              >
                Contact Us
              </Link>
            </div>
          )}
        </div>
        {/* Desktop layout */}
        <div className="hidden md:relative md:h-full md:flex md:items-center">
          <div className="absolute left-0 top-1/2 -translate-y-1/2 flex-shrink-0 h-14 flex items-center pl-2" style={{marginLeft: 0}}>
            <Logo />
          </div>
          <div className="max-w-screen-xl mx-auto w-full h-full flex items-center justify-center pl-40 pr-40 relative">
            <nav className="flex flex-1 items-center justify-center gap-4 lg:gap-8">
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
            <div className="flex-shrink-0 items-center" style={{position: 'absolute', right: 0, top: '50%', transform: 'translateY(-50%)', minWidth: '140px'}}>
              <button className="px-0 py-0 rounded-full overflow-hidden flex items-center justify-center" style={{background: 'none', border: 'none', boxShadow: 'none'}} aria-label="Register">
                <Image src="/images/Button.png" alt="Register" width={120} height={40} priority />
              </button>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <HeaderView menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
  );
}
