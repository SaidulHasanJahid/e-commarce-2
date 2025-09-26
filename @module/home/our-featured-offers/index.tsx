"use client";

import React from "react";
import Image from "next/image";

const offers = [
  {
    id: 1,
    title: "Save up to $40 on select cellphone & tablet",
    image: "https://images.pexels.com/photos/799443/pexels-photo-799443.jpeg",
    bgColor: "bg-[#fdf6e3]",
  },
  {
    id: 2,
    title: "Save up to 25% on furniture items",
    image: "https://images.pexels.com/photos/1866149/pexels-photo-1866149.jpeg",
    bgColor: "bg-[#e6e9f8]",
  },
  {
    id: 3,
    title: "Save up to $69 on select perfume items",
    image: "https://images.pexels.com/photos/965989/pexels-photo-965989.jpeg",
    bgColor: "bg-[#fde7eb]",
  },
  {
    id: 4,
    title: "Save up to 30% on audio items",
    image: "https://images.pexels.com/photos/3394659/pexels-photo-3394659.jpeg",
    bgColor: "bg-[#e3f6f3]",
  },
];

export default function FeaturedOffers() {
  return (
    <section className="w-full container mx-auto px-4 py-12">
      {/* Header */}
      <div className="flex flex-col lg:flex-row justify-between items-center mb-8">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-medium text-[#000000] mb-4 lg:mb-0 text-center lg:text-left">
          Our Featured Offers
        </h2>
        <a
          href="#"
          className="text-[14px] underline hover:text-gray-700 transition-all duration-300"
        >
          See All Products
        </a>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
        {offers.map((offer) => (
          <div
            key={offer.id}
            className="group flex flex-col items-center text-center p-4 rounded-xl h-full cursor-pointer"
          >
            {/* Circle Image */}
            <div
              className={`w-[130px] sm:w-[180px] md:w-[220px] lg:w-[260px] h-[130px] sm:h-[180px] md:h-[220px] lg:h-[260px] rounded-full overflow-hidden relative mb-6 flex items-center justify-center ${offer.bgColor}`}
            >
              <Image
                src={offer.image}
                alt={offer.title}
                fill
                className="object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
              />
            </div>

            {/* Text + Button */}
            <div className="flex flex-col justify-between flex-1 w-full">
              <p className="text-sm sm:text-base md:text-base font-medium mb-4 min-h-[48px] flex items-center justify-center px-2">
                {offer.title}
              </p>
              <button className="w-full sm:w-auto px-4 sm:px-6 py-2 border rounded-md transition-all duration-300 ease-in-out group-hover:text-white group-hover:bg-gray-800 hover:scale-105 cursor-pointer">
                Shop Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
