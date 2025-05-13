"use client";
import React, { useState } from "react";
import { Mail, ArrowRight, CheckCircle } from "lucide-react";

const Subscription = () => {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your newsletter subscription logic here
    console.log("Email submitted:", email);
    // Show success state
    setIsSubmitted(true);
    // Reset after 3 seconds
    setTimeout(() => {
      setEmail("");
      setIsSubmitted(false);
    }, 3000);
  };

  return (
    <section className="w-full py-16 sm:py-20 md:py-24 bg-gradient-to-r from-gray-50 to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        {/* Decorative elements */}
        <div className="relative">
          <div className="hidden md:block absolute top-0 right-0 transform translate-x-1/2 -translate-y-1/2 w-12 h-12 border-t-2 border-r-2 border-gray-200"></div>
          <div className="hidden md:block absolute bottom-0 left-0 transform -translate-x-1/2 translate-y-1/2 w-12 h-12 border-b-2 border-l-2 border-gray-200"></div>

          {/* Content container */}
          <div className="relative z-10 bg-white py-12 sm:py-16 md:py-20 px-6 sm:px-10 md:px-14 shadow-sm border border-gray-100 rounded-lg">
            <div className="text-center mb-10 sm:mb-12">
              <Mail className="inline-block w-8 h-8 text-gray-400 mb-3" />
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4 tracking-tight">
                SUBSCRIBE TO OUR SERVICES
              </h2>
              <div className="w-16 h-1 bg-gray-900 mx-auto mb-6"></div>
              <p className="text-gray-600 max-w-2xl mx-auto text-base sm:text-lg">
                Get exclusive offers, style tips, and updates on our newest
                services delivered directly to your inbox.
              </p>
            </div>

            <form
              onSubmit={handleSubmit}
              className="flex flex-col md:flex-row items-stretch justify-center max-w-2xl mx-auto"
            >
              <div className="relative flex-1 mb-4 md:mb-0">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your email address"
                  required
                  disabled={isSubmitted}
                  className="w-full h-14 pl-5 pr-12 border-b-2 border-gray-200 focus:border-gray-900 focus:outline-none bg-transparent text-gray-900 placeholder-gray-400 transition-colors duration-300"
                />
                <Mail className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              </div>

              <button
                type="submit"
                disabled={isSubmitted}
                className={
                  (isSubmitted
                    ? "bg-green-600 hover:bg-green-700"
                    : "bg-gray-900 hover:bg-gray-800") +
                  " h-14 text-white font-medium flex items-center justify-center px-6 md:ml-4 rounded-md transition-all duration-300"
                }
              >
                {isSubmitted ? (
                  <>
                    <CheckCircle className="w-5 h-5 mr-2" />
                    <span className="text-sm md:text-base">SUBSCRIBED</span>
                  </>
                ) : (
                  <>
                    <span className="text-sm md:text-base">SUBSCRIBE</span>
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </>
                )}
              </button>
            </form>

            {/* Benefits section */}
            <div className="mt-10 sm:mt-12 flex flex-col sm:flex-row justify-center items-center gap-6 sm:gap-10 text-center text-sm sm:text-base text-gray-500">
              {["Exclusive Offers", "Style Tips", "No Spam"].map(
                (item, idx) => (
                  <div key={idx} className="flex items-center">
                    <span className="w-2 h-2 rounded-full bg-gray-400 mr-2"></span>
                    <span>{item}</span>
                  </div>
                )
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Subscription;
