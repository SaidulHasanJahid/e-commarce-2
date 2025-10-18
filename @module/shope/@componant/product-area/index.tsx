"use client";

import { useModal } from "@/@module/@common/modal/modal-modal-context";
import Link from "next/link";
import React, { useState } from "react";
import { FaHeart, FaExchangeAlt, FaEye } from "react-icons/fa";
import { FiShoppingCart } from "react-icons/fi";
import { FaChevronDown, FaChevronLeft, FaChevronRight } from "react-icons/fa";

// Static product list
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
    name: "Christian Dior Diorstick",
    category: "Cosmetics",
    price: 88,
    images: [
      "https://clinicmaster.goeasyapp.com/uploads/files/c4ca4238a0b923820dcc509a6f75849b/c4ca4238a0b923820dcc509a6f75849b/E_16.jpg",
      "https://clinicmaster.goeasyapp.com/uploads/files/c4ca4238a0b923820dcc509a6f75849b/c4ca4238a0b923820dcc509a6f75849b/E_16.jpg",
    ],
  },
];

export default function ProductArea() {
  const { openProductModal, openCartModal } = useModal();

  const [sort, setSort] = useState("latest");
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);

  const itemsPerPage = 8;
  const sorted = [...products].sort((a, b) => {
    if (sort === "latest") return b.id - a.id;
    if (sort === "oldest") return a.id - b.id;
    if (sort === "high") return b.price - a.price;
    if (sort === "low") return a.price - b.price;
    return 0;
  });

  const totalPages = Math.ceil(sorted.length / itemsPerPage);
  const start = (currentPage - 1) * itemsPerPage;
  const paginated = sorted.slice(start, start + itemsPerPage);

  const goPage = (p: number) => {
    if (p >= 1 && p <= totalPages) setCurrentPage(p);
  };

  return (
    <div className="min-h-screen md:w-[1100px] lg:w-[1100px] px-4 py-6">
      {/* Header */}
      <div className="mx-auto md:h-[40px] lg:h-[40px] z-20 p-8 bg-[#f8f8f8] flex flex-col sm:flex-row justify-between items-center gap-4 mb-6">
        <h2 className="text-[15px] text-[#141629] font-semibold">Products</h2>
        <div className="flex items-center gap-4">
          <div className="relative">
            <button
              className="flex items-center gap-1 border z-20  py-1 bg-white h-[40px] shadow  text-[#767678] w-[148px] pl-10 cursor-pointer rounded-full border-none"
              onClick={() => setDropdownOpen((o) => !o)}
            >
              {sort} <FaChevronDown className="ml-2" />
            </button>
            {dropdownOpen && (
              <div className="absolute z-20 right-0 mt-1 bg-white w-[140px] rounded text-[15px] text-[#767678] shadow">
                {["latest", "oldest", "high", "low"].map((v) => (
                  <div
                    key={v}
                    className="px-4 py-2 hover:bg-gray-100 cursor-pointer capitalize"
                    onClick={() => {
                      setSort(v);
                      setDropdownOpen(false);
                      setCurrentPage(1);
                    }}
                  >
                    {v.replace(/^(.)/, (s) => s.toUpperCase())}
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 flex-1">
        {paginated.map((product) => (
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

                {/* Cart Button */}
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    openCartModal(product);
                  }}
                  className="mt-auto inline-flex cursor-pointer items-center justify-center gap-2 py-2 px-4 rounded-[5px] bg-[#F7F7F7] text-[14px] text-[var(--main-color2)] font-medium capitalize opacity-0 translate-y-5 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 hover:bg-black hover:text-white"
                >
                  <FiShoppingCart className="text-sm" />
                  Add To Cart
                </button>
              </div>
            </div>
          </Link>
        ))}
      </div>

      {/* Pagination */}
      <div className="flex justify-center items-center gap-3 mt-8">
        <button
          onClick={() => goPage(currentPage - 1)}
          disabled={currentPage === 1}
          className="p-2 rounded-full border disabled:opacity-50"
        >
          <FaChevronLeft />
        </button>

        {Array.from({ length: totalPages }, (_, i) => (
          <button
            key={i + 1}
            onClick={() => goPage(i + 1)}
            className={`w-8 h-8 rounded-full flex items-center justify-center border ${
              currentPage === i + 1
                ? "bg-black text-white"
                : "bg-white text-gray-800 hover:bg-gray-100"
            }`}
          >
            {i + 1}
          </button>
        ))}

        <button
          onClick={() => goPage(currentPage + 1)}
          disabled={currentPage === totalPages}
          className="p-2 rounded-full border disabled:opacity-50"
        >
          <FaChevronRight />
        </button>
      </div>
    </div>
  );
}
