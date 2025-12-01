
"use client";

import React from "react";
import { FiShoppingCart } from "react-icons/fi";
import { useModal, Product } from "../modal/modal-modal-context";
import { useDispatch } from "react-redux";
import { addToCart } from "@/appstore/cart/cart-slice";

interface AddToCartButtonProps {
  product: Product & {
    oldPrice?: number | string | null;
  };
  className?: string;
}

const AddToCartButton: React.FC<AddToCartButtonProps> = ({ product, className }) => {
  const { openCartModal } = useModal();
  const dispatch = useDispatch();

  const handleAddToCart = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    e.stopPropagation();

    const priceValue = product.price as string | number;
    const priceNum =
      typeof priceValue === "string"
        ? parseFloat(priceValue.replace(/[^0-9.-]+/g, "")) || 0
        : priceValue;

    const oldPriceValue = product.oldPrice as string | number | undefined;
    const oldPriceNum =
      oldPriceValue !== null && oldPriceValue !== undefined
        ? typeof oldPriceValue === "string"
          ? parseFloat(oldPriceValue.replace(/[^0-9.-]+/g, "")) || undefined
          : oldPriceValue
        : undefined;

    const cartItem = {
      id: product.id,
      name: product.name,
      price: priceNum,
      oldPrice: oldPriceNum,
      category: product.category,
      images: product.images.length > 0 ? product.images : ["/placeholder.jpg"],
      quantity: 1,
    };

    dispatch(addToCart(cartItem));

    openCartModal(product);
  };

  return (
    <button
      onClick={handleAddToCart}
      className={`inline-flex w-full cursor-pointer items-center justify-center gap-2 rounded-[5px] bg-[#F7F7F7] px-4 py-2 text-[14px] font-medium capitalize text-[var(--main-color2)] transition-all duration-300 hover:bg-black hover:text-white ${
        className || ""
      }`}
    >
      <FiShoppingCart className="text-sm" />
      Add To Cart
    </button>
  );
};

export default AddToCartButton;
