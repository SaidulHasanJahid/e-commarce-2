
"use client";

import React, { useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { IoChevronBack, IoChevronForward } from "react-icons/io5";
import { useIsfeatureofferQuery } from "@/appstore/is-feature-offer/api";

// ----------------------------
// SAFE IMAGE URL HELPER
// ----------------------------
const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || "https://grocery.reclinerbdking.com";

const getSafeImageUrl = (path?: string | null) => {
  if (!path || path === "null" || path === "undefined") return "/placeholder.jpg";
  if (path.startsWith("http://") || path.startsWith("https://")) return path;
  if (path.startsWith("/uploads")) return `${BASE_URL}${path}`;
  if (path.startsWith("/")) return `${BASE_URL}${path}`;
  return `${BASE_URL}/uploads/${path}`;
};
// ----------------------------

export default function FeaturedOffers() {
  const swiperRef = useRef<any>(null);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const { data: apiData, isLoading } = useIsfeatureofferQuery();

  const offers = React.useMemo(() => {
    if (!apiData) return [];
    if (Array.isArray(apiData)) return apiData;
    if (Array.isArray(apiData.data)) return apiData.data;
    if (Array.isArray(apiData.offers)) return apiData.offers;
    return [];
  }, [apiData]);

  if (isLoading) {
    return (
      <section className="container mx-auto px-4 py-12">
        <h2 className="text-4xl font-medium mb-8 text-center">Loading offers...</h2>
      </section>
    );
  }

  if (!offers || offers.length === 0) return null;

  const showArrows = offers.length >= 4;

  return (
    <section className="w-full container mx-auto px-4 py-12">
      {/* Header */}
      <div className="flex flex-col lg:flex-row justify-between items-center mb-10">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-medium text-black text-center lg:text-left">
          Our Featured Offers
        </h2>
        <Link
          href="/offers"
          className="text-sm underline hover:text-gray-600 transition mt-4 lg:mt-0"
        >
          See All Products →
        </Link>
      </div>

      {/* Swiper */}
      <div className="relative group">
        <Swiper
          modules={[Navigation, Autoplay]}
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          slidesPerView={1}
          spaceBetween={20}
          loop={true}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          navigation={{
            prevEl: ".swiper-prev",
            nextEl: ".swiper-next",
          }}
          breakpoints={{
            640: { slidesPerView: 2 },
            768: { slidesPerView: 3 },
            1024: { slidesPerView: 4 },
          }}
          className="pb-8"
        >
          {offers.map((offer: any) => {
            const id = offer.id;
            const title = offer.name || "Special Offer";
            const imageUrl = getSafeImageUrl(offer.thumbnailUrl || offer.image);

            return (
              <SwiperSlide key={id}>
                <div
                  onMouseEnter={() => setHoveredCard(id)}
                  onMouseLeave={() => setHoveredCard(null)}
                  className="flex flex-col items-center text-center cursor-pointer select-none"
                >
                  {/* Perfect Circle Image with Full Fit & Zoom */}
                  <div className="relative w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 rounded-full overflow-hidden mb-6 shadow-lg ring-4 ring-white transition-all duration-500 hover:ring-gray-200">
                    <Image
                      src={imageUrl}
                      alt={title}
                      fill
                      className="object-cover transition-transform duration-700 ease-out"
                      style={{
                        transform: hoveredCard === id ? "scale(1.18)" : "scale(1)",
                      }}
                      priority
                    />
                    <div
                      className="absolute inset-0 rounded-full bg-black/0 hover:bg-black/10 transition-all duration-500"
                      style={{ pointerEvents: "none" }}
                    />
                  </div>

                  {/* Title */}
                  <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-black max-w-xs px-4 tracking-wide">
                    {title}
                  </h3>

                  {/* Shop Now Button */}
                  <button className="mt-6 px-8 py-3 cursor-pointer border-2 border-gray-300 rounded-sm font-semibold text-sm tracking-wider hover:border-black hover:bg-black hover:text-white transition-all duration-300">
                    Shop Now
                  </button>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>

        {/* Custom Navigation Arrows */}
        {showArrows && (
          <>
            <button className="swiper-prev absolute left-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-white rounded-full shadow-xl flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 hover:scale-110">
              <IoChevronBack size={28} className="text-gray-800" />
            </button>
            <button className="swiper-next absolute right-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-white rounded-full shadow-xl flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 hover:scale-110">
              <IoChevronForward size={28} className="text-gray-800" />
            </button>
          </>
        )}
      </div>
    </section>
  );
}
