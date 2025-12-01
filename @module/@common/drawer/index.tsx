// "use client";

// import {
//   addToCart,
//   decreaseQuantity,
//   removeFromCart,
// } from "@/appstore/cart/cart-slice";
// import React, { useEffect } from "react";
// import { IoMdClose } from "react-icons/io";
// import {
//   FiPlus,
//   FiMinus,
//   FiTrash2,
//   FiGift,
//   FiTag,
//   FiTruck,
// } from "react-icons/fi";
// import { useSelector, useDispatch } from "react-redux";
// import { useRouter } from "next/navigation";

// type CartDrawerProps = {
//   isOpen: boolean;
//   onClose: () => void;
// };

// const CartDrawer = ({ isOpen, onClose }: CartDrawerProps) => {
//   const dispatch = useDispatch();
//   const router = useRouter();
//   const cart = useSelector((state: any) => state.cart.items || []);

//   const subtotal = cart.reduce(
//     (sum: number, item: any) => sum + item.price * item.quantity,
//     0
//   );

//   const handleNavigate = (path: string) => {
//     onClose();
//     router.push(path);
//   };

//   const getProductImage = (item: any) => {
//     if (item.images && Array.isArray(item.images) && item.images.length > 0) {
//       return item.images[0];
//     }
//     if (item.image) return item.image;
//     if (item.thumbnail) return item.thumbnail;
//     return "/placeholder-image.jpg";
//   };

//   // ESC চাপলে বন্ধ হবে
//   useEffect(() => {
//     const handleEsc = (e: KeyboardEvent) => {
//       if (e.key === "Escape" && isOpen) {
//         onClose();
//       }
//     };
//     window.addEventListener("keydown", handleEsc);
//     return () => window.removeEventListener("keydown", handleEsc);
//   }, [isOpen, onClose]);

//   return (
//     <div
//       className={`fixed inset-0 bg-black/50 z-[1000] flex justify-end transition-all duration-300 ${
//         isOpen ? "opacity-100 visible" : "opacity-0 invisible"
//       }`}
//       onClick={onClose} // বাইরে ক্লিক করলে বন্ধ
//     >
//       <div
//         className={`w-full sm:w-[500px] bg-white h-full shadow-lg relative p-3 transform transition-transform duration-300 overflow-y-auto z-[1100] flex flex-col ${
//           isOpen ? "translate-x-0" : "translate-x-full"
//         }`}
//         onClick={(e) => e.stopPropagation()} // ড্রয়ারের ভিতরে ক্লিক করলে বন্ধ হবে না
//       >
//         {/* Close button */}
//         <button
//           onClick={onClose}
//           className="absolute top-4 right-4 text-black cursor-pointer z-[1200] transition-transform hover:scale-110"
//         >
//           <IoMdClose size={24} />
//         </button>

//         {/* Header */}
//         <h2 className="text-xl font-semibold mb-6 text-black leading-snug">
//           Shopping Cart ({cart.length})
//         </h2>

//         {/* Scrollable Product List - শুধু এখানে স্ক্রল হবে */}
//         <div className="flex-1 overflow-y-auto pr-2">
//           <div className="flex flex-col gap-6 pb-6">
//             {cart.length === 0 ? (
//               <div className="text-center py-10">
//                 <p className="text-gray-500 text-lg">Your cart is empty.</p>
//               </div>
//             ) : (
//               cart.map((item: any) => (
//                 <div
//                   key={item.id}
//                   className="flex gap-4 items-start border-b border-gray-200 pb-4 hover:bg-gray-50 rounded transition-all"
//                 >
//                   <div className="w-[120px] h-[120px] bg-gray-100 rounded-md overflow-hidden flex-shrink-0">
//                     <img
//                       src={getProductImage(item)}
//                       alt={item.name}
//                       className="w-full h-full object-cover"
//                       onError={(e) => {
//                         e.currentTarget.src = "/placeholder-image.jpg";
//                       }}
//                     />
//                   </div>

//                   <div className="flex-1 flex flex-col">
//                     <p className="text-[16px] font-medium text-black leading-tight line-clamp-2">
//                       {item.title}
//                     </p>
//                     <p className="text-[#f2072f] font-semibold text-[16px] mt-1">
//                       {item.price} BDT
//                     </p>

//                     <div className="flex items-center gap- mt-3">
//                       <button
//                         onClick={() => dispatch(decreaseQuantity(item.id))}
//                         className="w-9 h-9 flex items-center cursor-pointer justify-center  border-gray-300 rounded-md hover:bg-gray-100 transition"
//                       >
//                         <FiMinus size={16} />
//                       </button>

//                       <span className="w-12 text-center font-medium text-sm  rounded-md py-1">
//                         {item.quantity}
//                       </span>

