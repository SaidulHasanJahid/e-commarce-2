"use client";

import React from "react";
import { Modal } from "antd";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { FaMinus, FaPlus, FaHeart, FaExchangeAlt } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import { FaEye } from "react-icons/fa6";
import "swiper/css";
import "swiper/css/navigation";

interface Product {
  id: number;
  name: string;
  category: string;
  price: number;
  oldPrice?: number;
  discount?: string;
  images?: string[]; // optional
}

interface ProductModalProps {
  isOpen: boolean;
  onClose: () => void;
  product: Product | null;
  quantity: number;
  setQuantity: (quantity: number) => void;
}

export default function ProductModal({
  isOpen,
  onClose,
  product,
  quantity,
  setQuantity,
}: ProductModalProps) {
  if (!product) return null;

  const swiperSettings = {
    modules: [Navigation],
    navigation: true,
    spaceBetween: 10,
    slidesPerView: 1,
  };

  return (
    <Modal
      open={isOpen}
      onCancel={onClose}
      footer={null}
      width={900}
      closeIcon={<IoMdClose className="text-2xl" />}
      className="rounded-lg"
    >
      <div className="grid grid-cols-2 gap-8 relative">
        {/* Left Side - Image with SALE badge */}
        <div className="relative flex items-center justify-center">
          {product.discount && (
            <span className="absolute top-2 left-2 bg-red-600 text-white px-3 py-1 rounded-full text-xs font-semibold">
              SALE
            </span>
          )}
          <Swiper {...swiperSettings}>
            {product?.images?.length ? (
              product.images.map((img, index) => (
                <SwiperSlide key={index}>
                  <img
                    src={img}
                    alt={`${product.name}-${index}`}
                    className="w-full h-[400px] object-contain"
                  />
                </SwiperSlide>
              ))
            ) : (
              <SwiperSlide>
                <img
                  src="/placeholder.png"
                  alt="placeholder"
                  className="w-full h-[400px] object-contain"
                />
              </SwiperSlide>
            )}
          </Swiper>
        </div>

        {/* Right Side - Info */}
        <div className="flex flex-col">
          <h2 className="text-2xl font-bold mb-3">{product.name}</h2>

          <div className="flex items-center gap-2 mb-3 text-gray-700">
            <FaEye className="text-sm" />
            <span className="text-sm">In Stock</span>
          </div>

          <div className="flex items-center gap-4 mb-4">
            <span className="text-2xl font-semibold text-red-600">
              €{product.price}
            </span>
            {product.oldPrice && (
              <span className="text-gray-500 line-through">€{product.oldPrice}</span>
            )}
          </div>

          <p className="text-gray-600 mb-6">
            Conversation flows freely with easy hands-free calling, thanks to the
            built-in microphone. No need to even take your phone from your pocket
          </p>

          {/* Quantity Selector */}
          <div className="flex items-center gap-4 mb-6">
            <button
              onClick={() => setQuantity(Math.max(1, quantity - 1))}
              className="w-10 h-10 bg-gray-100 border text-lg flex items-center justify-center hover:bg-gray-200 transition"
            >
              <FaMinus />
            </button>
            <span className="text-lg font-medium">{quantity}</span>
            <button
              onClick={() => setQuantity(quantity + 1)}
              className="w-10 h-10 bg-gray-100 border text-lg flex items-center justify-center hover:bg-gray-200 transition"
            >
              <FaPlus />
            </button>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center gap-3">
            <button className="flex-1 bg-black text-white py-3 rounded-md text-lg font-medium hover:bg-gray-800 transition">
              Add to cart
            </button>
            <button className="w-12 h-12 flex items-center justify-center border rounded-md hover:bg-gray-100 transition">
              <FaHeart className="text-lg" />
            </button>
            <button className="w-12 h-12 flex items-center justify-center border rounded-md hover:bg-gray-100 transition">
              <FaExchangeAlt className="text-lg" />
            </button>
          </div>
        </div>
      </div>
    </Modal>
  );
}
