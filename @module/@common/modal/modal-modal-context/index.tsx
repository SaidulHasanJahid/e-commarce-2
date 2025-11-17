// src/components/context/modal-modal-context.tsx
"use client";

import React, { createContext, useContext, useState } from "react";
import ProductModal from "../product-modal";
import AddToCartModal from "../addTo-cart-modal";

// 🔹 Shared Product type
export interface Product {
  id: number;
  name: string;
  category: string;
  price: number;
  oldPrice?: number; // keep optional, no null
  discount?: string;
  images: string[];
  qty?: number;
}

// 🔹 Context type
interface ModalContextType {
  openProductModal: (product: Product) => void;
  openCartModal: (product?: Product) => void;
  cartItems: Product[];
  subtotal: number;
  quantity: number;
  setQuantity: (q: number) => void;
}

// 🔹 Create context
const ModalContext = createContext<ModalContextType | undefined>(undefined);

// 🔹 Provider
export const ModalProvider = ({ children }: { children: React.ReactNode }) => {
  const [isProductOpen, setIsProductOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [cartItems, setCartItems] = useState<Product[]>([]);
  const [subtotal, setSubtotal] = useState(0);
  const [quantity, setQuantity] = useState(1);

  // 🔹 Open Product Modal
  const openProductModal = (product: Product) => {
    setSelectedProduct(product);
    setQuantity(1);
    setIsProductOpen(true);
  };

  // 🔹 Open Cart Modal
  const openCartModal = (product?: Product) => {
    if (!product) {
      setIsCartOpen(true);
      return;
    }

    const productWithQty = { ...product, qty: quantity || 1 };
    const existingIndex = cartItems.findIndex((item) => item.id === product.id);

    let updatedCart: Product[];
    if (existingIndex >= 0) {
      updatedCart = cartItems.map((item, idx) =>
        idx === existingIndex
          ? { ...item, qty: (item.qty || 1) + (quantity || 1) }
          : item
      );
    } else {
      updatedCart = [...cartItems, productWithQty];
    }

    const newSubtotal = updatedCart.reduce(
      (acc, item) => acc + item.price * (item.qty || 1),
      0
    );

    setCartItems(updatedCart);
    setSubtotal(newSubtotal);
    setIsCartOpen(true);
  };

  return (
    <ModalContext.Provider
      value={{
        openProductModal,
        openCartModal,
        cartItems,
        subtotal,
        quantity,
        setQuantity,
      }}
    >
      {children}

      <ProductModal
        isOpen={isProductOpen}
        onClose={() => setIsProductOpen(false)}
        product={selectedProduct}
        quantity={quantity}
        setQuantity={setQuantity}
      />

      <AddToCartModal
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cartItems={cartItems}
        subtotal={subtotal}
      />
    </ModalContext.Provider>
  );
};

// 🔹 Custom hook
export const useModal = () => {
  const context = useContext(ModalContext);
  if (!context) throw new Error("useModal must be used inside ModalProvider");
  return context;
};
