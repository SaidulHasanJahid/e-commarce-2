"use client";

import { useRef, useState, useEffect } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { useGetHomeBannerQuery } from "@/appstore/banner/api";

// ----------------------------
// SAFE IMAGE URL
// ----------------------------
const BACKEND_BASE_URL =
  process.env.NEXT_PUBLIC_API_URL || "https://grocery.reclinerbdking.com";

const getSafeImageUrl = (url?: string | null): string => {
  if (!url || url === "null" || url === "undefined") return "/placeholder.png";

  if (url.startsWith("http://") || url.startsWith("https://")) return url;

  if (url.startsWith("/uploads")) return `${BACKEND_BASE_URL}${url}`;

  if (url.startsWith("/")) return `${BACKEND_BASE_URL}${url}`;

  return `${BACKEND_BASE_URL}/uploads/${url}`;
};
// ----------------------------

export default function HeroSlider() {
  const prevRef = useRef<HTMLDivElement>(null);
  const nextRef = useRef<HTMLDivElement>(null);
  const [swiperInstance, setSwiperInstance] = useState<any>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const { data: BannerData } = useGetHomeBannerQuery();
  const slides = BannerData?.data || [];

  // Setup navigation
  useEffect(() => {
    if (swiperInstance) {
      swiperInstance.params.navigation.prevEl = prevRef.current;
      swiperInstance.params.navigation.nextEl = nextRef.current;
      swiperInstance.navigation.init();
      swiperInstance.navigation.update();
    }
  }, [swiperInstance]);

  return (
    <div className="relative w-full h-[489px] lg:mt-[-20px] overflow-hidden group sm:h-[460px] xs:h-[350px]">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        loop
        speed={800}
        onSwiper={(swiper) => setSwiperInstance(swiper)}
        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
        navigation={{ prevEl: prevRef.current, nextEl: nextRef.current }}
        pagination={{
          clickable: true,
          el: ".custom-pagination",
          bulletClass: "swiper-pagination-bullet custom-bullet",
          bulletActiveClass: "custom-bullet-active",
        }}
        className="w-full h-full"
      >
        {slides.map((slide: any, index: number) => (
          <SwiperSlide key={slide.id || index}>
            <div className="relative w-full h-full">
              {/* ✅ Safe Image */}
              <Image
                src={getSafeImageUrl(slide.thumbnailUrl)}
                alt={slide.name || "Banner"}
                fill
                priority
                className="object-cover object-center"
              />

              {/* Overlay Text */}
              {activeIndex === index && (
                <div className="absolute inset-0 flex flex-col justify-center ml-10 px-10 z-20 sm:ml-6 sm:px-6 xs:px-4">
                  <motion.div
                    key={slide.id + activeIndex}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="flex flex-col"
                  >
                    {slide.subtitle && (
                      <motion.p
                        className="text-[24px] text-black mb-2 sm:text-[18px] xs:text-[16px]"
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                      >
                        {slide.subtitle}
                      </motion.p>
                    )}

                    {slide.name && (
                      <motion.h2
                        className="text-[60px] font-bold text-[#000] leading-tight mb-4 sm:text-[40px] xs:text-[28px] xs:leading-snug"
                        initial={{ opacity: 0, x: -40 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                      >
                        {slide.name}
                      </motion.h2>
                    )}

                    {slide.description && (
                      <motion.p
                        className="text-[18px] text-[#000] mb-6 max-w-lg sm:text-[16px] xs:text-[14px] xs:max-w-xs"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.7, delay: 0.5 }}
                      >
                        {slide.description}
                      </motion.p>
                    )}

                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.7 }}
                      className="bg-white text-black cursor-pointer w-[160px] h-[50px] px-6 py-3 rounded shadow hover:bg-gray-800 hover:text-white transition sm:w-[130px] sm:h-[45px] sm:text-sm xs:w-[110px] xs:h-[40px]"
                    >
                      Shop Now
                    </motion.button>
                  </motion.div>
                </div>
              )}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Pagination */}
      <div className="absolute z-20 bottom-16 left-10">
        <div className="flex custom-pagination"></div>
      </div>

      {/* Navigation Arrows */}
      <div className="absolute right-6 bottom-10 flex space-x-3 opacity-0 group-hover:opacity-100 transition-all z-20">
        <div
          ref={prevRef}
          className="w-12 h-12 flex items-center justify-center bg-white text-black rounded-full shadow cursor-pointer hover:bg-[#f93355] hover:text-white transition-all sm:w-10 sm:h-10"
          onClick={() => swiperInstance?.slidePrev()}
        >
          <ChevronLeft />
        </div>
        <div
          ref={nextRef}
          className="w-12 h-12 flex items-center justify-center bg-white text-black rounded-full shadow cursor-pointer hover:bg-[#f93355] hover:text-white transition-all sm:w-10 sm:h-10"
          onClick={() => swiperInstance?.slideNext()}
        >
          <ChevronRight />
        </div>
      </div>

      {/* Pagination CSS */}
      <style jsx global>{`
        .custom-bullet {
          width: 10px;
          height: 10px;
          background: white;
          opacity: 0.5;
          border-radius: 50%;
          cursor: pointer;
          margin: 0 3px;
        }
        .custom-bullet-active {
          opacity: 1;
          background: white;
          transform: scale(1.2);
        }
      `}</style>
    </div>
  );
}
