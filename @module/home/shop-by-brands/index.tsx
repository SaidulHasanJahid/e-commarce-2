"use client";

import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Navigation, Autoplay } from "swiper/modules";
import { IoChevronBack, IoChevronForward } from "react-icons/io5";

const brands = [
  { id: 1, name: "Sony", img: "https://clinicmaster.goeasyapp.com/uploads/files/c4ca4238a0b923820dcc509a6f75849b/c4ca4238a0b923820dcc509a6f75849b//brand-07.png" },
  { id: 2, name: "ThinkPad", img: "https://clinicmaster.goeasyapp.com/uploads/files/c4ca4238a0b923820dcc509a6f75849b/c4ca4238a0b923820dcc509a6f75849b//brand-04.png" },
  { id: 3, name: "Huawei", img: "https://clinicmaster.goeasyapp.com/uploads/files/c4ca4238a0b923820dcc509a6f75849b/c4ca4238a0b923820dcc509a6f75849b//brand-06.png" },
  { id: 4, name: "Vivo", img: "https://clinicmaster.goeasyapp.com/uploads/files/c4ca4238a0b923820dcc509a6f75849b/c4ca4238a0b923820dcc509a6f75849b//brand-05.png" },
  { id: 5, name: "Hikoki", img: "https://clinicmaster.goeasyapp.com/uploads/files/c4ca4238a0b923820dcc509a6f75849b/c4ca4238a0b923820dcc509a6f75849b//brand-01.png" },
  { id: 6, name: "Samsung", img: "https://clinicmaster.goeasyapp.com/uploads/files/c4ca4238a0b923820dcc509a6f75849b/c4ca4238a0b923820dcc509a6f75849b//brand-03.png" },
  { id: 7, name: "LG", img: "https://clinicmaster.goeasyapp.com/uploads/files/c4ca4238a0b923820dcc509a6f75849b/c4ca4238a0b923820dcc509a6f75849b/brand-02.png" },
];

export default function ShopByBrands() {
  const swiperRef = useRef<any>(null);

  return (
    <div className="container mx-auto px-4 mt-12 relative group">
      {/* Header */}
      <h2 className="ml-12 text-[30px] font-semibold text-[#000000] mt-10 mb-7">
        Shop By Brands
      </h2>

      <div className="relative">
        {/* Left Arrow */}
        <div className="absolute top-1/2 -translate-y-1/2 left-2 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <button
            onClick={() => swiperRef.current?.slidePrev()}
            className="w-10 h-10 flex items-center justify-center rounded-full shadow 
                       bg-black text-white cursor-pointer transition-all duration-300
                       hover:bg-white hover:text-black hover:scale-110"
          >
            <IoChevronBack size={20} />
          </button>
        </div>

        {/* Swiper */}
        <div className="w-full px-12 mb-15">
          <Swiper
            modules={[Navigation, Autoplay]}
            onSwiper={(swiper) => (swiperRef.current = swiper)}
            spaceBetween={24}
            slidesPerView={2}
            loop={true}
            grabCursor={true}
            speed={800}
            autoplay={{ delay: 4000, disableOnInteraction: false }}
            breakpoints={{
              640: { slidesPerView: 3 },
              768: { slidesPerView: 4 },
              1024: { slidesPerView: 6 },
            }}
          >
            {brands.map((brand) => (
              <SwiperSlide key={brand.id}>
                <div
                  className="w-[173px] h-[116px] border border-gray-200 mx-auto flex items-center justify-center 
                             transition-all duration-500 ease-in-out 
                             hover:shadow-lg hover:border-black hover:scale-[1.03] cursor-pointer"
                >
                  <img
                    src={brand.img}
                    alt={brand.name}
                    className="max-w-[90%] max-h-[80%] object-contain transition-transform duration-500 ease-in-out hover:scale-105"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Right Arrow */}
        <div className="absolute top-1/2 -translate-y-1/2 right-2 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <button
            onClick={() => swiperRef.current?.slideNext()}
            className="w-10 h-10 flex items-center justify-center rounded-full shadow 
                       bg-black text-white cursor-pointer transition-all duration-300
                       hover:bg-white hover:text-black hover:scale-110"
          >
            <IoChevronForward size={20} />
          </button>
        </div>
      </div>
    </div>
  );
}
