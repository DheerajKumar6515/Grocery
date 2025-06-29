"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

function footer() {
  const [search, setSearch] = useState("");
  return (
    <div className="xl:w-[90%] xl:m-auto 2xl:w-[98%]">
      <div className="mt-12 xl:mt-20 px-6 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-4">
        <div>
          <Image
            width={157}
            height={41}
            className="w-48"
            src="/images/logo.svg"
            alt="logo"
          />
          <div className="flex gap-3 py-1">
            <Link
              href="#"
              className="text-lg text-gray-500 w-[30px] text-center rounded-sm hover:bg-gray-200 cursor-pointer"
            >
              <i className="ri-facebook-line"></i>
            </Link>
            <Link
              href="#"
              className="text-lg text-gray-500 w-[30px] text-center rounded-sm hover:bg-gray-200 cursor-pointer"
            >
              <i className="ri-twitter-line"></i>
            </Link>
            <Link
              href="#"
              className="text-lg text-gray-500 w-[30px] text-center rounded-sm hover:bg-gray-200 cursor-pointer"
            >
              <i className="ri-youtube-fill"></i>
            </Link>
            <Link
              href="#"
              className="text-lg text-gray-500 w-[30px] text-center rounded-sm hover:bg-gray-200 cursor-pointer"
            >
              <i className="ri-instagram-line"></i>
            </Link>
            <Link
              href="#"
              className="text-lg text-gray-500 w-[30px] text-center rounded-sm hover:bg-gray-200 cursor-pointer"
            >
              <i className="ri-amazon-line"></i>
            </Link>
          </div>
          <div className="flex flex-col gap-2 xl:gap-[5px]">
            <h3 className="text-xl capitalize font-medium md:text-2xl xl:text-[22px]">
              organic
            </h3>
            <Link
              href="#"
              className="text-base text-gray-500 cursor-pointer tracking-wide md:text-lg xl:text-base"
            >
              About us
            </Link>
            <Link
              href="#"
              className="text-base text-gray-500 cursor-pointer tracking-wide md:text-lg xl:text-base"
            >
              Conditions
            </Link>
            <Link
              href="#"
              className="text-base text-gray-500 cursor-pointer tracking-wide md:text-lg xl:text-base"
            >
              Our Journals
            </Link>
            <Link
              href="#"
              className="text-base text-gray-500 cursor-pointer tracking-wide md:text-lg xl:text-base"
            >
              Careers
            </Link>
            <Link
              href="#"
              className="text-base text-gray-500 cursor-pointer tracking-wide md:text-lg xl:text-base"
            >
              Affiliate Programme
            </Link>
            <Link
              href="#"
              className="text-base text-gray-500 cursor-pointer tracking-wide md:text-lg xl:text-base"
            >
              Ultras Press
            </Link>
          </div>
        </div>

        <div className="flex flex-col gap-2 xl:gap-[5px]">
          <h3 className="text-xl capitalize font-medium md:text-2xl xl:text-[22px]">
            Quick Links
          </h3>
          <Link
            href="#"
            className="text-base text-gray-500 cursor-pointer tracking-wide md:text-lg xl:text-base"
          >
            Offers
          </Link>
          <Link
            href="#"
            className="text-base text-gray-500 cursor-pointer tracking-wide md:text-lg xl:text-base"
          >
            Discount Coupons
          </Link>
          <Link
            href="#"
            className="text-base text-gray-500 cursor-pointer tracking-wide md:text-lg xl:text-base"
          >
            Stores
          </Link>
          <Link
            href="#"
            className="text-base text-gray-500 cursor-pointer tracking-wide md:text-lg xl:text-base"
          >
            Track Order
          </Link>
          <Link
            href="#"
            className="text-base text-gray-500 cursor-pointer tracking-wide md:text-lg xl:text-base"
          >
            Shop
          </Link>
          <Link
            href="#"
            className="text-base text-gray-500 cursor-pointer tracking-wide md:text-lg xl:text-base"
          >
            Info
          </Link>
        </div>

        <div className="flex flex-col gap-2 xl:gap-[5px]">
          <h3 className="text-xl capitalize font-medium md:text-2xl xl:text-[22px]">
            Customer Service
          </h3>
          <Link
            href="#"
            className="text-base text-gray-500 cursor-pointer tracking-wide md:text-lg xl:text-base"
          >
            FAQ
          </Link>
          <Link
            href="#"
            className="text-base text-gray-500 cursor-pointer tracking-wide md:text-lg xl:text-base"
          >
            Privacy Policy
          </Link>
          <Link
            href="#"
            className="text-base text-gray-500 cursor-pointer tracking-wide md:text-lg xl:text-base"
          >
            Returns & Refunds
          </Link>
          <Link
            href="#"
            className="text-base text-gray-500 cursor-pointer tracking-wide md:text-lg xl:text-base"
          >
            Cookie Guidelines
          </Link>
          <Link
            href="#"
            className="text-base text-gray-500 cursor-pointer tracking-wide md:text-lg xl:text-base"
          >
            Delivery Information
          </Link>
        </div>

        <div>
          <h3 className="text-xl capitalize font-medium pb-2 md:text-2xl xl:text-[22px]">
            subscribe us
          </h3>
          <p className="text-base text-gray-500 tracking-wide leading-7 md:text-lg xl:text-base">
            Subscribe to our newsletter to get updates about our grand offers.
          </p>
          <div className="border border-gray-400 h-9 rounded flex items-center mt-3 lg:flex-col lg:h-20 lg:border-0 lg:gap-2 xl:flex-row xl:h-9">
            <input
              type="email"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="h-full w-[15rem] px-3 xl:w-40 bg-gray-200 outline-0"
              placeholder="Email Address"
            />
            <button className="text-center px-4 text-white bg-black h-full font-medium cursor-pointer">
              subscribe
            </button>
          </div>
        </div>
      </div>

      <div className="w-full text-sm text-center mt-2 py-3 md:py-5">
        <p className="text-gray-500">
          &copy; 2025 Organic. All rights reserved.
        </p>
      </div>
    </div>
  );
}

export default footer;
