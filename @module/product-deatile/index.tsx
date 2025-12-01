// // components/ProductDeatile.tsx

// "use client";

// import React, { useState } from "react";
// import Link from "next/link";
// import Image from "next/image";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Thumbs } from "swiper/modules";
// import { Tabs } from "antd";
// import type { TabsProps } from "antd";
// import { motion, AnimatePresence } from "framer-motion";

// import {
//   FiChevronRight,
//   FiHeart,
//   FiHelpCircle,
//   FiMinus,
//   FiPlus,
//   FiShare2,
//   FiTruck,
// } from "react-icons/fi";
// import { FaEye } from "react-icons/fa";
// import { MdTimer } from "react-icons/md";
// import { IoChevronForward } from "react-icons/io5";

// import "swiper/css";
// import "swiper/css/thumbs";
// import { HelpCircle } from "lucide-react";

// // তোমার অরিজিনাল ইমেজ ডাটা
// const productImages = [
//   "https://clinicmaster.goeasyapp.com/uploads/files/c4ca4238a0b923820dcc509a6f75849b/c4ca4238a0b923820dcc509a6f75849b/E_12.jpg",
//   "https://clinicmaster.goeasyapp.com/uploads/files/c4ca4238a0b923820dcc509a6f75849b/c4ca4238a0b923820dcc509a6f75849b/E_8.jpg",
//   "https://images.pexels.com/photos/965989/pexels-photo-965989.jpeg",
//   "https://images.pexels.com/photos/3394659/pexels-photo-3394659.jpeg",
// ];

// // Tabs এর টেন্ট
// const lorem1 = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tristique, eros sed semper egestas, nunc risus viverra purus...";
// const lorem2 = "Phasellus imperdiet, nulla et dictum interdum, nisi lorem egestas odio, vitae scelerisque enim ligula venenatis dolor...";
// const lorem3 = "Curabitur euismod sem vel vulputate convallis. Vestibulum ut ligula eu libero laoreet commodo...";

// export default function ProductDeatile() {
//   const [thumbsSwiper, setThumbsSwiper] = useState<any>(null);
//   const [thumbsNav, setThumbsNav] = useState<any>(null);
//   const [activeTab, setActiveTab] = useState("1");

//   const tabItems: TabsProps["items"] = [
//     {
//       key: "1",
//       label: "Product description",
//       children: (
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           exit={{ opacity: 0, y: -20 }}
//           transition={{ duration: 0.4 }}
//           className="py-6 px-4 lg:px-15"
//         >
//           <p className="text-[#666666] text-[16px] leading-7">{lorem1}</p>
//         </motion.div>
//       ),
//     },
//     {
//       key: "2",
//       label: "Shipping & returns",
//       children: (
//         <motion.div
//           initial={{ opacity: 0, scale: 0.95 }}
//           animate={{ opacity: 1, scale: 1 }}
//           exit={{ opacity: 0, scale: 0.95 }}
//           transition={{ duration: 0.4 }}
//           className="py-6 px-4 lg:px-15"
//         >
//           <p className="text-[#666666] text-[16px] leading-7">{lorem2}</p>
//         </motion.div>
//       ),
//     },
//     {
//       key: "3",
//       label: "Review",
//       children: (
//         <motion.div
//           initial={{ opacity: 0, x: 50 }}
//           animate={{ opacity: 1, x: 0 }}
//           exit={{ opacity: 0, x: -50 }}
//           transition={{ duration: 0.4 }}
//           className="py-6 px-4 lg:px-15"
//         >
//           <p className="text-[#666666] text-[16px] leading-7">{lorem3}</p>
//         </motion.div>
//       ),
//     },
//   ];

//   return (
//     <>
//       {/* ==================== Breadcrumb ==================== */}
//       <nav className="w-full bg-[#f7f7f7] py-8 px-4" aria-label="Breadcrumb">
//         <ol className="flex flex-wrap justify-center items-center text-[14px] text-[#666666] max-w-7xl mx-auto">
//           <li className="flex items-center">
//             <Link href="/" className="hover:text-black transition">
//               Home
//             </Link>
//             <FiChevronRight className="mx-2 text-[#666666] text-sm" />
//           </li>
//           <li className="flex items-center">
//             <Link href="/products" className="hover:text-black transition">
//               Product
//             </Link>
//             <FiChevronRight className="mx-2 text-[#666666] text-sm" />
//           </li>
//           <li>
//             <span className="font-medium text-[#666666]">
//               Huness I16 ProMAX Smartphone
//             </span>
//           </li>
//         </ol>
//       </nav>

