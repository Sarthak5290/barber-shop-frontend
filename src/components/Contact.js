"use client";
import React, { useState } from "react";
import Link from "next/link";
import { Phone, Mail, MapPin, Clock, Send, CheckCircle } from "lucide-react";
import Footer from "@/components/Footer";

const Contact = () => {
  // Form state
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    setTimeout(() => {
      console.log("Form submitted:", formData);
      setFormData({ name: "", email: "", subject: "", message: "" });
      setIsSubmitting(false);
      setIsSubmitted(true);

      setTimeout(() => setIsSubmitted(false), 3000);
    }, 1000);
  };

  // Business hours data
  const businessHours = [
    { day: "Monday - Friday", hours: "9:00 AM - 8:00 PM" },
    { day: "Saturday", hours: "9:00 AM - 6:00 PM" },
    { day: "Sunday", hours: "10:00 AM - 4:00 PM" },
  ];

  return (
    <>
      {/* Header - responsive padding and text sizes */}
      <div className="bg-black text-white py-12 sm:py-16 md:py-20 md:-mt-22">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/"
            className="inline-flex items-center text-sm sm:text-base text-gray-400 hover:text-white transition-colors duration-300"
          >
            <span className="mr-1">&larr;</span> Back to Home
          </Link>
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mt-4 sm:mt-6">
            Contact Us
          </h1>
        </div>
      </div>

      {/* Main content - responsive grid and spacing */}
      <div className="bg-white py-10 sm:py-12 md:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 lg:gap-16">
            {/* Contact information - responsive spacing */}
            <div className="space-y-6 sm:space-y-8">
              {/* Location */}
              <div className="flex items-start">
                <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center rounded-full bg-gray-100">
                  <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-gray-700" />
                </div>
                <div className="ml-4">
                  <h3 className="text-base sm:text-lg font-bold text-gray-900">
                    Our Location
                  </h3>
                  <p className="text-sm sm:text-base text-gray-600 mt-1">
                    123 Main Street, New York, NY 10001
                  </p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start">
                <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center rounded-full bg-gray-100">
                  <Phone className="w-4 h-4 sm:w-5 sm:h-5 text-gray-700" />
                </div>
                <div className="ml-4">
                  <h3 className="text-base sm:text-lg font-bold text-gray-900">
                    Phone
                  </h3>
                  <p className="text-sm sm:text-base text-gray-600 mt-1">
                    (123) 456-7890
                  </p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start">
                <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center rounded-full bg-gray-100">
                  <Mail className="w-4 h-4 sm:w-5 sm:h-5 text-gray-700" />
                </div>
                <div className="ml-4">
                  <h3 className="text-base sm:text-lg font-bold text-gray-900">
                    Email
                  </h3>
                  <p className="text-sm sm:text-base text-gray-600 mt-1 break-all">
                    info@famabarbershop.com
                  </p>
                </div>
              </div>

              {/* Business hours */}
              <div className="flex items-start">
                <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center rounded-full bg-gray-100">
                  <Clock className="w-4 h-4 sm:w-5 sm:h-5 text-gray-700" />
                </div>
                <div className="ml-4 flex-grow">
                  <h3 className="text-base sm:text-lg font-bold text-gray-900">
                    Business Hours
                  </h3>
                  <div className="space-y-2 mt-2">
                    {businessHours.map((schedule, index) => (
                      <div
                        key={index}
                        className="flex flex-col sm:flex-row sm:justify-between text-sm sm:text-base"
                      >
                        <span className="font-medium text-gray-700">
                          {schedule.day}
                        </span>
                        <span className="text-gray-600 mt-1 sm:mt-0">
                          {schedule.hours}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Contact form - responsive padding and input sizes */}
            <div className="mt-8 md:mt-0">
              <h2 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6">
                Send a Message
              </h2>

              {isSubmitted ? (
                <div className="bg-green-50 border border-green-200 rounded p-4 sm:p-5">
                  <div className="flex items-center text-green-600">
                    <CheckCircle className="w-5 h-5 mr-2 flex-shrink-0" />
                    <span className="font-medium text-sm sm:text-base">
                      Message sent successfully! We will get back to you soon.
                    </span>
                  </div>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  className="space-y-4 sm:space-y-5"
                >
                  {/* Name */}
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-gray-700 mb-1 sm:mb-2"
                    >
                      Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-3 py-2 sm:py-3 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-[#907454] text-sm sm:text-base"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-700 mb-1 sm:mb-2"
                    >
                      Email <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-3 py-2 sm:py-3 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-[#907454] text-sm sm:text-base"
                    />
                  </div>

                  {/* Subject */}
                  <div>
                    <label
                      htmlFor="subject"
                      className="block text-sm font-medium text-gray-700 mb-1 sm:mb-2"
                    >
                      Subject <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-3 py-2 sm:py-3 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-[#907454] text-sm sm:text-base"
                    />
                  </div>

                  {/* Message */}
                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-gray-700 mb-1 sm:mb-2"
                    >
                      Message <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={4}
                      className="w-full px-3 py-2 sm:py-3 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-[#907454] text-sm sm:text-base"
                    ></textarea>
                  </div>

                  {/* Submit button */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className={`inline-flex items-center px-4 sm:px-6 py-2 sm:py-3 rounded text-white text-sm sm:text-base transition-colors ${
                        isSubmitting
                          ? "bg-gray-400 cursor-not-allowed"
                          : "bg-[#907454] hover:bg-[#82694b]"
                      }`}
                    >
                      {isSubmitting ? (
                        <>
                          <svg
                            className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                          >
                            <circle
                              className="opacity-25"
                              cx="12"
                              cy="12"
                              r="10"
                              stroke="currentColor"
                              strokeWidth="4"
                            ></circle>
                            <path
                              className="opacity-75"
                              fill="currentColor"
                              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                            ></path>
                          </svg>
                          <span>Sending...</span>
                        </>
                      ) : (
                        <>
                          <span>Send Message</span>
                          <Send className="w-4 h-4 ml-2" />
                        </>
                      )}
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Map - responsive height */}
      <div className="h-64 sm:h-80 md:h-96 w-full">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.215706659676!2d-73.9870314!3d40.7484405!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a9b3117469%3A0xd134e199a405a163!2sEmpire%20State%20Building!5e0!3m2!1sen!2sus!4v1621283452013!5m2!1sen!2sus"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Barbershop Location"
          className="grayscale"
        ></iframe>
      </div>

      {/* Optional: Add a responsive map overlay for small screens */}
      <div className="block sm:hidden bg-white p-4 border-t border-gray-200">
        <a
          href="https://maps.google.com/?q=Empire+State+Building,New+York,NY"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center w-full py-3 bg-[#907454] text-white rounded-lg text-sm font-medium"
        >
          <MapPin className="w-4 h-4 mr-2" />
          <span>Get Directions</span>
        </a>
      </div>
    </>
  );
};

export default Contact;
