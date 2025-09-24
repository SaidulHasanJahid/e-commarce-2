"use client";
import React, { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import './index.css'

const TopBar = () => {
  const [currencyOpen, setCurrencyOpen] = useState(false);
  const [languageOpen, setLanguageOpen] = useState(false);

  const [selectedCurrency, setSelectedCurrency] = useState("USD");
  const [selectedLanguage, setSelectedLanguage] = useState("English");

  const currencies = ["USD", "EUR", "GBP", "BDT"];
  const languages = ["English", "Spanish", "French", "Bangla"];

  return (
    <div className="w-full bg-[#1a1a2c] topbar text-white  text-[14px] h-[44px] flex items-center">
      <div className="container w-full mx-auto flex justify-between items-center px-4">
        {/* Left Text */}
        <div className="hidden md:block">
          <span className="text-[14px] font-semibold">
            Order by phone: (84) 943 446 000 | Shop our Spring Bounty Sale
          </span>
        </div>

        {/* Right Side - Dropdowns */}
        <div className="flex items-center gap-6 mx-auto md:mx-0">
          {/* Currency Dropdown */}
          <div className="relative">
            <button
              onClick={() => {
                setCurrencyOpen(!currencyOpen);
                setLanguageOpen(false);
              }}
              className="flex items-center gap-1 text-[14px] cursor-pointer"
            >
              {selectedCurrency}
              <IoIosArrowDown size={14} />
            </button>
            {currencyOpen && (
              <ul className="absolute right-0 mt-2 w-28 bg-white text-black rounded shadow-md z-50">
                {currencies.map((cur) => (
                  <li
                    key={cur}
                    onClick={() => {
                      setSelectedCurrency(cur);
                      setCurrencyOpen(false);
                    }}
                    className={`px-3 py-2 text-[14px] cursor-pointer hover:bg-gray-100 ${
                      selectedCurrency === cur ? "text-[#D52345]" : ""
                    }`}
                  >
                    {cur}
                  </li>
                ))}
              </ul>
            )}
          </div>

          {/* Language Dropdown */}
          <div className="relative">
            <button
              onClick={() => {
                setLanguageOpen(!languageOpen);
                setCurrencyOpen(false);
              }}
              className="flex items-center gap-1 text-[14px] cursor-pointer"
            >
              {selectedLanguage}
              <IoIosArrowDown size={14} />
            </button>
            {languageOpen && (
              <ul className="absolute right-0 mt-2 w-32 bg-white text-black rounded shadow-md z-50">
                {languages.map((lang) => (
                  <li
                    key={lang}
                    onClick={() => {
                      setSelectedLanguage(lang);
                      setLanguageOpen(false);
                    }}
                    className={`px-3 py-2 text-[14px] cursor-pointer hover:bg-gray-100 ${
                      selectedLanguage === lang ? "text-[#D52345]" : ""
                    }`}
                  >
                    {lang}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
