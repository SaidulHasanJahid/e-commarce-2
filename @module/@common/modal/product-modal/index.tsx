// "use client";

// import React from "react";
// import { Modal } from "antd";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Autoplay } from "swiper/modules";
// import { IoMdClose } from "react-icons/io";
// import { FaHeart, FaExchangeAlt } from "react-icons/fa";
// import { FiShoppingCart, FiPlus, FiMinus } from "react-icons/fi";
// import { useDispatch } from "react-redux";
// import { addToCart } from "@/appstore/cart/cart-slice";
// import { useModal } from "@/@module/@common/modal/modal-modal-context";
// import "swiper/css";

// interface Product {
//   id: number;
//   name: string;
//   category: string;
//   price: number;
//   oldPrice?: number;
//   discount?: string;
//   images?: string[];
// }

// interface ProductModalProps {
//   isOpen: boolean;
//   onClose: () => void;
//   product: Product | null;
//   quantity: number;
//   setQuantity: React.Dispatch<React.SetStateAction<number>>;
// }

// export default function ProductModal({
//   isOpen,
//   onClose,
//   product,
//   quantity,
//   setQuantity,
// }: ProductModalProps) {
//   const dispatch = useDispatch();
//   const { openCartModal } = useModal();

//   if (!product) return null;

//   const handleAddToCart = () => {
//     const cartItem:any = {
//       id: product.id,
//       name: product.name,
//       price: product.price,
//       oldPrice: product.oldPrice || null,
//       category: product.category,
//       images: product.images || ["/placeholder.png"], // Redux এ ইমেজ দরকার
//       quantity: quantity,
//     };

//     // Redux এ প্রোডাক্ট যোগ করা
//     dispatch(addToCart(cartItem));

//     // প্রোডাক্ট মডাল বন্ধ
//     onClose();

//     // কার্ট মডাল ওপেন (কোনো আর্গুমেন্ট লাগবে না)
//     openCartModal();
//   };

//   return (
//     <Modal
//       open={isOpen}
//       onCancel={onClose}
//       footer={null}
//       width={1200}
//       closeIcon={<IoMdClose className="text-3xl text-gray-700 hover:text-black" />}
//       centered
//       className="product-quick-view-modal"
//     >
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-10 p-4">

//         {/* Left Side - Images */}
//         <div className="relative">
//           {product.discount && (
//             <span className="absolute top-4 left-4 z-10 bg-red-600 text-white px-4 py-1.5 rounded-full text-sm font-bold shadow-lg">
//               -{product.discount}
//             </span>
//           )}

//           <Swiper
//             modules={[Autoplay]}
//             spaceBetween={10}
//             slidesPerView={1}
//             autoplay={{ delay: 3000, disableOnInteraction: false }}
//             loop={true}
//             className="rounded-lg overflow-hidden"
//           >
//             {(product.images && product.images.length > 0
//               ? product.images
//               : ["/placeholder.png"]
//             ).map((img, index) => (
//               <SwiperSlide key={index}>
//                 <div className="flex items-center justify-center bg-gray-50 h-[420px] rounded-lg">
//                   <img
//                     src={img}
//                     alt={`${product.name} - ${index + 1}`}
//                     className="max-w-full max-h-full object-contain"
//                   />
//                 </div>
//               </SwiperSlide>
//             ))}
//           </Swiper>
//         </div>

//         {/* Right Side - Product Info */}
//         <div className="flex flex-col justify-center">
//           <h2 className="text-3xl font-bold text-gray-900 mb-3">{product.name}</h2>

//           <div className="flex items-center gap-3 text-green-600 mb-4">
//             <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
//               <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
//             </svg>
//             <span className="text-lg font-medium">In Stock</span>
//           </div>

//           <div className="flex items-center gap-4 mb-6">
//             <span className="text-4xl font-bold text-red-600">€{product.price.toFixed(2)}</span>
//             {product.oldPrice && (
//               <span className="text-2xl text-gray-500 line-through">€{product.oldPrice.toFixed(2)}</span>
//             )}
//           </div>

//           <p className="text-gray-600 text-base leading-relaxed mb-8">
//             Conversation flows freely with easy hands-free calling, thanks to the built-in microphone. No need to even take your phone from your pocket.
//           </p>

//           {/* Quantity Selector */}
//           <div className="flex items-center gap-4 mb-8">
//             <span className="text-lg font-medium text-gray-700">Quantity:</span>
//             <div className="flex items-center border-2 border-gray-300 rounded-lg overflow-hidden">
//               <button
//                 onClick={() => setQuantity(Math.max(1, quantity - 1))}
//                 className="w-12 h-12 flex items-center justify-center hover:bg-black hover:text-white transition text-xl font-bold"
//               >
//                 <FiMinus />
//               </button>
//               <input
//                 type="text"
//                 value={quantity}
//                 readOnly
//                 className="w-16 text-center font-bold text-lg outline-none"
//               />
//               <button
//                 onClick={() => setQuantity(quantity + 1)}
//                 className="w-12 h-12 flex items-center justify-center hover:bg-black hover:text-white transition text-xl font-bold"
//               >
//                 <FiPlus />
//               </button>
//             </div>
//           </div>

//           {/* Action Buttons */}
//           <div className="flex items-center gap-4">
//             <button
//               onClick={handleAddToCart}
//               className="flex-1 flex items-center justify-center gap-3 bg-black text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-800 transition shadow-lg"
//             >
//               <FiShoppingCart size={22} />
//               Add to Cart
//             </button>

//             <button className="w-14 h-14 border-2 border-gray-300 rounded-lg flex items-center justify-center hover:bg-black hover:text-white hover:border-black transition">
//               <FaHeart size={20} />
//             </button>

