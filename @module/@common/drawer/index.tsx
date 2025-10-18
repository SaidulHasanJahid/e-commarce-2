"use client";
import {
  addToCart,
  decreaseQuantity,
  removeFromCart,
} from "@/appstore/cart/cart-slice";
import React from "react";
import { IoMdClose } from "react-icons/io";
import {
  FiPlus,
  FiMinus,
  FiTrash2,
  FiGift,
  FiTag,
  FiTruck,
} from "react-icons/fi";
import { useSelector, useDispatch } from "react-redux";
import { useRouter } from "next/navigation";

type CartDrawerProps = {
  isOpen: boolean;
  onClose: () => void;
};

const CartDrawer = ({ isOpen, onClose }: CartDrawerProps) => {
  const dispatch = useDispatch();
  const router = useRouter();
  const cart = useSelector((state: any) => state.cart.items || []);

  const subtotal = cart.reduce(
    (sum: number, item: any) => sum + item.price * item.quantity,
    0
  );

  const handleNavigate = (path: string) => {
    onClose();
    router.push(path);
  };

  return (
    <div
      className={`fixed inset-0 bg-black/50 z-[1000] flex justify-end transition-all duration-300 ${
        isOpen ? "opacity-100 visible" : "opacity-0 invisible"
      }`}
    >
      <div
        className={`w-full sm:w-[500px] bg-white h-full shadow-lg relative p-3 transform transition-transform duration-300 overflow-y-auto z-[1100] flex flex-col ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-black cursor-pointer z-[1200] transition-transform hover:scale-110"
        >
          <IoMdClose size={24} />
        </button>

        {/* Header */}
        <h2 className="text-xl font-semibold mb-6 text-black leading-snug">
          Shopping Cart
        </h2>

        {/* Cart items */}
        <div className="flex-1 flex flex-col gap-6">
          {cart.length === 0 ? (
            <p className="text-gray-500 leading-relaxed">Your cart is empty.</p>
          ) : (
            cart.map((item: any) => (
              <div
                key={item.id}
                className="flex gap-4 items-center border-b border-gray-200 pb-4 cursor-pointer transition-all hover:bg-gray-50 rounded"
              >
                <img
                  src={item.image || item.thumbnail}
                  alt={item.name}
                  className="w-[120px] h-[120px] object-contain"
                />

                <div className="flex-1 flex flex-col ml-4">
                  <p className="text-[16px] font-medium text-black leading-tight">
                    {item.name}
                  </p>
                  <p className="text-[#f2072f] font-semibold text-[16px] mt-1 leading-snug">
                    ${item.price}
                  </p>

                  <div className="flex items-center gap-2 mt-2">
                    {/* Decrease button */}
                    <button
                      onClick={() => dispatch(decreaseQuantity(item.id))}
                      className="w-8 h-8 flex items-center justify-center border border-gray-200 rounded bg-white text-gray-700 hover:bg-gray-100 transition-transform hover:scale-110 cursor-pointer"
                    >
                      <FiMinus size={16} />
                    </button>

                    {/* Quantity display */}
                    <span className="w-[50px] text-center border border-gray-200 rounded text-sm text-gray-700 py-1 leading-tight">
                      {item.quantity}
                    </span>

                    {/* Increase button */}
                    <button
                      onClick={() =>
                        dispatch(addToCart({ ...item, quantity: 1 }))
                      }
                      className="w-8 h-8 flex items-center justify-center border border-gray-200 rounded bg-white text-gray-700 hover:bg-gray-100 transition-transform hover:scale-110 cursor-pointer"
                    >
                      <FiPlus size={16} />
                    </button>

                    {/* Remove button */}
                    <button
                      onClick={() => dispatch(removeFromCart(item.id))}
                      className="ml-2 text-gray-400 hover:text-red-500 transition-colors cursor-pointer"
                    >
                      <FiTrash2 size={20} />
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Bottom section always visible */}
        <div className="mt-auto border-t border-gray-200 pt-4 flex flex-col gap-4">
          {/* Top icons */}
          <div className="flex justify-between text-black mt-2">
            <button className="flex flex-col items-center gap-1.5 bg-white text-[14px] cursor-pointer py-2 px-3 w-[150px] text-center  transition-all leading-tight">
              <FiTag size={24} />
              <span className="leading-none">Add Coupon</span>
            </button>
            <button className="flex flex-col items-center gap-1.5 bg-white text-[14px] cursor-pointer py-2 px-3 w-[110px] text-center  transition-all leading-tight">
              <FiGift size={24} />
              <span className="leading-none">Add Note</span>
            </button>
            <button className="flex flex-col items-center gap-1.5 bg-white text-[14px] cursor-pointer py-2 px-3 w-[110px] text-center  transition-all leading-tight">
              <FiGift size={24} />
              <span className="leading-none">Add Gift</span>
            </button>
            <button className="flex flex-col items-center gap-1.5 bg-white text-[14px] cursor-pointer py-2 px-3 w-[110px] text-center  transition-all leading-tight">
              <FiTruck size={24} />
              <span className="leading-none">Shipping</span>
            </button>
          </div>

          {/* Subtotal and info */}
          <div className="bg-[#f7f7f7] p-3 rounded">
            <div className="flex justify-between text-black font-semibold text-lg leading-snug">
              <span>Subtotal</span>
              <span className="text-red-500">${subtotal}</span>
            </div>

            <p className="text-xs text-gray-500 leading-relaxed mt-1">
              Taxes and Shipping Calculated at checkout
            </p>

            {/* Terms */}
            <label className="flex items-center gap-2 text-xs text-gray-600 leading-snug mt-2">
              <input type="checkbox" className="w-4 h-4" />I agree with the
              Terms and Conditions
            </label>

            {/* Buttons */}
            <div className="flex gap-5 justify-center mt-3">
              <button
                onClick={() => handleNavigate("/cart")}
                className="px-6 py-3 text-[14px] font-medium border w-[168px] h-[50px] rounded-[3px] text-black bg-white cursor-pointer transition-all duration-300 hover:bg-[#f2072f] hover:text-white leading-tight"
              >
                View Cart
              </button>
              <button
                onClick={() => handleNavigate("/chack-out")}
                className="px-6 py-3 w-[168px] h-[50px] text-[14px] font-medium rounded-[3px] bg-black text-white border border-transparent cursor-pointer transition-all duration-300 hover:bg-[#f2072f] hover:text-white leading-tight"
              >
                Check Out
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartDrawer;
