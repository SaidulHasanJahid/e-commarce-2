"use client";

import React, { createContext, useContext, useState } from "react";
import ProductModal from "../product-modal";
import AddToCartModal from "../addTo-cart-modal";

interface Product {
  id: number;
  name: string;
  category: string;
  price: number;
  oldPrice?: number;
  discount?: string;
  images: string[];
}

interface ModalContextType {
  openProductModal: (product: Product) => void;
  openCartModal: (product?: Product) => void;
  cartItems: Product[];
  subtotal: number;
  quantity: number;
  setQuantity: (q: number) => void;
}

const ModalContext = createContext<ModalContextType | undefined>(undefined);

export const ModalProvider = ({ children }: { children: React.ReactNode }) => {
  const [isProductOpen, setIsProductOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [cartItems, setCartItems] = useState<Product[]>([]);
  const [subtotal, setSubtotal] = useState(0);
  const [quantity, setQuantity] = useState(1);

  // ✅ Quick View Modal
  const openProductModal = (product: Product) => {
    setSelectedProduct(product);
    setQuantity(1);
    setIsProductOpen(true);
  };

  // ✅ Add to Cart + Cart Modal
  const openCartModal = (product?: Product) => {
    if (product) {
      const updated = [...cartItems, product];
      setCartItems(updated);
      setSubtotal(updated.reduce((acc, item) => acc + item.price, 0));
    }
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

      {/* Product Quick View Modal */}
      <ProductModal
        isOpen={isProductOpen}
        onClose={() => setIsProductOpen(false)}
        product={selectedProduct}
        quantity={quantity}
        setQuantity={setQuantity}
      />

      {/* Cart Modal */}
      <AddToCartModal
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cartItems={cartItems}
        subtotal={subtotal}
      />
    </ModalContext.Provider>
  );
};

export const useModal = () => {
  const context = useContext(ModalContext);
  if (!context) throw new Error("useModal must be used inside ModalProvider");
  return context;
};
