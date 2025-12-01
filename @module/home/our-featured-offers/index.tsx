
// // "use client";

// // import React, { useRef, useState } from "react";
// // import Image from "next/image";
// // import Link from "next/link";
// // import { Swiper, SwiperSlide } from "swiper/react";
// // import { Navigation, Autoplay } from "swiper/modules";
// // import "swiper/css";
// // import "swiper/css/navigation";
// // import { IoChevronBack, IoChevronForward } from "react-icons/io5";
// // import { useIsfeatureofferQuery } from "@/appstore/is-feature-offer/api";

// // export default function FeaturedOffers() {
// //   const swiperRef = useRef<any>(null);
// //   const [hoveredCard, setHoveredCard] = useState<number | null>(null);

// //   const { data: apiData, isLoading } = useIsfeatureofferQuery();

// //   // API থেকে সঠিক ডাটা বের করা
// //   const offers = React.useMemo(() => {
// //     if (!apiData) return [];
// //     if (Array.isArray(apiData)) return apiData;
// //     if (Array.isArray(apiData.data)) return apiData.data;
// //     if (Array.isArray(apiData.offers)) return apiData.offers;
// //     return [];
// //   }, [apiData]);

// //   if (isLoading) {
// //     return (
// //       <section className="container mx-auto px-4 py-12">
// //         <h2 className="text-4xl font-medium mb-8 text-center">Loading offers...</h2>
// //       </section>
// //     );
// //   }

// //   if (!offers || offers.length === 0) {
// //     return null;
// //   }

// //   const showArrows = offers.length >= 4;

// //   return (
// //     <section className="w-full container mx-auto px-4 py-12">
// //       {/* Header */}
// //       <div className="flex flex-col lg:flex-row justify-between items-center mb-10">
// //         <h2 className="text-2xl sm:text-3xl md:text-4xl font-medium text-black text-center lg:text-left">
// //           Our Featured Offers
// //         </h2>
// //         <Link
// //           href="/offers"
// //           className="text-sm underline hover:text-gray-600 transition mt-4 lg:mt-0"
// //         >
// //           See All Products →
// //         </Link>
// //       </div>

// //       {/* Swiper */}
// //       <div className="relative group">
// //         <Swiper
// //           modules={[Navigation, Autoplay]}
// //           onSwiper={(swiper) => (swiperRef.current = swiper)}
// //           slidesPerView={1}
// //           spaceBetween={20}
// //           loop={true}
// //           autoplay={{ delay: 3000, disableOnInteraction: false }}
// //           navigation={{
// //             prevEl: ".swiper-prev",
// //             nextEl: ".swiper-next",
// //           }}
// //           breakpoints={{
// //             640: { slidesPerView: 2 },
// //             768: { slidesPerView: 3 },
// //             1024: { slidesPerView: 4 },
// //           }}
// //           className="pb-8"
// //         >
// //           {offers.map((offer: any) => {
// //             const id = offer.id;
// //             const title = offer.name || "Special Offer";
// //             const imageUrl = offer.thumbnailUrl || offer.image || "/placeholder.jpg";

// //             return (
// //               <SwiperSlide key={id}>
// //                 <div
// //                   onMouseEnter={() => setHoveredCard(id)}
// //                   onMouseLeave={() => setHoveredCard(null)}
// //                   className="flex flex-col items-center text-center cursor-pointer select-none"
// //                 >
// //                   {/* Perfect Circle Image with Full Fit & Zoom */}
// //                   <div className="relative w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 rounded-full overflow-hidden mb-6 shadow-lg ring-4 ring-white transition-all duration-500 hover:ring-gray-200">
// //                     <Image
// //                       src={imageUrl}
// //                       alt={title}
// //                       fill
// //                       className="object-cover transition-transform duration-700 ease-out"
// //                       style={{
// //                         transform: hoveredCard === id ? "scale(1.18)" : "scale(1)",
// //                       }}
// //                       onError={(e) => {
// //                         e.currentTarget.src = "/placeholder.jpg";
// //                       }}
// //                       priority
// //                     />
// //                     {/* Optional Overlay on Hover */}
// //                     <div
// //                       className="absolute inset-0 rounded-full bg-black/0 hover:bg-black/10 transition-all duration-500"
// //                       style={{ pointerEvents: "none" }}
// //                     />
// //                   </div>