//       {/* ==================== Main Section ==================== */}
//       <div className="container mx-auto px-4 py-6 grid grid-cols-1 lg:grid-cols-2 gap-8">
//         {/* ==================== Gallery ==================== */}
//         <div>
//           {/* Main Swiper */}
//           <Swiper
//             spaceBetween={10}
//             thumbs={{ swiper: thumbsSwiper }}
//             modules={[Thumbs]}
//             className="w-full h-[400px] sm:h-[500px] lg:h-[600px]"
//           >
//             {productImages.map((img, i) => (
//               <SwiperSlide key={i}>
//                 <div className="group w-full h-full flex items-center justify-center bg-[#fdf6e3] overflow-hidden rounded-xl">
//                   <Image
//                     src={img}
//                     alt="Product"
//                     width={600}
//                     height={600}
//                     className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
//                   />
//                 </div>
//               </SwiperSlide>
//             ))}
//           </Swiper>

//           {/* Thumbnail Swiper */}
//           <div className="relative mt-4 flex items-center">
//             <Swiper
//               onSwiper={(s) => {
//                 setThumbsSwiper(s);
//                 setThumbsNav(s);
//               }}
//               spaceBetween={10}
//               slidesPerView={4}
//               watchSlidesProgress
//               modules={[Thumbs]}
//               className="flex-1"
//             >
//               {productImages.map((img, i) => (
//                 <SwiperSlide key={i}>
//                   <div className="cursor-pointer border rounded overflow-hidden">
//                     <Image
//                       src={img}
//                       alt="thumb"
//                       width={100}
//                       height={100}
//                       className="object-cover w-full h-20"
//                     />
//                   </div>
//                 </SwiperSlide>
//               ))}
//             </Swiper>

//             {productImages.length > 4 && (
//               <button
//                 onClick={() => thumbsNav?.slideNext()}
//                 className="absolute right-0 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black transition z-10"
//               >
//                 <IoChevronForward size={20} />
//               </button>
//             )}
//           </div>
//         </div>

//         {/* ==================== Product Info ==================== */}
//         <div className="space-y-4 max-w-[600px] mx-auto lg:mx-0">
//           {/* Title */}
//           <div className="space-y-2">
//             <h1 className="text-[34px] font-semibold text-[#000000]">
//               Huness I16 ProMAX Smartphone
//             </h1>
//             <p className="text-[14px] text-[#000000]">
//               <FaEye size={18} className="text-black animate-blink inline mr-1" />
//               51 People are viewing this right now
//             </p>
//           </div>

//           <p className="text-[14px] text-[#666666] flex items-center">
//             <span className="text-red-500 mr-1">Fire</span> 110 Sold in 24 hour
//           </p>

//           {/* Details */}
//           <div className="text-[14px] space-y-4">
//             <p className="text-[#666666]">
//               Availability: <span className="text-[#000000]">In stock</span>
//             </p>
//             <p>
//               <span className="text-[#666666]">Product Code</span>:{" "}
//               <span className="text-[#000000]">MBLHK</span>
//             </p>
//             <p className="text-[#666666]">
//               Category:{" "}
//               <Link href="#" className="text-[#000000] hover:text-red-500">
//                 Smartphone
//               </Link>
//               , <span className="text-[#000000]">Cell Phones, Camera & Photo</span>
//             </p>
//             <p className="text-[#666666]">
//               Tag: <span className="text-[#000000]">phone, mobile, apple</span>
//             </p>
//           </div>

//           {/* Description */}
//           <p className="text-[#666666] text-[14px] mt-10 leading-[20px]">
//             The timeless Lacoste tee gets an update in a super-comfortable mid-weight fabric. A versatile essential that goes with everything, finished with an iconic crocodile
//           </p>

//           {/* Price */}
//           <div className="flex items-center gap-3 mb-4">
//             <span className="text-[#D52345] text-[28px] font-bold">€158</span>
//             <span className="line-through text-gray-400 text-[20px]">€175</span>
//             <span className="bg-[#FC5732] text-white text-white text-[12px] font-bold leading-[28px] rounded-[28px] px-[10px]">
//               10% OFF
//             </span>
//           </div>

//           {/* Countdown */}
//           <div className="bg-[#FBE9EB] border border-[#D52345] rounded-md px-[30px] pt-4 pb-3 flex items-center justify-center gap-4 flex-wrap text-center">
//             <MdTimer className="text-lg text-red-600" />
//             <span className="text-[#000] text-[16px] font-semibold">
//               Hurry up offer ends in:
//             </span>
//             <span className="font-semibold text-red-600">
//               803d : 23h : 56m : 59s
//             </span>
//           </div>

//           {/* Quantity + Buttons */}
//           <p className="text-[#000000] text-[14px]">Quantity:</p>
//           <div className="flex items-center gap-2 mb-8">
//             <div className="w-[127px] h-[50px] flex justify-between bg-[#F7F7F7] rounded-[3px] overflow-hidden">
//               <button className="w-[40px] h-full hover:bg-black hover:text-white transition flex items-center justify-center">
//                 <FiMinus />
//               </button>
//               <input
//                 type="text"
//                 defaultValue={1}
//                 className="w-[47px] h-full text-center outline-none bg-transparent"
//               />
//               <button className="w-[40px] h-full hover:bg-black hover:text-white transition flex items-center justify-center">
//                 <FiPlus />
//               </button>
//             </div>

//             {/* তোমার AddToCartButtonDeatile কম্পোনেন্ট থাকলে এখানে ইউজ করো */}
//             <button className="bg-[#D52345] text-white px-8 h-[50px] rounded-[3px] hover:bg-black transition flex items-center gap-2">
//               Add to Cart
//             </button>

//             <button className="w-[50px] h-[50px] border border-[#000] rounded-[3px] hover:bg-black hover:text-white transition flex items-center justify-center">
//               <FiHeart />
//             </button>
//             <button className="w-[50px] h-[50px] border border-[#000] rounded-[3px] hover:bg-black hover:text-white transition flex items-center justify-center text-2xl">
//               ×
//             </button>
//           </div>

//           {/* Extra Links */}
//           <div className="flex flex-wrap items-center gap-x-[30px] gap-y-[10px] border-b border-[#666666] pb-[25px] mb-[25px]">
//             <button className="flex items-center gap-1 text-[14px] hover:text-red-500">
//               <HelpCircle size={16} /> Ask A Question
//             </button>
//             <button className="flex items-center gap-1 text-[14px] hover:text-red-500">
//               <FiTruck size={16} /> Shipping & Return
//             </button>
//             <button className="flex items-center gap-1 text-[14px] hover:text-red-500">
//               <FiShare2 size={16} /> Share
//             </button>
//           </div>

//           {/* Delivery Info */}
//           <p className="text-sm leading-[16px]">
//             Delivery: <span className="text-[#D52345]">27th September – 29th September</span>
//           </p>
//           <p className="text-sm leading-[16px]">Free shipping and returns on all orders over €396</p>

//           {/* Payment */}
//           <div className="p-3 rounded bg-[#F7F7F7] h-[112px] flex flex-col items-center justify-center mt-6">
//             <p className="text-[14px] mb-3 font-medium text-center">
//               Guaranteed safe checkout:
//             </p>
//             <img
//               src="https://clinicmaster.goeasyapp.com/themes/c4ca4238a0b923820dcc509a6f75849b/6/images/payments/img-1.png"
//               alt="Payment"
//               className="h-8 w-auto"
//             />
//           </div>
//         </div>
//       </div>

//       {/* ==================== Tabs ==================== */}
//       <div className="w-full bg-[#F7F7F7] mt-10 py-10">
//         <div className="container mx-auto px-4">
//           <Tabs
//             centered
//             activeKey={activeTab}
//             onChange={setActiveTab}
//             items={tabItems.map((item) => ({
//               ...item,
//               children: (
//                 <AnimatePresence mode="wait">
//                   {activeTab === item.key && item.children}
//                 </AnimatePresence>
//               ),
//             }))}
//             className="custom-tabs"
//           />
//         </div>
//       </div>
//     </>
//   );
// }