
"use client";
import React from "react";
import { FiShoppingCart } from "react-icons/fi";
import { useModal } from "../modal/modal-modal-context";
import { useDispatch } from "react-redux";
import { addToCart } from "@/appstore/cart/cart-slice";

interface AddToCartButtonProps {
  product: {
    id: number;
    name: string;
    price: number | string;
    oldPrice?: number | string | null;
    category: string;
    images: string[];
  };
  className?: string;
}

const AddToCartButton: React.FC<AddToCartButtonProps> = ({ product, className }) => {
  const { openCartModal } = useModal();
  const dispatch = useDispatch();

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();

    const priceNum =
      typeof product.price === "string"
        ? parseFloat(product.price.replace("€", "").trim())
        : product.price;

    const oldPriceNum = product.oldPrice
      ? typeof product.oldPrice === "string"
        ? parseFloat(product.oldPrice.replace("€", "").trim())
        : product.oldPrice
      : undefined;

    const cartItem = {
      id: product.id,
      name: product.name,
      price: priceNum,
      oldPrice: oldPriceNum,
      category: product.category,
      images: product.images,
      quantity: 1,
    };

    // Redux update
    dispatch(addToCart(cartItem));

    // FIX: no argument allowed
    openCartModal();
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