//             <button className="w-14 h-14 border-2 border-gray-300 rounded-lg flex items-center justify-center hover:bg-black hover:text-white hover:border-black transition">
//               <FaExchangeAlt size={20} />
//             </button>
//           </div>
//         </div>
//       </div>
//     </Modal>
//   );
// }
"use client";

import React from "react";
import { Modal } from "antd";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { IoMdClose } from "react-icons/io";
import { FaHeart, FaExchangeAlt } from "react-icons/fa";
import { FiShoppingCart, FiPlus, FiMinus } from "react-icons/fi";
import { useDispatch } from "react-redux";
import { addToCart } from "@/appstore/cart/cart-slice";
import { useModal } from "@/@module/@common/modal/modal-modal-context";
import "swiper/css";
import Image from "next/image";

interface Product {
  id: number;
  name: string;
  category: string;
  price: number;
  oldPrice?: number;
  discount?: string;
  images?: string[];
  coverImageUrl?: string;
  thumbnailUrl?: string;
}

interface ProductModalProps {
  isOpen: boolean;
  onClose: () => void;
  product: Product | null;
  quantity: number;
  setQuantity: React.Dispatch<React.SetStateAction<number>>;
}

export default function ProductModal({
  isOpen,
  onClose,
  product,
  quantity,
  setQuantity,
}: ProductModalProps) {
  const dispatch = useDispatch();
  const { openCartModal } = useModal();

  if (!product) return null;

  // Get images with fallback
  const getImages = (): string[] => {
    if (product.images && product.images.length > 0) return product.images;
    if (product.coverImageUrl) return [product.coverImageUrl];
    if (product.thumbnailUrl) return [product.thumbnailUrl];
    return ["/placeholder.jpg"];
  };

  const images = getImages();

  const handleAddToCart = () => {
    const cartItem = {
      id: product.id,
      name: product.name,
      price: product.price,
      oldPrice: product.oldPrice ?? undefined, // fix: use undefined instead of null
      category: product.category,
      images: images,
      quantity: quantity,
    };

    dispatch(addToCart(cartItem));
    onClose();
    openCartModal(cartItem); // pass cartItem to modal
  };

  return (
    <Modal
      open={isOpen}
      onCancel={onClose}
      footer={null}
      width={1200}
      closeIcon={<IoMdClose className="text-3xl text-gray-700 hover:text-black" />}
      centered
      className="product-quick-view-modal"
      destroyOnClose
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 p-4 md:p-6">
        {/* Left Side - Images */}
        <div className="relative">
          {product.discount && (
            <span className="absolute top-4 left-4 z-10 bg-red-600 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg">
              -{product.discount}
            </span>
          )}

          <Swiper
            modules={[Autoplay]}
            spaceBetween={10}
            slidesPerView={1}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            loop={true}
            className="rounded-lg overflow-hidden"
          >
            {images.map((img, index) => (
              <SwiperSlide key={`${img}-${index}`}>
                <div className="relative w-full h-[420px] bg-gray-50 rounded-lg flex items-center justify-center">
                  <Image
                    src={img}
                    alt={`${product.name} - ${index + 1}`}
                    fill
                    className="object-contain p-8"
                    sizes="(max-width: 768px) 100vw, 50vw"
                    priority={index === 0}
                    onError={(e) => {
                      e.currentTarget.src = "/placeholder.jpg";
                    }}
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Right Side - Product Info */}
        <div className="flex flex-col justify-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-3">{product.name}</h2>

          <div className="flex items-center gap-3 text-green-600 mb-4">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                clipRule="evenodd"
              />
            </svg>
            <span className="text-lg font-medium">In Stock</span>
          </div>

          <div className="flex items-center gap-4 mb-6">
            <span className="text-4xl font-bold text-red-600">
              ${product.price.toFixed(2)}
            </span>
            {product.oldPrice && (
              <span className="text-2xl text-gray-500 line-through">
                ${product.oldPrice.toFixed(2)}
              </span>
            )}
          </div>

          <p className="text-gray-600 text-base leading-relaxed mb-8">
            Conversation flows freely with easy hands-free calling, thanks to the built-in microphone. No need to even take your phone from your pocket.
          </p>

          {/* Quantity Selector */}
          <div className="flex items-center gap-4 mb-8">
            <span className="text-lg font-medium text-gray-700">Quantity:</span>
            <div className="flex items-center border-2 border-gray-300 rounded-lg overflow-hidden select-none">
              <button
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                className="w-12 h-12 flex items-center justify-center hover:bg-black hover:text-white transition text-xl font-bold"
              >
                <FiMinus />
              </button>
              <div className="w-16 text-center font-bold text-lg py-2">{quantity}</div>
              <button
                onClick={() => setQuantity(quantity + 1)}
                className="w-12 h-12 flex items-center justify-center hover:bg-black hover:text-white transition text-xl font-bold"
              >
                <FiPlus />
              </button>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center gap-4">
            <button
              onClick={handleAddToCart}
              className="flex-1 flex items-center justify-center gap-3 bg-black text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-800 transition shadow-lg"
            >
              <FiShoppingCart size={22} />
              Add to Cart
            </button>

            <button className="w-14 h-14 border-2 border-gray-300 rounded-lg flex items-center justify-center hover:bg-black hover:text-white hover:border-black transition">
              <FaHeart size={20} />
            </button>

            <button className="w-14 h-14 border-2 border-gray-300 rounded-lg flex items-center justify-center hover:bg-black hover:text-white hover:border-black transition">
              <FaExchangeAlt size={20} />
            </button>
          </div>
        </div>
      </div>
    </Modal>
  );
}
