"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import { FaHeart, FaExchangeAlt, FaEye } from "react-icons/fa";
import { FiShoppingCart } from "react-icons/fi";
import { IoChevronBack, IoChevronForward } from "react-icons/io5";
import { useModal } from "@/@module/@common/modal/modal-modal-context";
import Link from "next/link";
import "swiper/css";
import "swiper/css/navigation";

const products = [
  {
    id: 1,
    category: "Cosmetics",
    title: "Christian Dior Lipstick",
    price: "€88",
    image: [
      "https://clinicmaster.goeasyapp.com/uploads/files/c4ca4238a0b923820dcc509a6f75849b/c4ca4238a0b923820dcc509a6f75849b//C_20.jpg",
      "https://clinicmaster.goeasyapp.com/uploads/files/c4ca4238a0b923820dcc509a6f75849b/c4ca4238a0b923820dcc509a6f75849b//stroller-baby-brown.jpgt",
    ],
  },
  {
    id: 2,
    category: "Handbags",
    title: "Luxury Leather Bag",
    price: "€176",
    image: [
      "https://clinicmaster.goeasyapp.com/uploads/files/c4ca4238a0b923820dcc509a6f75849b/c4ca4238a0b923820dcc509a6f75849b//stroller-baby-brown.jpg",
      "https://clinicmaster.goeasyapp.com/uploads/files/c4ca4238a0b923820dcc509a6f75849b/c4ca4238a0b923820dcc509a6f75849b//C_20.jpgt",
    ],
  },
  {
    id: 3,
    category: "Fashion, Sneakers",
    title: "High Top Sneakers",
    price: "€220",
    image: [
      "https://clinicmaster.goeasyapp.com/uploads/files/c4ca4238a0b923820dcc509a6f75849b/c4ca4238a0b923820dcc509a6f75849b//E_32.jpg",
      "https://clinicmaster.goeasyapp.com/uploads/files/c4ca4238a0b923820dcc509a6f75849b/c4ca4238a0b923820dcc509a6f75849b//C_20.jpgt",
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
      "https://clinicmaster.goeasyapp.com/uploads/files/c4ca4238a0b923820dcc509a6f75849b/c4ca4238a0b923820dcc509a6f75849b/E_12.jpg",
      "https://clinicmaster.goeasyapp.com/uploads/files/c4ca4238a0b923820dcc509a6f75849b/c4ca4238a0b923820dcc509a6f75849b//C_20.jpgt",
    ],
  },
  {
    id: 5,
    category: "Fashion",
    title: "Women's Sweater Casual",
    price: "€352",
    image: [
      "https://clinicmaster.goeasyapp.com/uploads/files/c4ca4238a0b923820dcc509a6f75849b/c4ca4238a0b923820dcc509a6f75849b/C_1.jpg",
      "https://clinicmaster.goeasyapp.com/uploads/files/c4ca4238a0b923820dcc509a6f75849b/c4ca4238a0b923820dcc509a6f75849b//C_20.jpgt",
    ],
  },
  {
    id: 6,
    category: "Electronics",
    title: "Logitech G309 Mouse",
    price: "€99",
    tag: "SALE",
    image: [
      "https://clinicmaster.goeasyapp.com/uploads/files/c4ca4238a0b923820dcc509a6f75849b/c4ca4238a0b923820dcc509a6f75849b//S_11a.jpg",
      "https://clinicmaster.goeasyapp.com/uploads/files/c4ca4238a0b923820dcc509a6f75849b/c4ca4238a0b923820dcc509a6f75849b//C_20.jpgt",
    ],
  },
  {
    id: 7,
    category: "Beauty",
    title: "Medicube Zero Pore Cream",
    price: "€65",
    image: [
      "https://clinicmaster.goeasyapp.com/uploads/files/c4ca4238a0b923820dcc509a6f75849b/c4ca4238a0b923820dcc509a6f75849b/C_11.jpg",
      "https://clinicmaster.goeasyapp.com/uploads/files/c4ca4238a0b923820dcc509a6f75849b/c4ca4238a0b923820dcc509a6f75849b//C_20.jpgt",
    ],
  },
  {
    id: 8,
    category: "Watches",
    title: "Luxury Wrist Watch",
    price: "€450",
    image: [
      "https://clinicmaster.goeasyapp.com/uploads/files/c4ca4238a0b923820dcc509a6f75849b/c4ca4238a0b923820dcc509a6f75849b//S_11c.jpg",
      "https://clinicmaster.goeasyapp.com/uploads/files/c4ca4238a0b923820dcc509a6f75849b/c4ca4238a0b923820dcc509a6f75849b//C_20.jpgt",
    ],
  },
  {
    id: 9,
    category: "Shoes",
    title: "Running Shoes",
    price: "€120",
    image: [
      "https://clinicmaster.goeasyapp.com/uploads/files/c4ca4238a0b923820dcc509a6f75849b/c4ca4238a0b923820dcc509a6f75849b/E_8.jpg",
      "https://clinicmaster.goeasyapp.com/uploads/files/c4ca4238a0b923820dcc509a6f75849b/c4ca4238a0b923820dcc509a6f75849b//C_20.jpgt",
    ],
  },
  {
    id: 10,
    category: "Accessories",
    title: "Leather Belt",
    price: "€35",
    image: [
      "https://clinicmaster.goeasyapp.com/uploads/files/c4ca4238a0b923820dcc509a6f75849b/c4ca4238a0b923820dcc509a6f75849b//E_30.jpg",
      "https://clinicmaster.goeasyapp.com/uploads/files/c4ca4238a0b923820dcc509a6f75849b/c4ca4238a0b923820dcc509a6f75849b//C_20.jpgt",
    ],
  },
];

