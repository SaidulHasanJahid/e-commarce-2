"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import { useRef } from "react";

const slides = [
  {
    id: 1,
    title: "Playstation Controller",
    subtitle: "New Arrivals",
    desc: "Here’s a fresh take on an old favorite.",
    img: "https://picsum.photos/seed/slide1/1600/700",
  },
  {
    id: 2,
    title: "Modern Chair",
    subtitle: "Trending",
    desc: "Stylish and comfortable for your living room.",
    img: "https://picsum.photos/seed/slide2/1600/700",
  },
  {
    id: 3,
    title: "Smart Watch",
    subtitle: "Best Selling",
    desc: "Stay connected with the latest technology.",
    img: "https://picsum.photos/seed/slide3/1600/700",
  },
];

export default function HeroSlider() {
  const prevRef = useRef<HTMLDivElement | null>(null);
  const nextRef = useRef<HTMLDivElement | null>(null);

  return (
    <div className="relative w-full h-[479px] rounded-lg overflow-hidden">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        loop={true}
        speed={700}
        pagination={{
          clickable: true,
          bulletClass: "swiper-pagination-bullet custom-bullet",
          bulletActiveClass: "custom-bullet-active",
        }}
        onBeforeInit={(swiper) => {
          // @ts-ignore
          swiper.params.navigation.prevEl = prevRef.current;
          // @ts-ignore
          swiper.params.navigation.nextEl = nextRef.current;
        }}
        navigation={{
          prevEl: prevRef.current,
          nextEl: nextRef.current,
        }}
        className="w-full h-full"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div className="relative w-full h-full z-40">
              {/* Background Image */}
              <Image
                src={slide.img}
                alt={slide.title}
                fill
                priority
                className="object-cover"
              />

              {/* Overlay Content */}
              <div className="absolute inset-0 flex flex-col items-start justify-center px-10 bg-white/20">
                <motion.p
                  className="text-sm text-black text-[24px] mb-2"
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                >
                  {slide.subtitle}
                </motion.p>
                <motion.h2
                  className="text-4xl md:text-6xl font-semibold text-[74px] text-black leading-tight mb-4"
                  initial={{ opacity: 0, x: -40 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.7 }}
                >
                  {slide.title}
                </motion.h2>
                <motion.p
                  className="text-lg text-black mb-6 max-w-lg"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.8 }}
                >
                  {slide.desc}
                </motion.p>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-white text-black cursor-pointer px-6 py-3 rounded shadow hover:bg-gray-800 hover:text-white transition"
                >
                  Shop Now
                </motion.button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Navigation Arrows */}
      <div className="absolute bottom-6 right-6 flex items-center space-x-3 z-20">
        <div
          ref={prevRef}
          className="w-12 h-12 flex items-center justify-center bg-white text-[#333] rounded-full shadow cursor-pointer hover:scale-110 transition"
        >
          <ChevronLeft />
        </div>
        <div
          ref={nextRef}
          className="w-12 h-12 flex items-center justify-center bg-white text-[#333] rounded-full shadow cursor-pointer hover:scale-110 transition"
        >
          <ChevronRight />
        </div>
      </div>

      <style jsx global>{`
        .custom-bullet {
          width: 10px;
          height: 10px;
          border: 2px solid #000;
          background: transparent;
          border-radius: 50%;
          margin: 0 4px !important;
          opacity: 1 !important;
        }
        .custom-bullet-active {
          background: #000 !important;
        }
        .swiper-pagination {
          bottom: 15px !important;
          left: 50% !important;
          transform: translateX(-50%);
        }
      `}</style>
    </div>
  );
}