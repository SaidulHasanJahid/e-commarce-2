// "use client";

// import React from "react";
// import { useDispatch } from "react-redux";
// import { addToCart } from "@/appstore/cart/cart-slice";
// import { FiShoppingCart } from "react-icons/fi";
// import { useModal } from "@/@module/@common/modal/modal-modal-context";
// import { color } from "framer-motion";

// const AddToCartButtonDeatile = ({ product, className }: any) => {
//   const dispatch = useDispatch();
//   const { openCartModal } = useModal();

//   const handleAddToCart = (
//     e: React.MouseEvent<HTMLButtonElement, MouseEvent>
//   ) => {
//     e.preventDefault();

//     const cartItem: any = {
//       color: product.selectedColor || "Default Color",
//       size: product.selectedSize || "Default Size",
//       id: product.id,
//       name: product.name,
//       price: product.price,
//       oldPrice: product.oldPrice || null,
//       category: product.category,
//       images: product.images,
//       quantity: 1,
//       subtotal: product.price,
//     };

//     dispatch(addToCart(cartItem));

//     // FIXED: no argument
//     openCartModal();
//   };

//   return (
//     <button
//       onClick={handleAddToCart}
//       className={`flex-1 inline-flex items-center justify-center gap-2 bg-white border border-[#000000] rounded-[3px] px-6 py-3 h-[50px] font-medium text-sm hover:bg-black hover:text-white transition-all duration-300 ease-in-out cursor-pointer ${
//         className || ""
//       }`}
//     >
//       <FiShoppingCart />
//       Add to cart
//     </button>
//   );
// };

// export default AddToCartButtonDeatile;
"use client";

import React from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "@/appstore/cart/cart-slice";
import { FiShoppingCart } from "react-icons/fi";
import { useModal } from "@/@module/@common/modal/modal-modal-context";

// Product type with required fields
export interface Product {
  id: number;
  name: string;
  price: number;
  oldPrice?: number;
  category: string; // required
  images: string[]; // required
  selectedColor?: string;
  selectedSize?: string;
  quantity?: number;
  subtotal?: number;
}

interface AddToCartButtonProps {
  product: Product;
  className?: string;
  disabled?: boolean;
}

const AddToCartButtonDeatile: React.FC<AddToCartButtonProps> = ({
  product,
  className,
  disabled = false,
}) => {
  const dispatch = useDispatch();
  const { openCartModal } = useModal();

  const handleAddToCart = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();

    if (disabled) return;

    const cartItem = {
      id: product.id,
      name: product.name,
      price: product.price,
      oldPrice: product.oldPrice,
      category: product.category || "Uncategorized",
      images: product.images ?? [],
      color: product.selectedColor ?? "Default Color",
      size: product.selectedSize ?? "Default Size",
      quantity: product.quantity ?? 1,
      subtotal: product.price * (product.quantity ?? 1),
    };

    dispatch(addToCart(cartItem));

    openCartModal({
      ...product,
      category: product.category || "Uncategorized",
      images: product.images ?? [],
    });
  };

  return (
    <button
      onClick={handleAddToCart}
      disabled={disabled}
      className={`flex-1 inline-flex items-center justify-center gap-2 bg-white border border-[#000000] rounded-[3px] px-6 py-3 h-[50px] font-medium text-sm hover:bg-black hover:text-white transition-all duration-300 ease-in-out cursor-pointer ${
        disabled ? "bg-gray-200 text-gray-500 cursor-not-allowed" : ""
      } ${className || ""}`}
    >
      <FiShoppingCart />
      Add to cart
    </button>
  );
};

export default AddToCartButtonDeatile;

