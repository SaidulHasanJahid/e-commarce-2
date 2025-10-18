"use client";

import React from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "@/appstore/cart/cart-slice";
import { FiShoppingCart } from "react-icons/fi";
import { useModal } from "@/@module/@common/modal/modal-modal-context";

interface AddToCartButtonProps {
  product: any;
  className?: string;
}

const AddToCartButton: React.FC<AddToCartButtonProps> = ({ product, className }) => {
  const dispatch = useDispatch();
  const { openCartModal } = useModal();

  const handleAddToCart = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();

    const cartItem: any = {
      id: product.id,
      name: product.name,
      price: product.price,
      oldPrice: product.oldPrice || null,
      category: product.category,
      image: product.images[0],
      quantity: 1,
      subtotal: product.price,
    };

    dispatch(addToCart(cartItem));
    openCartModal(product);
  };

  return (
    <button
      onClick={handleAddToCart}
      className={`inline-flex items-center cursor-pointer justify-center gap-2 py-2 px-4 rounded-[5px] bg-[#F7F7F7] text-[14px] text-[var(--main-color2)] font-medium capitalize transition-all duration-300 hover:bg-black hover:text-white ${className || ""}`}
    >
      <FiShoppingCart className="text-sm" />
      Add To Cart
    </button>
  );
};

export default AddToCartButton;
