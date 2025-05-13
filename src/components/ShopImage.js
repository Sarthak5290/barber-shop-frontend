"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import shopImage from "../assets/images/08_img.jpg";

const ShopImage = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  // Optional: Add viewport height adjustment for mobile
  const [viewportHeight, setViewportHeight] = useState("100vh");

  useEffect(() => {
    // Handle viewport height on mobile devices (addresses mobile browser navigation bar issues)
    const handleResize = () => {
      // Use a slightly reduced height on smaller screens for better UX
      if (window.innerWidth < 768) {
        setViewportHeight("90vh");
      } else {
        setViewportHeight("100vh");
      }
    };

    // Run once on mount
    handleResize();

    // Add event listener
    window.addEventListener("resize", handleResize);

    // Cleanup
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div
      className="relative w-full transition-opacity duration-700 overflow-hidden"
      style={{
        height: viewportHeight,
        opacity: isLoaded ? 1 : 0,
      }}
    >
      {/* Full page image with grayscale filter */}
      <Image
        src={shopImage}
        alt="Premium Barbershop Interior"
        fill
        sizes="100vw"
        className={`
          object-cover grayscale brightness-90 contrast-110
          transition-transform duration-10000
          ${isLoaded ? "scale-105" : "scale-100"}
        `}
        priority
        onLoad={() => setIsLoaded(true)}
      />

      {/* Dark overlay with responsive adjustments */}
      <div className="absolute inset-0 bg-black/20 flex flex-col items-center justify-center">
        {/* Optional content container for text */}
        <div className="container mx-auto px-4 md:px-8 text-center">
          {/* You can add text, logos, or CTA buttons here */}
        </div>
      </div>

      {/* Optional mobile-only scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 md:hidden animate-bounce">
        <div className="w-8 h-8 border-l-2 border-b-2 border-white rotate-45 opacity-70"></div>
      </div>
    </div>
  );
};

export default ShopImage;
