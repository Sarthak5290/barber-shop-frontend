"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  ChevronLeft,
  Calendar,
  Clock,
  Scissors,
  User,
  Users,
  Phone,
  Mail,
  ChevronRight,
  Check,
  X,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Reservation = () => {
  // State for multi-step form
  const [step, setStep] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [isComplete, setIsComplete] = useState(false);

  // Form state
  const [formData, setFormData] = useState({
    service: "",
    stylist: "",
    date: "",
    time: "",
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    notes: "",
  });

  // Available services
  const services = [
    {
      id: "haircut",
      name: "Haircut",
      price: "$35",
      duration: "45 min",
      icon: <Scissors className="w-5 h-5" />,
    },
    {
      id: "beard-trim",
      name: "Beard Trim",
      price: "$25",
      duration: "30 min",
      icon: <Scissors className="w-5 h-5" />,
    },
    {
      id: "hot-towel-shave",
      name: "Hot Towel Shave",
      price: "$40",
      duration: "45 min",
      icon: <Scissors className="w-5 h-5" />,
    },
    {
      id: "haircut-beard",
      name: "Haircut & Beard Trim",
      price: "$55",
      duration: "75 min",
      icon: <Scissors className="w-5 h-5" />,
    },
    {
      id: "styling",
      name: "Hair Styling",
      price: "$30",
      duration: "30 min",
      icon: <Scissors className="w-5 h-5" />,
    },
    {
      id: "kids-haircut",
      name: "Kid&apos;s Haircut",
      price: "$25",
      duration: "30 min",
      icon: <Scissors className="w-5 h-5" />,
    },
  ];

  // Stylists
  const stylists = [
    {
      id: "john",
      name: "John Smith",
      role: "Master Barber",
      experience: "15 years",
    },
    {
      id: "michael",
      name: "Michael Johnson",
      role: "Senior Stylist",
      experience: "12 years",
    },
    {
      id: "robert",
      name: "Robert Davis",
      role: "Beard Specialist",
      experience: "10 years",
    },
    {
      id: "james",
      name: "James Wilson",
      role: "Junior Barber",
      experience: "5 years",
    },
  ];

  // Available dates (next 7 days)
  const getDates = () => {
    const dates = [];
    const today = new Date();

    for (let i = 0; i < 7; i++) {
      const date = new Date(today);
      date.setDate(today.getDate() + i);
      dates.push({
        value: date.toISOString().split("T")[0],
        label: date.toLocaleDateString("en-US", {
          weekday: "short",
          month: "short",
          day: "numeric",
        }),
        day: date.toLocaleDateString("en-US", { weekday: "long" }),
      });
    }

    return dates;
  };

  // Available time slots
  const getTimeSlots = () => {
    const slots = [];
    const openTime = 9; // 9 AM
    const closeTime = 20; // 8 PM
    const interval = 30; // 30 minutes

    for (let hour = openTime; hour < closeTime; hour++) {
      for (let minute = 0; minute < 60; minute += interval) {
        const time = `${hour.toString().padStart(2, "0")}:${minute
          .toString()
          .padStart(2, "0")}`;
        slots.push(time);
      }
    }

    return slots;
  };

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Handle service selection
  const handleServiceSelect = (serviceId) => {
    setFormData((prev) => ({ ...prev, service: serviceId }));
  };

  // Handle stylist selection
  const handleStylistSelect = (stylistId) => {
    setFormData((prev) => ({ ...prev, stylist: stylistId }));
  };

  // Handle date selection
  const handleDateSelect = (date) => {
    setFormData((prev) => ({ ...prev, date }));
  };

  // Handle time selection
  const handleTimeSelect = (time) => {
    setFormData((prev) => ({ ...prev, time }));
  };

  // Go to next step
  const nextStep = () => {
    window.scrollTo(0, 0);
    setStep((prev) => prev + 1);
  };

  // Go to previous step
  const prevStep = () => {
    window.scrollTo(0, 0);
    setStep((prev) => prev - 1);
  };

  // Reset form
  const resetForm = () => {
    setFormData({
      service: "",
      stylist: "",
      date: "",
      time: "",
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      notes: "",
    });
    setStep(1);
    setIsComplete(false);
  };

  // Submit form
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      setIsComplete(true);
      window.scrollTo(0, 0);
      console.log("Form submitted:", formData);
    }, 1500);
  };

  // Check if current step is complete
  const isStepComplete = () => {
    switch (step) {
      case 1:
        return !!formData.service;
      case 2:
        return !!formData.stylist;
      case 3:
        return !!formData.date && !!formData.time;
      case 4:
        return (
          !!formData.firstName &&
          !!formData.lastName &&
          !!formData.email &&
          !!formData.phone
        );
      default:
        return false;
    }
  };

  // Render step indicator
  const renderStepIndicator = () => {
    return (
      <div className="flex items-center justify-center mb-12">
        {[1, 2, 3, 4].map((i) => (
          <div key={i} className="flex items-center">
            <div
              className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${
                i === step
                  ? "bg-[#907454] text-white"
                  : i < step
                  ? "bg-gray-300 text-gray-700"
                  : "bg-gray-200 text-gray-400"
              }`}
            >
              {i}
            </div>
            {i < 4 && (
              <div
                className={`w-16 h-1 ${
                  i < step ? "bg-gray-300" : "bg-gray-200"
                }`}
              ></div>
            )}
          </div>
        ))}
      </div>
    );
  };

  // Render step title
  const renderStepTitle = () => {
    switch (step) {
      case 1:
        return "Select Service";
      case 2:
        return "Choose Stylist";
      case 3:
        return "Pick Date & Time";
      case 4:
        return "Your Information";
      default:
        return "";
    }
  };

  // Render step content
  const renderStepContent = () => {
    switch (step) {
      case 1:
        return (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {services.map((service) => (
              <div
                key={service.id}
                className={`p-6 border rounded-lg cursor-pointer transition-all duration-300 ${
                  formData.service === service.id
                    ? "border-[#907454] bg-[#907454]/10"
                    : "border-gray-200 hover:border-[#907454] hover:bg-[#907454]/5"
                }`}
                onClick={() => handleServiceSelect(service.id)}
              >
                <div className="flex items-start">
                  <div
                    className={`mr-4 p-3 rounded-full ${
                      formData.service === service.id
                        ? "bg-[#907454] text-white"
                        : "bg-gray-100 text-gray-500"
                    }`}
                  >
                    {service.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-medium text-gray-900 mb-1">
                      {service.name}
                    </h3>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-500">
                        {service.duration}
                      </span>
                      <span className="font-bold text-gray-900">
                        {service.price}
                      </span>
                    </div>
                  </div>
                </div>
                {formData.service === service.id && (
                  <div className="mt-4 flex justify-end">
                    <Check className="w-5 h-5 text-[#907454]" />
                  </div>
                )}
              </div>
            ))}
          </div>
        );

      case 2:
        return (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {stylists.map((stylist) => (
              <div
                key={stylist.id}
                className={`p-6 border rounded-lg cursor-pointer transition-all duration-300 ${
                  formData.stylist === stylist.id
                    ? "border-[#907454] bg-[#907454]/10"
                    : "border-gray-200 hover:border-[#907454] hover:bg-[#907454]/5"
                }`}
                onClick={() => handleStylistSelect(stylist.id)}
              >
                <div className="flex items-start">
                  <div
                    className={`w-12 h-12 rounded-full flex items-center justify-center text-lg font-medium mr-4 ${
                      formData.stylist === stylist.id
                        ? "bg-[#907454] text-white"
                        : "bg-gray-100 text-gray-500"
                    }`}
                  >
                    {stylist.name.charAt(0)}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-medium text-gray-900 mb-1">
                      {stylist.name}
                    </h3>
                    <p className="text-sm text-gray-500">{stylist.role}</p>
                    <p className="text-sm text-gray-500">
                      Experience: {stylist.experience}
                    </p>
                  </div>
                </div>
                {formData.stylist === stylist.id && (
                  <div className="mt-4 flex justify-end">
                    <Check className="w-5 h-5 text-[#907454]" />
                  </div>
                )}
              </div>
            ))}
            <div
              className="p-6 border border-gray-200 rounded-lg cursor-pointer hover:border-[#907454] hover:bg-[#907454]/5 transition-all duration-300 col-span-1 md:col-span-2"
              onClick={() => handleStylistSelect("any")}
            >
              <div className="flex items-start">
                <div
                  className={`mr-4 p-3 rounded-full ${
                    formData.stylist === "any"
                      ? "bg-[#907454] text-white"
                      : "bg-gray-100 text-gray-500"
                  }`}
                >
                  <Users className="w-5 h-5" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-medium text-gray-900 mb-1">
                    Any Available Stylist
                  </h3>
                  <p className="text-sm text-gray-500">
                    Choose this option if you don&apos;t have a preference
                  </p>
                </div>
              </div>
              {formData.stylist === "any" && (
                <div className="mt-4 flex justify-end">
                  <Check className="w-5 h-5 text-[#907454]" />
                </div>
              )}
            </div>
          </div>
        );

      case 3:
        return (
          <div className="space-y-8">
            {/* Date selection */}
            <div>
              <h3 className="text-lg font-medium text-gray-900 mb-4">
                Select Date
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                {getDates().map((date) => (
                  <div
                    key={date.value}
                    className={`p-4 border rounded-lg cursor-pointer transition-all duration-300 ${
                      formData.date === date.value
                        ? "border-[#907454] bg-[#907454]/10"
                        : "border-gray-200 hover:border-[#907454] hover:bg-[#907454]/5"
                    }`}
                    onClick={() => handleDateSelect(date.value)}
                  >
                    <div className="text-center">
                      <p className="text-sm text-gray-500">{date.day}</p>
                      <p className="text-lg font-bold mt-1">
                        {date.label.split(", ")[1]}
                      </p>
                      {formData.date === date.value && (
                        <div className="mt-2 flex justify-center">
                          <Check className="w-4 h-4 text-[#907454]" />
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Time selection */}
            {formData.date && (
              <div>
                <h3 className="text-lg font-medium text-gray-900 mb-4">
                  Select Time
                </h3>
                <div className="grid grid-cols-3 md:grid-cols-6 gap-3">
                  {getTimeSlots().map((time) => (
                    <div
                      key={time}
                      className={`p-3 border rounded-lg cursor-pointer transition-all duration-300 ${
                        formData.time === time
                          ? "border-[#907454] bg-[#907454]/10"
                          : "border-gray-200 hover:border-[#907454] hover:bg-[#907454]/5"
                      }`}
                      onClick={() => handleTimeSelect(time)}
                    >
                      <div className="text-center">
                        <p className="font-medium">
                          {parseInt(time.split(":")[0]) > 12
                            ? `${parseInt(time.split(":")[0]) - 12}:${
                                time.split(":")[1]
                              } PM`
                            : `${time} AM`}
                        </p>
                        {formData.time === time && (
                          <div className="mt-1 flex justify-center">
                            <Check className="w-4 h-4 text-[#907454]" />
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        );

      case 4:
        return (
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label
                  htmlFor="firstName"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  First Name
                </label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#907454] focus:border-transparent"
                />
              </div>
              <div>
                <label
                  htmlFor="lastName"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Last Name
                </label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#907454] focus:border-transparent"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#907454] focus:border-transparent"
                />
              </div>
              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Phone
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#907454] focus:border-transparent"
                />
              </div>
              <div className="md:col-span-2">
                <label
                  htmlFor="notes"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Special Requests (Optional)
                </label>
                <textarea
                  id="notes"
                  name="notes"
                  value={formData.notes}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#907454] focus:border-transparent"
                ></textarea>
              </div>
            </div>

            <div className="mt-8 bg-gray-50 p-6 rounded-lg">
              <h3 className="text-lg font-medium text-gray-900 mb-4">
                Reservation Summary
              </h3>
              <div className="space-y-3">
                <div className="flex justify-between pb-3 border-b border-gray-200">
                  <span className="text-gray-600">Service:</span>
                  <span className="font-medium text-gray-900">
                    {services.find((s) => s.id === formData.service)?.name ||
                      "Not selected"}
                  </span>
                </div>
                <div className="flex justify-between pb-3 border-b border-gray-200">
                  <span className="text-gray-600">Stylist:</span>
                  <span className="font-medium text-gray-900">
                    {formData.stylist === "any"
                      ? "Any Available Stylist"
                      : stylists.find((s) => s.id === formData.stylist)?.name ||
                        "Not selected"}
                  </span>
                </div>
                <div className="flex justify-between pb-3 border-b border-gray-200">
                  <span className="text-gray-600">Date & Time:</span>
                  <span className="font-medium text-gray-900">
                    {formData.date && formData.time
                      ? `${new Date(formData.date).toLocaleDateString("en-US", {
                          weekday: "long",
                          month: "long",
                          day: "numeric",
                        })} at ${
                          parseInt(formData.time.split(":")[0]) > 12
                            ? `${parseInt(formData.time.split(":")[0]) - 12}:${
                                formData.time.split(":")[1]
                              } PM`
                            : `${formData.time} AM`
                        }`
                      : "Not selected"}
                  </span>
                </div>
                <div className="flex justify-between pt-3">
                  <span className="text-gray-600">Price:</span>
                  <span className="font-bold text-gray-900">
                    {services.find((s) => s.id === formData.service)?.price ||
                      "-"}
                  </span>
                </div>
              </div>
            </div>
          </form>
        );

      default:
        return null;
    }
  };

  // Render confirmation screen
  const renderConfirmation = () => {
    return (
      <div className="text-center py-12">
        <div className="flex justify-center mb-6">
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center">
            <Check className="w-10 h-10 text-green-600" />
          </div>
        </div>
        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          Booking Confirmed!
        </h2>
        <p className="text-gray-600 max-w-lg mx-auto mb-8">
          Your appointment has been booked successfully. We&apos;ve sent a
          confirmation email to {formData.email}.
        </p>

        <div className="bg-gray-50 p-6 rounded-lg max-w-md mx-auto mb-8">
          <h3 className="text-lg font-medium text-gray-900 mb-4">
            Reservation Details
          </h3>
          <div className="space-y-3 text-left">
            <div className="flex justify-between pb-3 border-b border-gray-200">
              <span className="text-gray-600">Service:</span>
              <span className="font-medium text-gray-900">
                {services.find((s) => s.id === formData.service)?.name}
              </span>
            </div>
            <div className="flex justify-between pb-3 border-b border-gray-200">
              <span className="text-gray-600">Stylist:</span>
              <span className="font-medium text-gray-900">
                {formData.stylist === "any"
                  ? "Any Available Stylist"
                  : stylists.find((s) => s.id === formData.stylist)?.name}
              </span>
            </div>
            <div className="flex justify-between pb-3 border-b border-gray-200">
              <span className="text-gray-600">Date & Time:</span>
              <span className="font-medium text-gray-900">
                {`${new Date(formData.date).toLocaleDateString("en-US", {
                  weekday: "long",
                  month: "long",
                  day: "numeric",
                })} at ${
                  parseInt(formData.time.split(":")[0]) > 12
                    ? `${parseInt(formData.time.split(":")[0]) - 12}:${
                        formData.time.split(":")[1]
                      } PM`
                    : `${formData.time} AM`
                }`}
              </span>
            </div>
            <div className="flex justify-between pb-3 border-b border-gray-200">
              <span className="text-gray-600">Name:</span>
              <span className="font-medium text-gray-900">
                {`${formData.firstName} ${formData.lastName}`}
              </span>
            </div>
            <div className="flex justify-between pt-3">
              <span className="text-gray-600">Price:</span>
              <span className="font-bold text-gray-900">
                {services.find((s) => s.id === formData.service)?.price}
              </span>
            </div>
          </div>
        </div>

        <div className="space-x-4">
          <Link
            href="/"
            className="inline-block px-6 py-3 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors duration-300"
          >
            Return to Home
          </Link>
          <button
            onClick={resetForm}
            className="inline-block px-6 py-3 bg-[#907454] rounded-lg text-white hover:bg-[#806343] transition-colors duration-300"
          >
            Book Another Appointment
          </button>
        </div>
      </div>
    );
  };

  return (
    <>
      <Navbar />

      <div className="pt-16 pb-24 bg-white">
        <div className="container mx-auto px-6 max-w-4xl">
          {/* Back button */}
          <div className="mb-8">
            <Link
              href="/"
              className="inline-flex items-center text-gray-600 hover:text-gray-900 transition-colors duration-300"
            >
              <ChevronLeft className="w-4 h-4 mr-1" />
              <span>Back to Home</span>
            </Link>
          </div>

          {/* Page title */}
          <h1 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-8">
            Book Your Appointment
          </h1>

          {isComplete ? (
            renderConfirmation()
          ) : (
            <>
              {/* Step indicator */}
              {renderStepIndicator()}

              {/* Step title */}
              <h2 className="text-2xl font-bold text-gray-800 mb-8 text-center">
                {renderStepTitle()}
              </h2>

              {/* Step content */}
              <div className="mb-12">{renderStepContent()}</div>

              {/* Navigation buttons */}
              <div className="flex justify-between">
                {step > 1 ? (
                  <button
                    onClick={prevStep}
                    className="inline-flex items-center px-6 py-3 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors duration-300"
                  >
                    <ChevronLeft className="w-4 h-4 mr-1" />
                    <span>Previous</span>
                  </button>
                ) : (
                  <div></div>
                )}

                {step < 4 ? (
                  <button
                    onClick={nextStep}
                    disabled={!isStepComplete()}
                    className={`inline-flex items-center px-6 py-3 rounded-lg transition-colors duration-300 ${
                      isStepComplete()
                        ? "bg-[#907454] text-white hover:bg-[#806343]"
                        : "bg-gray-200 text-gray-400 cursor-not-allowed"
                    }`}
                  >
                    <span>Next</span>
                    <ChevronRight className="w-4 h-4 ml-1" />
                  </button>
                ) : (
                  <button
                    onClick={handleSubmit}
                    disabled={!isStepComplete() || isLoading}
                    className={`inline-flex items-center px-6 py-3 rounded-lg transition-colors duration-300 ${
                      isStepComplete() && !isLoading
                        ? "bg-[#907454] text-white hover:bg-[#806343]"
                        : "bg-gray-200 text-gray-400 cursor-not-allowed"
                    }`}
                  >
                    {isLoading ? (
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
                        <span>Processing...</span>
                      </>
                    ) : (
                      <span>Confirm Booking</span>
                    )}
                  </button>
                )}
              </div>
            </>
          )}
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Reservation;
