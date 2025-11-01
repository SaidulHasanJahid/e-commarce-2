"use client";

import React from "react";
import { Modal } from "antd";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { IoMdClose } from "react-icons/io";
import { FaHeart, FaExchangeAlt } from "react-icons/fa";
import { FiShoppingCart, FiPlus, FiMinus } from "react-icons/fi";
import { useDispatch } from "react-redux";
import { addToCart } from "@/appstore/cart/cart-slice";
import { useModal } from "@/@module/@common/modal/modal-modal-context";
import "swiper/css";

interface Product {
  id: number;
  name: string;
  category: string;
  price: number;
  oldPrice?: number;
  discount?: string;
  images?: string[];
}

interface ProductModalProps {
  isOpen: boolean;
  onClose: () => void;
  product: Product | null;
  quantity: number;
  setQuantity: React.Dispatch<React.SetStateAction<number>>;
}

export default function ProductModal({
  isOpen,
  onClose,
  product,
  quantity,
  setQuantity,
}: ProductModalProps) {
  const dispatch = useDispatch();
  const { openCartModal } = useModal();

  if (!product) return null;

  const handleAddToCart = () => {
    const cartItem: any = {
      id: product.id,
      name: product.name,
      price: product.price,
      oldPrice: product.oldPrice || null,
      category: product.category,
      image: product.images?.[0] || "/placeholder.png",
      quantity: quantity,
      subtotal: product.price * quantity,
    };

    dispatch(addToCart(cartItem));
    onClose(); // Close the current product modal

    // ✅ Fixed TypeScript error by ensuring images is always an array
    openCartModal({
      ...product,
      images: product.images ?? [],
    });
  };

  return (
    <Modal
      open={isOpen}
      onCancel={onClose}
      footer={null}
      width={1200}
      closeIcon={<IoMdClose className="text-2xl" />}
      className="rounded-lg"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative">
        {/* Left Side - Image with SALE badge */}
        <div className="relative flex items-center justify-center">
          {product.discount && (
            <span className="absolute top-2 left-2 bg-red-600 text-white px-3 py-1 rounded-full text-xs font-semibold">
              SALE
            </span>
          )}
          <Swiper
            modules={[Autoplay]}
            spaceBetween={10}
            slidesPerView={1}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            loop={true}
          >
            {product.images && product.images.length > 0 ? (
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
            <FaHeart className="text-sm text-red-500" />
            <span className="text-sm">In Stock</span>
          </div>

          <div className="flex items-center gap-4 mb-4">
            <span className="text-2xl font-semibold text-red-600">
              €{product.price}
            </span>
            {product.oldPrice && (
              <span className="text-gray-500 line-through">
                €{product.oldPrice}
              </span>
            )}
          </div>

          <p className="text-gray-600 mb-6">
            Conversation flows freely with easy hands-free calling, thanks to the
            built-in microphone. No need to even take your phone from your pocket.
          </p>

          {/* Quantity Selector */}
          <div className="w-[127px] h-[50px] flex justify-between bg-[#F7F7F7] rounded-[3px] overflow-hidden mb-4">
            <button
              onClick={() => setQuantity(Math.max(1, quantity - 1))}
              className="w-[40px] h-full transition-all duration-300 hover:bg-black hover:text-white flex items-center justify-center cursor-pointer"
            >
              <FiMinus />
            </button>
            <input
              type="text"
              value={quantity}
              readOnly
              className="w-[47px] h-full text-center outline-none bg-transparent"
            />
            <button
              onClick={() => setQuantity(quantity + 1)}
              className="w-[40px] h-full transition-all duration-300 hover:bg-black hover:text-white flex items-center justify-center cursor-pointer"
            >
              <FiPlus />
            </button>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center gap-3">
            {/* Add to Cart Button */}
            <button
              onClick={handleAddToCart}
              className="flex-1 inline-flex items-center justify-center gap-2 bg-white border border-[#000000] rounded-[3px] px-6 py-3 h-[50px] font-medium text-sm hover:bg-black hover:text-white transition-all duration-300 ease-in-out cursor-pointer"
            >
              <FiShoppingCart /> Add to cart
            </button>

            {/* Heart Button */}
            <button className="w-[50px] h-[50px] flex items-center justify-center border border-[#000000] rounded-[3px] bg-white hover:bg-black hover:text-white transition-all duration-300 cursor-pointer">
              <FaHeart />
            </button>

            {/* Exchange Button */}
            <button className="w-[50px] h-[50px] flex items-center justify-center border border-[#000000] rounded-[3px] bg-white hover:bg-black hover:text-white transition-all duration-300 cursor-pointer">
              <FaExchangeAlt />
            </button>
          </div>
        </div>
      </div>
    </Modal>
  );
}
