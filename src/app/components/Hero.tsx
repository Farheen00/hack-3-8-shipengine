import Image from "next/image"; 
import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";

export default function Hero() {
  return (
    <section className="flex items-center justify-center min-h-screen bg-white">
      <div className="container bg-[#F0F2F3] min-h-screen flex flex-col-reverse lg:flex-row items-center justify-between gap-12 px-6 lg:px-12 rounded-b-3xl">
        {/* Left Content */}
        <div className="text-left max-w-xl flex flex-col gap-3">
          <p className="text-sm text-gray-500 uppercase tracking-wide text-center lg:text-left">
            Welcome To Chairy
          </p>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-snug text-center lg:text-left">
            Best Furniture Collection For Your Interior.
          </h1>
          <div className="mt-6 text-center lg:text-left">
            <button className="inline-flex px-6 py-3 mb-2 bg-teal-500 text-white rounded-lg shadow hover:bg-teal-600 transition items-center">
              Shop Now
              <FaArrowRightLong className="text-[#FFFFFF] text-sm mt-0 ml-2" />
            </button>
          </div>
        </div>

        {/* Right Image */}
        <div className="flex-shrink-0 w-full max-w-xs sm:max-w-sm lg:max-w-md">
          <Image 
            src="/pic1big.png"
            alt="chair" 
            className="w-full h-auto"
            width={380} 
            height={380} 
          />
        </div>
      </div>
    </section>
  );
}
