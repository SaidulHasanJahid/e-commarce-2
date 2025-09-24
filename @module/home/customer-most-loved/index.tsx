"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import { FaHeart, FaExchangeAlt, FaEye } from "react-icons/fa";
import { FiShoppingCart } from "react-icons/fi";
import { IoChevronBack, IoChevronForward } from "react-icons/io5";
import { useModal } from "@/@module/@common/modal/modal-modal-context";
import "swiper/css";
import "swiper/css/navigation";

const products = [
  {
    id: 1,
    category: "Cosmetics",
    title: "Christian Dior Lipstick",
    price: "€88",
    image: [
      "https://images.unsplash.com/photo-1556228724-4f2dca4bfa43?w=500&auto=format",
      "https://images.unsplash.com/photo-1542831371-d531d36971e6?w=500&auto=format",
    ],
  },
  {
    id: 2,
    category: "Handbags",
    title: "Luxury Leather Bag",
    price: "€176",
    image: [
      "https://images.unsplash.com/photo-1542831371-29b0f3b5e7c5?w=500&auto=format",
      "https://images.unsplash.com/photo-1556228724-4f2dca4bfa43?w=500&auto=format",
    ],
  },
  {
    id: 3,
    category: "Fashion, Sneakers",
    title: "High Top Sneakers",
    price: "€220",
    image: [
      "https://images.unsplash.com/photo-1514996937319-344454492b37?w=500&auto=format",
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500&auto=format",
    ],
  },
  {
    id: 4,
    category: "Smartphones",
    title: "Huness I16 ProMAX",
    price: "€158",
    oldPrice: "€175",
    tag: "SALE",
    image: [
      "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=500&auto=format",
    ],
  },
  {
    id: 5,
    category: "Fashion",
    title: "Women's Sweater Casual",
    price: "€352",
    image: [
      "https://images.unsplash.com/photo-1520975698510-0f69a1c9ed32?w=500&auto=format",
    ],
  },
  {
    id: 6,
    category: "Electronics",
    title: "Logitech G309 Mouse",
    price: "€99",
    tag: "SALE",
    image: [
      "https://images.unsplash.com/photo-1580910051079-2cf03f1b2b27?w=500&auto=format",
    ],
  },
  {
    id: 7,
    category: "Beauty",
    title: "Medicube Zero Pore Cream",
    price: "€65",
    image: [
      "https://images.unsplash.com/photo-1536305030221-49d4b8eafde7?w=500&auto=format",
    ],
  },
  {
    id: 8,
    category: "Watches",
    title: "Luxury Wrist Watch",
    price: "€450",
    image: [
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&auto=format",
    ],
  },
  {
    id: 9,
    category: "Shoes",
    title: "Running Shoes",
    price: "€120",
    image: [
      "https://images.unsplash.com/photo-1532619187600-5c4d4a4b1b90?w=500&auto=format",
    ],
  },
  {
    id: 10,
    category: "Accessories",
    title: "Leather Belt",
    price: "€35",
    image: [
      "https://images.unsplash.com/photo-1593032465173-9c3f05c497a6?w=500&auto=format",
    ],
  },
];

const CustomerMostLoved = () => {
  const { openProductModal, openCartModal } = useModal();

  return (
    <div className="bg-gray-50 container relative">
      <section className="w-full px-4 md:px-12 lg:px-24 py-10 mt-30 relative">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl md:text-2xl font-semibold">Customer Most Loved</h2>
          <a href="#" className="text-sm text-blue-600 hover:underline cursor-pointer">View All Products</a>
        </div>

        {/* Swiper */}
        <Swiper
          modules={[Navigation, Autoplay]}
          spaceBetween={10}
          slidesPerView={1}
          navigation={{ nextEl: ".custom-next", prevEl: ".custom-prev" }}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
            1280: { slidesPerView: 4 },
          }}
          className="pb-10"
        >
          {products.map((product:any) => (
            <SwiperSlide key={product.id}>
              <div className="relative border cursor-pointer border-gray-200 rounded-md bg-white group overflow-hidden transition-all duration-300 h-[350px] w-[230px] flex flex-col">
                {/* Tag Badge */}
                {product.tag && (
                  <span className="absolute top-3 left-3 bg-red-500 text-white text-xs font-semibold px-3 py-1 rounded-full z-10 transition-all duration-300">
                    {product.tag}
                  </span>
                )}

                {/* Image */}
                <div className="relative flex items-center justify-center overflow-hidden h-[230px] w-[230px] mx-auto cursor-pointer">
        

                  {/* Hover Icons */}
                  <div className="absolute top-1/2 -translate-y-1/2 right-3 flex flex-col gap-3 opacity-0 group-hover:opacity-100 transition-all duration-300 z-10">
                    <button className="bg-white/80 hover:bg-white shadow-md hover:shadow-lg w-10 h-10 flex items-center justify-center rounded-full transition-all duration-300 cursor-pointer">
                      <FaHeart className="text-[#666666]" />
                    </button>
                    <button className="bg-white/80 hover:bg-white shadow-md hover:shadow-lg w-10 h-10 flex items-center justify-center rounded-full transition-all duration-300 cursor-pointer">
                      <FaExchangeAlt className="text-[#666666]" />
                    </button>
                    <button
                      onClick={() => openProductModal(product)}
                      className="bg-white/80 hover:bg-white shadow-md hover:shadow-lg w-10 h-10 flex items-center justify-center rounded-full transition-all duration-300 cursor-pointer"
                    >
                      <FaEye className="text-[#666666]" />
                    </button>
                  </div>
                </div>

                {/* Product Info */}
                <div className="px-4 py-2 flex flex-col gap-2 transition-all duration-300">
                  <p className="text-[12px] text-[#666666] truncate cursor-pointer">{product.category}</p>
                  <h3 className="text-[20px] text-[#000000] truncate mt-2 cursor-pointer">{product.title}</h3>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-[#f92255] text-[22px] font-semibold cursor-pointer">{product.price}</span>
                    {product.oldPrice && (
                      <span className="line-through text-[#666666] ml-[10px] text-[22px] cursor-pointer">{product.oldPrice}</span>
                    )}
                  </div>

                  {/* Add to Cart */}
                  <button
                    onClick={() => openCartModal(product)}
                    className="mt-auto flex items-center justify-center gap-1 bg-black text-white text-xs font-medium py-2 translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 rounded-md cursor-pointer hover:scale-105 hover:bg-gray-800"
                  >
                    <FiShoppingCart className="text-sm transition-all duration-300" /> Add To Cart
                  </button>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Navigation Buttons */}
        <div className="custom-prev absolute top-1/2 -translate-y-1/2 left-2 z-20 cursor-pointer">
          <button className="w-10 h-10 flex items-center cursor-pointer justify-center rounded-full shadow bg-black text-white hover:bg-white hover:text-black transition">
            <IoChevronBack size={20} />
          </button>
        </div>
        <div className="custom-next absolute top-1/2 -translate-y-1/2 right-2 z-20 cursor-pointer">
          <button className="w-10 h-10 flex items-center justify-center cursor-pointer rounded-full shadow bg-black text-white hover:bg-white hover:text-black transition">
            <IoChevronForward size={20} />
          </button>
        </div>
      </section>
    </div>
  );
};

export default CustomerMostLoved;
