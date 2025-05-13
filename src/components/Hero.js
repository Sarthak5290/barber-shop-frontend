"use client";
import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import ScrollIndicator from "./ScrollIndicator";
import bgImage from "../assets/images/01_img.jpg";

const Hero = () => {
  // Add state to detect if we're on mobile devices (for background-attachment handling)
  const [isMobile, setIsMobile] = useState(false);

  // Check if we're on mobile on component mount
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    // Initial check
    checkMobile();

    // Listen for resize events
    window.addEventListener("resize", checkMobile);

    // Cleanup
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <div
      className="relative h-screen w-full overflow-hidden"
      style={{
        marginTop: "-80px", // Counteract the body padding
      }}
    >
      {/* Background image with blur - responsive background handling */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${bgImage.src})`,
          backgroundSize: "cover",
          backgroundPosition: "top",
          backgroundAttachment: isMobile ? "scroll" : "fixed", // Fixed on desktop, scroll on mobile
          filter: "blur(2px)",
          transform: "scale(1.05)", // Slightly scale up to prevent blur edges
        }}
      />

      {/* Subtle overlay to enhance text readability */}
      <div className="absolute inset-0 bg-black opacity-20 z-10"></div>

      <Navbar />

      {/* Main content - adjust spacing and font sizes for different devices */}
      <div className="absolute inset-0 flex flex-col items-center justify-center z-20 text-center px-4 sm:px-6 md:px-8">
        <h1 className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold drop-shadow-lg max-w-4xl mx-auto leading-tight">
          Fama Barber Shop and Beauty Salon
        </h1>
        <p className="text-white text-xs sm:text-sm mt-4 sm:mt-6 md:mt-8 lg:mt-10 tracking-widest font-semibold uppercase drop-shadow-md">
          For Men Only
        </p>

        {/* Language Indicator - adjust position for mobile */}
        <div className="absolute bottom-4 sm:bottom-6 md:bottom-10 left-4 sm:left-6 md:left-10 text-white text-xs sm:text-sm font-bold z-30">
          EN
        </div>
      </div>

      {/* ScrollIndicator component */}
      <ScrollIndicator />
    </div>
  );
};

export default Hero;
