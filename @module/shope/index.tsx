"use client";

import { useEffect, useState } from "react";
import { FaBars } from "react-icons/fa";
import ProductList from "./@componant/list-product";
import ProductArea from "./@componant/product-area";
import { FiChevronRight } from "react-icons/fi";
import Link from "next/link";

const ShopByCategory = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);

  useEffect(() => {
    const checkScreen = () => {
      setIsMobile(window.innerWidth < 1300);
    };
    checkScreen();
    window.addEventListener("resize", checkScreen);
    return () => window.removeEventListener("resize", checkScreen);
  }, []);

  return (
    <>
     {/* Breadcrumb */}
    <nav className="w-full bg-[#f7f7f7] py-8 px-4" aria-label="Breadcrumb">
      <ol className="flex flex-wrap justify-center items-center text-[14px] text-[#666666]">
        <li className="flex items-center">
          <Link
            href="/"
            className="hover:text-[#f93355] transition-colors cursor-pointer"
          >
            Home
          </Link>
          <FiChevronRight className="mx-2 text-[#666666] text-sm" />
        </li>
        <li className="flex items-center text-[#000] font-medium cursor-default">
          Shop
        </li>
      </ol>
    </nav>

      {/* Main Content */}
      <div className="container  mx-auto">
        {/* Show sidebar toggle on small screens */}
        {isMobile && (
          <button
            className="flex items-center gap-2 text-black border px-4 py-2 rounded mt-4"
            onClick={() => setDrawerOpen(true)}
          >
            <FaBars /> Filter Products
          </button>
        )}

        {/* Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 mt-4">
          {/* Sidebar (only visible on large screens) */}
          {!isMobile && (
            <div className="col-span-1">
              <ProductList />
            </div>
          )}

          {/* Main Product Grid */}
          <div className={`w-full ${isMobile ? "col-span-1" : "col-span-3"}`}>
            <ProductArea />
          </div>
        </div>
      </div>

      {/* Drawer for ListContent on small devices */}
      {isMobile && drawerOpen && (
        <div className="fixed top-0 left-0 w-full h-full  bg-opacity-40 z-50 flex">
          <div className="w-[80%] sm:w-[60%] md:w-[40%] bg-white p-4 shadow h-full overflow-y-auto relative">
            <button
              className="absolute top-3 right-4 text-xl text-[#767678]"
              onClick={() => setDrawerOpen(false)}
            >
              ✕
            </button>
            <div>
              <ProductList />
            </div>
          </div>
          {/* Clicking outside closes drawer */}
          <div className="flex-1" onClick={() => setDrawerOpen(false)}></div>
        </div>
      )}
    </>
  );
};

export default ShopByCategory;
