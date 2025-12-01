// "use client";

// import React, { useRef } from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/css";
// import { Navigation, Autoplay } from "swiper/modules";
// import { IoChevronBack, IoChevronForward } from "react-icons/io5";
// import { useBrandsQuery } from "@/appstore/brands/api";

// export default function ShopByBrands() {
//   const swiperRef = useRef<any>(null);

//   const { data: brandData } = useBrandsQuery();

//   const apiBrands = Array.isArray(brandData)
//     ? brandData
//     : Array.isArray(brandData?.data)
//     ? brandData.data
//     : Array.isArray(brandData?.brands)
//     ? brandData.brands
//     : [];

//   if (!apiBrands.length) {
//     return (
//       <div className="container mx-auto px-4 mt-12">
//         <h2 className="ml-12 text-[30px] font-semibold text-[#000000] mt-10 mb-7">
//           Shop By Brands
//         </h2>
//         <p className="ml-12 text-gray-500">No brands found.</p>
//       </div>
//     );
//   }

//   return (
//     <div className="container mx-auto px-4 mt-12 relative group">
//       <h2 className="ml-12 text-[30px] font-semibold text-[#000000] mt-10 mb-7">
//         Shop By Brands
//       </h2>

//       <div className="relative">

//         {apiBrands.length > 5 && (
//           <div className="absolute top-1/2 -translate-y-1/2 left-2 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
//             <button
//               onClick={() => swiperRef.current?.slidePrev()}
//               className="w-10 h-10 flex items-center justify-center rounded-full shadow 
//                          bg-black text-white cursor-pointer transition-all duration-300
//                          hover:bg-white hover:text-black hover:scale-110"
//             >
//               <IoChevronBack size={20} />
//             </button>
//           </div>
//         )}

//         <div className="w-full px-12 mb-15">
//           <Swiper
//             modules={[Navigation, Autoplay]}
//             onSwiper={(swiper) => (swiperRef.current = swiper)}
//             spaceBetween={24}
//             slidesPerView={2}
//             loop={apiBrands.length > 2}
//             grabCursor={true}
//             speed={800}
//             autoplay={apiBrands.length > 2 ? { delay: 4000 } : false}
//             breakpoints={{
//               640: { slidesPerView: 3 },
//               768: { slidesPerView: 4 },
//               1024: { slidesPerView: 6 },
//             }}
//           >
//             {apiBrands.map((brand: any, index: number) => (
//               <SwiperSlide key={index}>
//                 <div
//                   className="w-[173px] h-[116px] border border-gray-200 mx-auto flex items-center justify-center 
//                              transition-all duration-500 ease-in-out 
//                              hover:shadow-lg hover:border-black hover:scale-[1.03] cursor-pointer"
//                 >
//                   <img
//                     src={brand?.imageUrl}  
//                     alt={brand?.name}
//                     className="w-[173px] max-h-[100%] object-contain transition-transform duration-500 ease-in-out hover:scale-105"
//                   />
//                 </div>
//               </SwiperSlide>
//             ))}
//           </Swiper>
//         </div>

//         {apiBrands.length > 5 && (
//           <div className="absolute top-1/2 -translate-y-1/2 right-2 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
//             <button
//               onClick={() => swiperRef.current?.slideNext()}
//               className="w-10 h-10 flex items-center justify-center rounded-full shadow 
//                          bg-black text-white cursor-pointer transition-all duration-300
//                          hover:bg-white hover:text-black hover:scale-110"
//             >
//               <IoChevronForward size={20} />
//             </button>
//           </div>
//         )}

//       </div>
//     </div>
//   );
// }
"use client";

import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Navigation, Autoplay } from "swiper/modules";
import { IoChevronBack, IoChevronForward } from "react-icons/io5";
import { useBrandsQuery } from "@/appstore/brands/api";

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || "https://grocery.reclinerbdking.com";

const getSafeImageUrl = (path?: string | null) => {
  if (!path || path === "null" || path === "undefined") return "/placeholder.jpg";
  if (path.startsWith("http://") || path.startsWith("https://")) return path;
  if (path.startsWith("/uploads") || path.startsWith("/")) return `${BASE_URL}${path}`;
  return `${BASE_URL}/uploads/${path}`;
};

export default function ShopByBrands() {
  const swiperRef = useRef<any>(null);

  const { data: brandData } = useBrandsQuery();

  const apiBrands = Array.isArray(brandData)
    ? brandData
    : Array.isArray(brandData?.data)
    ? brandData.data
    : Array.isArray(brandData?.brands)
    ? brandData.brands
    : [];

  if (!apiBrands.length) {
    return (
      <div className="container mx-auto px-4 mt-12">
        <h2 className="ml-12 text-[30px] font-semibold text-[#000000] mt-10 mb-7">
          Shop By Brands
        </h2>
        <p className="ml-12 text-gray-500">No brands found.</p>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 mt-12 relative group">
      <h2 className="ml-12 text-[30px] font-semibold text-[#000000] mt-10 mb-7">
        Shop By Brands
      </h2>

      <div className="relative">
        {/* Left Arrow */}
        {apiBrands.length > 5 && (
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
        )}

        <div className="w-full px-12 mb-15">
          <Swiper
            modules={[Navigation, Autoplay]}
            onSwiper={(swiper) => (swiperRef.current = swiper)}
            spaceBetween={24}
            slidesPerView={2}
            loop={apiBrands.length > 2}
            grabCursor={true}
            speed={800}
            autoplay={apiBrands.length > 2 ? { delay: 4000 } : false}
            breakpoints={{
              640: { slidesPerView: 3 },
              768: { slidesPerView: 4 },
              1024: { slidesPerView: 6 },
            }}
          >
            {apiBrands.map((brand: any, index: number) => (
              <SwiperSlide key={index}>
                <div
                  className="w-[173px] h-[116px] border border-gray-200 mx-auto flex items-center justify-center 
                             transition-all duration-500 ease-in-out 
                             hover:shadow-lg hover:border-black hover:scale-[1.03] cursor-pointer"
                >
                  <img
                    src={getSafeImageUrl(brand?.imageUrl)}
                    alt={brand?.name || "Brand"}
                    className="w-[173px] max-h-[100%] object-contain transition-transform duration-500 ease-in-out hover:scale-105"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Right Arrow */}
        {apiBrands.length > 5 && (
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
        )}
      </div>
    </div>
  );
}
