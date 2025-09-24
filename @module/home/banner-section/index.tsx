"use client";

import React, { useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import SwiperCore from "swiper";
import "swiper/css";

interface Slide {
  title: string;
  subtitle: string;
  description: string;
  image: string;
}

const slides: Slide[] = [
  {
    subtitle: "Special Offer",
    title: "Modern Wooden Dining Chairs",
    description: "Get discount code up to 20% here",
    image:
      "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=1200&auto=format",
  },
  {
    subtitle: "Hot Deal",
    title: "Stylish Office Chairs",
    description: "Upgrade your workspace with comfort",
    image:
      "https://images.unsplash.com/photo-1505691938895-1758d7feb511?w=1200&auto=format",
  },
];

const BannerSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const swiperRef = useRef<SwiperCore | null>(null);

  const time = { days: 0, hours: 0, mins: 0, secs: 0 };

  return (
    <section className=" py-10 container mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* LEFT: Swiper */}
        <div className="lg:col-span-2 w-full relative">
          <Swiper
            modules={[Pagination]}
            loop={false}
            spaceBetween={20}
            slidesPerView={1}
            onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
            onSwiper={(swiper) => (swiperRef.current = swiper)}
            className="rounded-xl shadow-sm overflow-hidden"
          >
            {slides.map((slide, idx) => (
              <SwiperSlide key={idx}>
                <div className="relative w-full h-[300px] md:h-[400px] lg:h-[500px] rounded-xl overflow-hidden">
                  <img
                    src={slide.image}
                    alt={slide.title}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                  <div className="absolute inset-0 flex flex-col justify-center md:justify-start md:pt-16 lg:pt-24 pl-6 md:pl-12 text-white">
                    <p className="text-sm font-semibold text-red-500 animate-fadeInDown">
                      {slide.subtitle}
                    </p>
                    <h2 className="text-2xl md:text-3xl font-bold mt-2 animate-fadeInDown hover:text-red-500 transition-all duration-500">
                      {slide.title}
                    </h2>
                    <p className="mt-2 text-sm md:text-base animate-fadeInUp transition-all duration-500">
                      {slide.description}
                    </p>
                    <button className="mt-4 px-5 py-2 border border-white rounded-md hover:bg-white hover:text-black transition-all duration-500 w-max">
                      Shop Now
                    </button>
                  </div>

                  {/* ✅ Custom Pagination */}
                  <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-3">
                    {slides.map((_, i) => (
                      <span
                        key={i}
                        onClick={() => {
                          setActiveIndex(i);
                          swiperRef.current?.slideTo(i);
                        }}
                        className={`cursor-pointer rounded-full transition-all duration-300 ${
                          activeIndex === i
                            ? "w-4 h-4 bg-black"
                            : "w-3 h-3 bg-black opacity-50"
                        }`}
                      ></span>
                    ))}
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* RIGHT: Static Promo with background image */}
        <div className="relative w-full h-[300px] md:h-[400px] lg:h-[500px] rounded-xl overflow-hidden shadow-sm">
          {/* Background Image */}
          <img
            src="https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=1200&auto=format"
            alt="Cyber Sale"
            className="w-full h-full object-cover"
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-black/30"></div>

          {/* Content on top */}
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white p-6">
            <h2 className="text-2xl font-bold animate-fadeInDown">
              Cyber Sale
            </h2>
            <p className="text-sm md:text-base mt-2 animate-fadeInDown">
              20% off when buying and paying online
            </p>

            {/* Timer */}
            <div className="flex gap-4 mt-6 justify-center">
              {Object.entries(time).map(([label, value], i) => (
                <div key={i} className="text-center animate-fadeInUp">
                  <div className="w-14 h-14 flex items-center justify-center bg-black text-white rounded-full text-lg font-bold">
                    {value.toString().padStart(2, "0")}
                  </div>
                  <p className="text-xs mt-1 font-semibold">
                    {label.toUpperCase()}
                  </p>
                </div>
              ))}
            </div>

            {/* Button */}
            <button className="mt-6 px-6 py-2 hover:bg-white hover:text-black rounded-md bg-black text-white transition-all duration-500">
              Shop All
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BannerSection;
