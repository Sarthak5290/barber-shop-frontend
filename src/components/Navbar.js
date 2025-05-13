"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "../assets/logo-light.svg";
import SearchOverlay from "./SearchOverlay";
import MenuOverlay from "./MenuOverlay.js";

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
        className={`relative w-full bg-transparent transition-all duration-500 z-50 py-4`}
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
              className="rounded-full p-2 text-white hover:bg-white/10 transition-colors duration-300 focus:outline-none"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {mobileMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
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
              className="relative rounded-full px-4 py-1.5 font-medium text-sm bg-[#907454] text-white hover:bg-[#82694b] transition-all duration-300 group"
            >
              <span>RESERVATION</span>
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
            </Link>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white/95 backdrop-blur-sm shadow-lg mt-2 rounded-b-lg overflow-hidden">
            <div className="px-4 py-3 space-y-2">
              <Link
                href="/"
                className="block px-4 py-2.5 text-base font-medium text-gray-700 hover:text-[#907454] hover:bg-[#f7f3ee] rounded-lg transition-colors duration-200"
                onClick={() => setMobileMenuOpen(false)}
              >
                HOME
              </Link>
              <a
                href="#"
                className="block px-4 py-2.5 text-base font-medium text-gray-700 hover:text-[#907454] hover:bg-[#f7f3ee] rounded-lg transition-colors duration-200"
                onClick={(e) => {
                  e.preventDefault();
                  setMobileMenuOpen(false);
                  setSearchOpen(true);
                }}
              >
                SEARCH
              </a>
              <a
                href="#"
                className="block px-4 py-2.5 text-base font-medium text-gray-700 hover:text-[#907454] hover:bg-[#f7f3ee] rounded-lg transition-colors duration-200"
                onClick={(e) => {
                  e.preventDefault();
                  setMobileMenuOpen(false);
                  setMenuOpen(true);
                }}
              >
                MENU
              </a>
            </div>
          </div>
        )}
      </header>

      {/* Search Overlay */}
      <SearchOverlay isOpen={searchOpen} onClose={() => setSearchOpen(false)} />

      {/* Menu Overlay */}
      <MenuOverlay isOpen={menuOpen} onClose={() => setMenuOpen(false)} />
    </>
  );
};

export default Navbar;
