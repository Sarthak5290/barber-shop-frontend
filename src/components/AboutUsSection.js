"use client";
import React from "react";
import { Scissors, Star, Users } from "lucide-react";

const AboutUsSection = () => {
  return (
    <section className="w-full bg-white py-16 sm:py-20 md:py-24 lg:py-32 overflow-hidden relative">
      {/* Background decorative elements - responsive sizes */}
      <div className="absolute top-0 right-0 w-1/3 h-1/4 sm:h-1/3 bg-gray-50 rounded-bl-full opacity-50"></div>
      <div className="absolute bottom-0 left-0 w-1/4 h-1/5 sm:h-1/4 bg-gray-50 rounded-tr-full opacity-30"></div>

      <div className="container mx-auto px-4 sm:px-6 md:px-8 relative z-10">
        {/* Main content grid - improved responsive behavior */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12 lg:gap-20">
          {/* Statement side */}
          <div className="order-2 lg:order-1">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-black leading-tight mb-6 md:mb-8 relative">
              <span className="absolute -left-4 sm:-left-6 -top-4 sm:-top-6 text-4xl sm:text-6xl opacity-10 font-serif">
                &quot;
              </span>
              WE ARE BORN IN UNITED STATES, AND WE WORK IN A WAY THAT YOU WOULD
              LIKE TO ENTRUST THE CARE OF YOUR HAIR AND BEARD TO US.
              <span className="absolute -right-4 sm:-right-6 -bottom-4 sm:-bottom-6 text-4xl sm:text-6xl opacity-10 font-serif">
                &quot;
              </span>
            </h2>

            {/* Mobile-only feature boxes for balance */}
            <div className="lg:hidden mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="bg-gray-50 p-4 rounded-lg text-center">
                <div className="text-2xl sm:text-3xl font-bold">95%</div>
                <div className="text-xs sm:text-sm uppercase tracking-wide text-gray-500">
                  Return Rate
                </div>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg text-center">
                <div className="text-2xl sm:text-3xl font-bold">12+</div>
                <div className="text-xs sm:text-sm uppercase tracking-wide text-gray-500">
                  Years Experience
                </div>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg text-center">
                <div className="text-2xl sm:text-3xl font-bold">5K+</div>
                <div className="text-xs sm:text-sm uppercase tracking-wide text-gray-500">
                  Happy Clients
                </div>
              </div>
            </div>
          </div>

          {/* Description side with image */}
          <div className="order-1 lg:order-2 relative">
            <div className="p-5 sm:p-6 md:p-8 bg-gray-50 rounded-lg">
              <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-4 sm:mb-6">
                It is saying that it is better to see once than to hear a
                thousand times. We are a professional team of hairdressers and
                bearders who adore their work and lack ambition.
              </p>
              <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                We are proud that the majority of men who have visited us once
                usually decide to return.
              </p>

              {/* Stats - hidden on mobile as they appear above */}
              <div className="hidden lg:flex mt-10 justify-between border-t border-gray-200 pt-6">
                <div className="text-center">
                  <div className="text-2xl md:text-3xl font-bold">95%</div>
                  <div className="text-xs sm:text-sm uppercase tracking-wide text-gray-500">
                    Return Rate
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-2xl md:text-3xl font-bold">12+</div>
                  <div className="text-xs sm:text-sm uppercase tracking-wide text-gray-500">
                    Years Experience
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-2xl md:text-3xl font-bold">5K+</div>
                  <div className="text-xs sm:text-sm uppercase tracking-wide text-gray-500">
                    Happy Clients
                  </div>
                </div>
              </div>

              {/* Team indicator - improved responsive spacing */}
              <div className="mt-8 lg:mt-10 flex flex-wrap items-center">
                <div className="flex -space-x-2 sm:-space-x-3">
                  {[...Array(4)].map((_, i) => (
                    <div
                      key={i}
                      className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-gray-300 border-2 border-white flex items-center justify-center text-xs font-medium"
                    >
                      {String.fromCharCode(65 + i)}
                    </div>
                  ))}
                </div>
                <div className="ml-3 sm:ml-4 flex items-center">
                  <Users className="w-3 h-3 sm:w-4 sm:h-4 text-gray-500 mr-1 sm:mr-2" />
                  <span className="text-xs sm:text-sm text-gray-500">
                    Our Professional Team
                  </span>
                </div>
              </div>
            </div>

            {/* Decorative element - responsive positioning and size */}
            <div className="absolute -bottom-4 -right-4 sm:-bottom-5 sm:-right-5 md:-bottom-6 md:-right-6 w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 border-4 sm:border-6 md:border-8 border-white bg-black rounded-lg sm:rounded-xl hidden sm:block"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUsSection;