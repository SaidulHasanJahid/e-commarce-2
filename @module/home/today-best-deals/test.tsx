// "use client";

// import React, { useState, useEffect } from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Navigation } from "swiper/modules";
// import { Dialog } from "@headlessui/react";
// import { FaHeart, FaExchangeAlt, FaEye } from "react-icons/fa";
// import "swiper/css";
// import "swiper/css/navigation";
// import ProductModal from "@/@module/@common/modal";

// const products = [
//   {
//     id: 1,
//     name: "Dress GELLER NEW YORK",
//     category: "Fashion",
//     price: 26,
//     oldPrice: 70,
//     discount: "SALE",
//     images: ["/images/dress1.png", "/images/dress2.png"],
//   },
//   {
//     id: 2,
//     name: "Medicube Zero Pore Pimpling",
//     category: "Health & Beauty",
//     price: 84,
//     oldPrice: 95,
//     discount: "SALE",
//     images: ["/images/beauty1.png", "/images/beauty2.png"],
//   },
//   {
//     id: 3,
//     name: "Logitech G309 SPEED Mouse",
//     category: "Electronics",
//     price: 33,
//     oldPrice: 35,
//     discount: "SALE",
//     images: ["/images/mouse1.png", "/images/mouse2.png"],
//   },
//   {
//     id: 4,
//     name: "Christian Dior Diorstick",
//     category: "Cosmetics",
//     price: 88,
//     images: ["/images/cosmetic1.png", "/images/cosmetic2.png"],
//   },
// ];

// export default function BestDeals() {
//   const [isOpen, setIsOpen] = useState(false);
//   const [selectedProduct, setSelectedProduct] = useState<any>(null);
//   const [quantity, setQuantity] = useState(1);
//   const [countdown, setCountdown] = useState({
//     days: 322,
//     hours: 13,
//     minutes: 45,
//     seconds: 49,
//   });

//   useEffect(() => {
//     const timer = setInterval(() => {
//       setCountdown((prev) => {
//         let { days, hours, minutes, seconds } = prev;
//         seconds -= 1;
//         if (seconds < 0) {
//           seconds = 59;
//           minutes -= 1;
//           if (minutes < 0) {
//             minutes = 59;
//             hours -= 1;
//             if (hours < 0) {
//               hours = 23;
//               days -= 1;
//             }
//           }
//         }
//         return { days, hours, minutes, seconds };
//       });
//     }, 1000);
//     return () => clearInterval(timer);
//   }, []);

//   const openModal = (product: typeof products[number]) => {
//     setSelectedProduct(product);
//     setQuantity(1);
//     setIsOpen(true);
//   };

//   const closeModal = () => setIsOpen(false);

//   const swiperSettings = {
//     modules: [Navigation],
//     navigation: true,
//     spaceBetween: 10,
//     slidesPerView: 4,
//     slidesPerGroup: 1, // Scroll one item at a time to avoid skipping
//     breakpoints: {
//       1024: { slidesPerView: 3 },
//       768: { slidesPerView: 2 },
//       480: { slidesPerView: 1 },
//     },
//   };

//   return (
//     <div className="container mx-auto px-4 my-10">
//       <div className="bg-pink-50 rounded-xl p-6">
//         <h2 className="text-2xl font-semibold mb-6">Today's Best Deals</h2>
//         <div className="flex justify-between items-center mb-6">
//           <div className="flex gap-2">
//             <span className="text-2xl font-bold">{countdown.days}</span>
//             <span>Days</span>
//             <span className="text-2xl font-bold">{countdown.hours}</span>
//             <span>Hours</span>
//             <span className="text-2xl font-bold">{countdown.minutes}</span>
//             <span>Mins</span>
//             <span className="text-2xl font-bold">{countdown.seconds}</span>
//             <span>Secs</span>
//           </div>
//           <button className="bg-gray-200 text-gray-800 px-4 py-2 rounded hover:bg-gray-300 transition">
//             Shop All
//           </button>
//         </div>

//         <Swiper {...swiperSettings}>
//           {products.map((product) => (
//             <SwiperSlide key={product.id} className="px-2">
//               <div className="border rounded-lg p-4 bg-white relative group">
//                 {product.discount && (
//                   <span className="absolute top-2 left-2 bg-red-500 text-white text-xs font-semibold px-2 py-1 rounded">
//                     {product.discount}
//                   </span>
//                 )}
//                 <img
//                   src={product.images[0]}
//                   alt={product.name}
//                   className="w-full h-40 object-contain mb-4"
//                 />

//                 {/* Hover Icons */}
//                 <div className="absolute top-2 right-2 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition">
//                   <button className="bg-white p-2 rounded-full shadow hover:bg-gray-100 transition">
//                     <FaHeart />
//                   </button>
//                   <button className="bg-white p-2 rounded-full shadow hover:bg-gray-100 transition">
//                     <FaExchangeAlt />
//                   </button>
//                   <button
//                     onClick={() => openModal(product)}
//                     className="bg-white p-2 rounded-full shadow hover:bg-gray-100 transition"
//                   >
//                     <FaEye />
//                   </button>
//                 </div>

//                 <p className="text-sm text-gray-500">{product.category}</p>
//                 <h3 className="text-base font-medium">{product.name}</h3>

//                 <div className="flex items-center gap-2">
//                   <span className="text-red-500 font-semibold">
//                     €{product.price}
//                   </span>
//                   {product.oldPrice && (
//                     <span className="line-through text-gray-400 text-sm">
//                       €{product.oldPrice}
//                     </span>
//                   )}
//                 </div>

//                 <button className="mt-3 w-full bg-black text-white py-2 rounded hover:bg-gray-800 transition">
//                   Add to Cart
//                 </button>
//               </div>
//             </SwiperSlide>
//           ))}
//         </Swiper>
//       </div>

//       <ProductModal
//         isOpen={isOpen}
//         onClose={closeModal}
//         product={selectedProduct}
//         quantity={quantity}
//         setQuantity={setQuantity}
//       />
//     </div>
//   );
// }