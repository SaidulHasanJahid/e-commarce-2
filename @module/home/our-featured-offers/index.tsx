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
    <section className="w-full max-w-7xl mx-auto px-4 py-12">
      {/* Header */}
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-2xl font-semibold">Our Featured Offers</h2>
        <a
          href="#"
          className="text-sm underline hover:text-gray-700 transition-all duration-300"
        >
          See All Products
        </a>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-10">
        {offers.map((offer) => (
          <div
            key={offer.id}
            className="flex flex-col items-center text-center p-4 rounded-xl h-full"
          >
            {/* Circle Image */}
            <div
              className={`w-48 h-48 rounded-full overflow-hidden relative mb-6 flex items-center justify-center ${offer.bgColor} cursor-pointer`}
            >
              <Image
                src={offer.image}
                alt={offer.title}
                fill
                className="object-cover transition-transform duration-500 ease-in-out hover:scale-110"
              />
            </div>

            {/* Text + Button aligned */}
            <div className="flex flex-col justify-between flex-1">
              <p className="text-base font-medium mb-4 min-h-[48px] flex items-center justify-center">
                {offer.title}
              </p>
              <button className="px-6 py-2 border rounded-md transition-all duration-300 ease-in-out hover:bg-gray-800 hover:text-white hover:scale-105 cursor-pointer">
                Shop Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
