"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Facebook,
  Instagram,
  Twitter,
  MapPin,
  Phone,
  Mail,
  Clock,
  Scissors,
  Calendar,
  ChevronRight,
} from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black text-white">
      {/* Main Footer - adjusted padding for mobile */}
      <div className="container mx-auto py-10 sm:py-12 md:py-16 px-4 sm:px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10 lg:gap-12">
          {/* Column 1: About - responsive text and spacing */}
          <div>
            {/* Logo */}
            <div className="mb-4 sm:mb-6">
              <h3 className="text-xl sm:text-2xl font-bold tracking-wider">
                BARBER<span className="text-gray-500">SHOP</span>
              </h3>
            </div>

            <p className="text-gray-400 text-sm sm:text-base mb-6">
              Premium grooming services for the modern gentleman. Quality
              haircuts, expert shaves, and beard styling in an authentic
              atmosphere.
            </p>

            {/* Social Icons - adjusted size for smaller screens */}
            <div className="flex space-x-3 sm:space-x-4">
              <Link
                href="https://facebook.com"
                className="w-8 h-8 sm:w-10 sm:h-10 bg-gray-900 hover:bg-gray-800 flex items-center justify-center rounded-full transition-colors"
              >
                <Facebook size={16} className="sm:w-[18px] sm:h-[18px]" />
              </Link>
              <Link
                href="https://instagram.com"
                className="w-8 h-8 sm:w-10 sm:h-10 bg-gray-900 hover:bg-gray-800 flex items-center justify-center rounded-full transition-colors"
              >
                <Instagram size={16} className="sm:w-[18px] sm:h-[18px]" />
              </Link>
              <Link
                href="https://twitter.com"
                className="w-8 h-8 sm:w-10 sm:h-10 bg-gray-900 hover:bg-gray-800 flex items-center justify-center rounded-full transition-colors"
              >
                <Twitter size={16} className="sm:w-[18px] sm:h-[18px]" />
              </Link>
            </div>
          </div>

          {/* Column 2: Services - responsive vertical spacing */}
          <div className="mt-8 sm:mt-0">
            <h4 className="text-base sm:text-lg font-bold mb-4 sm:mb-6 uppercase tracking-wider">
              Services
            </h4>
            <ul className="space-y-2 sm:space-y-4">
              {[
                {
                  icon: <Scissors size={14} className="sm:w-4 sm:h-4" />,
                  text: "Haircut",
                },
                {
                  icon: <Scissors size={14} className="sm:w-4 sm:h-4" />,
                  text: "Beard Trim",
                },
                {
                  icon: <Scissors size={14} className="sm:w-4 sm:h-4" />,
                  text: "Hot Towel Shave",
                },
                {
                  icon: <Scissors size={14} className="sm:w-4 sm:h-4" />,
                  text: "Hair Styling",
                },
                {
                  icon: <Scissors size={14} className="sm:w-4 sm:h-4" />,
                  text: "Kid's Haircut",
                },
              ].map((service, index) => (
                <li key={index}>
                  <Link href="#" className="flex items-center group">
                    <span className="text-gray-500 mr-2 sm:mr-3 group-hover:text-white transition-colors">
                      {service.icon}
                    </span>
                    <span className="text-sm sm:text-base group-hover:text-white transition-colors">
                      {service.text}
                    </span>
                    <ChevronRight
                      size={12}
                      className="sm:w-3.5 sm:h-3.5 ml-auto opacity-0 group-hover:opacity-100 transition-opacity"
                    />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Opening Hours - responsive layout */}
          <div className="mt-8 lg:mt-0">
            <h4 className="text-base sm:text-lg font-bold mb-4 sm:mb-6 uppercase tracking-wider">
              Opening Hours
            </h4>
            <ul className="space-y-3 sm:space-y-4">
              {[
                { day: "Monday - Friday", hours: "9:00 AM - 8:00 PM" },
                { day: "Saturday", hours: "9:00 AM - 6:00 PM" },
                { day: "Sunday", hours: "10:00 AM - 4:00 PM" },
              ].map((schedule, index) => (
                <li key={index} className="flex items-start">
                  <Clock
                    size={16}
                    className="sm:w-[18px] sm:h-[18px] text-gray-500 mr-2 sm:mr-3 mt-0.5 flex-shrink-0"
                  />
                  <div>
                    <p className="font-medium text-sm sm:text-base">
                      {schedule.day}
                    </p>
                    <p className="text-gray-400 text-xs sm:text-sm">
                      {schedule.hours}
                    </p>
                  </div>
                </li>
              ))}
            </ul>

            <div className="mt-6 sm:mt-8">
              <Link
                href="/reservation"
                className="flex items-center bg-white text-black px-3 sm:px-4 py-1.5 sm:py-2 rounded text-sm hover:bg-gray-200 transition-colors group"
              >
                <Calendar
                  size={16}
                  className="sm:w-[18px] sm:h-[18px] mr-1.5 sm:mr-2"
                />
                <span className="font-medium">Book Appointment</span>
                <ChevronRight
                  size={14}
                  className="sm:w-4 sm:h-4 ml-1 sm:ml-2 transform group-hover:translate-x-1 transition-transform"
                />
              </Link>
            </div>
          </div>

          {/* Column 4: Contact Info - responsive text and maps */}
          <div className="mt-8 lg:mt-0">
            <h4 className="text-base sm:text-lg font-bold mb-4 sm:mb-6 uppercase tracking-wider">
              Contact Us
            </h4>
            <ul className="space-y-3 sm:space-y-4">
              <li className="flex items-start">
                <MapPin
                  size={16}
                  className="sm:w-[18px] sm:h-[18px] text-gray-500 mr-2 sm:mr-3 mt-0.5 flex-shrink-0"
                />
                <p className="text-sm sm:text-base">
                  123 Main Street
                  <br />
                  New York, NY 10001
                </p>
              </li>
              <li className="flex items-start">
                <Phone
                  size={16}
                  className="sm:w-[18px] sm:h-[18px] text-gray-500 mr-2 sm:mr-3 mt-0.5 flex-shrink-0"
                />
                <p className="text-sm sm:text-base">(123) 456-7890</p>
              </li>
              <li className="flex items-start">
                <Mail
                  size={16}
                  className="sm:w-[18px] sm:h-[18px] text-gray-500 mr-2 sm:mr-3 mt-0.5 flex-shrink-0"
                />
                <p className="text-sm sm:text-base">info@barbershop.com</p>
              </li>
            </ul>

            {/* Google Maps Embed - responsive height */}
            <div className="mt-4 sm:mt-6 relative h-36 sm:h-48 w-full rounded overflow-hidden">
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

              {/* Overlay with button - adjusted for smaller screens */}
              <div className="absolute left-0 bottom-0 p-1.5 sm:p-2">
                <Link
                  href="https://maps.google.com/maps?ll=40.748440,-73.987031&z=16&t=m&hl=en&gl=US&mapclient=embed&q=Empire%20State%20Building"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-black bg-opacity-75 hover:bg-opacity-90 text-white text-xs md:text-sm px-2 sm:px-3 py-1 sm:py-2 rounded flex items-center transition-colors"
                >
                  <span>Directions</span>
                  <ChevronRight size={12} className="sm:w-3.5 sm:h-3.5 ml-1" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer - improved mobile layout */}
      <div className="border-t border-gray-800">
        <div className="container mx-auto py-4 sm:py-6 px-4 sm:px-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-xs sm:text-sm text-center md:text-left mb-4 md:mb-0">
            © {currentYear} Barbershop. All rights reserved.
          </p>

          <div className="flex flex-wrap justify-center md:justify-end gap-4 sm:space-x-4 sm:gap-0">
            <Link
              href="/privacy"
              className="text-gray-500 hover:text-white text-xs sm:text-sm transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="text-gray-500 hover:text-white text-xs sm:text-sm transition-colors"
            >
              Terms of Service
            </Link>
            <Link
              href="/sitemap"
              className="text-gray-500 hover:text-white text-xs sm:text-sm transition-colors"
            >
              Sitemap
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
