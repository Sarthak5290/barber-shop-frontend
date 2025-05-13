"use client";
import React, { useState, useEffect, useRef, useCallback } from "react";
import { Search, X } from "lucide-react";

const SearchOverlay = ({ isOpen, onClose }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [isAnimating, setIsAnimating] = useState(false);
  const [windowSize, setWindowSize] = useState({
    width: typeof window !== 'undefined' ? window.innerWidth : 0,
    height: typeof window !== 'undefined' ? window.innerHeight : 0
  });
  const inputRef = useRef(null);
  const overlayRef = useRef(null);

  // Track window size for responsive adjustments
  useEffect(() => {
    if (typeof window === 'undefined') return;

    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight
      });
    };

    window.addEventListener('resize', handleResize);
    handleResize(); // Initial call
    
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Popular search suggestions
  const popularSearches = [
    "Haircut",
    "Beard Trim",
    "Hot Towel Shave",
    "Hair Styling",
    "Products",
    "Appointments",
  ];

  // Handle close with animation - using useCallback to prevent recreation on each render
  const handleClose = useCallback(() => {
    setIsAnimating(false);
    // Wait for exit animation to complete before actually closing
    setTimeout(() => {
      onClose();
    }, 500);
  }, [onClose]);

  // Handle animation states
  useEffect(() => {
    if (isOpen) {
      setIsAnimating(true);
      // Allow the animation to start before focusing
      setTimeout(() => {
        if (inputRef.current) {
          inputRef.current.focus();
        }
      }, 600);
    }
  }, [isOpen]);

  // Handle ESC key press to close overlay
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape" && isOpen) {
        handleClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, handleClose]);

  // Prevent body scroll when overlay is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const handleSearch = (e) => {
    e.preventDefault();
    // Handle search logic here
    console.log(`Searching for: ${searchQuery}`);
    // You can implement actual search functionality here
    handleClose();
  };

  if (!isOpen && !isAnimating) return null;

  // Calculate responsive sizes
  const getIconSize = () => {
    return windowSize.width < 640 ? 20 : windowSize.width < 768 ? 24 : 28;
  };

  return (
    <div
      ref={overlayRef}
      className={`fixed inset-0 bg-black z-50 flex flex-col 
                 ${isAnimating && isOpen ? "animate-overlay-enter" : "animate-overlay-exit"}`}
      aria-modal="true"
      role="dialog"
      aria-label="Search overlay"
    >
      {/* Close button - responsive positioning and sizing */}
      <div
        className={`absolute top-4 sm:top-5 md:top-6 right-4 sm:right-5 md:right-6 transition-transform duration-500 ${
          isAnimating && isOpen ? "translate-y-0 opacity-100" : "-translate-y-10 opacity-0"
        }`}
        style={{ transitionDelay: "300ms" }}
      >
        <button
          onClick={handleClose}
          className="w-10 h-10 sm:w-11 sm:h-11 md:w-12 md:h-12 flex items-center justify-center text-gray-400 hover:text-white transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-gray-400 rounded-full"
          aria-label="Close search"
        >
          <X size={getIconSize()} />
        </button>
      </div>

      <div className="flex-1 flex flex-col items-center justify-center max-w-2xl sm:max-w-3xl md:max-w-4xl mx-auto w-full px-4 sm:px-6">
        {/* Search form - responsive text and spacing */}
        <form onSubmit={handleSearch} className="w-full mb-8 sm:mb-10 md:mb-12">
          <div
            className={`relative transition-all duration-700 ${
              isAnimating && isOpen ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0"
            }`}
          >
            <Search className="absolute left-0 top-1/2 -translate-y-1/2 text-gray-500 w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8" />
            <input
              ref={inputRef}
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="What are you looking for?"
              className="w-full py-3 sm:py-3.5 md:py-4 pl-9 sm:pl-10 md:pl-12 pr-4 text-xl sm:text-2xl md:text-3xl bg-transparent border-b-2 border-gray-800 focus:border-white text-white outline-none transition-colors duration-200"
              aria-label="Search query"
            />
          </div>
        </form>

        {/* Popular searches - responsive layout */}
        <div
          className={`w-full transition-all duration-700 ${
            isAnimating && isOpen ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0"
          }`}
          style={{ transitionDelay: "150ms" }}
        >
          <h3 className="text-base sm:text-lg text-gray-400 mb-3 md:mb-4">Popular Searches</h3>
          <div className="flex flex-wrap gap-2 sm:gap-3">
            {popularSearches.map((term, index) => (
              <button
                key={index}
                onClick={() => {
                  setSearchQuery(term);
                  inputRef.current.focus();
                }}
                className="px-3 sm:px-4 py-1.5 sm:py-2 bg-gray-900 hover:bg-gray-800 rounded-md text-xs sm:text-sm md:text-base text-gray-300 transition-colors duration-200 focus:outline-none focus:ring-1 focus:ring-gray-700"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                {term}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Footer - responsive font size and padding */}
      <div
        className={`w-full py-4 sm:py-5 md:py-6 text-center text-gray-500 text-xs sm:text-sm border-t border-gray-800 transition-all duration-500 ${
          isAnimating && isOpen ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
        }`}
        style={{ transitionDelay: "200ms" }}
      >
        Press ESC to close
      </div>

      {/* Global styles for animations */}
      <style jsx global>{`
        @keyframes overlayEnter {
          0% {
            opacity: 0;
            clip-path: circle(0% at top right);
          }
          100% {
            opacity: 1;
            clip-path: circle(150% at top right);
          }
        }

        @keyframes overlayExit {
          0% {
            opacity: 1;
            clip-path: circle(150% at top right);
          }
          100% {
            opacity: 0;
            clip-path: circle(0% at top right);
          }
        }

        .animate-overlay-enter {
          animation: overlayEnter 0.5s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }

        .animate-overlay-exit {
          animation: overlayExit 0.5s cubic-bezier(0.7, 0, 0.84, 0) forwards;
        }
      `}</style>
    </div>
  );
};

export default SearchOverlay;