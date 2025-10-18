"use client";
import React from "react";
import { FiChevronRight } from "react-icons/fi";

const LoginPage: React.FC = () => {
  return (
    <>
      {/* Breadcrumb */}
      <nav
        className="w-full bg-[#f7f7f7] py-6 px-4 sm:py-8"
        aria-label="Breadcrumb"
      >
        <ol className="flex flex-wrap justify-center items-center text-[14px] text-[#666666]">
          <li className="flex items-center cursor-pointer">
            Home
            <FiChevronRight className="mx-2 text-[#666666] text-sm" />
          </li>
          <li className="flex items-center cursor-pointer">Log In</li>
        </ol>
      </nav>

      {/* Form Section */}
      <div className="min-h-[400px] flex flex-col items-center justify-center px-4 py-8 ">
        <div className="bg-white w-full max-w-[630px] p-6 sm:p-10 rounded-lg ">
          <form className="space-y-6">
            {/* Email */}
            <div>
              <input
                type="email"
                placeholder="Email *"
                className="w-full font-['Albert_Sans',sans-serif] border-2 border-[#f7f7f7] rounded-[3px] px-[18px] py-[12px] text-[14px] leading-[24px] font-normal text-[#000000] bg-[var(--white)] focus:outline-none focus:ring-2 focus:ring-black transition-all"
              />
            </div>

            {/* Password */}
            <div>
              <input
                type="password"
                placeholder="Password *"
                className="w-full font-['Albert_Sans',sans-serif] border-2 border-[#f7f7f7] rounded-[3px] px-[18px] py-[12px] text-[14px] leading-[24px] font-normal text-[#000000] bg-[var(--white)] focus:outline-none focus:ring-2 focus:ring-black transition-all"
              />
            </div>

            {/* Forgot Password */}
            <div className="">
              <a
                href="#"
                className="text-[#000000] text-[14px] underline underline-offset-2 hover:text-[#f93355] transition-colors"
              >
                Forgot your password?
              </a>
            </div>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mt-4">
              <button
                type="submit"
                className="flex-1 bg-black text-white px-4 py-3 cursor-pointer rounded-md hover:bg-[#f93355] transition-all duration-300 ease-in-out"
              >
                Log In
              </button>
              <button
                type="button"
                className="flex-1 border border-black text-black px-4 py-3 cursor-pointer rounded-md hover:bg-black hover:text-white transition-all duration-300 ease-in-out"
              >
                Create An Account
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
