import { createSlice } from "@reduxjs/toolkit";

// Helper function to safely get values from localStorage
const getLocalStorageItem = (key: string, parse = false) => {
  if (typeof window !== "undefined") {
    const item: any = localStorage.getItem(key);
    return parse ? JSON.parse(item) : item;
  }
  return null;
};

// Initial state with values from localStorage
const initialState = {
  product_qty: getLocalStorageItem("product_qty") || 0,
};

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    // Increment the product quantity by 1
    productIncrement: (state) => {
      state.product_qty += 1;
      localStorage.setItem("product_qty", state.product_qty.toString());
    },
    // Decrement the product quantity by 1
    productDecrement: (state) => {
      if (state.product_qty > 0) {
        state.product_qty -= 1;
        localStorage.setItem("product_qty", state.product_qty.toString());
      }
    },
  },
});

// Export actions and reducer
export const { productIncrement, productDecrement } = productSlice.actions;
export default productSlice.reducer;
