import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

export default function About() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-contact relative overflow-hidden">
      {/* Navigation Header */}
      <nav className="relative z-10 flex items-center justify-between px-6 lg:px-12 py-4 bg-purple-900/80 backdrop-blur-sm">
        <div className="flex items-center">
          <div className="bg-white rounded-lg p-2">
            <span className="text-purple-800 font-bold text-xl">UDGAAR</span>
          </div>
        </div>

        <div className="hidden md:flex items-center space-x-8">
          <Link
            to="/"
            className="text-white hover:text-yellow-400 transition-colors"
          >
            Home
          </Link>
          <Link
            to="/about"
            className="text-white/80 hover:text-yellow-400 transition-colors"
          >
            About
          </Link>
          <Link
            to="/event"
            className="text-white hover:text-yellow-400 transition-colors"
          >
            Event
          </Link>
          <Link
            to="/contact"
            className="text-white hover:text-yellow-400 transition-colors"
          >
            Contact
          </Link>
          <Button className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold px-6 py-2 rounded-full">
            REGISTER →
          </Button>
        </div>

        {/* Mobile menu button */}
        <button
          className="md:hidden text-white"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d={
                mobileMenuOpen
                  ? "M6 18L18 6M6 6l12 12"
                  : "M4 6h16M4 12h16M4 18h16"
              }
            />
          </svg>
        </button>
      </nav>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-purple-900/95 backdrop-blur-sm relative z-20 px-6 py-4">
          <div className="flex flex-col space-y-4">
            <Link
              to="/"
              className="text-white hover:text-yellow-400 transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/about"
              className="text-white/80 hover:text-yellow-400 transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              About
            </Link>
            <Link
              to="/event"
              className="text-white hover:text-yellow-400 transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Event
            </Link>
            <Link
              to="/contact"
              className="text-white hover:text-yellow-400 transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Contact
            </Link>
            <Button className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold px-6 py-2 rounded-full w-fit">
              REGISTER →
            </Button>
          </div>
        </div>
      )}

      <div className="relative z-10 flex items-center justify-center min-h-[80vh] px-6">
        <div className="text-center">
          <h1 className="text-4xl lg:text-6xl font-bold text-white mb-8">
            About Page
          </h1>
          <p className="text-white/80 text-xl mb-8 max-w-2xl">
            This page is coming soon. Continue prompting to add content to this
            page.
          </p>
          <Link to="/">
            <Button className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold px-8 py-3 rounded-full">
              Back to Contact
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
