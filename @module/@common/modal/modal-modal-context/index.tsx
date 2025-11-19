// src/components/context/modal-modal-context.tsx
"use client";

import React, { createContext, useContext, useState } from "react";
import ProductModal from "../product-modal";
import AddToCartModal from "../addTo-cart-modal";

// Product type
export interface Product {
  id: number;
  name: string;
  category: string;
  price: number;
  oldPrice?: number;
  discount?: string;
  images: string[];
  quantity?: number;
}

// Context type - কার্ট রিমুভ করা হয়েছে (Redux থেকে নিবে)
interface ModalContextType {
  openProductModal: (product: Product) => void;
  openCartModal: () => void;        // এখন আর প্রোডাক্ট পাস করতে হবে না
  closeProductModal: () => void;
  closeCartModal: () => void;
}

const ModalContext = createContext<ModalContextType | undefined>(undefined);

export const ModalProvider = ({ children }: { children: React.ReactNode }) => {
  const [isProductOpen, setIsProductOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [quantity, setQuantity] = useState(1);

  const openProductModal = (product: Product) => {
    setSelectedProduct(product);
    setQuantity(1);
    setIsProductOpen(true);
  };

  const openCartModal = () => {
    setIsCartOpen(true);
  };

  const closeProductModal = () => {
    setIsProductOpen(false);
    setSelectedProduct(null);
  };

  const closeCartModal = () => {
    setIsCartOpen(false);
  };

  return (
    <ModalContext.Provider
      value={{
        openProductModal,
        openCartModal,
        closeProductModal,
        closeCartModal,
      }}
    >
      {children}

      {/* Product Quick View Modal */}
      <ProductModal
        isOpen={isProductOpen}
        onClose={closeProductModal}
        product={selectedProduct}
        quantity={quantity}
        setQuantity={setQuantity}
      />

      {/* Add to Cart Success Modal - Redux থেকে ডাটা নিবে */}
      <AddToCartModal
        isOpen={isCartOpen}
        onClose={closeCartModal}
      />
    </ModalContext.Provider>
  );
};

export const useModal = () => {
  const context = useContext(ModalContext);
  if (!context) throw new Error("useModal must be used inside ModalProvider");
  return context;
};