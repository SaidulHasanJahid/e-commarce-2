// "use client";

// import React, { useRef, useState } from "react";
// import Image from "next/image";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Navigation, Autoplay } from "swiper/modules";
// import "swiper/css";
// import "swiper/css/navigation";
// import { IoChevronBack, IoChevronForward } from "react-icons/io5";
// import { useIsfeatureofferQuery } from "@/appstore/is-feature-offer/api";

// const offers = [
//   {
//     id: 1,
//     title: "Save up to $40 on select cellphone & tablet",
//     image: "https://images.pexels.com/photos/799443/pexels-photo-799443.jpeg",
//     bgColor: "bg-[#fdf6e3]",
//   },
//   {
//     id: 2,
//     title: "Save up to 25% on furniture items",
//     image: "https://images.pexels.com/photos/1866149/pexels-photo-1866149.jpeg",
//     bgColor: "bg-[#e6e9f8]",
//   },
//   {
//     id: 3,
//     title: "Save up to $69 on select perfume items",
//     image: "https://images.pexels.com/photos/965989/pexels-photo-965989.jpeg",
//     bgColor: "bg-[#fde7eb]",
//   },
//   {
//     id: 4,
//     title: "Save up to 30% on audio items",
//     image: "https://images.pexels.com/photos/3394659/pexels-photo-3394659.jpeg",
//     bgColor: "bg-[#e3f6f3]",
//   },
// ];

// export default function FeaturedOffers() {
//   const swiperRef = useRef<any>(null);
//   const [hoveredCard, setHoveredCard] = useState<number | null>(null);

//   const { data: offersData, error, isLoading } = useIsfeatureofferQuery(); 

//   console.log("Featured Offers Data:", offersData);

//   const showArrows = offers.length >= 4;

//   return (
//     <section className="w-full container mx-auto px-4 py-12">
//       {/* Header */}
//       <div className="flex flex-col lg:flex-row justify-between items-center mb-8">
//         <h2 className="text-2xl sm:text-3xl md:text-4xl font-medium text-[#000000] mb-4 lg:mb-0 text-center lg:text-left">
//           Our Featured Offers
//         </h2>
//         <a
//           href="#"
//           className="text-[14px] underline hover:text-gray-700 transition-all duration-300"
//         >
//           See All Products
//         </a>
//       </div>

//       {/* Swiper */}
//       <div className="relative group">
//         <Swiper
//           modules={[Navigation, Autoplay]}
//           onSwiper={(swiper) => (swiperRef.current = swiper)}
//           slidesPerView={1}
//           spaceBetween={20}
//           loop={true}
//           autoplay={{
//             delay: 2500,
//             disableOnInteraction: false,
//           }}
//           navigation={{
//             prevEl: ".swiper-prev",
//             nextEl: ".swiper-next",
//           }}
//           breakpoints={{
//             640: { slidesPerView: 2, spaceBetween: 20 },
//             768: { slidesPerView: 3, spaceBetween: 25 },
//             1024: { slidesPerView: 4, spaceBetween: 30 },
//           }}
//         >
//           {offers.map((offer) => (
//             <SwiperSlide key={offer.id}>
//               <div
//                 onMouseEnter={() => setHoveredCard(offer.id)}
//                 onMouseLeave={() => setHoveredCard(null)}
//                 className="group flex flex-col items-center text-center p-4 rounded-xl h-full cursor-pointer transition-transform duration-300"
//               >
//                 {/* Circle Image */}
//                 <div
//                   className={`w-[130px] sm:w-[180px] md:w-[220px] lg:w-[260px] h-[130px] sm:h-[180px] md:h-[220px] lg:h-[260px] rounded-full overflow-hidden relative mb-6 flex items-center justify-center ${offer.bgColor} transition-transform duration-500 ${
//                     hoveredCard === offer.id ? "scale-105" : ""
//                   }`}
//                 >
//                   <Image
//                     src={offer.image}
//                     alt={offer.title}
//                     fill
//                     className={`object-cover transition-transform duration-500 ease-in-out ${
//                       hoveredCard === offer.id ? "scale-110" : "scale-100"
//                     }`}
//                   />
//                 </div>

