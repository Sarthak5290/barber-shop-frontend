"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "../assets/logo-light.svg";
import SearchOverlay from "./SearchOverlay";
import MenuOverlay from "./MenuOverlay.js";
import { Menu, X, Home, Search, List, Calendar } from "lucide-react";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [animateLogo, setAnimateLogo] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Set initial animation
    setTimeout(() => {
      setAnimateLogo(true);
    }, 500);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [scrolled]);

  // Function to handle search click
  const handleSearchClick = (e) => {
    e.preventDefault();
    setSearchOpen(true);
  };

  // Function to handle menu click
  const handleMenuClick = (e) => {
    e.preventDefault();
    setMenuOpen(true);
  };

  return (
    <>
      <header
        className={`relative w-full bg-transparent transition-all duration-500 z-40 py-4`}
        style={{
          fontFamily: "Merriweather-Regular, sans-serif",
          top: "50px", // Move navbar down by 20px
        }}
      >
        <div className="max-w-screen-2xl mx-auto flex items-center justify-between px-6">
          {/* Left items */}
          <div className="hidden md:flex items-center">
            <nav className="flex items-center space-x-0.5">
              <Link
                href="/"
                className={`relative font-larger font-bold px-4 py-2 flex items-center group transition-colors duration-300 text-white`}
              >
                <span className="pt-1.5">HOME</span>
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#907454] transition-all duration-300 group-hover:w-full"></span>
              </Link>
            </nav>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="rounded-full p-2 text-white hover:bg-white/20 transition-colors duration-300 focus:outline-none"
              aria-label="Toggle mobile menu"
            >
              <Menu size={24} strokeWidth={2} />
            </button>
          </div>

          {/* Center logo */}
          <div className="absolute left-1/2 transform -translate-x-1/2">
            <div
              className={`group rounded-full flex items-center justify-center transition-all duration-700 h-24 w-24 ${
                animateLogo ? "scale-100" : "scale-0"
              }`}
              style={{
                transform: animateLogo ? "scale(1) rotate(360deg)" : "scale(0)",
                transition: "transform 1s cubic-bezier(0.34, 1.56, 0.64, 1)",
              }}
            >
              <Image
                src={logo}
                alt="Logo"
                width={60}
                height={60}
                className="transition-transform duration-500 group-hover:scale-110"
                style={{
                  filter: "drop-shadow(0 0 3px rgba(255,255,255,0.5))",
                }}
                priority
              />
            </div>
          </div>

          {/* Right items */}
          <div className="hidden md:flex items-center">
            <nav className="flex items-center space-x-0.5">
              <a
                href="#"
                onClick={handleSearchClick}
                className="relative font-larger font-bold px-4 py-2 flex items-center group transition-colors duration-300 text-white"
              >
                <span className="pt-1.5">SEARCH</span>
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#907454] transition-all duration-300 group-hover:w-full"></span>
              </a>
              <a
                href="#"
                onClick={handleMenuClick}
                className="relative font-larger font-bold px-4 py-2 flex items-center group transition-colors duration-300 text-white"
              >
                <span className="pt-1.5">MENU</span>
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#907454] transition-all duration-300 group-hover:w-full"></span>
              </a>
            </nav>
            <div className="ml-8">
              <Link
                href="/reservation"
                className="relative py-20 pl-8 pr-8 font-larger font-bold bg-[#907454] text-white hover:bg-[#82694b] transition-all duration-300 group"
              >
                <span className="pt-1.5">RESERVATION</span>
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
              </Link>
            </div>
          </div>

          {/* Mobile reservation */}
          <div className="md:hidden">
            <Link
              href="/reservation"
              className="relative py-20 pl-8 pr-8   px-4 py-1.5 font-medium text-sm bg-[#907454] text-white hover:bg-[#82694b] transition-all duration-300 group"
            >
              <span>RESERVATION</span>
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
            </Link>
          </div>
        </div>

        {/* Mobile menu - Completely Dark Theme */}
        {mobileMenuOpen && (
          <div
            className="md:hidden fixed inset-0 z-50 animate-mobileMenu-enter"
            onClick={() => setMobileMenuOpen(false)}
          >
            {/* Solid black backdrop */}
            <div className="absolute inset-0 bg-black"></div>

            {/* Menu container */}
            <div className="relative flex flex-col h-full w-full max-w-sm ml-auto bg-black">
              {/* Header */}
              <div
                className="flex items-center justify-between p-6 animate-fadeDown border-b border-zinc-900"
                style={{ animationDelay: "100ms" }}
              >
                <h2 className="text-lg font-semibold text-white">Navigation</h2>
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-2 rounded-full hover:bg-zinc-900 transition-colors"
                  aria-label="Close menu"
                >
                  <X size={24} className="text-[#907454]" />
                </button>
              </div>

              {/* Menu items */}
              <div
                className="p-6 space-y-4 animate-fadeDown"
                style={{ animationDelay: "200ms" }}
              >
                <Link
                  href="/"
                  className="flex items-center w-full px-5 py-4 text-base font-medium text-white hover:text-[#907454] bg-zinc-900 hover:bg-zinc-800 rounded-lg transition-all duration-200"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <Home size={20} className="mr-3 text-[#907454]" />
                  HOME
                </Link>

                <a
                  href="#"
                  className="flex items-center w-full px-5 py-4 text-base font-medium text-white hover:text-[#907454] bg-zinc-900 hover:bg-zinc-800 rounded-lg transition-all duration-200"
                  onClick={(e) => {
                    e.preventDefault();
                    setMobileMenuOpen(false);
                    setSearchOpen(true);
                  }}
                >
                  <Search size={20} className="mr-3 text-[#907454]" />
                  SEARCH
                </a>

                <a
                  href="#"
                  className="flex items-center w-full px-5 py-4 text-base font-medium text-white hover:text-[#907454] bg-zinc-900 hover:bg-zinc-800 rounded-lg transition-all duration-200"
                  onClick={(e) => {
                    e.preventDefault();
                    setMobileMenuOpen(false);
                    setMenuOpen(true);
                  }}
                >
                  <List size={20} className="mr-3 text-[#907454]" />
                  MENU
                </a>

                <div className="h-px w-full bg-zinc-900 my-4"></div>

                <Link
                  href="/reservation"
                  className="flex items-center w-full px-5 py-4 text-base font-medium text-white hover:text-white/90 bg-[#907454] hover:bg-[#82694b] rounded-lg transition-all duration-200"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <Calendar size={20} className="mr-3 text-white" />
                  RESERVATION
                </Link>
              </div>

              {/* Footer */}
              <div
                className="mt-auto p-6 border-t border-zinc-900 animate-fadeUp"
                style={{ animationDelay: "300ms" }}
              >
                <p className="text-sm text-zinc-500 text-center">
                  © 2025 Your Brand
                </p>
                <p className="text-xs text-zinc-700 text-center mt-1">
                  Press ESC to close
                </p>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* Search Overlay */}
      <SearchOverlay isOpen={searchOpen} onClose={() => setSearchOpen(false)} />

      {/* Menu Overlay */}
      <MenuOverlay isOpen={menuOpen} onClose={() => setMenuOpen(false)} />

      {/* Global styles for animations */}
      <style jsx global>{`
        @keyframes mobileMenuEnter {
          0% {
            opacity: 0;
          }
          100% {
            opacity: 1;
          }
        }

        @keyframes mobileMenuExit {
          0% {
            opacity: 1;
          }
          100% {
            opacity: 0;
          }
        }

        @keyframes fadeDown {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-mobileMenu-enter {
          animation: mobileMenuEnter 0.4s ease-out forwards;
        }

        .animate-mobileMenu-exit {
          animation: mobileMenuExit 0.4s ease-in forwards;
        }

        .animate-fadeDown {
          animation: fadeDown 0.5s ease-out forwards;
        }

        .animate-fadeUp {
          animation: fadeUp 0.5s ease-out forwards;
        }
      `}</style>
    </>
  );
};

export default Navbar;
