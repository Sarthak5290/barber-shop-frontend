"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, Clock, DollarSign, Scissors } from "lucide-react";
import Footer from "@/components/Footer";

const ServiceDetail = ({
  title,
  image,
  description,
  duration,
  price,
  benefits = [],
  process = [],
  recommendations,
}) => {
  return (
    <>
      {/* Hero section with image */}
      <div className="relative w-full h-[40vh] sm:h-[50vh] md:h-[60vh] lg:h-[70vh] overflow-hidden lg:-mt-22">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover brightness-75"
          priority
        />
        <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col items-center justify-center px-4">
          <h1 className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-wider text-center">
            {title}
          </h1>
        </div>

        {/* Back button */}
        <div className="absolute top-4 sm:top-8 left-4 sm:left-8">
          <Link
            href="/"
            className="inline-flex items-center text-white hover:text-gray-200 transition-colors duration-300"
          >
            <ChevronLeft className="w-5 h-5 mr-1" />
            <span className="text-sm sm:text-base">Back to Home</span>
          </Link>
        </div>
      </div>

      {/* Content */}
      <div className="bg-white py-12 sm:py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
          {/* Service overview */}
          <div className="mb-16">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-8">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 sm:mb-0">
                Service Overview
              </h2>
              <div className="flex space-x-6">
                <div className="flex items-center">
                  <Clock className="w-5 h-5 text-[#907454] mr-2" />
                  <span className="text-gray-700 text-sm sm:text-base">
                    {duration}
                  </span>
                </div>
                <div className="flex items-center">
                  <DollarSign className="w-5 h-5 text-[#907454] mr-2" />
                  <span className="text-gray-700 font-bold text-sm sm:text-base">
                    {price}
                  </span>
                </div>
              </div>
            </div>

            <p className="text-gray-700 leading-relaxed mb-6 text-sm sm:text-base">
              {description}
            </p>

            <Link
              href="/reservation"
              className="inline-flex items-center px-5 py-3 bg-[#907454] text-white rounded-lg hover:bg-[#82694b] transition-colors duration-300 text-sm sm:text-base"
            >
              <Scissors className="w-4 h-4 mr-2" />
              <span>Book This Service</span>
            </Link>
          </div>

          {/* Benefits */}
          {benefits.length > 0 && (
            <div className="mb-16">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Benefits
              </h3>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start">
                    <div className="w-6 h-6 rounded-full bg-[#907454] text-white flex items-center justify-center mr-3 flex-shrink-0">
                      <span className="text-xs font-bold">{index + 1}</span>
                    </div>
                    <p className="text-gray-700 text-sm sm:text-base">
                      {benefit}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Process */}
          {process.length > 0 && (
            <div className="mb-16">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Our Process
              </h3>
              <div className="space-y-6">
                {process.map((step, index) => (
                  <div
                    key={index}
                    className="bg-gray-50 p-6 rounded-lg flex flex-col sm:flex-row sm:items-center"
                  >
                    <div className="flex-shrink-0 text-[#907454] font-bold text-xl mr-4 mb-2 sm:mb-0">
                      Step {index + 1}
                    </div>
                    <div>
                      <h4 className="text-lg sm:text-xl font-semibold text-gray-900 mb-1">
                        {step.title}
                      </h4>
                      <p className="text-gray-700 text-sm sm:text-base">
                        {step.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Recommendations */}
          {recommendations && (
            <div className="mb-16">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Recommendations
              </h3>
              <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
                {recommendations}
              </p>
            </div>
          )}

          {/* CTA */}
          <div className="bg-gray-900 p-8 rounded-lg text-center">
            <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">
              Ready to Experience Our {title}?
            </h3>
            <p className="text-gray-400 mb-6 text-sm sm:text-base">
              Book your appointment today and let our skilled barbers take care
              of you.
            </p>
            <Link
              href="/reservation"
              className="inline-flex items-center px-5 py-3 bg-white text-gray-900 rounded-lg hover:bg-gray-100 transition-colors duration-300 text-sm sm:text-base"
            >
              Book Appointment
            </Link>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default ServiceDetail;
