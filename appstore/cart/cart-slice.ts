// // redux/cartSlice.ts

// import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// const isBrowser = typeof window !== "undefined";

// // Product type matching your BestDeals array
// interface CartItem {
//   id: number;
//   name: string;
//   category: string;
//   price: number;
//   oldPrice?: number;
//   discount?: string;
//   images: string[];
//   quantity: number; // quantity in cart
// }

// interface CartState {
//   items: CartItem[];
// }

// const initialState: CartState = {
//   items: isBrowser ? JSON.parse(localStorage.getItem("cart") || "[]") : [],
// };

// const cartSlice = createSlice({
//   name: "cart",
//   initialState,
//   reducers: {
//     // Add item or increase quantity
//     addToCart(state, action: PayloadAction<CartItem>) {
//       const item = action.payload;
//       const existingItem = state.items.find((i) => i.id === item.id);

//       if (existingItem) {
//         existingItem.quantity += item.quantity;
//       } else {
//         state.items.push(item);
//       }

//       if (isBrowser) {
//         localStorage.setItem("cart", JSON.stringify(state.items));
//       }
//     },

//     // Remove item
//     removeFromCart(state, action: PayloadAction<number>) {
//       state.items = state.items.filter((item) => item.id !== action.payload);

//       if (isBrowser) {
//         localStorage.setItem("cart", JSON.stringify(state.items));
//       }
//     },

//     // Decrease quantity
//     decreaseQuantity(state, action: PayloadAction<number>) {
//       const item = state.items.find((i) => i.id === action.payload);
//       if (item && item.quantity > 1) {
//         item.quantity -= 1;
//       } else if (item && item.quantity === 1) {
//         // if quantity = 1, remove the item
//         state.items = state.items.filter((i) => i.id !== action.payload);
//       }

//       if (isBrowser) {
//         localStorage.setItem("cart", JSON.stringify(state.items));
//       }
//     },

//     // Clear cart
//     clearCart(state) {
//       state.items = [];
//       if (isBrowser) {
//         localStorage.removeItem("cart");
//       }
//     },
//   },
// });

// export const { addToCart, removeFromCart, decreaseQuantity, clearCart } =
//   cartSlice.actions;

// export default cartSlice.reducer;
// redux/cartSlice.ts

import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const isBrowser = typeof window !== "undefined";

// Updated CartItem type → variant support added
interface CartItem {
  id: number;
  name: string;
  category: string;
  price: number;
  oldPrice?: number;
  discount?: string;
  images: string[];
  quantity: number;

  // 🔥 Variant Support Added
  color?: string;
  size?: string;
}

interface CartState {
  items: CartItem[];
}

const initialState: CartState = {
  items: isBrowser ? JSON.parse(localStorage.getItem("cart") || "[]") : [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    // Add item or increase quantity
    addToCart(state, action: PayloadAction<CartItem>) {
      const item = action.payload;

      // 🔥 Find same product + same color + same size
      const existingItem = state.items.find(
        (i) =>
          i.id === item.id &&
          i.color === item.color &&
          i.size === item.size
      );

      if (existingItem) {
        existingItem.quantity += item.quantity;
      } else {
        state.items.push(item);
      }

      if (isBrowser) {
        localStorage.setItem("cart", JSON.stringify(state.items));
      }
    },

    // Remove item
    removeFromCart(state, action: PayloadAction<number>) {
      state.items = state.items.filter((item) => item.id !== action.payload);

      if (isBrowser) {
        localStorage.setItem("cart", JSON.stringify(state.items));
      }
    },

    // Decrease quantity
    decreaseQuantity(state, action: PayloadAction<number>) {
      const item = state.items.find((i) => i.id === action.payload);

      if (item && item.quantity > 1) {
        item.quantity -= 1;
      } else if (item && item.quantity === 1) {
        state.items = state.items.filter((i) => i.id !== action.payload);
      }

      if (isBrowser) {
        localStorage.setItem("cart", JSON.stringify(state.items));
      }
    },

    // Clear cart
    clearCart(state) {
      state.items = [];
      if (isBrowser) {
        localStorage.removeItem("cart");
      }
    },
  },
});

export const { addToCart, removeFromCart, decreaseQuantity, clearCart } =
  cartSlice.actions;

export default cartSlice.reducer;
