// src/components/FeaturedCategories.tsx
"use client";

import React, { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Navigation, Autoplay } from "swiper/modules";
import { IoChevronBack, IoChevronForward } from "react-icons/io5";

interface Category {
  _id: string;
  name: string;
  slug: string;
  description?: string;
  iconUrl?: string;
  bannerUrl?: string;
  isFeature: boolean;
  isActive: boolean;
  createdAt: string;
  updatedAt: string;
}

export default function FeaturedCategories() {
  const swiperRef = useRef<any>(null);
  const [hovered, setHovered] = useState(false);
  const [categories, setCategories] = useState<Category[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // API URL (Production + Local fallback)
  const API_URL = process.env.NEXT_PUBLIC_API_URL ;
  const endpoint = `${API_URL}/catalog/categories?page=1&limit=20&isFeature=true`;

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        setLoading(true);
        setError(null);

        const res = await fetch(endpoint);

        if (!res.ok) {
          throw new Error(`HTTP ${res.status}: Failed to fetch`);
        }

        const json = await res.json();
        const data = json.data || [];
        setCategories(data);
      } catch (err: any) {
        console.error("Fetch error:", err);
        setError("Failed to load categories. Please try again.");
      } finally {
        setLoading(false);
      }
    };

    fetchCategories();
  }, [endpoint]);

  return (
    <div className="container mx-auto px-4 mt-12 relative">
      <h2 className="text-center text-[30px] text-[#000000] mt-10 mb-7 font-bold">
        Featured Categories
      </h2>

      {/* Loading */}
      {loading && (
        <div className="text-center py-12">
          <p className="text-gray-500 animate-pulse">Loading categories...</p>
        </div>
      )}

      {/* Error */}
      {error && (
        <div className="text-center py-12">
          <p className="text-red-500">{error}</p>
        </div>
      )}

      {/* Success: Show Swiper */}
      {!loading && !error && categories.length > 0 && (
        <div
          className="relative group"
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
        >
          {/* Left Arrow */}
          <div
            className={`absolute top-1/2 -translate-y-1/2 left-2 z-20 transition-opacity duration-300 ${
              hovered ? "opacity-100" : "opacity-0"
            }`}
          >
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
          <div className="w-full px-4 sm:px-8 md:px-12">
            <Swiper
              modules={[Navigation, Autoplay]}
              onSwiper={(swiper) => (swiperRef.current = swiper)}
              spaceBetween={20}
              slidesPerView={2}
              loop={true}
              grabCursor={true}
              freeMode={true}
              speed={800}
              autoplay={{ delay: 5000, disableOnInteraction: false }}
              breakpoints={{
                640: { slidesPerView: 3, spaceBetween: 24 },
                768: { slidesPerView: 4, spaceBetween: 24 },
                1024: { slidesPerView: 5, spaceBetween: 28 },
              }}
            >
              {categories.map((cat) => (
                <SwiperSlide key={cat._id}>
                  <div className="text-center cursor-pointer group">
                    <div className="w-[140px] h-[140px] sm:w-[156px] sm:h-[156px] mx-auto rounded-full border border-gray-300 flex 
                                    items-center justify-center overflow-hidden transition-all duration-300 
                                    group-hover:border-black group-hover:shadow-lg">
                      <img
                        src={cat.iconUrl || cat.bannerUrl || "/placeholder.png"}
                        alt={cat.name}
                        className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-105"
                        onError={(e) => {
                          e.currentTarget.src = "/placeholder.png";
                        }}
                      />
                    </div>
                    <p className="mt-2 font-medium text-[#000] text-[18px] sm:text-[22px] group-hover:text-black">
                      {cat.name}
                    </p>
                    <p className="text-sm text-[#888]">Items</p>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          {/* Right Arrow */}
          <div
            className={`absolute top-1/2 -translate-y-1/2 right-2 z-20 transition-opacity duration-300 ${
              hovered ? "opacity-100" : "opacity-0"
            }`}
          >
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
      )}

      {/* No Data */}
      {!loading && !error && categories.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-500">No featured categories found.</p>
        </div>
      )}
    </div>
  );
}