//                       <button
//                         onClick={() => dispatch(addToCart({ ...item, quantity: 1 }))}
//                         className="w-9 h-9 flex cursor-pointer items-center justify-center  border-gray-300 rounded-md hover:bg-gray-100 transition"
//                       >
//                         <FiPlus size={16} />
//                       </button>

//                       <button
//                         onClick={() => dispatch(removeFromCart(item.id))}
//                         className="ml-3 cursor-pointer text-red-500 hover:text-red-700 transition"
//                       >
//                         <FiTrash2 size={20} />
//                       </button>
//                     </div>
//                   </div>
//                 </div>
//               ))
//             )}
//           </div>
//         </div>

//         {/* Bottom Fixed Section - কখনো স্ক্রল করবে না */}
//         <div className="mt-auto border-t border-gray-200 pt-4 shrink-0">
//           <div className="flex justify-between text-black mb-4">
//             <button className="flex cursor-pointer flex-col items-center gap-1 text-[13px] py-2 px-3">
//               <FiTag size={22} />
//               <span>Add Coupon</span>
//             </button>
//             <button className="flex flex-col cursor-pointer items-center gap-1 text-[13px] py-2 px-3">
//               <FiGift size={22} />
//               <span>Add Note</span>
//             </button>
//             <button className="flex flex-col cursor-pointer items-center gap-1 text-[13px] py-2 px-3">
//               <FiGift size={22} />
//               <span>Add Gift</span>
//             </button>
//             <button className="flex flex-col cursor-pointer items-center gap-1 text-[13px] py-2 px-3">
//               <FiTruck size={22} />
//               <span>Shipping</span>
//             </button>
//           </div>

//           <div className="bg-[#f7f7f7] p-4 rounded-lg">
//             <div className="flex justify-between text-black font-bold text-lg mb-2">
//               <span>Subtotal</span>
//               <span className="text-red-600">€{subtotal.toFixed(2)}</span>
//             </div>
//             <p className="text-xs text-gray-500 mb-3">
//               Taxes and shipping calculated at checkout
//             </p>

//             <label className="flex items-center gap-2 text-xs text-gray-600 mb-4">
//               <input type="checkbox" className="w-4 h-4" />
//               I agree with the Terms and Conditions
//             </label>

//             <div className="flex gap-3 justify-center">
//               <button
//                 onClick={() => handleNavigate("/cart")}
//                 className="w-full max-w-[168px] h-12 text-sm font-medium cursor-pointer border border-black rounded hover:bg-black hover:text-white transition"
//               >
//                 View Cart
//               </button>
//               <button
//                 onClick={() => handleNavigate("/chack-out")}
//                 className="w-full max-w-[168px] h-12 text-sm font-medium bg-black cursor-pointer text-white rounded hover:bg-red-600 transition"
//               >
//                 Check Out
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CartDrawer;
"use client";

import {
  addToCart,
  decreaseQuantity,
  removeFromCart,
} from "@/appstore/cart/cart-slice";
import React, { useEffect } from "react";
import { IoMdClose } from "react-icons/io";
import {
  FiPlus,
  FiMinus,
  FiTrash2,
  FiGift,
  FiTag,
  FiTruck,
} from "react-icons/fi";
import { useSelector, useDispatch } from "react-redux";
import { useRouter } from "next/navigation";

type CartDrawerProps = {
  isOpen: boolean;
  onClose: () => void;
};

