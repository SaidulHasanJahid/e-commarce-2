"use client";
import React from "react";
import Link from "next/link";
import { FaHeart, FaExchangeAlt, FaEye } from "react-icons/fa";
import { IoChevronBack, IoChevronForward } from "react-icons/io5";
import { useModal } from "@/@module/@common/modal/modal-modal-context";
import AddToCartButton from "@/@module/@common/add-to-cart-button";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const products = [
  {
    id: 1,
    name: "Dress GELLER NEW YORK",
    category: "Fashion",
    price: 26,
    oldPrice: 70,
    discount: "SALE",
    images: [
      "https://clinicmaster.goeasyapp.com/uploads/files/c4ca4238a0b923820dcc509a6f75849b/c4ca4238a0b923820dcc509a6f75849b/Fa_9a.jpg",
      "https://clinicmaster.goeasyapp.com/uploads/files/c4ca4238a0b923820dcc509a6f75849b/c4ca4238a0b923820dcc509a6f75849b/Fa_9a.jpg",
    ],
  },
  {
    id: 2,
    name: "Medicube Zero Pore Pimpling",
    category: "Health & Beauty",
    price: 84,
    oldPrice: 95,
    discount: "SALE",
    images: [
      "https://clinicmaster.goeasyapp.com/uploads/files/c4ca4238a0b923820dcc509a6f75849b/c4ca4238a0b923820dcc509a6f75849b/E_5a.jpg",
      "https://clinicmaster.goeasyapp.com/uploads/files/c4ca4238a0b923820dcc509a6f75849b/c4ca4238a0b923820dcc509a6f75849b/E_5a.jpg",
    ],
  },
  {
    id: 3,
    name: "Logitech G309 SPEED Mouse",
    category: "Electronics , Accessories",
    price: 33,
    oldPrice: 35,
    discount: "SALE",
    images: [
      "https://clinicmaster.goeasyapp.com/uploads/files/c4ca4238a0b923820dcc509a6f75849b/c4ca4238a0b923820dcc509a6f75849b/C_3.jpg",
      "https://clinicmaster.goeasyapp.com/uploads/files/c4ca4238a0b923820dcc509a6f75849b/c4ca4238a0b923820dcc509a6f75849b/C_3.jpg",
    ],
  },
  {
    id: 4,
    name: "Christian Dior Diorstick",
    category: "Cosmetics",
    price: 88,
    images: [
      "https://clinicmaster.goeasyapp.com/uploads/files/c4ca4238a0b923820dcc509a6f75849b/c4ca4238a0b923820dcc509a6f75849b/E_16.jpg",
      "https://clinicmaster.goeasyapp.com/uploads/files/c4ca4238a0b923820dcc509a6f75849b/c4ca4238a0b923820dcc509a6f75849b/E_16.jpg",
    ],
  },
   {
    id: 5,
    name: "Logitech G309 SPEED Mouse",
    category: "Electronics , Accessories",
    price: 33,
    oldPrice: 35,
    discount: "SALE",
    images: [
      "https://clinicmaster.goeasyapp.com/uploads/files/c4ca4238a0b923820dcc509a6f75849b/c4ca4238a0b923820dcc509a6f75849b//E_32.jpg",
      "https://clinicmaster.goeasyapp.com/uploads/files/c4ca4238a0b923820dcc509a6f75849b/c4ca4238a0b923820dcc509a6f75849b//C_20.jpgt",
    ],
  },
];

