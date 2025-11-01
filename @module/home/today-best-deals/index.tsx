"use client";

import React from "react";
import Link from "next/link";
import { FaHeart, FaExchangeAlt, FaEye } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { useModal } from "@/@module/@common/modal/modal-modal-context";
import AddToCartButton from "@/@module/@common/add-to-cart-button";

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
  const dispatch = useDispatch();
  const { openProductModal, openCartModal } = useModal();

 

  return (
    <div className="container mx-auto px-4 transition-all duration-300">
      <div className="bg-[#fceef1] mt-20 rounded-xl p-6 flex flex-col lg:flex-row gap-6 transition-all duration-300">
        {/* LEFT SIDE */}
        <div className="flex flex-col lg:w-[300px] flex-shrink-0">
          <h2 className="leading-normal font-medium capitalize mb-8 text-[#000000] text-[28px] sm:text-[32px] mt-4 text-center lg:text-left">
            Today's Best Deals
          </h2>

          {/* Timer */}
          <div className="flex justify-center items-center gap-2 flex-wrap">
            {["Days", "Hours", "Mins", "Secs"].map((label, idx) => (
              <div key={idx} className="flex flex-col items-center min-w-[50px]">
                <span className="w-[50px] h-[50px] bg-black text-white flex items-center justify-center rounded-full font-bold text-sm">
                  00
                </span>
                <span className="text-[10px] sm:text-xs mt-1">{label}</span>
              </div>
            ))}
          </div>

          {/* Shop All Button */}
          <div className="flex justify-center mt-6">
            <button className="rounded-[5px] bg-transparent border border-[var(--main-color2)] text-[var(--main-color2)] px-8 py-[10px] font-medium capitalize transition-all duration-300 hover:bg-black hover:text-white cursor-pointer">
              Shop All
            </button>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 flex-1">
          {products.map((product) => (
            <Link href={`/product/${product.id}`} key={product.id}>
              <div className="relative border border-gray-200 rounded-md bg-white group overflow-hidden transition-all duration-300 flex flex-col h-full">
                {/* Badge */}
                {product.discount && (
                  <span className="absolute top-3 left-3 bg-red-500 text-white text-xs font-semibold px-3 py-1 rounded-full z-10">
                    {product.discount}
                  </span>
                )}

                {/* Image */}
                <div className="relative w-full h-[200px] flex items-center justify-center overflow-hidden">
                  <img
                    src={product.images[0]}
                    alt={product.name}
                    className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-105"
                  />
                </div>

                {/* Hover Icons */}
                <div className="absolute top-1/2 right-3 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300 -translate-y-1/2">
                  <button className="bg-white/80 hover:bg-white shadow-md w-10 h-10 flex items-center justify-center rounded-full hover:scale-110">
                    <FaHeart className="text-[#666666] cursor-pointer" />
                  </button>
                  <button className="bg-white/80 hover:bg-white shadow-md w-10 h-10 flex items-center justify-center rounded-full hover:scale-110">
                    <FaExchangeAlt className="text-[#666666] cursor-pointer" />
                  </button>
                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      openProductModal(product);
                    }}
                    className="bg-white/80 hover:bg-white shadow-md w-10 h-10 flex items-center justify-center rounded-full hover:scale-110"
                  >
                    <FaEye className="text-[#666666] cursor-pointer" />
                  </button>
                </div>

                {/* Info */}
                <div className="px-4 py-3 flex flex-col gap-2 flex-1">
                  <p className="text-[12px] text-[#666666] truncate">
                    {product.category}
                  </p>
                  <h3 className="text-[15px] font-medium text-[#000000] line-clamp-1">
                    {product.name}
                  </h3>
                  <div className="flex items-center gap-2">
                    <span className="text-[#F93355] text-[18px]">
                      €{product.price}
                    </span>
                    {product.oldPrice && (
                      <span className="line-through text-[#666666] text-[16px]">
                        €{product.oldPrice}
                      </span>
                    )}
                  </div>

                {/* Add To Cart */}
                <AddToCartButton
                  product={product}
                  className="mt-auto opacity-0 translate-y-5 group-hover:opacity-100 group-hover:translate-y-0"
                />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

