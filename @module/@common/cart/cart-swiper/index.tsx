"use client";

import React from "react";
import { FaHeart, FaExchangeAlt, FaEye } from "react-icons/fa";
import { useModal } from "@/@module/@common/modal/modal-modal-context";
import AddToCartButton from "../../add-to-cart-button";

interface ProductProps {
  product: any;
}

const ProductCard: React.FC<ProductProps> = ({ product }) => {
  const { openProductModal } = useModal();

  return (
    <div className="relative border border-gray-200 rounded-md bg-white group overflow-hidden w-full max-w-[226px] h-[350px] flex flex-col cursor-pointer">
      {/* SALE Badge */}
      {product.tag && (
        <span className="absolute top-3 left-3 bg-red-500 text-white text-xs font-semibold px-3 py-1 rounded-full z-10">
          {product.tag}
        </span>
      )}

      {/* Product Image */}
      <div className="relative w-full h-[207px] flex items-center justify-center overflow-hidden">
        <img
          src={product.image[0]}
          alt={product.title}
          className="w-full h-[207px] object-contain transition-transform duration-300 group-hover:scale-105"
        />
      </div>

      {/* Hover Icons */}
      <div className="absolute top-[103.5px] right-3 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300 z-20">
        <button className="bg-white/80 hover:bg-white w-10 h-10 flex items-center justify-center rounded-full hover:scale-110">
          <FaHeart className="text-[#666]" />
        </button>
        <button className="bg-white/80 hover:bg-white w-10 h-10 flex items-center justify-center rounded-full hover:scale-110">
          <FaExchangeAlt className="text-[#666]" />
        </button>
        <button
          onClick={(e) => {
            e.stopPropagation();
            openProductModal(product);
          }}
          className="bg-white/80 hover:bg-white w-10 h-10 flex items-center justify-center rounded-full hover:scale-110"
        >
          <FaEye className="text-[#666]" />
        </button>
      </div>

      {/* Product Info */}
      <div className="px-3 py-2 flex flex-col gap-2 flex-1">
        <p className="text-[12px] text-[#666]">{product.category}</p>
        <h3 className="text-[16px] font-medium text-[#000] line-clamp-1">{product.title}</h3>
        <div className="flex items-center gap-2 mb-2">
          <span className="text-[#F93355]">{product.price}</span>
          {product.oldPrice && (
            <span className="line-through text-gray-400">{product.oldPrice}</span>
          )}
        </div>

        <AddToCartButton
          product={product}
          className="mt-auto opacity-0 translate-y-5 group-hover:opacity-100 group-hover:translate-y-0"
        />
      </div>
    </div>
  );
};

export default ProductCard;
