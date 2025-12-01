// "use client";

// import React, { useRef, useState } from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/css";
// import { Navigation, Autoplay } from "swiper/modules";
// import { IoChevronBack, IoChevronForward } from "react-icons/io5";
// import { useIsfeatureofferQuery } from "@/appstore/is-feature-offer/api";

// interface Category {
//   id: number;
//   name: string;
//   slug: string;
//   description?: string | null;
//   thumbnailUrl?: string;
// }

// export default function FeaturedCategories() {
//   const swiperRef = useRef<any>(null);
//   const [hoveredId, setHoveredId] = useState<number | null>(null);
//   const [activeCategoryId, setActiveCategoryId] = useState<number | null>(null);

//   const { data, isLoading, isError } = useIsfeatureofferQuery();

//   const categories: Category[] =
//     data?.data.map((item: any) => ({
//       id: item.id,
//       name: item.name,
//       slug: item.slug,
//       description: item.description,
//       thumbnailUrl: item.thumbnailUrl,
//     })) || [];

//   return (
//     <div className="container mx-auto px-4 mt-12 relative">
//       <h2 className="text-center text-[30px] text-[#000] mt-10 mb-7 font-bold">
//         Featured Categories
//       </h2>

//       {isLoading && (
//         <div className="text-center py-12">
//           <p className="text-gray-500 animate-pulse">Loading categories...</p>
//         </div>
//       )}

//       {isError && (
//         <div className="text-center py-12">
//           <p className="text-red-500">Failed to load categories.</p>
//         </div>
//       )}

//       {!isLoading && !isError && categories.length > 0 && (
//         <div className="relative group">
//           {/* Swiper */}
//           <div className="w-full px-4 sm:px-8 md:px-12">
//             <Swiper
//               modules={[Navigation, Autoplay]}
//               onSwiper={(swiper) => (swiperRef.current = swiper)}
//               spaceBetween={20}
//               slidesPerView={2}
//               loop={true}
//               grabCursor={true}
//               freeMode={true}
//               speed={800}
//               autoplay={{ delay: 5000, disableOnInteraction: false }}
//               breakpoints={{
//                 640: { slidesPerView: 3, spaceBetween: 24 },
//                 768: { slidesPerView: 4, spaceBetween: 24 },
//                 1024: { slidesPerView: 5, spaceBetween: 28 },
//               }}
//             >
//               {categories.map((cat) => {
//                 const isActive = hoveredId === cat.id || activeCategoryId === cat.id;
//                 return (
//                   <SwiperSlide key={cat.id}>
//                     <div
//                       className="text-center cursor-pointer group"
//                       onMouseEnter={() => setHoveredId(cat.id)}
//                       onMouseLeave={() => setHoveredId(null)}
//                       onClick={() => setActiveCategoryId(cat.id)}
//                     >
//                       <div
//                         className={`w-[140px] h-[140px] sm:w-[156px] sm:h-[156px] mx-auto rounded-full border flex items-center justify-center overflow-hidden transition-all duration-300 ${
//                           isActive
//                             ? "border-black shadow-lg scale-105"
//                             : "border-gray-300"
//                         }`}
//                       >
//                         <img
//                           src={cat.thumbnailUrl || "/placeholder.png"}
//                           alt={cat.name}
//                           className="w-full h-full object-cover transition-transform duration-300"
//                           onError={(e) => (e.currentTarget.src = "/placeholder.png")}
//                         />
//                       </div>
//                       <p
//                         className={`mt-2 font-medium text-[18px] sm:text-[22px] transition-colors duration-300 ${
//                           isActive ? "text-black" : "text-gray-600"
//                         }`}
//                       >
//                         {cat.name}
//                       </p>
//                       <p className="text-sm text-gray-500">Items</p>
//                     </div>
//                   </SwiperSlide>
//                 );
//               })}
//             </Swiper>
//           </div>

//           {/* Navigation */}
//           <div className="absolute top-1/2 -translate-y-1/2 left-2 z-20">
//             <button
//               onClick={() => swiperRef.current?.slidePrev()}
//               className="w-10 h-10 flex items-center justify-center rounded-full shadow 
//                          bg-black text-white cursor-pointer transition-all duration-300
//                          hover:bg-white hover:text-black hover:scale-110"
//             >
//               <IoChevronBack size={20} />
//             </button>
//           </div>
//           <div className="absolute top-1/2 -translate-y-1/2 right-2 z-20">
//             <button
//               onClick={() => swiperRef.current?.slideNext()}
//               className="w-10 h-10 flex items-center justify-center rounded-full shadow 
//                          bg-black text-white cursor-pointer transition-all duration-300
//                          hover:bg-white hover:text-black hover:scale-110"
//             >
//               <IoChevronForward size={20} />
//             </button>
//           </div>
//         </div>
//       )}

