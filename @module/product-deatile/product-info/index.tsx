"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";
import { addToCart } from "@/appstore/cart/cart-slice"; 
import { FaEye } from "react-icons/fa";
import { FiHeart, FiMinus, FiPlus } from "react-icons/fi";
import { Button, message } from "antd";
import AddToCartButtonDeatile from "@/@module/@common/ad-to-cart-button-deatile";

interface Color {
  id: number;
  name: string;
  status: string;
}

interface Size {
  id: number;
  name: string;
  status: string;
}

interface Brand {
  id: number;
  name: string;
}

interface Product {
  id: number;
  title: string;
  subtitle?: string;
  descriptionHtml?: string;
  price: number;
  basePrice: number;
  productCode?: string;
  stockQty?: number;
  slug?: string;
  coverImageUrl?: string;
  thumbnailUrl?: string;
  brand?: Brand;
  colors?: Color[];
  sizes?: Size[];
}

interface ProductInfoProps {
  product: Product;
}

const ProductInfo: React.FC<ProductInfoProps> = ({ product }) => {
  const router = useRouter();
  const dispatch = useDispatch();

  const [quantity, setQuantity] = useState(1);
  const [selectedColor, setSelectedColor] = useState<Color | null>(null);
  const [selectedSize, setSelectedSize] = useState<Size | null>(null);

  const [usersViewing] = useState(() => Math.floor(Math.random() * 100) + 10);

  const totalPrice = product.price * quantity;
  const oldTotal = product.basePrice > product.price ? product.basePrice * quantity : undefined;
  const discountPercent = product.basePrice > product.price
    ? Math.round(((product.basePrice - product.price) / product.basePrice) * 100)
    : 0;

  const isOutOfStock = !product.stockQty || product.stockQty <= 0;
  const hasVariants = product.colors?.length && product.sizes?.length;
  const canAddToCart = !isOutOfStock && (!hasVariants || (selectedColor && selectedSize));

  const handleAddToCart = () => {
    if (!canAddToCart) {
      message.warning("Please select color and size");
      return;
    }

    dispatch(
      addToCart({
        id: product.id,
        name: product.title,
        price: product.price,
        oldPrice: product.basePrice > product.price ? product.basePrice : undefined,
        category: product.brand?.name || "Uncategorized",
        images: [product.thumbnailUrl || product.coverImageUrl || ""],
        quantity,
        color: selectedColor?.name,
        size: selectedSize?.name,
      })
    );

    message.success("Added to cart!");
  };

  const handleBuyNow = () => {
    if (!canAddToCart) {
      message.warning("Please select color and size");
      return;
    }

    dispatch(
      addToCart({
        id: product.id,
        name: product.title,
        price: product.price,
        oldPrice: product.basePrice > product.price ? product.basePrice : undefined,
        category: product.brand?.name || "Uncategorized",
        images: [product.thumbnailUrl || product.coverImageUrl || ""],
        quantity,
        color: selectedColor?.name,
        size: selectedSize?.name,
      })
    );

    router.push("/cart");
  };

  return (
    <div className="space-y-6 max-w-2xl mx-auto">
      {/* Title */}
      <div>
        <h1 className="text-4xl font-bold text-black">{product.title}</h1>
        <p className="text-sm text-gray-600 mt-2 flex items-center gap-2">
          <FaEye className="text-black" />
          {usersViewing} people are viewing this right now
        </p>
      </div>

      {/* Stock Info */}
      {product.stockQty !== undefined && (
        <p className="text-sm text-gray-600">
          <span className="text-red-500 font-bold">Fire</span> {product.stockQty} Sold in last 24 hours
        </p>
      )}

      {/* Details */}
      <div className="space-y-2 text-sm">
        <p>
          <span className="text-gray-600">Availability:</span>{" "}
          <span className={isOutOfStock ? "text-red-600 font-bold" : "text-green-600 font-medium"}>
            {isOutOfStock ? "OUT OF STOCK" : "In Stock"}
          </span>
        </p>
        <p>
          <span className="text-gray-600">Product Code:</span> {product.productCode || "N/A"}
        </p>
        <p>
          <span className="text-gray-600">Brand:</span> {product.brand?.name || "Uncategorized"}
        </p>
      </div>

      {/* Description */}
      {product.descriptionHtml && (
        <div
          className="text-sm text-gray-600 prose prose-sm"
          dangerouslySetInnerHTML={{ __html: product.descriptionHtml }}
        />
      )}

      {/* Color Selection */}
      {product.colors && product.colors.length > 0 && (
        <div>
          <h3 className="font-medium mb-3">
            Color: <span className="font-bold">{selectedColor?.name || "Select color"}</span>
          </h3>
          <div className="flex gap-3 flex-wrap">
            {product.colors.map((color) => (
              <button
                key={color.id}
                onClick={() => setSelectedColor(color)}
                className={`w-12 h-12 rounded-full border-4 transition-all ${
                  selectedColor?.id === color.id
                    ? "border-black ring-4 ring-black ring-opacity-20"
                    : "border-gray-300 hover:border-gray-600"
                }`}
                style={{ backgroundColor: color.name.toLowerCase() }}
                title={color.name}
              />
            ))}
          </div>
        </div>
      )}

      {/* Size Selection */}
      {product.sizes && product.sizes.length > 0 && (
        <div>
          <h3 className="font-medium mb-3">
            Size: <span className="font-bold">{selectedSize?.name || "Select size"}</span>
          </h3>
          <div className="flex gap-3 flex-wrap">
            {product.sizes.flatMap((size) =>
              size.name
                .split(",")
                .map((s) => s.trim())
                .filter(Boolean)
                .map((sizeName) => (
                  <button
                    key={sizeName}
                    onClick={() => setSelectedSize({ ...size, name: sizeName })}
                    className={`px-6 py-3 border rounded-lg font-medium transition-all ${
                      selectedSize?.name === sizeName
                        ? "bg-black text-white border-black"
                        : "border-gray-300 hover:border-black"
                    }`}
                  >
                    {sizeName.toUpperCase()}
                  </button>
                ))
            )}
          </div>
        </div>
      )}

      {/* Price */}
      <div className="flex items-end gap-4">
        <span className="text-4xl font-bold text-red-600">{totalPrice} BDT</span>
        {oldTotal && (
          <>
            <span className="text-2xl text-gray-400 line-through">{oldTotal} BDT</span>
            <span className="bg-orange-500 text-white px-3 py-1 rounded-full text-sm font-bold">
              {discountPercent}% OFF
            </span>
          </>
        )}
      </div>

      {/* Actions */}
      <div className="flex items-center gap-4">
        {/* Quantity */}
        <div className="flex items-center border border-gray-300 rounded-lg overflow-hidden">
          <button
            onClick={() => quantity > 1 && setQuantity(quantity - 1)}
            className="px-4 py-3 hover:bg-gray-100"
            disabled={quantity === 1}
          >
            <FiMinus />
          </button>
          <span className="px-6 py-3 font-medium">{quantity}</span>
          <button
            onClick={() => setQuantity(quantity + 1)}
            className="px-4 py-3 hover:bg-gray-100"
          >
            <FiPlus />
          </button>
        </div>

        {/* Add to Cart Button */}
        <AddToCartButtonDeatile product={product}  />

        {/* Buy Now */}
        <Button
          type="default"
          size="large"
          onClick={handleBuyNow}
          className="h-12 px-8 border-2 border-black font-medium hover:bg-black hover:text-white"
        >
          Buy Now
        </Button>

        {/* Wishlist */}
        <Button
          shape="circle"
          size="large"
          icon={<FiHeart className="text-xl" />}
          className="border-2 border-gray-300 hover:border-black"
        />
      </div>
    </div>
  );
};

export default ProductInfo;