const CartDrawer = ({ isOpen, onClose }: CartDrawerProps) => {
  const dispatch = useDispatch();
  const router = useRouter();
  const cart = useSelector((state: any) => state.cart.items || []);

  const subtotal = cart.reduce(
    (sum: number, item: any) => sum + item.price * item.quantity,
    0
  );

  const handleNavigate = (path: string) => {
    onClose();
    router.push(path);
  };

  /** -------------------------------
   *   FIXED IMAGE LOADER (100% API safe)
   * -------------------------------- */
  const getProductImage = (item: any) => {
    if (item.images && Array.isArray(item.images)) {
      // If string[] → return directly
      if (typeof item?.images[0] === "string") {
        return item?.images[0];
      }
      // If object array → {id, imageUrl}
      if (typeof item?.images[0] === "object") {
        return item?.images[0].imageUrl;
      }
    }

    // fallback image fields
    if (item.coverImageUrl) return item?.coverImageUrl;
    if (item.thumbnailUrl) return item?.thumbnailUrl;
    if (item.imageUrl) return item?.imageUrl;

    return "/placeholder-image.jpg";
  };

  // ESC চাপলে drawer বন্ধ হবে
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [isOpen, onClose]);

  return (
    <div
      className={`fixed inset-0 bg-black/50 z-[1000] flex justify-end transition-all duration-300 ${
        isOpen ? "opacity-100 visible" : "opacity-0 invisible"
      }`}
      onClick={onClose}
    >
      <div
        className={`w-full sm:w-[500px] bg-white h-full shadow-lg relative p-3 transform transition-transform duration-300 overflow-y-auto z-[1100] flex flex-col ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-black cursor-pointer z-[1200] transition-transform hover:scale-110"
        >
          <IoMdClose size={24} />
        </button>

        {/* Header */}
        <h2 className="text-xl font-semibold mb-6 text-black leading-snug">
          Shopping Cart ({cart.length})
        </h2>

        {/* Scrollable Product List */}
        <div className="flex-1 overflow-y-auto pr-2">
          <div className="flex flex-col gap-6 pb-6">
            {cart.length === 0 ? (
              <div className="text-center py-10">
                <p className="text-gray-500 text-lg">Your cart is empty.</p>
              </div>
            ) : (
              cart.map((item: any) => (
                <div
                  key={item.id}
                  className="flex gap-4 items-start border-b border-gray-200 pb-4 hover:bg-gray-50 rounded transition-all"
                >
                  {/* Product Image */}
                  <div className="w-[120px] h-[120px] bg-gray-100 rounded-md overflow-hidden flex-shrink-0">
                    <img
                      src={getProductImage(item)}
                      alt={item.name || item.title}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        e.currentTarget.src = "/placeholder-image.jpg";
                      }}
                    />
                  </div>

                  {/* Product Info */}
                  <div className="flex-1 flex flex-col">
                    <p className="text-[16px] font-medium text-black leading-tight line-clamp-2">
                      {item.name || item.title || "Untitled Product"}
                    </p>

                    <p className="text-[#f2072f] font-semibold text-[16px] mt-1">
                      {item.price} BDT
                    </p>

                    {/* Quantity Controller */}
                    <div className="flex items-center gap- mt-3">
                      <button
                        onClick={() => dispatch(decreaseQuantity(item.id))}
                        className="w-9 h-9 flex items-center cursor-pointer justify-center border-gray-300 rounded-md hover:bg-gray-100 transition"
                      >
                        <FiMinus size={16} />
                      </button>

                      <span className="w-12 text-center font-medium text-sm rounded-md py-1">
                        {item.quantity}
                      </span>

                      <button
                        onClick={() =>
                          dispatch(addToCart({ ...item, quantity: 1 }))
                        }
                        className="w-9 h-9 flex cursor-pointer items-center justify-center border-gray-300 rounded-md hover:bg-gray-100 transition"
                      >
                        <FiPlus size={16} />
                      </button>

                      <button
                        onClick={() => dispatch(removeFromCart(item.id))}
                        className="ml-3 cursor-pointer text-red-500 hover:text-red-700 transition"
                      >
                        <FiTrash2 size={20} />
                      </button>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-auto border-t border-gray-200 pt-4 shrink-0">
          <div className="flex justify-between text-black mb-4">
            <button className="flex cursor-pointer flex-col items-center gap-1 text-[13px] py-2 px-3">
              <FiTag size={22} />
              <span>Add Coupon</span>
            </button>
            <button className="flex flex-col cursor-pointer items-center gap-1 text-[13px] py-2 px-3">
              <FiGift size={22} />
              <span>Add Note</span>
            </button>
            <button className="flex flex-col cursor-pointer items-center gap-1 text-[13px] py-2 px-3">
              <FiGift size={22} />
              <span>Add Gift</span>
            </button>
            <button className="flex flex-col cursor-pointer items-center gap-1 text-[13px] py-2 px-3">
              <FiTruck size={22} />
              <span>Shipping</span>
            </button>
          </div>

          <div className="bg-[#f7f7f7] p-4 rounded-lg">
            <div className="flex justify-between text-black font-bold text-lg mb-2">
              <span>Subtotal</span>
              <span className="text-red-600">€{subtotal.toFixed(2)}</span>
            </div>
            <p className="text-xs text-gray-500 mb-3">
              Taxes and shipping calculated at checkout
            </p>

            <label className="flex items-center gap-2 text-xs text-gray-600 mb-4">
              <input type="checkbox" className="w-4 h-4" />
              I agree with the Terms and Conditions
            </label>

            <div className="flex gap-3 justify-center">
              <button
                onClick={() => handleNavigate("/cart")}
                className="w-full max-w-[168px] h-12 text-sm font-medium cursor-pointer border border-black rounded hover:bg-black hover:text-white transition"
              >
                View Cart
              </button>
              <button
                onClick={() => handleNavigate("/chack-out")}
                className="w-full max-w-[168px] h-12 text-sm font-medium bg-black cursor-pointer text-white rounded hover:bg-red-600 transition"
              >
                Check Out
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartDrawer;
