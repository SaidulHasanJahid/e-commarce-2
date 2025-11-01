"use client";

import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";
import { IoChevronBack, IoChevronForward } from "react-icons/io5";
import Image from "next/image";
import Link from "next/link";
import { FiChevronRight } from "react-icons/fi";

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
<>
    {/* Breadcrumb */}
    <nav className="w-full bg-[#f7f7f7] py-8 px-4" aria-label="Breadcrumb">
      <ol className="flex flex-wrap justify-center items-center text-[14px] text-[#666666]">
        <li className="flex items-center">
          <Link
            href="/"
            className="hover:text-[#f93355] transition-colors cursor-pointer"
          >
            Home
          </Link>
          <FiChevronRight className="mx-2 text-[#666666] text-sm" />
        </li>
        <li className="flex items-center text-[#000] font-medium cursor-default"> 
          Collections
        </li>
      </ol>
    </nav>
    <div className="container mx-auto px-3 sm:px-4 md:px-6 mt-20 relative">
      <h2 className="font-semibold text-[24px] sm:text-[28px] md:text-[30px] text-[#000000] mt-16 mb-7 text-center md:text-left">
        Our Featured Offers
      </h2>

      <div className="relative">
        {/* Left Arrow (Visible on all devices) */}
        <div className="custom-prev absolute top-1/2 -translate-y-1/2 left-1 sm:left-2 z-20">
          <button
            onClick={() => swiperRef.current?.slidePrev()}
            className="w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center rounded-full 
                       bg-black text-white cursor-pointer transition-all duration-300 ease-in-out
                       hover:bg-white hover:text-black hover:shadow-lg hover:scale-110"
          >
            <IoChevronBack size={20} />
          </button>
        </div>

        {/* Swiper */}
        <div className="w-full px-6 sm:px-8 md:px-10 lg:px-12 mb-10">
          <Swiper
            modules={[Autoplay]}
            onSwiper={(swiper) => (swiperRef.current = swiper)}
            spaceBetween={16}
            slidesPerView={2}
            loop={true}
            grabCursor={true}
            speed={800}
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            breakpoints={{
              480: { slidesPerView: 2, spaceBetween: 16 },
              640: { slidesPerView: 2.3, spaceBetween: 18 },
              768: { slidesPerView: 3, spaceBetween: 20 },
              1024: { slidesPerView: 4, spaceBetween: 24 },
            }}
          >
            {offers.map((offer) => (
              <SwiperSlide key={offer.id}>
                <div
                  className="flex flex-col items-center text-center p-3 sm:p-4 rounded-xl h-full cursor-pointer 
                             transition-all duration-500 ease-in-out hover:scale-105"
                >
                  {/* Circle Image */}
                  <div
                    className={`w-[100px] h-[100px] sm:w-[150px] sm:h-[150px] md:w-[200px] md:h-[200px] lg:w-[260px] lg:h-[260px]
                                rounded-full overflow-hidden relative mb-4 sm:mb-6 flex items-center justify-center 
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
                    <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-[22px] text-[#000000] w-full transition-all duration-300">
                      {offer.title}
                    </p>
                  </div>

                  {/* Button */}
                  <button
                    className="w-[110px] sm:w-[130px] md:w-[140px] mt-3 sm:mt-4 h-[40px] sm:h-[45px] md:h-[50px] 
                               font-semibold text-sm sm:text-[15px] text-[#000000] border rounded-md 
                               border-[#eeeeee] cursor-pointer transition-all duration-500 ease-in-out
                               hover:bg-white hover:text-black hover:shadow-lg hover:scale-105"
                  >
                    Shop Now
                  </button>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Right Arrow (Visible on all devices) */}
        <div className="custom-next absolute top-1/2 -translate-y-1/2 right-1 sm:right-2 z-20">
          <button
            onClick={() => swiperRef.current?.slideNext()}
            className="w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center rounded-full 
                       bg-black text-white cursor-pointer transition-all duration-300 ease-in-out
                       hover:bg-white hover:text-black hover:shadow-lg hover:scale-110"
          >
            <IoChevronForward size={20} />
          </button>
        </div>
      </div>
    </div>
</>
  );
}