// //                   {/* Title */}
// //                   <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-black max-w-xs px-4 tracking-wide">
// //                     {title}
// //                   </h3>

// //                   {/* Shop Now Button */}
// //                   <button className="mt-6 px-8 py-3 cursor-pointer border-2 border-gray-300 rounded-sm font-semibold text-sm tracking-wider hover:border-black hover:bg-black hover:text-white transition-all duration-300">
// //                     Shop Now
// //                   </button>
// //                 </div>
// //               </SwiperSlide>
// //             );
// //           })}
// //         </Swiper>

// //         {/* Custom Navigation Arrows */}
// //         {showArrows && (
// //           <>
// //             <button className="swiper-prev absolute left-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-white rounded-full shadow-xl flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 hover:scale-110">
// //               <IoChevronBack size={28} className="text-gray-800" />
// //             </button>
// //             <button className="swiper-next absolute right-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-white rounded-full shadow-xl flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 hover:scale-110">
// //               <IoChevronForward size={28} className="text-gray-800" />
// //             </button>
// //           </>
// //         )}
// //       </div>
// //     </section>
// //   );
// // }
// "use client";

// import { useRef } from "react";
// import Image from "next/image";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Navigation, Autoplay } from "swiper/modules";
// import { FaHeart, FaExchangeAlt, FaEye } from "react-icons/fa";
// import { IoChevronBack, IoChevronForward } from "react-icons/io5";
// import { useModal } from "@/@module/@common/modal/modal-modal-context";
// import Link from "next/link";
// import AddToCartButton from "@/@module/@common/add-to-cart-button";
// import "swiper/css";
// import "swiper/css/navigation";
// import { useRecommendedProductsQuery } from "@/appstore/is-recommended/api";

// // ----------------------------
// // SAFE IMAGE URL HELPER
// // ----------------------------
// const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || "https://grocery.reclinerbdking.com";

// const getSafeImageUrl = (path?: string | null) => {
//   if (!path || path === "null" || path === "undefined") return "/placeholder.jpg";
//   if (path.startsWith("http://") || path.startsWith("https://")) return path;
//   if (path.startsWith("/uploads")) return `${BASE_URL}${path}`;
//   if (path.startsWith("/")) return `${BASE_URL}${path}`;
//   return `${BASE_URL}/uploads/${path}`;
// };
// // ----------------------------

// const RecommendedForYou = () => {
//   const { openProductModal } = useModal();
//   const navPrevClass = "recommended-swiper-prev";
//   const navNextClass = "recommended-swiper-next";

//   const { data } = useRecommendedProductsQuery();
//   const rawProducts = data?.data || data || [];
//   const recommendedProducts = Array.isArray(rawProducts)
//     ? rawProducts.map((item: any) => item.product).filter(Boolean)
//     : [];

//   if (recommendedProducts.length === 0) return null;

//   const getDiscountPercent = (basePrice: number, price: number) => {
//     if (!basePrice || basePrice <= price) return null;
//     return Math.round(((basePrice - price) / basePrice) * 100);
//   };

//   return (
//     <div className="container mx-auto">
//       <section className="w-full px-4 md:px-12 lg:px-24 py-10 mt-20 relative group">
//         {/* Header */}
//         <div className="flex items-center justify-between mb-6">
//           <h2 className="text-xl md:text-2xl font-semibold text-black">
//             Recommended For You
//           </h2>
//           <Link href="/products" className="text-sm text-black hover:underline">
//             View All Products
//           </Link>
//         </div>

//         <Swiper
//           modules={[Navigation, Autoplay]}
//           spaceBetween={15}
//           loop={true}
//           autoplay={{ delay: 5000, disableOnInteraction: false }}
//           navigation={{ nextEl: `.${navNextClass}`, prevEl: `.${navPrevClass}` }}
//           breakpoints={{
//             320: { slidesPerView: 2, spaceBetween: 10 },
//             480: { slidesPerView: 2, spaceBetween: 10 },
//             640: { slidesPerView: 2, spaceBetween: 10 },
//             768: { slidesPerView: 3, spaceBetween: 10 },
//             1024: { slidesPerView: 4, spaceBetween: 10 },
//             1280: { slidesPerView: 5, spaceBetween: 10 },
//           }}
//           className="pb-10"
//         >
//           {recommendedProducts.map((product: any) => {
//             const discountPercent = getDiscountPercent(product.basePrice, product.price);
//             const imageUrl = getSafeImageUrl(
//               product.thumbnailUrl ||
//               product.coverImageUrl ||
//               product.images?.[0]?.url
//             );

