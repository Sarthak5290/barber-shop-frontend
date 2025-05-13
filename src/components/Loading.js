"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import logo from "../assets/logo-light.svg";

const Loading = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [animationComplete, setAnimationComplete] = useState(false);
  const [logoSize, setLogoSize] = useState(60); // Default size that matches server rendering

  // Handle responsive logo sizing after component mounts
  useEffect(() => {
    // Function to calculate logo size based on screen dimensions
    const calculateLogoSize = () => {
      const width = window.innerWidth;
      if (width < 640) return 60; // Small mobile
      if (width < 768) return 70; // Large mobile
      if (width < 1024) return 80; // Tablet
      return 90; // Desktop
    };

    // Update logo size
    setLogoSize(calculateLogoSize());

    // Add event listener for window resize
    const handleResize = () => {
      setLogoSize(calculateLogoSize());
    };

    window.addEventListener("resize", handleResize);
    
    // Cleanup
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Loading animation timing
  useEffect(() => {
    // Simulate page load
    const timer = setTimeout(() => {
      setAnimationComplete(true);

      // After animation completes, set loading to false
      const hideTimer = setTimeout(() => {
        setIsLoading(false);
      }, 400); // Wait for exit animation

      return () => clearTimeout(hideTimer);
    }, 400); // Adjust loading time as needed

    return () => clearTimeout(timer);
  }, []);

  if (!isLoading) return null;

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center bg-transparent pointer-events-none overflow-hidden ${
        animationComplete ? "opacity-0" : "opacity-100"
      } transition-opacity duration-300`}
      aria-live="polite"
      aria-busy={!animationComplete}
    >
      {/* White loading bar that slides from left to right */}
      <div
        className={`absolute inset-0 bg-white transform ${
          animationComplete ? "translate-x-full" : "translate-x-0"
        } transition-transform duration-500 ease-in-out`}
      ></div>

      {/* Centered logo with responsive size */}
      <div className="relative z-10">
        <div className="flex items-center justify-center">
          <Image
            src={logo}
            alt="Logo"
            width={logoSize}
            height={logoSize}
            className={`transition-all duration-500 ${
              animationComplete
                ? "scale-110 opacity-0"
                : "scale-100 opacity-100"
            }`}
            style={{
              filter: "brightness(0)", // Make the logo black
            }}
            priority
          />
        </div>
      </div>
    </div>
  );
};

export default Loading;