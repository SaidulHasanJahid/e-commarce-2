"use client";

import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Navigation, Autoplay } from "swiper/modules";
import { IoChevronBack, IoChevronForward } from "react-icons/io5";

const categories = [
  { id: 1, name: "Electronics", items: 8, img: "https://clinicmaster.goeasyapp.com/uploads/files/c4ca4238a0b923820dcc509a6f75849b/c4ca4238a0b923820dcc509a6f75849b/cat2.jpg" },
  { id: 2, name: "Fashion", items: 12, img: "https://clinicmaster.goeasyapp.com/uploads/files/c4ca4238a0b923820dcc509a6f75849b/c4ca4238a0b923820dcc509a6f75849b//Fa_27b.jpg" },
  { id: 3, name: "Furniture", items: 7, img: "https://clinicmaster.goeasyapp.com/uploads/files/c4ca4238a0b923820dcc509a6f75849b/c4ca4238a0b923820dcc509a6f75849b/cat4.jpg" },
  { id: 4, name: "Jewelry", items: 7, img: "https://clinicmaster.goeasyapp.com/uploads/files/c4ca4238a0b923820dcc509a6f75849b/c4ca4238a0b923820dcc509a6f75849b/cat8.jpg" },
  { id: 5, name: "Cosmetics", items: 7, img: "https://clinicmaster.goeasyapp.com/uploads/files/c4ca4238a0b923820dcc509a6f75849b/c4ca4238a0b923820dcc509a6f75849b/cat5.jpg" },
  { id: 6, name: "Handbags", items: 8, img: "https://clinicmaster.goeasyapp.com/uploads/files/c4ca4238a0b923820dcc509a6f75849b/c4ca4238a0b923820dcc509a6f75849b/cat7.jpg" },
  { id: 7, name: "Game & Console", items: 7, img: "https://clinicmaster.goeasyapp.com/uploads/files/c4ca4238a0b923820dcc509a6f75849b/c4ca4238a0b923820dcc509a6f75849b/cat3.jpg" },
  { id: 8, name: "Toys", items: 5, img: "https://clinicmaster.goeasyapp.com/uploads/files/c4ca4238a0b923820dcc509a6f75849b/c4ca4238a0b923820dcc509a6f75849b/cat1.jpg" },
  { id: 9, name: "Books", items: 15, img: "https://clinicmaster.goeasyapp.com/uploads/files/c4ca4238a0b923820dcc509a6f75849b/c4ca4238a0b923820dcc509a6f75849b/cat7.jpg" },
  { id: 10, name: "Sports", items: 6, img: "https://clinicmaster.goeasyapp.com/uploads/files/c4ca4238a0b923820dcc509a6f75849b/c4ca4238a0b923820dcc509a6f75849b/cat4.jpg" },
];

export default function FeaturedCategories() {
  const swiperRef = useRef<any>(null);

  return (
    <div className="container mx-auto px-4 mt-12 relative">
      <h2 className="text-center text-[30px] text-[#000000] mt-10 mb-7">
        Featured Categories
      </h2>

      <div className="relative">
        {/* Left Arrow */}
        <div className="custom-prev absolute top-1/2 -translate-y-1/2 left-2 z-20">
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
        <div className="w-full px-12">
          <Swiper
            modules={[Navigation, Autoplay]}
            onSwiper={(swiper) => (swiperRef.current = swiper)}
            spaceBetween={24}
            slidesPerView={2}
            loop={true}
            grabCursor={true}
            freeMode={true}
            speed={800}
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            breakpoints={{
              640: { slidesPerView: 3 },
              768: { slidesPerView: 4 },
              1024: { slidesPerView: 6 },
            }}
          >
            {categories.map((cat: any) => (
              <SwiperSlide key={cat.id}>
                <div className="text-center cursor-pointer">
                  <div className="w-[140px] h-[140px] sm:w-[156px] sm:h-[156px] mx-auto rounded-full border border-gray-300 flex 
                                  items-center justify-center overflow-hidden transition-all duration-300 
                                  hover:border-black hover:shadow-lg">
                    <img
                      src={cat.img}
                      alt={cat.name}
                      className="w-full h-full object-contain transition-transform duration-300 hover:scale-105"
                    />
                  </div>
                  <p className="mt-2 font-medium text-[#000] text-[18px] sm:text-[22px]">
                    {cat.name}
                  </p>
                  <p className="text-sm text-[#888]">{cat.items} Items</p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Right Arrow */}
        <div className="custom-next absolute top-1/2 -translate-y-1/2 right-2 z-20">
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
