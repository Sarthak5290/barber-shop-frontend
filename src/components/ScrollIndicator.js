"use client";
import React, { useState, useEffect } from "react";
import { ChevronDown } from "lucide-react";

const ScrollIndicator = () => {
  // Use state with null initial values to prevent hydration mismatch
  const [isVisible, setIsVisible] = useState(true);
  const [windowSize, setWindowSize] = useState({
    width: 0,
    height: 0
  });
  
  // Track window size for responsive adjustments - only on client side
  useEffect(() => {
    // Initialize window size only after component mounts (client-side)
    setWindowSize({
      width: window.innerWidth,
      height: window.innerHeight
    });
    
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight
      });
    };

    window.addEventListener('resize', handleResize);
    
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Hide the indicator when scrolling happens
  useEffect(() => {
    const handleScroll = () => {
      // Hide faster on small screens, more gradually on larger ones
      const threshold = windowSize.width < 640 ? 50 : 100;
      if (window.scrollY > threshold) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [windowSize.width]);

  // Function to handle scroll click
  const handleScrollClick = (e) => {
    e.preventDefault();
    const contactSection = document.getElementById("contact-section");
    if (contactSection) {
      contactSection.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  // Avoid conditional rendering that could differ between server and client
  const containerPosition = windowSize.width < 640 ? 'bottom-6' : windowSize.width < 768 ? 'bottom-8' : 'bottom-10';
  
  // Check if we're on the client side with windowSize properly initialized
  const isClient = typeof window !== 'undefined' && windowSize.width > 0;
  
  // Prevent rendering content that depends on window size until client-side hydration is complete
  if (!isClient) {
    return null; // Return nothing during SSR to prevent hydration mismatches
  }

  return (
    <div
      className={`fixed ${containerPosition} left-1/2 transform -translate-x-1/2 z-40 transition-all duration-500 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
      aria-hidden={!isVisible}
    >
      <a
        href="#contact-section"
        onClick={handleScrollClick}
        className="flex flex-col items-center text-white hover:text-gray-300 transition-colors duration-300 focus:outline-none"
        aria-label="Scroll to contact section"
      >
        {/* Text indicator - hide on smallest screens */}
        <div className="hidden sm:block mb-2 text-xs sm:text-sm font-semibold tracking-wider">
          SCROLL
        </div>
        
        {/* Use consistent display between server and client */}
        {windowSize.width < 480 ? (
          // Simple chevron for very small screens
          <div className="animate-bounce">
            <ChevronDown className="w-6 h-6 text-white" />
          </div>
        ) : (
          // Mouse-style indicator for larger screens
          <div className="w-5 h-8 sm:w-6 sm:h-10 border-2 border-white rounded-full flex justify-center p-1">
            <div className="w-1 h-4 bg-white rounded-full animate-scroll-down"></div>
          </div>
        )}
      </a>

      {/* Define animation in global CSS rather than using dynamic values that could cause hydration issues */}
      <style jsx>{`
        @keyframes scrollDown {
          0% {
            transform: translateY(0);
            opacity: 1;
          }
          75% {
            transform: translateY(${windowSize.width < 640 ? '12px' : '20px'});
            opacity: 0;
          }
          80% {
            transform: translateY(0);
            opacity: 0;
          }
          100% {
            opacity: 1;
          }
        }

        .animate-scroll-down {
          animation: scrollDown 2s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default ScrollIndicator;