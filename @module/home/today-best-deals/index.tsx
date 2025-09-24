"use client";

import { useModal } from "@/@module/@common/modal/modal-modal-context";
import Link from "next/link";
import React from "react";
import { FaHeart, FaExchangeAlt, FaEye } from "react-icons/fa";
import { FiShoppingCart } from "react-icons/fi";

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
];

export default function BestDeals() {
  const { openProductModal, openCartModal } = useModal();

  return (
    <div className="container mx-auto px-4 transition-all duration-300">
      <div className="bg-[#fceef1] mt-20 rounded-xl p-6 flex flex-col lg:flex-row gap-6 transition-all duration-300">
        {/* LEFT SIDE - Timer */}
        <div className="flex flex-col lg:w-[300px]">
          <h2 className="text-2xl font-semibold mb-6 transition-all duration-300 text-center lg:text-left">
            Today's Best Deals
          </h2>

          {/* Timer */}
          <div className="flex justify-center items-center gap-2 text-center mb-6 flex-wrap">
            {["Days", "Hours", "Mins", "Secs"].map((label, index) => (
              <React.Fragment key={index}>
                {index !== 0 && (
                  <span className="text-sm sm:text-base font-semibold">:</span>
                )}
                <div className="flex flex-col items-center min-w-[50px]">
                  <span className="w-[50px] h-[50px] bg-black text-white flex items-center justify-center rounded-full font-bold text-sm">
                    00
                  </span>
                  <span className="text-[10px] sm:text-xs mt-1">{label}</span>
                </div>
              </React.Fragment>
            ))}
          </div>

          {/* Shop All Button */}
          <div className="flex justify-center mt-4">
            <button className="border border-black px-6 py-2 rounded-md hover:bg-black hover:text-white hover:scale-105 transition-all duration-300 cursor-pointer">
              Shop All
            </button>
          </div>
        </div>

        {/* RIGHT SIDE - Products */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 flex-1">
          {products.map((product) => (
            <Link href={`/product/${product.id}`} key={product.id}>
              <div className="relative border border-gray-200 rounded-md bg-white group overflow-hidden transition-all duration-300 w-full h-[350px] cursor-pointer flex flex-col">
                {/* SALE Badge */}
                {product.discount && (
                  <span className="absolute top-3 left-3 bg-red-500 text-white text-xs font-semibold px-3 py-1 rounded-full z-10 transition-all duration-300">
                    {product.discount}
                  </span>
                )}

                {/* Product Image */}
                <div className="relative w-full max-w-[207px] mx-auto h-[207px] flex items-center justify-center overflow-hidden transition-all duration-300">
                  <img
                    src={product.images[0]}
                    alt={product.name}
                    className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-105"
                  />
                </div>

                {/* Hover Icons */}
                <div className="absolute top-[103.5px] mt-4 -translate-y-1/2 right-3 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300 z-20">
                  <button className="bg-white/80 hover:bg-white shadow-md hover:shadow-lg transition-all duration-300 cursor-pointer w-10 h-10 flex items-center justify-center rounded-full">
                    <FaHeart className="text-[#666666]" />
                  </button>
                  <button className="bg-white/80 hover:bg-white shadow-md hover:shadow-lg transition-all duration-300 cursor-pointer w-10 h-10 flex items-center justify-center rounded-full">
                    <FaExchangeAlt className="text-[#666666]" />
                  </button>
                  <button
                    onClick={(e) => {
                      e.preventDefault(); // prevent link navigation
                      openProductModal(product);
                    }}
                    className="bg-white/80 hover:bg-white shadow-md hover:shadow-lg transition-all duration-300 cursor-pointer w-10 h-10 flex items-center justify-center rounded-full"
                  >
                    <FaEye className="text-[#666666]" />
                  </button>
                </div>

                {/* Product Info */}
                <div className="px-4 py-2 flex flex-col gap-2 transition-all duration-300">
                  <p className="text-[12px] text-[#666666] truncate transition-all duration-300">
                    {product.category}
                  </p>
                  <h3 className="text-[20px] text-[#000000] truncate mt-2 transition-all duration-300">
                    {product.name}
                  </h3>
                  <div className="flex items-center gap-2 mb-2 transition-all duration-300">
                    <span className="text-[#f92255] text-[22px] font-semibold transition-all duration-300">
                      €{product.price}
                    </span>
                    {product.oldPrice && (
                      <span className="line-through text-[#666666] ml-[10px] text-[22px] transition-all duration-300">
                        €{product.oldPrice}
                      </span>
                    )}
                  </div>

                  {/* Add to Cart */}
                  <button
                    onClick={(e) => {
                      e.preventDefault(); // prevent link navigation
                      openCartModal(product);
                    }}
                    className="mt-auto flex items-center justify-center gap-1 bg-black text-white text-xs font-medium py-2 translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 rounded-md cursor-pointer hover:scale-105 hover:bg-gray-800"
                  >
                    <FiShoppingCart className="text-sm transition-all duration-300" />
                    Add To Cart
                  </button>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
