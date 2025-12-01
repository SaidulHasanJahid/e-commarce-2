"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { FaHeart, FaExchangeAlt, FaEye } from "react-icons/fa";
import { IoChevronBack, IoChevronForward } from "react-icons/io5";
import { useModal } from "@/@module/@common/modal/modal-modal-context";
import AddToCartButton from "@/@module/@common/add-to-cart-button";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { useBestProductQuery } from "@/appstore/is-best/api";

// ✅ SAFE IMAGE URL FIX
const BACKEND_BASE_URL =
  process.env.NEXT_PUBLIC_API_URL || "https://grocery.reclinerbdking.com";

const getSafeImageUrl = (url?: string | null): string => {
  if (!url || url === "null" || url === "undefined") return "/placeholder.jpg";
  if (url.startsWith("http://") || url.startsWith("https://")) return url;
  if (url.startsWith("/")) return `${BACKEND_BASE_URL}${url}`;
  return `${BACKEND_BASE_URL}/uploads/${url}`;
};

// ⏳ Countdown Hook
const useCountdown = () => {
  const [timeLeft, setTimeLeft] = React.useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  React.useEffect(() => {
    const target = new Date();
    target.setHours(target.getHours() + 24);

    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = target.getTime() - now;

      if (distance < 0) {
        clearInterval(timer);
        return;
      }

      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000),
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return timeLeft;
};

export default function BestDeals() {
  const { openProductModal } = useModal();
  const { data: apiResponse, isLoading, isError } = useBestProductQuery();
  const { days, hours, minutes, seconds } = useCountdown();

  const bestDealProducts = React.useMemo(
    () => apiResponse?.data || [],
    [apiResponse]
  );

  if (isLoading) return <div>Loading...</div>;

  if (isError || bestDealProducts.length === 0)
    return (
      <div className="py-20 text-center text-red-600 text-xl">
        No best deals available now!
      </div>
    );

  return (
    <div className="container mx-auto px-4">
      <div className="bg-[#fceef1] mt-20 rounded-xl p-6 flex flex-col lg:flex-row gap-6">
        
        {/* LEFT SIDE */}
        <div className="flex flex-col lg:w-[300px] flex-shrink-0">
          <h2 className="text-2xl sm:text-3xl md:text-[32px] font-medium text-black mb-8 mt-4">
            Today's Best Deals
          </h2>

          {/* TIMER */}
          <div className="flex justify-center items-center gap-3 flex-wrap">
            {[
              { value: String(days).padStart(2, "0"), label: "Days" },
              { value: String(hours).padStart(2, "0"), label: "Hours" },
              { value: String(minutes).padStart(2, "0"), label: "Mins" },
              { value: String(seconds).padStart(2, "0"), label: "Secs" },
            ].map(({ value, label }) => (
              <div key={label} className="flex flex-col items-center">
                <span className="w-12 h-12 sm:w-14 sm:h-14 bg-black text-white flex items-center justify-center rounded-full font-bold text-lg">
                  {value}
                </span>
                <span className="text-xs mt-1">{label}</span>
              </div>
            ))}
          </div>

          <div className="flex justify-center mt-8">
            <Link href="/shop">
              <button className="rounded-md border-2 border-[var(--main-color2)] text-[var(--main-color2)] px-10 py-3 font-semibold hover:bg-black hover:text-white transition">
                Shop All
              </button>
            </Link>
          </div>
        </div>

        {/* RIGHT SIDE SWIPER */}
        <div className="flex-1 relative group overflow-hidden">

          {/* BUTTONS */}
          <button className="swiper-button-prev-custom absolute left-0 top-1/2 -translate-y-1/2 z-10 opacity-0 group-hover:opacity-100 bg-black text-white w-12 h-12 rounded-full flex items-center justify-center transition">
            <IoChevronBack size={24} />
          </button>
          <button className="swiper-button-next-custom absolute right-0 top-1/2 -translate-y-1/2 z-10 opacity-0 group-hover:opacity-100 bg-black text-white w-12 h-12 rounded-full flex items-center justify-center transition">
            <IoChevronForward size={24} />
          </button>

          <Swiper
            modules={[Navigation, Autoplay]}
            loop={bestDealProducts.length > 3}
            autoplay={{ delay: 3000 }}
            navigation={{
              nextEl: ".swiper-button-next-custom",
              prevEl: ".swiper-button-prev-custom",
            }}
            breakpoints={{
              0: { slidesPerView: 1, spaceBetween: 16 },
              640: { slidesPerView: 2, spaceBetween: 16 },
              768: { slidesPerView: 3, spaceBetween: 20 },
              1024: { slidesPerView: 4, spaceBetween: 24 },
            }}
            className="py-4"
          >
            {bestDealProducts.map((item: any) => {
              const product = item.product;

              const imageUrl = getSafeImageUrl(
                product.thumbnailUrl || product.coverImageUrl
              );

              const discountPercent =
                product.basePrice > product.price
                  ? Math.round(
                      ((product.basePrice - product.price) / product.basePrice) *
                        100
                    )
                  : null;

              const cartProduct = {
                id: product.id,
                name: product.title,
                price: product.price,
                oldPrice:
                  product.basePrice > product.price ? product.basePrice : null,
                category: product.brand?.name || "Uncategorized",
                images: [imageUrl],
              };

              return (
                <SwiperSlide key={product.id} className="flex justify-center">
                  <Link href={`/products/${product.id}`} className="block max-w-[270px] w-full">
                    <div className="relative border border-gray-200 rounded-lg bg-white group/card overflow-hidden hover:shadow-xl transition w-full">
                      
                      {/* DISCOUNT BADGE */}
                      {discountPercent && (
                        <span className="absolute top-3 left-3 bg-red-500 text-white text-xs font-bold px-3 py-1 rounded-full z-10">
                          -{discountPercent}%
                        </span>
                      )}

                      {/* IMAGE */}
                      <div className="w-full h-[220px] relative overflow-hidden">
                        <Image
                          src={imageUrl}
                          alt={product.title}
                          fill
                          className="object-cover transition-transform duration-500 group-hover/card:scale-110"
                        />
                      </div>

                      {/* HOVER ICONS */}
                      <div className="absolute top-1/2 right-3 -translate-y-1/2 flex flex-col gap-3 opacity-0 group-hover/card:opacity-100 transition z-20">
                        <button className="bg-white shadow-lg w-10 h-10 rounded-full flex items-center justify-center hover:scale-110 transition">
                          <FaHeart className="text-gray-700" />
                        </button>

                        <button className="bg-white shadow-lg w-10 h-10 rounded-full flex items-center justify-center hover:scale-110 transition">
                          <FaExchangeAlt className="text-gray-700" />
                        </button>

                        <button
                          onClick={(e) => {
                            e.preventDefault();
                            e.stopPropagation();
                            openProductModal(product);
                          }}
                          className="bg-white shadow-lg w-10 h-10 rounded-full flex items-center justify-center hover:scale-110 transition"
                        >
                          <FaEye className="text-gray-700" />
                        </button>
                      </div>

                      {/* PRODUCT INFO */}
                      <div className="p-4 flex flex-col">
                        <p className="text-xs text-gray-600 truncate">
                          {product.brand?.name || "Uncategorized"}
                        </p>

                        <h3 className="text-sm font-medium text-black line-clamp-2 mt-1">
                          {product.title}
                        </h3>

                        <div className="flex items-center gap-2 mt-2">
                          <span className="text-lg font-bold text-[#F93355]">
                            ${product.price}
                          </span>

                          {product.basePrice > product.price && (
                            <span className="text-sm line-through text-gray-500">
                              ${product.basePrice}
                            </span>
                          )}
                        </div>

                        <div className="mt-4">
                          <AddToCartButton
                            product={cartProduct}
                            className="w-full opacity-0 translate-y-4 group-hover/card:opacity-100 group-hover/card:translate-y-0 transition bg-black text-white py-3 rounded-md font-medium hover:bg-gray-900"
                          />
                        </div>
                      </div>
                    </div>
                  </Link>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
    </div>
  );
}
