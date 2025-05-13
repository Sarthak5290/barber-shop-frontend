"use client";
import React, { useState, useEffect } from "react";
import AboutUsSection from "@/components/AboutUsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import ImageGallery from "@/components/ImageGallary";
import ShopImage from "@/components/ShopImage";
import Subscription from "@/components/Subscription";
import Loading from "@/components/Loading";

const Page = () => {
  const [contentLoaded, setContentLoaded] = useState(false);

  useEffect(() => {
    // Show content after a slight delay to ensure loading animation plays
    setContentLoaded(true);
  }, []);

  return (
    <>
      <Loading />
      <div
        className={`transition-opacity duration-10 ${
          contentLoaded ? "opacity-100" : "opacity-100"
        }`}
      >
        <Hero />
        <ContactSection />
        <ImageGallery />
        <AboutUsSection />
        <ShopImage />
        <Subscription />
        <Footer />
      </div>
    </>
  );
};

export default Page;
