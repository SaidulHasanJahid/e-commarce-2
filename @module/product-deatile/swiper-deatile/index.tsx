// "use client";

// import React, { useState } from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Thumbs } from "swiper/modules";
// import "swiper/css";
// import "swiper/css/thumbs";
// import Image from "next/image";
// import { IoChevronForward } from "react-icons/io5";

// const offers = [
//   {
//     id: 1,
//     title: "Save up to $40 on select cellphone & tablet",
//     image: "https://clinicmaster.goeasyapp.com/uploads/files/c4ca4238a0b923820dcc509a6f75849b/c4ca4238a0b923820dcc509a6f75849b/E_12.jpg",
//     bgColor: "bg-[#fdf6e3]",
//   },
//   {
//     id: 2,
//     title: "Save up to 25% on furniture items",
//     image: "https://clinicmaster.goeasyapp.com/uploads/files/c4ca4238a0b923820dcc509a6f75849b/c4ca4238a0b923820dcc509a6f75849b/E_8.jpg",
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

// const ProductGallery = () => {
//   const [thumbsSwiper, setThumbsSwiper] = useState<any>(null);
//   const [thumbsNav, setThumbsNav] = useState<any>(null);

//   return (
//     <div>
//       {/* Main Swiper */}
//       <Swiper
//         spaceBetween={10}
//         thumbs={{ swiper: thumbsSwiper }}
//         modules={[Thumbs]}
//         className="w-full h-[400px] sm:h-[500px] lg:h-[600px]"
//       >
//         {offers.map((offer) => (
//           <SwiperSlide key={offer.id}>
//             <div
//               className={`group w-full h-full flex items-center justify-center ${offer.bgColor} overflow-hidden rounded-xl`}
//             >
//               {/* Main Image with zoom on hover */}
//               <Image
//                 src={offer.image}
//                 alt={offer.title}
//                 width={600}
//                 height={600}
//                 className="object-cover w-full h-full transition-transform duration-500 ease-in-out group-hover:scale-110"
//               />
//             </div>
//           </SwiperSlide>
//         ))}
//       </Swiper>

//       {/* Thumbnail Swiper */}
//       <div className="relative mt-4 flex items-center">
//         <Swiper
//           onSwiper={(swiper) => {
//             setThumbsSwiper(swiper);
//             setThumbsNav(swiper);
//           }}
//           spaceBetween={10}
//           slidesPerView={4}
//           watchSlidesProgress
//           modules={[Thumbs]}
//           className="flex-1"
//         >
//           {offers.map((offer) => (
//             <SwiperSlide key={offer.id}>
//               <div className="relative cursor-pointer border rounded overflow-hidden">
//                 <Image
//                   src={offer.image}
//                   alt={offer.title}
//                   width={100}
//                   height={100}
//                   className="object-cover w-full h-20"
//                 />
//               </div>
//             </SwiperSlide>
//           ))}
//         </Swiper>

//         {/* Custom arrow if more than 4 thumbnails */}
//         {offers.length > 4 && (
//           <button
//             onClick={() => thumbsNav?.slideNext()}
//             className="absolute right-0 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black transition"
//           >
//             <IoChevronForward size={20} />
//           </button>
//         )}
//       </div>
//     </div>
//   );
// };

// export default ProductGallery;
"use client";

import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Thumbs } from "swiper/modules";
import "swiper/css";
import "swiper/css/thumbs";
import Image from "next/image";
import { IoChevronForward } from "react-icons/io5";

interface ProductGalleryProps {
  images: any[];
  coverImage?: string;
  thumbnail?: string;
}

const ProductGallery: React.FC<ProductGalleryProps> = ({
  images,
  coverImage,
  thumbnail,
}) => {
  const [thumbsSwiper, setThumbsSwiper] = useState<any>(null);
  const [thumbsNav, setThumbsNav] = useState<any>(null);

  // Convert data into unified gallery array
  const galleryImages = [
    ...(coverImage ? [{ url: coverImage }] : []),
    ...(thumbnail ? [{ url: thumbnail }] : []),
    ...(images?.length ? images.map((img: any) => ({ url: img.url })) : []),
  ];

  // If no images, use fallback placeholder
  const finalImages =
    galleryImages.length > 0
      ? galleryImages
      : [
          {
            url: "https://placehold.co/800x800?text=No+Image",
          },
        ];

  return (
    <div>
      {/* Main Swiper */}
      <Swiper
        spaceBetween={10}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[Thumbs]}
        className="w-full h-[400px] sm:h-[500px] lg:h-[600px]"
      >
        {finalImages.map((img, index) => (
          <SwiperSlide key={index}>
            <div className="group w-full h-full flex items-center justify-center bg-gray-100 overflow-hidden rounded-xl">
              <Image
                src={img.url.startsWith("http") ? img.url : `${process.env.NEXT_PUBLIC_API_URL}/${img.url}`}
                alt={`product-${index}`}
                width={600}
                height={600}
                className="object-cover w-full h-full transition-transform duration-500 ease-in-out group-hover:scale-110"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Thumbnail Swiper */}
      <div className="relative mt-4 flex items-center">
        <Swiper
          onSwiper={(swiper) => {
            setThumbsSwiper(swiper);
            setThumbsNav(swiper);
          }}
          spaceBetween={10}
          slidesPerView={4}
          watchSlidesProgress
          modules={[Thumbs]}
          className="flex-1"
        >
          {finalImages.map((img, index) => (
            <SwiperSlide key={index}>
              <div className="cursor-pointer border rounded overflow-hidden">
                <Image
                  src={img.url.startsWith("http") ? img.url : `${process.env.NEXT_PUBLIC_API_URL}/${img.url}`}
                  alt={`thumb-${index}`}
                  width={100}
                  height={100}
                  className="object-cover w-full h-20"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Custom arrow if more than 4 thumbnails */}
        {finalImages.length > 4 && (
          <button
            onClick={() => thumbsNav?.slideNext()}
            className="absolute right-0 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black transition"
          >
            <IoChevronForward size={20} />
          </button>
        )}
      </div>
    </div>
  );
};

export default ProductGallery;
