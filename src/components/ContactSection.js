"use client";
import React from "react";
import { useRouter } from "next/navigation";

const ContactSection = () => {
  const router = useRouter();

  // Function to handle button click and redirect to contact page
  const handleContactClick = () => {
    router.push("/contact");
  };

  return (
    <div 
      id="contact-section" 
      className="bg-gray-50 w-full py-16 sm:py-20 md:py-24 lg:py-32 flex flex-col items-center justify-center text-center px-4 sm:px-6 md:px-8"
    >
      <h2 className="text-black text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold uppercase mb-6 sm:mb-8 md:mb-10 tracking-wide max-w-3xl">
        You Can Contact Us
      </h2>
      <button 
        onClick={handleContactClick}
        className="border-2 border-black text-black px-6 sm:px-8 py-2 sm:py-3 uppercase text-sm sm:text-base font-bold hover:bg-black hover:text-white transition duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black"
        aria-label="Go to contact page"
      >
        Contact
      </button>
    </div>
  );
};

export default ContactSection;