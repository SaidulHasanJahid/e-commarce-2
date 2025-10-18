"use client";

import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";
import { IoChevronBack, IoChevronForward } from "react-icons/io5";
import Image from "next/image";

const offers = [
  {
    id: 1,
    title: "Save up to 25% on furniture items",
    image:
      "https://clinicmaster.goeasyapp.com/uploads/files/c4ca4238a0b923820dcc509a6f75849b/c4ca4238a0b923820dcc509a6f75849b/collection-4.jpg",
    bgColor: "bg-[#f3f4f6]",
  },
  {
    id: 2,
    title: "Save up to $69 on select perfume items",
    image:
      "https://clinicmaster.goeasyapp.com/uploads/files/c4ca4238a0b923820dcc509a6f75849b/c4ca4238a0b923820dcc509a6f75849b/collection-3.jpg",
    bgColor: "bg-[#fde2e4]",
  },
  {
    id: 3,
    title: "Save up to 30% on audio items",
    image:
      "https://clinicmaster.goeasyapp.com/uploads/files/c4ca4238a0b923820dcc509a6f75849b/c4ca4238a0b923820dcc509a6f75849b/banner3.jpg",
    bgColor: "bg-[#e0f7f5]",
  },
  {
    id: 4,
    title: "Hooded jackets for women",
    image:
      "https://clinicmaster.goeasyapp.com/uploads/files/c4ca4238a0b923820dcc509a6f75849b/c4ca4238a0b923820dcc509a6f75849b/banner2.jpg",
    bgColor: "bg-[#fff0db]",
  },
  {
    id: 5,
    title: "Exclusive shoes collection",
    image:
      "https://clinicmaster.goeasyapp.com/uploads/files/c4ca4238a0b923820dcc509a6f75849b/c4ca4238a0b923820dcc509a6f75849b/collection-circle-10.jpg",
    bgColor: "bg-[#f0e6ff]",
  },
  {
    id: 6,
    title: "Smart watches discount",
    image:
      "https://clinicmaster.goeasyapp.com/uploads/files/c4ca4238a0b923820dcc509a6f75849b/c4ca4238a0b923820dcc509a6f75849b/collection-2.jpg",
    bgColor: "bg-[#e7f5ff]",
  },
];

export default function FeaturedOffers() {
  const swiperRef = useRef<any>(null);

  return (
    <div className="container mx-auto px-4 mt-20 relative">
      <h2 className="font-semibold text-[30px] text-[#000000] mt-20 mb-7">
        Our Featured Offers
      </h2>

      <div className="relative">
        {/* Left Arrow */}
        <div className="custom-prev absolute top-1/2 -translate-y-1/2 left-2 z-20 hidden lg:block">
          <button
            onClick={() => swiperRef.current?.slidePrev()}
            className="w-11 h-11 flex items-center justify-center rounded-full 
                       bg-black text-white cursor-pointer transition-all duration-300 ease-in-out
                       hover:bg-white hover:text-[#000] hover:shadow-lg hover:scale-110"
          >
            <IoChevronBack size={22} />
          </button>
        </div>

        {/* Swiper */}
        <div className="w-full px-12 mb-22">
          <Swiper
            modules={[Autoplay]}
            onSwiper={(swiper) => (swiperRef.current = swiper)}
            spaceBetween={24}
            slidesPerView={4}
            loop={true}
            grabCursor={true}
            speed={800}
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            breakpoints={{
              640: { slidesPerView: 2 },
              768: { slidesPerView: 3 },
              1024: { slidesPerView: 4 },
            }}
          >
            {offers.map((offer) => (
              <SwiperSlide key={offer.id}>
                {/* Card */}
                <div
                  className="flex flex-col items-center text-center p-4 rounded-xl h-full cursor-pointer 
                             transition-all duration-500 ease-in-out hover:scale-105"
                >
                  {/* Circle Image */}
                  <div
                    className={`w-[130px] sm:w-[180px] md:w-[220px] lg:w-[260px] 
                                h-[130px] sm:h-[180px] md:h-[220px] lg:h-[260px] 
                                rounded-full overflow-hidden relative mb-6 flex items-center justify-center 
                                transition-all duration-500 ease-in-out ${offer.bgColor}`}
                  >
                    <Image
                      src={offer.image}
                      alt={offer.title}
                      fill
                      className="object-cover transition-transform duration-700 ease-in-out hover:scale-110"
                    />
                  </div>

                  {/* Text */}
                  <div className="flex flex-col justify-between flex-1 w-full">
                    <p className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-[24px] text-[#000000] w-full transition-all duration-300">
                      {offer.title}
                    </p>
                  </div>

                  {/* Button */}
                  <button
                    className="w-[140px] mt-4 h-[50px] font-semibold px-[13px] text-[#000000] border rounded-md 
                               transition-all duration-500 ease-in-out border-[#eeeeee] cursor-pointer
                               hover:bg-white hover:text-[#000000] hover:shadow-lg hover:scale-105"
                  >
                    Shop Now
                  </button>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Right Arrow */}
        <div className="custom-next absolute top-1/2 -translate-y-1/2 right-2 z-20 hidden lg:block">
          <button
            onClick={() => swiperRef.current?.slideNext()}
            className="w-11 h-11 flex items-center justify-center rounded-full 
                       bg-black text-white cursor-pointer transition-all duration-300 ease-in-out
                       hover:bg-white hover:text-[#000000] hover:shadow-lg hover:scale-110"
          >
            <IoChevronForward size={22} />
          </button>
        </div>
      </div>
    </div>
  );
}
