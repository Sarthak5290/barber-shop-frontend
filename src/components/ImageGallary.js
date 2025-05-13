"use client";
import { useRef, useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image1 from "../assets/images/02_img.jpg"; // Haircut image
import Image2 from "../assets/images/03_img.jpg"; // Shave image
import Image3 from "../assets/images/04_img.jpg"; // Haircut & Shave image
import Image4 from "../assets/images/05_img.jpg"; // Beard Trim image

const ImageGallery = () => {
  const scrollContainerRef = useRef(null);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(true);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeftPosition, setScrollLeftPosition] = useState(0);
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

  // Array of service images with titles and slugs for links
  const services = [
    {
      image: Image1,
      title: "HAIRCUT",
      navText: "• PREVIOUS",
      slug: "haircut",
    },
    {
      image: Image2,
      title: "SHAVE",
      navText: "",
      slug: "shave",
    },
    {
      image: Image3,
      title: "HAIRCUT & SHAVE",
      navText: "",
      slug: "haircut-and-shave",
    },
    {
      image: Image4,
      title: "BEARD TRIM",
      navText: "NEXT •",
      slug: "beard-trim",
    },
  ];

  // Check scroll position to show/hide arrows
  const checkScrollPosition = () => {
    if (!scrollContainerRef.current) return;

    const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
    setShowLeftArrow(scrollLeft > 0);
    setShowRightArrow(scrollLeft < scrollWidth - clientWidth - 10); // 10px buffer
  };

  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;
    if (scrollContainer) {
      scrollContainer.addEventListener("scroll", checkScrollPosition);
      // Initial check
      checkScrollPosition();
    }

    return () => {
      if (scrollContainer) {
        scrollContainer.removeEventListener("scroll", checkScrollPosition);
      }
    };
  }, []);

  // Scroll functions
  const scrollToLeft = () => {
    if (scrollContainerRef.current) {
      const itemWidth = isMobile
        ? scrollContainerRef.current.offsetWidth
        : scrollContainerRef.current.offsetWidth / 3;

      scrollContainerRef.current.scrollBy({
        left: -itemWidth,
        behavior: "smooth",
      });
    }
  };

  const scrollToRight = () => {
    if (scrollContainerRef.current) {
      const itemWidth = isMobile
        ? scrollContainerRef.current.offsetWidth
        : scrollContainerRef.current.offsetWidth / 3;

      scrollContainerRef.current.scrollBy({
        left: itemWidth,
        behavior: "smooth",
      });
    }
  };

  // Touch handling for mobile
  const handleTouchStart = (e) => {
    setIsDragging(true);
    setStartX(e.touches[0].clientX - scrollContainerRef.current.offsetLeft);
    setScrollLeftPosition(scrollContainerRef.current.scrollLeft);
  };

  const handleTouchMove = (e) => {
    if (!isDragging) return;
    const x = e.touches[0].clientX - scrollContainerRef.current.offsetLeft;
    const walk = (x - startX) * 1.5; // scroll speed multiplier (slightly reduced for touch)
    scrollContainerRef.current.scrollLeft = scrollLeftPosition - walk;
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
  };

  // Mouse drag functionality
  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.pageX - scrollContainerRef.current.offsetLeft);
    setScrollLeftPosition(scrollContainerRef.current.scrollLeft);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - scrollContainerRef.current.offsetLeft;
    const walk = (x - startX) * 2; // scroll speed multiplier
    scrollContainerRef.current.scrollLeft = scrollLeftPosition - walk;
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
  };

  return (
    <div className="w-full h-fit bg-black">
      <div className="relative">
        {/* Left arrow - improved for mobile */}
        <button
          onClick={scrollToLeft}
          className={`absolute left-0 top-1/2 -translate-y-1/2 z-10 text-white px-2 sm:px-4 py-6 focus:outline-none transition-all duration-300 ${
            showLeftArrow
              ? "opacity-70 hover:opacity-100"
              : "opacity-0 pointer-events-none"
          }`}
          aria-label="Scroll left"
        >
          <span className="font-bold text-xs sm:text-sm md:text-base whitespace-nowrap flex items-center">
            <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5 mr-1" />
            <span className="hidden sm:inline">PREVIOUS</span>
          </span>
        </button>

        {/* Right arrow - improved for mobile */}
        <button
          onClick={scrollToRight}
          className={`absolute right-0 top-1/2 -translate-y-1/2 z-10 text-white px-2 sm:px-4 py-6 focus:outline-none transition-all duration-300 ${
            showRightArrow
              ? "opacity-70 hover:opacity-100"
              : "opacity-0 pointer-events-none"
          }`}
          aria-label="Scroll right"
        >
          <span className="font-bold text-xs sm:text-sm md:text-base whitespace-nowrap flex items-center">
            <span className="hidden sm:inline">NEXT</span>
            <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 ml-1" />
          </span>
        </button>

        {/* Image container - improved responsive layout and touch handling */}
        <div
          className="flex overflow-x-auto hide-scrollbar snap-x snap-mandatory"
          ref={scrollContainerRef}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseLeave}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
          style={{
            scrollbarWidth: "none",
            msOverflowStyle: "none",
            WebkitOverflowScrolling: "touch",
            cursor: isDragging ? "grabbing" : "grab",
          }}
        >
          {services.map((service, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-full sm:w-1/2 md:w-1/3 snap-center group"
            >
              <div className="relative w-full h-64 sm:h-80 md:h-96 overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover brightness-75 grayscale transition-all duration-300 group-hover:grayscale-0"
                  sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
                  priority={index < 2}
                />

                {/* Title overlay - responsive font sizes */}
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <h2 className="text-white text-2xl sm:text-3xl md:text-4xl font-bold tracking-wider px-4 text-center">
                    {service.title}
                  </h2>

                  {/* Divider line for the HAIRCUT & SHAVE slide */}
                  {service.title === "HAIRCUT & SHAVE" && (
                    <div className="h-4 sm:h-6 md:h-8 flex items-center justify-center">
                      <div className="w-4 sm:w-5 md:w-6 h-px bg-white mx-2"></div>
                    </div>
                  )}

                  {/* Read More button - improved for touch and with fallback for no-hover devices */}
                  <div
                    className={`mt-4 sm:mt-6 transition-all duration-300 ${
                      isMobile
                        ? "opacity-100 transform-none"
                        : "opacity-0 transform translate-y-4 group-hover:opacity-100 group-hover:translate-y-0"
                    }`}
                  >
                    <Link href={`/services/${service.slug}`}>
                      <button className="text-white border border-white text-xs sm:text-sm px-4 sm:px-6 py-1.5 sm:py-2 hover:bg-white hover:text-black transition-colors duration-300">
                        READ MORE
                      </button>
                    </Link>
                  </div>
                </div>

                {/* Navigation text for small screens */}
                {service.navText && (
                  <div
                    className={`absolute ${
                      service.navText.includes("PREVIOUS")
                        ? "left-2 sm:left-4"
                        : "right-2 sm:right-4"
                    } bottom-2 sm:bottom-4 sm:hidden`}
                  >
                    <span className="text-white text-xs font-bold">
                      {service.navText.includes("PREVIOUS") ? (
                        <ChevronLeft className="w-4 h-4" />
                      ) : (
                        <ChevronRight className="w-4 h-4" />
                      )}
                    </span>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Custom style for hiding scrollbar */}
      <style jsx global>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }

        /* Improve touch experience on mobile */
        @media (max-width: 640px) {
          .snap-center {
            scroll-snap-align: center;
          }
        }
      `}</style>
    </div>
  );
};

export default ImageGallery;