const CustomerMostLoved = () => {
  const { openProductModal, openCartModal } = useModal();

  return (
    <div className="bg-gray-50 container relative">
      <section className="w-full px-4 md:px-12 lg:px-24 py-10 mt-30 relative">
        {/* Header */}
        <div className="flex items-center justify-between mb-6 flex-wrap gap-2">
          <h2 className="text-[24px] sm:text-[30px] text-[#000000] font-semibold mb-4">
            Customer Most Loved
          </h2>
          <a
            href="#"
            className="text-[14px] mb-4 text-[#000000] underline cursor-pointer"
          >
            View All Products
          </a>
        </div>

        {/* Swiper */}
        <Swiper
          modules={[Navigation, Autoplay]}
          spaceBetween={15}
          slidesPerView={1}
          navigation={{ nextEl: ".custom-next", prevEl: ".custom-prev" }}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          breakpoints={{
            320: { slidesPerView: 2, spaceBetween: 10 },
            480: { slidesPerView: 2, spaceBetween: 15 },
            640: { slidesPerView: 2, spaceBetween: 20 },
            768: { slidesPerView: 3, spaceBetween: 20 },
            1024: { slidesPerView: 4, spaceBetween: 25 },
            1280: { slidesPerView: 5, spaceBetween: 30 },
          }}
          className="pb-10 flex justify-center"
        >
          {products.map((product:any) => (
            <SwiperSlide key={product.id} className="flex justify-center">
              <Link href={`/product/${product.id}`}>
                <div className="relative border border-gray-200 rounded-md bg-white group overflow-hidden transition-all duration-300 w-full max-w-[226px] h-[350px] cursor-pointer flex flex-col">
                  {/* SALE Badge */}
                  {product.tag && (
                    <span className="absolute top-3 left-3 bg-red-500 text-white text-xs font-semibold px-3 py-1 rounded-full z-10 transition-all duration-300">
                      {product.tag}
                    </span>
                  )}

                  {/* Product Image */}
                  <div className="relative w-full h-[207px] flex items-center justify-center overflow-hidden transition-all duration-300">
                    <img
                      src={product.image[0]}
                      alt={product.title}
                      className="w-full h-[207px] object-contain transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>

                  {/* Hover Icons */}
                  <div className="absolute top-[103.5px] mt-4 -translate-y-1/2 right-3 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300 z-20">
                    <button className="bg-white/80 hover:bg-white shadow-md w-10 h-10 flex items-center justify-center rounded-full hover:scale-110">
                      <FaHeart className="text-[#666666]" />
                    </button>
                    <button className="bg-white/80 hover:bg-white shadow-md w-10 h-10 flex items-center justify-center rounded-full hover:scale-110">
                      <FaExchangeAlt className="text-[#666666]" />
                    </button>
                    <button
                      onClick={(e) => {
                        e.preventDefault();
                        openProductModal(product);
                      }}
                      className="bg-white/80 hover:bg-white shadow-md w-10 h-10 flex items-center justify-center rounded-full hover:scale-110"
                    >
                      <FaEye className="text-[#666666]" />
                    </button>
                  </div>

                  {/* Product Info */}
                  <div className="px-3 sm:px-4 py-2 flex flex-col gap-2 transition-all duration-300 flex-1">
                    <p className="text-[12px] text-[#666666] overflow-hidden whitespace-nowrap text-ellipsis">
                      {product.category}
                    </p>

                    <h3 className="text-[14px] sm:text-[16px] leading-[1.2] font-medium capitalize text-[#000000] line-clamp-1">
                      {product.title}
                    </h3>

                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-[#F93355] text-[18px] sm:text-[20px]">
                        {product.price}
                      </span>
                      {product.oldPrice && (
                        <span className="line-through text-[#666666] ml-[4px] text-[16px] sm:text-[20px]">
                          {product.oldPrice}
                        </span>
                      )}
                    </div>

                    {/* Add to Cart Button */}
                    <button
                      onClick={(e) => {
                        e.preventDefault();
                        openCartModal(product);
                      }}
                      className="mt-auto inline-flex items-center justify-center gap-2 py-2 px-4 rounded-[5px] bg-[#F7F7F7] text-[14px] text-[var(--main-color2)] font-medium capitalize opacity-0 translate-y-5 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 hover:bg-black hover:text-white"
                    >
                      <FiShoppingCart className="text-sm" />
                      Add To Cart
                    </button>
                  </div>
                </div>
              </Link>
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
          <button className="w-10 h-10 flex items-center cursor-pointer justify-center rounded-full shadow bg-black text-white hover:bg-white hover:text-black transition">
            <IoChevronForward size={20} />
          </button>
        </div>
      </section>
    </div>
  );
};

export default CustomerMostLoved;