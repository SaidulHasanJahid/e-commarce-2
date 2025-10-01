"use client";

import { useState } from "react";
import { FaChevronDown } from "react-icons/fa";
import { Range } from "react-range";
import clsx from "clsx";

type Item = {
  name: string;
};

type FilterBoxProps = {
  title: string;
  items?: Item[];
  isOpenDefault?: boolean;
  children?: React.ReactNode;
  hasCheckbox?: boolean; // new prop
};

const MIN = 0;
const MAX = 1000;

const sizes: Item[] = [
  { name: "XS (2)" },
  { name: "S (5)" },
  { name: "M (8)" },
  { name: "L (6)" },
  { name: "XL (4)" },
  { name: "XXL (3)" },
];

// Reusable Filter Box
const FilterBox = ({
  title,
  items,
  isOpenDefault = true,
  children,
  hasCheckbox = true,
}: FilterBoxProps) => {
  const [isOpen, setIsOpen] = useState(isOpenDefault);

  return (
    <div className="border-b border-[#76767678] p-4 rounded">
      {/* Header */}
      <div
        className="flex justify-between items-center font-semibold cursor-pointer text-[20px] text-[#000000]"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span>{title}</span>
        <FaChevronDown
          className={clsx(
            "text-[16px] transition-transform duration-300",
            isOpen && "rotate-180"
          )}
        />
      </div>

      {/* Body */}
      {isOpen && (
        <div className="mt-3 transition-all duration-300 ease-in-out">
          {items && (
            <ul className="w-[315px] max-h-[285px] overflow-y-auto pr-2 text-[#000000] text-[16px] leading-[36px]">
              {items.map((item, index) => (
                <li
                  key={index}
                  className="flex items-center space-x-2 cursor-pointer hover:text-blue-600 transition"
                >
                  {hasCheckbox && (
                    <input
                      type="checkbox"
                      className="w-4 h-4 text-black accent-black"
                    />
                  )}
                  <span>{item.name}</span>
                </li>
              ))}
            </ul>
          )}
          {children}
        </div>
      )}
    </div>
  );
};

// Main Component
export default function ProductList() {
  const categories: Item[] = [
    { name: "Smartphone (8)" },
    { name: "Electronics (8)" },
    { name: "Fashion (12)" },
    { name: "Furniture (7)" },
    { name: "Jewelry (7)" },
    { name: "Cosmetics (7)" },
    { name: "Books (6)" },
    { name: "Office (9)" },
    { name: "Shoes (11)" },
    { name: "Bags (10)" },
    { name: "Watches (5)" },
    { name: "Toys (8)" },
    { name: "Sports (12)" },
    { name: "Outdoor (9)" },
    { name: "Decoration (13)" },
    { name: "Home & Living (15)" },
    { name: "Automobiles (6)" },
    { name: "Health & Beauty (14)" },
    { name: "Groceries (10)" },
    { name: "Gaming (7)" },
  ];

  const brands: Item[] = [
    { name: "Samsung (18)" },
    { name: "Apple (10)" },
    { name: "LG (7)" },
    { name: "Vivo (9)" },
    { name: "Huawei (8)" },
    { name: "Thinkpad (7)" },
    { name: "Nokia (5)" },
    { name: "OnePlus (6)" },
  ];

  const colors: Item[] = [
    { name: "Red (4)" },
    { name: "Blue (6)" },
    { name: "Green (3)" },
    { name: "Yellow (2)" },
    { name: "Black (7)" },
    { name: "White (5)" },
  ];

  const [priceRange, setPriceRange] = useState([MIN, MAX]);

  return (
    <div className="w-full max-w-[315px] bg-white text-sm font-sans space-y-6">
      {/* Categories */}
      <FilterBox title="Categories" items={categories} hasCheckbox={false} />

      {/* Price */}
      <FilterBox title="Price">
        <div className="mt-4">
          <Range
            step={10}
            min={MIN}
            max={MAX}
            values={priceRange}
            onChange={(values) => setPriceRange(values)}
            renderTrack={({ props, children }) => (
              <div
                {...props}
                className="h-2 bg-gray-300 rounded-full relative"
              >
                <div
                  className="absolute h-2 bg-black rounded-full"
                  style={{
                    left: `${(priceRange[0] / MAX) * 100}%`,
                    width: `${((priceRange[1] - priceRange[0]) / MAX) * 100}%`,
                  }}
                />
                {children}
              </div>
            )}
            renderThumb={({ props }) => (
              <div
                {...props}
                className="w-4 h-4 bg-black rounded-full shadow-md cursor-pointer"
              />
            )}
          />
          <div className="flex items-center justify-between mt-4">
            <input
              type="text"
              readOnly
              value={`€ ${priceRange[0]}`}
              className="border px-2 py-1 w-[80px] text-center text-sm"
            />
            <span className="mx-1">-</span>
            <input
              type="text"
              readOnly
              value={`€ ${priceRange[1]}`}
              className="border px-2 py-1 w-[80px] text-center text-sm"
            />
          </div>
        </div>
      </FilterBox>

      {/* Sizes */}
      <FilterBox title="Size" items={sizes} />

      {/* Brands */}
      <FilterBox title="Brand" items={brands} />

      {/* Colors */}
      <FilterBox title="Colors" items={colors} />
    </div>
  );
}