//       {/* Show Products for active category */}
//       {activeCategoryId && (
//         <div className="mt-10">
//           <p className="text-center text-lg text-gray-700">
//             Showing products for category ID: {activeCategoryId}
//           </p>
//           {/* TODO: Replace this with actual Product Grid component */}
//         </div>
//       )}
//     </div>
//   );
// }
"use client";

import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Navigation, Autoplay } from "swiper/modules";
import { IoChevronBack, IoChevronForward } from "react-icons/io5";
import { useIsfeatureofferQuery } from "@/appstore/is-feature-offer/api";
import Image from "next/image";

// ----------------------------
// SAFE IMAGE URL FIX
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

interface Category {
  id: number;
  name: string;
  slug: string;
  description?: string | null;
  thumbnailUrl?: string;
}

export default function FeaturedCategories() {
  const swiperRef = useRef<any>(null);
  const [hoveredId, setHoveredId] = useState<number | null>(null);
  const [activeCategoryId, setActiveCategoryId] = useState<number | null>(null);

  const { data, isLoading, isError } = useIsfeatureofferQuery();

  const categories: Category[] =
    data?.data.map((item: any) => ({
      id: item.id,
      name: item.name,
      slug: item.slug,
      description: item.description,
      thumbnailUrl: item.thumbnailUrl,
    })) || [];

  return (
    <div className="container mx-auto px-4 mt-12 relative">
      <h2 className="text-center text-[30px] text-[#000] mt-10 mb-7 font-bold">
        Featured Categories
      </h2>

      {isLoading && (
        <div className="text-center py-12">
          <p className="text-gray-500 animate-pulse">Loading categories...</p>
        </div>
      )}

      {isError && (
        <div className="text-center py-12">
          <p className="text-red-500">Failed to load categories.</p>
        </div>
      )}

      {!isLoading && !isError && categories.length > 0 && (
        <div className="relative group">
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
              {categories.map((cat) => {
                const isActive = hoveredId === cat.id || activeCategoryId === cat.id;

                const imageUrl = getSafeImageUrl(cat.thumbnailUrl);

                return (
                  <SwiperSlide key={cat.id}>
                    <div
                      className="text-center cursor-pointer group"
                      onMouseEnter={() => setHoveredId(cat.id)}
                      onMouseLeave={() => setHoveredId(null)}
                      onClick={() => setActiveCategoryId(cat.id)}
                    >
                      <div
                        className={`w-[140px] h-[140px] sm:w-[156px] sm:h-[156px] mx-auto rounded-full border flex items-center justify-center overflow-hidden transition-all duration-300 ${
                          isActive
                            ? "border-black shadow-lg scale-105"
                            : "border-gray-300"
                        }`}
                      >
                        <Image
                          src={imageUrl}
                          alt={cat.name}
                          width={156}
                          height={156}
                          className="w-full h-full object-cover"
                          unoptimized
                        />
                      </div>

                      <p
                        className={`mt-2 font-medium text-[18px] sm:text-[22px] transition-colors duration-300 ${
                          isActive ? "text-black" : "text-gray-600"
                        }`}
                      >
                        {cat.name}
                      </p>
                      <p className="text-sm text-gray-500">Items</p>
                    </div>
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </div>

          {/* Navigation */}
          <div className="absolute top-1/2 -translate-y-1/2 left-2 z-20">
            <button
              onClick={() => swiperRef.current?.slidePrev()}
              className="w-10 h-10 flex items-center justify-center rounded-full shadow 
                         bg-black text-white cursor-pointer transition-all duration-300
                         hover:bg-white hover:text-black hover:scale-110"
            >
              <IoChevronBack size={20} />
            </button>
          </div>

          <div className="absolute top-1/2 -translate-y-1/2 right-2 z-20">
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

      {/* Category Active Message */}
      {activeCategoryId && (
        <div className="mt-10">
          <p className="text-center text-lg text-gray-700">
            Showing products for category ID: {activeCategoryId}
          </p>
        </div>
      )}
    </div>
  );
}
