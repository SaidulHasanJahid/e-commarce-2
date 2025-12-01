"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import { FaHeart, FaExchangeAlt, FaEye } from "react-icons/fa";
import { IoChevronBack, IoChevronForward } from "react-icons/io5";
import { useModal } from "@/@module/@common/modal/modal-modal-context";
import Link from "next/link";
import AddToCartButton from "@/@module/@common/add-to-cart-button";
import "swiper/css";
import "swiper/css/navigation";
import { useCustomarmostLoveQuery } from "@/appstore/customar-most-love/api";

// ----------------------------
// SAFE IMAGE URL
// ----------------------------
const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || "https://grocery.reclinerbdking.com";

const getSafeImageUrl = (path?: string | null) => {
  if (!path || path === "null" || path === "undefined") return "/placeholder.jpg";
  if (path.startsWith("http://") || path.startsWith("https://")) return path;
  if (path.startsWith("/uploads")) return `${BASE_URL}${path}`;
  if (path.startsWith("/")) return `${BASE_URL}${path}`;
  return `${BASE_URL}/uploads/${path}`;
};
// ----------------------------

const ReletedProduct = () => {
  const { openProductModal } = useModal();
  const navPrevClass = "customer-loved-swiper-prev";
  const navNextClass = "customer-loved-swiper-next";

  const { data: CustomerMostLovedProducts, isLoading } = useCustomarmostLoveQuery();
  const products = CustomerMostLovedProducts?.data || [];

  const getDiscountPercent = (basePrice: number, price: number) => {
    if (!basePrice || basePrice <= price) return null;
    return Math.round(((basePrice - price) / basePrice) * 100);
  };

  return (
    <div className="container mx-auto">
      <section className="w-full px-4 md:px-12 lg:px-24 py-10 mt-20 relative group">
        {/* Header */}
        <div className="mb-6 flex items-center justify-between">
          <h2 className="text-xl font-semibold text-black md:text-2xl">
            Customer Most Loved
          </h2>
          <Link href="/products" className="text-sm text-black hover:underline">
            View All Products
          </Link>
        </div>

        {isLoading && <p className="text-center py-10 text-black">Loading...</p>}

        {!isLoading && products.length > 0 && (
          <Swiper
            modules={[Navigation, Autoplay]}
            spaceBetween={15}
            loop={true}
            autoplay={{ delay: 4000, disableOnInteraction: false }}
            navigation={{ nextEl: `.${navNextClass}`, prevEl: `.${navPrevClass}` }}
            breakpoints={{
              320: { slidesPerView: 2, spaceBetween: 10 },
              480: { slidesPerView: 2, spaceBetween: 10 },
              640: { slidesPerView: 2, spaceBetween: 10 },
              768: { slidesPerView: 3, spaceBetween: 10 },
              1024: { slidesPerView: 4, spaceBetween: 10 },
              1280: { slidesPerView: 5, spaceBetween: 10 },
            }}
            className="pb-10"
          >
            {products.map((item: any) => {
              const product = item.product;
              const discountPercent = getDiscountPercent(product.basePrice, product.price);

              const cartProduct = {
                id: product.id,
                name: product.title,
                price: product.price,
                oldPrice: product.basePrice > product.price ? product.basePrice : null,
                category: product.brand?.name || "Uncategorized",
                images: [
                  getSafeImageUrl(
                    product.thumbnailUrl ||
                      product.coverImageUrl ||
                      product.images?.[0]?.url
                  ),
                ],
              };

              const href = `/products/${product.id}`;

              return (
                <SwiperSlide key={product.id}>
                  <div className="relative">
                    <Link href={href} className="block">
                      <div className="group/card relative flex h-[350px] w-full max-w-[226px] cursor-pointer flex-col overflow-hidden rounded-md border border-gray-200 bg-white transition-all duration-300 hover:shadow-md mx-auto">

                        {/* Discount Tag */}
                        {discountPercent && (
                          <span className="absolute left-3 top-3 z-10 rounded-full bg-red-500 px-3 py-1 text-xs font-semibold text-white">
                            -{discountPercent}%
                          </span>
                        )}

                        {/* Product Image */}
                        <div className="relative flex h-[207px] items-center justify-center overflow-hidden bg-white">
                          <Image
                            src={getSafeImageUrl(
                              product.thumbnailUrl ||
                                product.coverImageUrl ||
                                product.images?.[0]?.url
                            )}
                            alt={product.title}
                            width={226}
                            height={207}
                            className="object-contain transition-transform duration-300 group-hover/card:scale-105"
                          />
                        </div>

                        {/* Hover Buttons */}
                        <div className="absolute right-3 top-1/2 z-20 flex -translate-y-1/2 flex-col gap-2 opacity-0 transition-all duration-300 group-hover/card:opacity-100">
                          <button
                            onClick={(e) => {
                              e.preventDefault();
                              e.stopPropagation();
                            }}
                            className="flex h-10 w-10 items-center justify-center rounded-full bg-white/80 shadow-md hover:bg-white hover:scale-110 transition"
                          >
                            <FaHeart className="text-[#666]" />
                          </button>
                          <button
                            onClick={(e) => {
                              e.preventDefault();
                              e.stopPropagation();
                            }}
                            className="flex h-10 w-10 items-center justify-center rounded-full bg-white/80 shadow-md hover:bg-white hover:scale-110 transition"
                          >
                            <FaExchangeAlt className="text-[#666]" />
                          </button>
                          <button
                            onClick={(e) => {
                              e.preventDefault();
                              e.stopPropagation();
                              openProductModal(product);
                            }}
                            className="flex h-10 w-10 items-center justify-center rounded-full bg-white/80 shadow-md hover:bg-white hover:scale-110 transition"
                          >
                            <FaEye className="text-[#666]" />
                          </button>
                        </div>

                        {/* Product Info */}
                        <div className="flex flex-1 flex-col gap-2 p-3 sm:p-4">
                          <p className="truncate text-xs text-[#666]">
                            {product.brand?.name || "Uncategorized"}
                          </p>
                          <h3 className="line-clamp-1 text-sm font-medium capitalize text-black sm:text-base">
                            {product.title}
                          </h3>

                          <div className="mb-2 flex items-center gap-2">
                            <span className="text-lg text-[#F93355] sm:text-xl">
                              ${product.price}
                            </span>
                            {product.basePrice > product.price && (
                              <span className="text-base text-[#666] line-through sm:text-lg">
                                ${product.basePrice}
                              </span>
                            )}
                          </div>

                          {/* Add To Cart Button */}
                          <div className="opacity-0 translate-y-4 group-hover/card:opacity-100 group-hover/card:translate-y-0 transition-all duration-500 w-full">
                            <AddToCartButton product={cartProduct} />
                          </div>
                        </div>
                      </div>
                    </Link>
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        )}

        {/* Navigation Arrows */}
        <div className={`${navPrevClass} absolute left-2 top-1/2 z-20 -translate-y-1/2 opacity-0 transition-opacity duration-300 group-hover:opacity-100 cursor-pointer`}>
          <button className="flex h-10 w-10 items-center justify-center rounded-full bg-black text-white shadow hover:bg-white hover:text-black transition">
            <IoChevronBack size={20} />
          </button>
        </div>
        <div className={`${navNextClass} absolute right-2 top-1/2 z-20 -translate-y-1/2 opacity-0 transition-opacity duration-300 group-hover:opacity-100 cursor-pointer`}>
          <button className="flex h-10 w-10 items-center justify-center rounded-full bg-black text-white shadow hover:bg-white hover:text-black transition">
            <IoChevronForward size={20} />
          </button>
        </div>
      </section>
    </div>
  );
};

export default ReletedProduct;