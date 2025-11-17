"use client";

import React, { useRef, useState } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { IoChevronBack, IoChevronForward } from "react-icons/io5";

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
  const swiperRef = useRef<any>(null);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const showArrows = offers.length >= 4;

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

      {/* Swiper */}
      <div className="relative group">
        <Swiper
          modules={[Navigation, Autoplay]}
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          slidesPerView={1}
          spaceBetween={20}
          loop={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          navigation={{
            prevEl: ".swiper-prev",
            nextEl: ".swiper-next",
          }}
          breakpoints={{
            640: { slidesPerView: 2, spaceBetween: 20 },
            768: { slidesPerView: 3, spaceBetween: 25 },
            1024: { slidesPerView: 4, spaceBetween: 30 },
          }}
        >
          {offers.map((offer) => (
            <SwiperSlide key={offer.id}>
              <div
                onMouseEnter={() => setHoveredCard(offer.id)}
                onMouseLeave={() => setHoveredCard(null)}
                className="group flex flex-col items-center text-center p-4 rounded-xl h-full cursor-pointer transition-transform duration-300"
              >
                {/* Circle Image */}
                <div
                  className={`w-[130px] sm:w-[180px] md:w-[220px] lg:w-[260px] h-[130px] sm:h-[180px] md:h-[220px] lg:h-[260px] rounded-full overflow-hidden relative mb-6 flex items-center justify-center ${offer.bgColor} transition-transform duration-500 ${
                    hoveredCard === offer.id ? "scale-105" : ""
                  }`}
                >
                  <Image
                    src={offer.image}
                    alt={offer.title}
                    fill
                    className={`object-cover transition-transform duration-500 ease-in-out ${
                      hoveredCard === offer.id ? "scale-110" : "scale-100"
                    }`}
                  />
                </div>

                {/* Text */}
                <div className="flex flex-col justify-between flex-1 w-full">
                  <p className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-[24px] text-[#000000] w-full">
                    {offer.title}
                  </p>
                </div>

                {/* Shop Now Button — always visible */}
                <button className="w-[140px] mt-4 h-[50px] font-semibold px-[13px] text-[#000000] border rounded-md transition-all duration-300 ease-in-out border-[#eeeeee] hover:border-[#000000] hover:scale-105 cursor-pointer">
                  Shop Now
                </button>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Custom Arrow Icons — show only if >=4 cards */}
        {showArrows && (
          <>
            <IoChevronBack
              className="swiper-prev absolute top-1/2 -left-4 transform -translate-y-1/2 text-3xl text-black opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 cursor-pointer"
            />
            <IoChevronForward
              className="swiper-next absolute top-1/2 -right-4 transform -translate-y-1/2 text-3xl text-black opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 cursor-pointer"
            />
          </>
        )}
      </div>
    </section>
  );
}