export default function BestDeals() {
  const { openProductModal } = useModal();

  return (
    <div className="container mx-auto px-4">
      <div className="bg-[#fceef1] mt-20 rounded-xl p-6 flex flex-col lg:flex-row gap-6">
        {/* LEFT SIDE - Title + Timer */}
        <div className="flex flex-col lg:w-[300px] flex-shrink-0">
          <h2 className="text-center lg:text-left text-2xl sm:text-3xl md:text-[32px] font-medium text-black capitalize mb-8 mt-4">
            Today's Best Deals
          </h2>

          {/* Timer */}
          <div className="flex justify-center items-center gap-2 flex-wrap">
            {["Days", "Hours", "Mins", "Secs"].map((label, idx) => (
              <div key={idx} className="flex flex-col items-center min-w-[50px]">
                <span className="w-12 h-12 sm:w-[50px] sm:h-[50px] bg-black text-white flex items-center justify-center rounded-full font-bold text-sm">
                  00
                </span>
                <span className="text-[10px] sm:text-xs mt-1">{label}</span>
              </div>
            ))}
          </div>

          {/* Shop All Button */}
          <div className="flex justify-center mt-6">
            <button className="rounded-md border border-[var(--main-color2)] text-[var(--main-color2)] px-8 py-2.5 font-medium capitalize hover:bg-black hover:text-white transition-all duration-300">
              Shop All
            </button>
          </div>
        </div>

        {/* RIGHT SIDE - Swiper */}
        <div className="flex-1 relative group">
          {/* Custom Navigation Arrows */}
          <div className="absolute left-[-50px] top-1/2 -translate-y-1/2 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <button className="swiper-button-prev-custom cursor-pointer w-12 h-12 flex items-center justify-center rounded-full shadow bg-black text-white hover:bg-white hover:text-black transition">
              <IoChevronBack size={22} />
            </button>
          </div>

          <div className="absolute right-[-50px] top-1/2 -translate-y-1/2 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <button className="swiper-button-next-custom w-12 h-12 cursor-pointer flex items-center justify-center rounded-full shadow bg-black text-white hover:bg-white hover:text-black transition">
              <IoChevronForward size={22} />
            </button>
          </div>

          <Swiper
            modules={[Navigation, Autoplay]}
            spaceBetween={20}
            loop={true}
            speed={800}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            navigation={{
              nextEl: ".swiper-button-next-custom",
              prevEl: ".swiper-button-prev-custom",
            }}
            breakpoints={{
              0: { slidesPerView: 2, spaceBetween: 16 },
              640: { slidesPerView: 2, spaceBetween: 20 },
              768: { slidesPerView: 3, spaceBetween: 20 },
              1024: { slidesPerView: 4, spaceBetween: 24 },
            }}
            className="h-full"
          >
            {products.map((product) => {
              // AddToCartButton এর জন্য সঠিক ফরম্যাট + quantity: 1
              const cartProduct = {
                id: product.id,
                name: product.name,
                price: product.price,
                oldPrice: product.oldPrice || null,
                category: product.category,
                images: product.images,
                quantity: 1, // এটা না থাকলে Redux এ যাবে না!
              };

              return (
                <SwiperSlide key={product.id} className="!w-auto">
                  <Link href={`/product/${product.id}`} className="block">
                    <div className="relative border border-gray-200 rounded-md bg-white group/card overflow-hidden flex flex-col transition-all duration-300 hover:shadow-lg w-full max-w-[260px] mx-auto">
                      {/* SALE Badge */}
                      {product.discount && (
                        <span className="absolute top-3 left-3 bg-red-500 text-white text-xs font-semibold px-3 py-1 rounded-full z-10">
                          {product.discount}
                        </span>
                      )}

                      {/* Product Image */}
                      <div className="w-full h-[200px] flex items-center justify-center bg-white p-4">
                        <img
                          src={product.images[0]}
                          alt={product.name}
                          className="max-w-full max-h-full object-contain transition-transform duration-500 group-hover/card:scale-105"
                        />
                      </div>

                      {/* Hover Icons */}
                      <div className="absolute top-1/2 right-3 transform -translate-y-1/2 flex flex-col gap-2 opacity-0 group-hover/card:opacity-100 transition-all duration-500 z-20">
                        <button className="bg-white/90 hover:bg-white shadow-md w-10 h-10 flex items-center justify-center rounded-full hover:scale-110 transition-transform">
                          <FaHeart className="text-gray-600" />
                        </button>
                        <button className="bg-white/90 hover:bg-white shadow-md w-10 h-10 flex items-center justify-center rounded-full hover:scale-110 transition-transform">
                          <FaExchangeAlt className="text-gray-600" />
                        </button>
                        <button
                          onClick={(e) => {
                            e.preventDefault();
                            e.stopPropagation();
                            openProductModal(product);
                          }}
                          className="bg-white/90 hover:bg-white shadow-md w-10 h-10 flex items-center justify-center rounded-full hover:scale-110 transition-transform"
                        >
                          <FaEye className="text-gray-600" />
                        </button>
                      </div>

                      {/* Product Info */}
                      <div className="p-4 flex flex-col gap-1 flex-1">
                        <p className="text-xs text-gray-600 truncate">{product.category}</p>
                        <h3 className="text-sm font-medium text-black line-clamp-1">
                          {product.name}
                        </h3>
                        <div className="flex items-center gap-2">
                          <span className="text-lg text-[#F93355]">€{product.price}</span>
                          {product.oldPrice && (
                            <span className="line-through text-gray-500 text-base">
                              €{product.oldPrice}
                            </span>
                          )}
                        </div>

                        {/* Add to Cart Button - Hover এ দেখাবে */}
                        <div className="mt-auto">
                          <AddToCartButton
                            product={cartProduct}
                            className="opacity-0 translate-y-4 group-hover/card:opacity-100 group-hover/card:translate-y-0 transition-all duration-500 w-full"
                          />
                        </div>
                      </div>
                    </div>
                  </Link>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
    </div>
  );
}