//             const cartProduct = {
//               id: product.id,
//               name: product.title || "Unnamed Product",
//               price: product.price,
//               oldPrice: product.basePrice > product.price ? product.basePrice : null,
//               category: product.brand?.name || "Uncategorized",
//               images: [imageUrl],
//             };

//             const href = `/products/${product.id}`;

//             return (
//               <SwiperSlide key={product.id}>
//                 <div className="relative">
//                   <Link href={href} className="block">
//                     <div className="group/card relative flex h-[350px] w-full max-w-[226px] flex-col cursor-pointer overflow-hidden rounded-md border border-gray-200 bg-white transition-all duration-300 hover:shadow-md mx-auto">

//                       {/* Discount Tag */}
//                       {discountPercent && (
//                         <span className="absolute top-3 left-3 z-10 bg-red-500 text-white text-xs font-semibold px-3 py-1 rounded-full">
//                           -{discountPercent}%
//                         </span>
//                       )}

//                       {/* Product Image */}
//                       <div className="relative h-[207px] flex items-center justify-center bg-white overflow-hidden">
//                         <Image
//                           src={imageUrl}
//                           alt={product.title}
//                           width={226}
//                           height={207}
//                           className="object-contain transition-transform duration-300 group-hover/card:scale-105"
//                         />
//                       </div>

//                       {/* Hover Buttons */}
//                       <div className="absolute right-3 top-1/2 -translate-y-1/2 z-20 flex flex-col gap-2 opacity-0 group-hover/card:opacity-100 transition-all duration-300">
//                         <button className="w-10 h-10 bg-white/80 rounded-full shadow-md flex items-center justify-center hover:bg-white hover:scale-110 transition">
//                           <FaHeart className="text-[#666]" />
//                         </button>

//                         <button className="w-10 h-10 bg-white/80 rounded-full shadow-md flex items-center justify-center hover:bg-white hover:scale-110 transition">
//                           <FaExchangeAlt className="text-[#666]" />
//                         </button>

//                         <button
//                           onClick={(e) => {
//                             e.preventDefault();
//                             e.stopPropagation();
//                             openProductModal(product);
//                           }}
//                           className="w-10 h-10 bg-white/80 rounded-full shadow-md flex items-center justify-center hover:bg-white hover:scale-110 transition"
//                         >
//                           <FaEye className="text-[#666]" />
//                         </button>
//                       </div>

//                       {/* Product Info */}
//                       <div className="p-3 sm:p-4 flex flex-col flex-1 gap-2">
//                         <p className="text-xs text-[#666] truncate">
//                           {product.brand?.name || "Uncategorized"}
//                         </p>

//                         <h3 className="text-sm sm:text-base font-medium line-clamp-1 capitalize text-black">
//                           {product.title}
//                         </h3>

//                         <div className="flex items-center gap-2">
//                           <span className="text-lg sm:text-xl text-[#F93355]">${product.price}</span>
//                           {product.basePrice > product.price && (
//                             <span className="text-base sm:text-lg text-[#666] line-through">
//                               ${product.basePrice}
//                             </span>
//                           )}
//                         </div>

//                         {/* Add to Cart */}
//                         <div className="opacity-0 translate-y-4 group-hover/card:opacity-100 group-hover/card:translate-y-0 transition-all duration-500 mt-2">
//                           <AddToCartButton product={cartProduct} />
//                         </div>
//                       </div>
//                     </div>
//                   </Link>
//                 </div>
//               </SwiperSlide>
//             );
//           })}
//         </Swiper>

//         {/* Navigation Arrows */}
//         <div className={`${navPrevClass} absolute left-2 top-1/2 -translate-y-1/2 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 cursor-pointer`}>
//           <button className="w-10 h-10 bg-black text-white rounded-full flex items-center justify-center shadow hover:bg-white hover:text-black transition">
//             <IoChevronBack size={20} />
//           </button>
//         </div>

//         <div className={`${navNextClass} absolute right-2 top-1/2 -translate-y-1/2 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 cursor-pointer`}>
//           <button className="w-10 h-10 bg-black text-white rounded-full flex items-center justify-center shadow hover:bg-white hover:text-black transition">
//             <IoChevronForward size={20} />
//           </button>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default RecommendedForYou;
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
