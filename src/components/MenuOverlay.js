"use client";
import React, { useState, useEffect, useCallback } from "react";
import {
  X,
  ChevronRight,
  Scissors,
  Clock,
  Calendar,
  Users,
  Info,
  Phone,
  Mail,
  MapPin,
  Menu,
  ChevronDown,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import logo from "../assets/logo-light.svg";

const MenuOverlay = ({ isOpen, onClose }) => {
  const [isAnimating, setIsAnimating] = useState(false);
  const [activeCategory, setActiveCategory] = useState("services");
  const [isMobile, setIsMobile] = useState(false);
  const [expandedMobile, setExpandedMobile] = useState(null);

  // Check screen size for responsive adjustments
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

  // Define menu categories and items
  const menuCategories = [
    {
      id: "services",
      title: "Our Services",
      icon: <Scissors className="w-4 h-4 sm:w-5 sm:h-5" />,
      items: [
        { name: "Haircut", price: "$35", duration: "45 min" },
        { name: "Beard Trim", price: "$25", duration: "30 min" },
        { name: "Hot Towel Shave", price: "$40", duration: "45 min" },
        { name: "Haircut & Beard Trim", price: "$55", duration: "75 min" },
        { name: "Hair Styling", price: "$30", duration: "30 min" },
        { name: "Kid's Haircut", price: "$25", duration: "30 min" },
      ],
    },
    {
      id: "hours",
      title: "Opening Hours",
      icon: <Clock className="w-4 h-4 sm:w-5 sm:h-5" />,
      content: [
        { day: "Monday - Friday", hours: "9:00 AM - 8:00 PM" },
        { day: "Saturday", hours: "9:00 AM - 6:00 PM" },
        { day: "Sunday", hours: "10:00 AM - 4:00 PM" },
      ],
    },
    {
      id: "about",
      title: "About Us",
      icon: <Info className="w-4 h-4 sm:w-5 sm:h-5" />,
      content: `We are a professional team of hairdressers and bearders who adore their work. 
      We are proud that the majority of men who have visited us once usually decide to return. 
      With over 12 years of experience and more than 5,000 satisfied clients, we deliver 
      premium grooming services for the modern gentleman.`,
    },
    {
      id: "team",
      title: "Our Team",
      icon: <Users className="w-4 h-4 sm:w-5 sm:h-5" />,
      team: [
        { name: "John Smith", role: "Master Barber", experience: "15 years" },
        {
          name: "Michael Johnson",
          role: "Senior Stylist",
          experience: "12 years",
        },
        {
          name: "Robert Davis",
          role: "Beard Specialist",
          experience: "10 years",
        },
        { name: "James Wilson", role: "Junior Barber", experience: "5 years" },
      ],
    },
    {
      id: "contact",
      title: "Contact Us",
      icon: <Phone className="w-4 h-4 sm:w-5 sm:h-5" />,
      contact: {
        address: "123 Main Street, New York, NY 10001",
        phone: "(123) 456-7890",
        email: "info@barbershop.com",
      },
    },
  ];

  // Handle animation states
  useEffect(() => {
    if (isOpen) {
      setIsAnimating(true);
    }
  }, [isOpen]);

  // Handle close with animation
  const handleClose = useCallback(() => {
    setIsAnimating(false);
    // Wait for exit animation to complete before actually closing
    setTimeout(() => {
      onClose();
    }, 500);
  }, [onClose]);

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

  // Toggle mobile category expansion
  const toggleMobileCategory = (categoryId) => {
    if (expandedMobile === categoryId) {
      setExpandedMobile(null);
    } else {
      setExpandedMobile(categoryId);
      setActiveCategory(categoryId);
    }
  };

  if (!isOpen && !isAnimating) return null;

  // Render content based on active category
  const renderCategoryContent = () => {
    const category = menuCategories.find((cat) => cat.id === activeCategory);

    if (!category) return null;

    if (category.id === "services") {
      return (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 animate-fade-in">
          {category.items.map((service, index) => (
            <div
              key={index}
              className="border-b border-gray-800 pb-3 sm:pb-4 flex justify-between items-start group"
              style={{ animationDelay: `${index * 50 + 100}ms` }}
            >
              <div>
                <h3 className="text-white text-base sm:text-lg font-bold mb-0.5 sm:mb-1">
                  {service.name}
                </h3>
                <p className="text-gray-500 text-xs sm:text-sm">
                  {service.duration}
                </p>
              </div>
              <div className="text-right">
                <span className="text-gray-300 font-bold text-lg sm:text-xl">
                  {service.price}
                </span>
                <Link href="/reservation" onClick={handleClose}>
                  <button className="mt-1 sm:mt-2 px-3 sm:px-4 py-1 bg-transparent border border-gray-700 text-gray-400 text-xs rounded hover:bg-gray-800 hover:text-white transition-colors duration-300 opacity-0 group-hover:opacity-100 sm:opacity-100">
                    BOOK
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      );
    }

    if (category.id === "hours") {
      return (
        <div className="animate-fade-in">
          {category.content.map((schedule, index) => (
            <div
              key={index}
              className="flex items-start mb-4 sm:mb-6"
              style={{ animationDelay: `${index * 50 + 100}ms` }}
            >
              <Clock className="text-gray-500 mr-2 sm:mr-3 mt-1 flex-shrink-0 w-4 h-4 sm:w-5 sm:h-5" />
              <div>
                <p className="font-medium text-white text-sm sm:text-base">
                  {schedule.day}
                </p>
                <p className="text-gray-400 text-xs sm:text-sm">
                  {schedule.hours}
                </p>
              </div>
            </div>
          ))}
          <div
            className="mt-6 sm:mt-8 animate-fade-in"
            style={{ animationDelay: "300ms" }}
          >
            <Link
              href="/reservation"
              onClick={handleClose}
              className="flex items-center bg-gray-900 text-white px-4 sm:px-6 py-2 sm:py-3 rounded hover:bg-gray-800 transition-colors group"
            >
              <Calendar className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
              <span className="font-medium text-sm sm:text-base">
                Book Appointment
              </span>
              <ChevronRight className="ml-2 w-3 h-3 sm:w-4 sm:h-4 transform group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      );
    }

    if (category.id === "about") {
      return (
        <div className="animate-fade-in">
          <p className="text-gray-300 text-sm sm:text-base leading-relaxed mb-5 sm:mb-6">
            {category.content}
          </p>
          <div
            className="mt-5 sm:mt-6 flex flex-wrap justify-between border-t border-gray-800 pt-4 sm:pt-6 animate-fade-in"
            style={{ animationDelay: "200ms" }}
          >
            <div className="text-center w-full sm:w-auto mb-4 sm:mb-0">
              <div className="text-2xl sm:text-3xl font-bold text-white">
                95%
              </div>
              <div className="text-xs sm:text-sm uppercase tracking-wide text-gray-500">
                Return Rate
              </div>
            </div>
            <div className="text-center w-full sm:w-auto mb-4 sm:mb-0">
              <div className="text-2xl sm:text-3xl font-bold text-white">
                12+
              </div>
              <div className="text-xs sm:text-sm uppercase tracking-wide text-gray-500">
                Years Experience
              </div>
            </div>
            <div className="text-center w-full sm:w-auto">
              <div className="text-2xl sm:text-3xl font-bold text-white">
                5K+
              </div>
              <div className="text-xs sm:text-sm uppercase tracking-wide text-gray-500">
                Happy Clients
              </div>
            </div>
          </div>
        </div>
      );
    }

    if (category.id === "team") {
      return (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 animate-fade-in">
          {category.team.map((member, index) => (
            <div
              key={index}
              className="bg-gray-900 p-3 sm:p-4 rounded-lg group hover:bg-gray-800 transition-colors duration-300"
              style={{ animationDelay: `${index * 50 + 100}ms` }}
            >
              <div className="flex items-start">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gray-800 border-2 border-gray-700 flex items-center justify-center text-base sm:text-lg font-medium text-white mr-3 sm:mr-4">
                  {member.name.charAt(0)}
                </div>
                <div>
                  <h3 className="text-white text-sm sm:text-base font-bold">
                    {member.name}
                  </h3>
                  <p className="text-gray-400 text-xs sm:text-sm">
                    {member.role}
                  </p>
                  <p className="text-gray-500 text-xs mt-0.5 sm:mt-1">
                    Experience: {member.experience}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      );
    }

    if (category.id === "contact") {
      return (
        <div className="animate-fade-in">
          <div
            className="mb-4 sm:mb-6 flex items-start animate-fade-in"
            style={{ animationDelay: "100ms" }}
          >
            <div className="bg-gray-900 p-2 sm:p-3 rounded-full mr-3 sm:mr-4">
              <Phone className="w-4 h-4 sm:w-5 sm:h-5 text-gray-400" />
            </div>
            <div>
              <h3 className="text-white text-sm sm:text-base font-bold">
                Phone
              </h3>
              <p className="text-gray-400 text-xs sm:text-sm">
                {category.contact.phone}
              </p>
            </div>
          </div>

          <div
            className="mb-4 sm:mb-6 flex items-start animate-fade-in"
            style={{ animationDelay: "150ms" }}
          >
            <div className="bg-gray-900 p-2 sm:p-3 rounded-full mr-3 sm:mr-4">
              <Mail className="w-4 h-4 sm:w-5 sm:h-5 text-gray-400" />
            </div>
            <div>
              <h3 className="text-white text-sm sm:text-base font-bold">
                Email
              </h3>
              <p className="text-gray-400 text-xs sm:text-sm break-all">
                {category.contact.email}
              </p>
            </div>
          </div>

          <div
            className="flex items-start animate-fade-in"
            style={{ animationDelay: "200ms" }}
          >
            <div className="bg-gray-900 p-2 sm:p-3 rounded-full mr-3 sm:mr-4">
              <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-gray-400" />
            </div>
            <div>
              <h3 className="text-white text-sm sm:text-base font-bold">
                Address
              </h3>
              <p className="text-gray-400 text-xs sm:text-sm">
                {category.contact.address}
              </p>
            </div>
          </div>

          <div
            className="mt-6 sm:mt-8 relative h-36 sm:h-48 w-full rounded overflow-hidden animate-fade-in"
            style={{ animationDelay: "300ms" }}
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.215706659676!2d-73.9870314!3d40.7484405!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a9b3117469%3A0xd134e199a405a163!2sEmpire%20State%20Building!5e0!3m2!1sen!2sus!4v1621283452013!5m2!1sen!2sus"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Barbershop Location"
              className="grayscale contrast-125 hover:grayscale-0 transition-all duration-300"
            ></iframe>
          </div>
        </div>
      );
    }

    return null;
  };

  return (
    <div
      className={`fixed inset-0 bg-black z-50 overflow-auto 
                 ${
                   isAnimating && isOpen
                     ? "animate-overlay-enter"
                     : "animate-overlay-exit"
                 }`}
    >
      {/* Header with logo and close button */}
      <div className="border-b border-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 sm:py-4 md:py-6 flex justify-between items-center">
          <div
            className={`transition-all duration-700 ${
              isAnimating && isOpen
                ? "translate-y-0 opacity-100"
                : "-translate-y-10 opacity-0"
            }`}
          >
            <div className="flex items-center">
              <Image
                src={logo}
                alt="Logo"
                width={32}
                height={32}
                className="mr-2 sm:mr-3 w-8 h-8 sm:w-10 sm:h-10"
                style={{
                  filter: "brightness(1)", // Keep logo white on dark background
                }}
              />
              <span className="text-lg sm:text-xl font-bold text-white">
                BARBER<span className="text-gray-500">SHOP</span>
              </span>
            </div>
          </div>

          <button
            onClick={handleClose}
            className={`w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center text-gray-400 hover:text-white rounded-full bg-gray-900 hover:bg-gray-800 transition-all duration-700 ${
              isAnimating && isOpen
                ? "translate-y-0 opacity-100"
                : "-translate-y-10 opacity-0"
            }`}
            aria-label="Close menu"
          >
            <X size={20} className="sm:w-5 sm:h-5" />
          </button>
        </div>
      </div>

      {/* Main content - responsive for mobile and desktop */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6 sm:py-8 md:py-10 lg:py-16">
        {/* Mobile accordion view */}
        {isMobile ? (
          <div className="space-y-3">
            {menuCategories.map((category, index) => (
              <div
                key={category.id}
                className={`border-b border-gray-800 pb-3 transition-all duration-500 ${
                  isAnimating && isOpen
                    ? "translate-x-0 opacity-100"
                    : "-translate-x-10 opacity-0"
                }`}
                style={{ animationDelay: `${index * 50 + 100}ms` }}
              >
                <button
                  onClick={() => toggleMobileCategory(category.id)}
                  className="w-full py-3 flex items-center justify-between text-white"
                >
                  <div className="flex items-center">
                    <span className="mr-3 text-gray-400">{category.icon}</span>
                    <span className="font-medium text-sm sm:text-base">
                      {category.title}
                    </span>
                  </div>
                  <ChevronDown
                    className={`w-4 h-4 text-gray-400 transform transition-transform duration-300 ${
                      expandedMobile === category.id ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {/* Expanded content */}
                {expandedMobile === category.id && (
                  <div className="py-4 px-3">{renderCategoryContent()}</div>
                )}
              </div>
            ))}

            {/* Mobile book button */}
            <div
              className={`pt-4 transition-all duration-700 ${
                isAnimating && isOpen
                  ? "translate-y-0 opacity-100"
                  : "translate-y-10 opacity-0"
              }`}
              style={{ transitionDelay: "400ms" }}
            >
              <Link
                href="/reservation"
                onClick={handleClose}
                className="block w-full bg-gray-900 hover:bg-gray-800 text-white font-medium px-5 py-3 rounded text-center group transition-colors duration-200"
              >
                <div className="flex items-center justify-center">
                  <Calendar className="w-4 h-4 mr-2" />
                  <span className="text-sm">Book Appointment</span>
                  <ChevronRight className="ml-2 w-3 h-3 transform group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            </div>
          </div>
        ) : (
          // Desktop side-by-side view
          <div className="flex flex-col md:flex-row gap-6 md:gap-10">
            {/* Left sidebar - categories */}
            <div className="md:w-1/4 lg:w-1/5">
              <ul className="space-y-2 sm:space-y-3">
                {menuCategories.map((category, index) => (
                  <li
                    key={category.id}
                    style={{ animationDelay: `${index * 50 + 100}ms` }}
                    className={`transition-all duration-500 ${
                      isAnimating && isOpen
                        ? "translate-x-0 opacity-100"
                        : "-translate-x-10 opacity-0"
                    }`}
                  >
                    <button
                      onClick={() => setActiveCategory(category.id)}
                      className={`w-full text-left px-3 sm:px-4 py-2 sm:py-3 rounded-lg flex items-center transition-colors duration-200 
                                ${
                                  activeCategory === category.id
                                    ? "bg-gray-900 text-white"
                                    : "text-gray-400 hover:text-white hover:bg-gray-900/50"
                                }`}
                    >
                      <span className="mr-2 sm:mr-3">{category.icon}</span>
                      <span className="font-medium text-sm sm:text-base">
                        {category.title}
                      </span>
                      {activeCategory === category.id && (
                        <ChevronRight className="ml-auto w-3 h-3 sm:w-4 sm:h-4" />
                      )}
                    </button>
                  </li>
                ))}
              </ul>

              <div
                className={`mt-6 sm:mt-8 md:mt-10 lg:mt-16 transition-all duration-700 ${
                  isAnimating && isOpen
                    ? "translate-y-0 opacity-100"
                    : "translate-y-10 opacity-0"
                }`}
                style={{ transitionDelay: "400ms" }}
              >
                <Link
                  href="/reservation"
                  onClick={handleClose}
                  className="block w-full bg-gray-900 hover:bg-gray-800 text-white font-medium px-4 sm:px-6 py-2 sm:py-3 rounded text-center group transition-colors duration-200"
                >
                  <div className="flex items-center justify-center">
                    <Calendar className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                    <span className="text-sm sm:text-base">
                      Book Appointment
                    </span>
                    <ChevronRight className="ml-1 sm:ml-2 w-3 h-3 sm:w-4 sm:h-4 transform group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              </div>
            </div>

            {/* Right side - content */}
            <div className="md:w-3/4 lg:w-4/5">
              <div
                className={`transition-all duration-500 ${
                  isAnimating && isOpen
                    ? "translate-y-0 opacity-100"
                    : "translate-y-10 opacity-0"
                }`}
                style={{ transitionDelay: "200ms" }}
              >
                <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-2">
                  {
                    menuCategories.find((cat) => cat.id === activeCategory)
                      ?.title
                  }
                </h2>
                <div className="w-16 sm:w-20 h-0.5 sm:h-1 bg-gray-800 mb-4 sm:mb-6"></div>

                <div className="mt-4 sm:mt-6">{renderCategoryContent()}</div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Footer */}
      <div
        className={`w-full py-4 sm:py-6 text-center text-gray-500 text-xs sm:text-sm border-t border-gray-900 mt-auto transition-all duration-500 ${
          isAnimating && isOpen
            ? "translate-y-0 opacity-100"
            : "translate-y-10 opacity-0"
        }`}
        style={{ transitionDelay: "300ms" }}
      >
        Press ESC to close menu
      </div>

      {/* Global styles for animations */}
      <style jsx global>{`
        @keyframes overlayEnter {
          0% {
            opacity: 0;
            transform: translateY(10px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes overlayExit {
          0% {
            opacity: 1;
            transform: translateY(0);
          }
          100% {
            opacity: 0;
            transform: translateY(10px);
          }
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-overlay-enter {
          animation: overlayEnter 0.5s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }

        .animate-overlay-exit {
          animation: overlayExit 0.5s cubic-bezier(0.7, 0, 0.84, 0) forwards;
        }

        .animate-fade-in {
          opacity: 0;
          animation: fadeIn 0.5s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
      `}</style>
    </div>
  );
};

export default MenuOverlay;
