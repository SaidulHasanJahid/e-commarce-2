"use client";

import Link from "next/link";
import { FiChevronRight } from "react-icons/fi";

export default function Breadcrumb() {
  return (
    <nav
      className="w-full bg-[#f7f7f7] py-3 px-4"
      aria-label="Breadcrumb"
    >
      <ol className="flex flex-wrap justify-center items-center text-[14px] text-[#666666]">
        {/* Home */}
        <li className="flex items-center">
          <Link
            href="/"
            className="hover:text-black cursor-pointer transition"
          >
            Home
          </Link>
          <FiChevronRight className="mx-2 text-[#666666] text-sm" />
        </li>

        {/* Product */}
        <li className="flex items-center">
          <Link
            href="/products"
            className="hover:text-black cursor-pointer transition"
          >
            Product
          </Link>
          <FiChevronRight className="mx-2 text-[#666666] text-sm" />
        </li>

        {/* Current Page */}
        <li className="flex items-center">
          <span className="font-medium text-[#666666]">
            Huness I16 ProMAX Smartphone
          </span>
        </li>
      </ol>
    </nav>
  );
}
