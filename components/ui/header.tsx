"use client";

import Link from "next/link";
import Logo from "./logo";
import { useState } from "react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <header className="z-30 w-full fixed top-0 left-0">
      <div className="w-full px-0">
        <div className="relative flex h-24 items-center justify-between gap-3 bg-gradient-to-b from-pink-800 to-pink-400 px-3">
          {/* Site branding */}
          <div className="flex flex-1 items-center">
            <Logo />
          </div>

          {/* Desktop nav */}
          <nav className="hidden md:flex flex-1 items-center justify-center">
            <ul className="flex gap-8">
              <li>
                <Link href="/" className="text-white font-medium hover:underline">Home</Link>
              </li>
              <li>
                <Link href="/about" className="text-white font-medium hover:underline">About</Link>
              </li>
              <li>
                <Link href="/events" className="text-white font-medium hover:underline">Events</Link>
              </li>
              <li>
                <Link href="/contact" className="text-white font-medium hover:underline">Contact Us</Link>
              </li>
            </ul>
          </nav>

          {/* Mobile hamburger */}
          <button
            className="md:hidden flex items-center justify-center p-2 text-white focus:outline-none"
            onClick={() => setMenuOpen((v) => !v)}
            aria-label="Open menu"
          >
            <svg width="32" height="32" fill="none" viewBox="0 0 24 24">
              <path stroke="currentColor" strokeWidth="2" strokeLinecap="round" d="M4 7h16M4 12h16M4 17h16" />
            </svg>
          </button>

          {/* Register button always visible */}
          <div className="flex flex-1 items-center justify-end">
            <Link
              href="/signup"
              className="btn-sm bg-pink-600 bg-[length:100%_100%] bg-[bottom] py-[8px] px-8 text-white text-lg font-semibold shadow-[inset_0px_1px_0px_0px_--theme(--color-white/.16)] hover:bg-pink-700 hover:bg-[length:100%_150%] rounded"
            >
              Register
            </Link>
          </div>

          {/* Mobile menu overlay */}
          {menuOpen && (
            <div className="fixed inset-0 z-50 bg-black/40" onClick={() => setMenuOpen(false)} />
          )}
          {/* Mobile menu */}
          <nav
            className={`fixed top-0 right-0 z-50 w-64 h-full bg-pink-600 text-white transform transition-transform duration-300 md:hidden ${menuOpen ? 'translate-x-0' : 'translate-x-full'}`}
            style={{ boxShadow: menuOpen ? '0 0 0 9999px rgba(0,0,0,0.3)' : undefined }}
          >
            <button
              className="absolute top-4 right-4 p-2 text-white"
              onClick={() => setMenuOpen(false)}
              aria-label="Close menu"
            >
              <svg width="28" height="28" fill="none" viewBox="0 0 24 24">
                <path stroke="currentColor" strokeWidth="2" strokeLinecap="round" d="M6 6l12 12M6 18L18 6" />
              </svg>
            </button>
            <ul className="flex flex-col gap-8 mt-24 px-8">
              <li>
                <Link href="/" className="text-white text-lg font-medium" onClick={() => setMenuOpen(false)}>Home</Link>
              </li>
              <li>
                <Link href="/about" className="text-white text-lg font-medium" onClick={() => setMenuOpen(false)}>About</Link>
              </li>
              <li>
                <Link href="/events" className="text-white text-lg font-medium" onClick={() => setMenuOpen(false)}>Events</Link>
              </li>
              <li>
                <Link href="/contact" className="text-white text-lg font-medium" onClick={() => setMenuOpen(false)}>Contact Us</Link>
              </li>
              <li>
                <Link
                  href="/signup"
                  className="btn-sm bg-white text-pink-700 font-semibold py-3 px-8 rounded shadow hover:bg-pink-50"
                  onClick={() => setMenuOpen(false)}
                >
                  Register
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}
