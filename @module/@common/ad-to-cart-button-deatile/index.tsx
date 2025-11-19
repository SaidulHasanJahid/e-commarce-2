"use client";

import React from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "@/appstore/cart/cart-slice";
import { FiShoppingCart } from "react-icons/fi";
import { useModal } from "@/@module/@common/modal/modal-modal-context";

const AddToCartButtonDeatile = ({ product, className }: any) => {
  const dispatch = useDispatch();
  const { openCartModal } = useModal();

  const handleAddToCart = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();

    const cartItem: any = {
      id: product.id,
      name: product.name,
      price: product.price,
      oldPrice: product.oldPrice || null,
      category: product.category,
      images: product.images,
      quantity: 1,
      subtotal: product.price,
    };

    dispatch(addToCart(cartItem));

    // FIXED: no argument
    openCartModal();
  };

  return (
    <button
      onClick={handleAddToCart}
      className={`flex-1 inline-flex items-center justify-center gap-2 bg-white border border-[#000000] rounded-[3px] px-6 py-3 h-[50px] font-medium text-sm hover:bg-black hover:text-white transition-all duration-300 ease-in-out cursor-pointer ${
        className || ""
      }`}
    >
      <FiShoppingCart />
      Add to cart
    </button>
  );
};

export default AddToCartButtonDeatile;