//                 {/* Text */}
//                 <div className="flex flex-col justify-between flex-1 w-full">
//                   <p className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-[24px] text-[#000000] w-full">
//                     {offer.title}
//                   </p>
//                 </div>

//                 {/* Shop Now Button — always visible */}
//                 <button className="w-[140px] mt-4 h-[50px] font-semibold px-[13px] text-[#000000] border rounded-md transition-all duration-300 ease-in-out border-[#eeeeee] hover:border-[#000000] hover:scale-105 cursor-pointer">
//                   Shop Now
//                 </button>
//               </div>
//             </SwiperSlide>
//           ))}
//         </Swiper>

//         {/* Custom Arrow Icons — show only if >=4 cards */}
//         {showArrows && (
//           <>
//             <IoChevronBack
//               className="swiper-prev absolute top-1/2 -left-4 transform -translate-y-1/2 text-3xl text-black opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 cursor-pointer"
//             />
//             <IoChevronForward
//               className="swiper-next absolute top-1/2 -right-4 transform -translate-y-1/2 text-3xl text-black opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 cursor-pointer"
//             />
//           </>
//         )}
//       </div>
//     </section>
//   );
// }
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

export default function FeaturedOffers() {
  const swiperRef = useRef<any>(null);
  const [hoveredCard, setHoveredCard] = useState<number | string | null>(null);

  const { data: apiData, isLoading } = useIsfeatureofferQuery();

  // API থেকে অফার লিস্ট বের করা (সব ধরনের response সাপোর্ট করে)
  const offers = React.useMemo(() => {
    if (!apiData) return [];
    if (Array.isArray(apiData)) return apiData;
    return apiData?.data || apiData?.offers || apiData?.items || [];
  }, [apiData]);

  // লোডিং হলে সিম্পল লোডার
  if (isLoading) {
    return (
      <section className="container mx-auto px-4 py-12">
        <h2 className="text-4xl font-medium mb-8 text-center">Loading offers...</h2>
      </section>
    );
  }

  // যদি কোনো ডাটা না থাকে
  if (!offers || offers.length === 0) {
    return null; // অথবা "No offers" দেখাতে পারিস
  }

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
            const id = offer.id || offer._id;
            const title = offer.title || offer.name || "Special Offer";
            const image = offer.image || offer.images?.[0] || "/placeholder.jpg";
            const bgColor = offer.bgColor || "bg-gray-100";

            return (
              <SwiperSlide key={id}>
                <div
                  onMouseEnter={() => setHoveredCard(id)}
                  onMouseLeave={() => setHoveredCard(null)}
                  className="flex flex-col items-center text-center cursor-pointer"
                >
                  {/* Circle Image */}
                  <div
                    className={`relative w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 rounded-full overflow-hidden mb-6 ${bgColor} transition-transform duration-500 ${
                      hoveredCard === id ? "scale-110" : "scale-100"
                    }`}
                  >
                    <Image
                      src={image}
                      alt={title}
                      fill
                      className="object-cover transition-transform duration-700"
                      style={{ transform: hoveredCard === id ? "scale(1.15)" : "scale(1)" }}
                    />
                  </div>

                  {/* Title */}
                  <h3 className="text-lg sm:text-xl md:text-2xl font-medium text-black max-w-xs px-4">
                    {title}
                  </h3>

                  {/* Shop Now Button */}
                  <button className="mt-6 px-8 py-3 border-2 border-gray-300 rounded-md font-semibold hover:border-black hover:bg-black hover:text-white transition-all duration-300">
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
            <button className="swiper-prev absolute left-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center opacity-0 group-hover:opacity-100 transition">
              <IoChevronBack size={28} />
            </button>
            <button className="swiper-next absolute right-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center opacity-0 group-hover:opacity-100 transition">
              <IoChevronForward size={28} />
            </button>
          </>
        )}
      </div>
    </section>
  );
}