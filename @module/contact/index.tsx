"use client";

import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

import {
  FaFacebookF,
  FaInstagram,
  FaTiktok,
  FaYoutube,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaClock,
} from "react-icons/fa";

import { FaXTwitter } from "react-icons/fa6";
import { FiChevronRight } from "react-icons/fi";
import Link from "next/link";

// ✅ Validation Schema
const validationSchema = Yup.object({
  name: Yup.string().required("Name is required"),
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  phone: Yup.string()
    .matches(/^[0-9]+$/, "Only numbers allowed")
    .min(8, "Phone must be at least 8 digits")
    .required("Phone number is required"),
  message: Yup.string().required("Message is required"),
});

export default function ContactSection() {
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
    },
    validationSchema,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  const inputClass =
    "w-full p-3 pr-10 border border-gray-200 rounded-md bg-white text-[14px] outline-none " +
    "focus:outline-none focus:ring-0 focus:border-transparent";

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
            Contact
          </li>
        </ol>
      </nav>

      <section className="w-full bg-[#ffffff] py-16">
        <div className="container mx-auto px-4 md:px-12 lg:px-24 grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Left: Form */}
          <div className="bg-[#f7f7f7] p-10 rounded-lg shadow-sm">
            <h2 className="text-[30px] font-semibold text-[#000000] mb-3">
              Ask Us Anything
            </h2>
            <p className="text-[14px] text-[#000000] mb-6 leading-6">
              Have a question or comment? Use the form below to send us a
              message or contact us by mail at:
            </p>

            <form
              onSubmit={formik.handleSubmit}
              className="flex flex-col gap-5"
            >
              {/* Name */}
              <div className="relative">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name *"
                  value={formik.values.name}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  className={inputClass}
                />
                <FaEnvelope className="absolute right-3 top-3.5 text-gray-400" />
                {formik.touched.name && formik.errors.name && (
                  <p className="text-red-500 text-xs mt-1">
                    {formik.errors.name}
                  </p>
                )}
              </div>

              {/* Email */}
              <div className="relative">
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email *"
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  className={inputClass}
                />
                <FaEnvelope className="absolute right-3 top-3.5 text-gray-400" />
                {formik.touched.email && formik.errors.email && (
                  <p className="text-red-500 text-xs mt-1">
                    {formik.errors.email}
                  </p>
                )}
              </div>

              {/* Phone */}
              <div className="relative">
                <input
                  type="tel"
                  name="phone"
                  placeholder="Your Phone Number *"
                  value={formik.values.phone}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  className={inputClass}
                />
                <FaPhoneAlt className="absolute right-3 top-3.5 text-gray-400" />
                {formik.touched.phone && formik.errors.phone && (
                  <p className="text-red-500 text-xs mt-1">
                    {formik.errors.phone}
                  </p>
                )}
              </div>

              {/* Message */}
              <div className="relative">
                <textarea
                  name="message"
                  placeholder="Your Message *"
                  value={formik.values.message}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  className={`${inputClass} h-32 resize-none`}
                ></textarea>
                <FaEnvelope className="absolute right-3 top-3.5 text-gray-400" />
                {formik.touched.message && formik.errors.message && (
                  <p className="text-red-500 text-xs mt-1">
                    {formik.errors.message}
                  </p>
                )}
              </div>

              <button
                type="submit"
                className="mt-2 w-[150px] bg-[#F63C56] text-white py-3 rounded-md font-medium hover:bg-[#e1324a] transition-transform duration-300 hover:scale-105"
              >
                Submit Now
              </button>
            </form>
          </div>

          {/* Right: Contact Info */}
          <div className="bg-[#f7f7f7] p-10 rounded-lg shadow-sm flex flex-col justify-between">
            <div>
              <h2 className="text-[30px] font-semibold text-[#000000] mb-3">
                Get In Touch!
              </h2>
              <p className="text-[14px] text-[#000000] mb-6 leading-6">
                We'd love to hear from you – please use the form to send us your
                message or ideas. <br />
                Or simply pop in for a cup of fresh tea and a cookie:
              </p>

              <ul className="flex flex-col gap-4 text-[14px] text-[#000000]">
                <li className="flex items-center gap-3">
                  <FaMapMarkerAlt className="text-[#000000] text-lg" />
                  House - 548 , Road - 8, West Nakhalpara, Tejgaon, Dhaka 1215
                </li>

                <li className="flex items-center gap-3">
                  <FaEnvelope className="text-[#000000] text-lg" />
                  reclinerbdking@gmail.com
                </li>

                <li className="flex items-center gap-3">
                  <FaPhoneAlt className="text-[#000000] text-lg" />
                  +880 1857336485
                </li>

                <li className="flex items-center gap-3">
                  <FaClock className="text-[#000000] text-lg" />
                  Open Time: 8:00AM – 6:00PM
                </li>
              </ul>
            </div>

            {/* Social Icons */}
            <div className="flex gap-4 mt-8">
              <a
                href="https://www.facebook.com/profile.php?id=61573083394863"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-white shadow rounded-full hover:bg-gray-100 transition"
              >
                <FaFacebookF size={18} className="text-[#000000]" />
              </a>

              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-white shadow rounded-full hover:bg-gray-100 transition"
              >
                <FaInstagram size={18} className="text-[#000000]" />
              </a>

              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-white shadow rounded-full hover:bg-gray-100 transition"
              >
                <FaXTwitter size={18} className="text-[#000000]" />
              </a>

              <a
                href="https://tiktok.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-white shadow rounded-full hover:bg-gray-100 transition"
              >
                <FaTiktok size={18} className="text-[#000000]" />
              </a>

              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-white shadow rounded-full hover:bg-gray-100 transition"
              >
                <FaYoutube size={18} className="text-[#000000]" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
