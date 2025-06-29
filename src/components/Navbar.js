"use client";
import React, { useState } from "react";
import "remixicon/fonts/remixicon.css";
import Link from "next/link";
import Image from "next/image";

function Navbar() {
  const [open, setOpen] = useState(false);
  const [beverages, setBeverages] = useState(false);
  const [sidebar, setSidebar] = useState(false);
  const [texts, setText] = useState("");

  const handlesubmit = () => {
    e.preventDefault();
  };

  return (
    <div className="w-full flex flex-col items-center justify-between  relative">
      <div className="w-full px-2 py-5  flex flex-col gap-2.5 md:gap-[30px] lg:gap-1rem items-center xl:flex-row xl:justify-between md:px-5 md:py-5 lg:px-6 lg:py-6 xl:px-7 xl:py-5 2xl:px-8 2xl:py-5">
        <div className="flex gap-4">
          <Link href="#">
            <Image
              src="/images/logo.svg"
              width={157}
              height={51}
              alt="logo"
              className="w-36 md:w-60 lg:w-68 xl:w-36 2xl:w-full"
            />
          </Link>
          <p
            onClick={() => {
              setSidebar((prev) => !prev);
            }}
            className="text-2xl xl:w-5 xl:text-lg md:text-4xl lg:text-5xl text-gray-500 2xl:text-2xl cursor-pointer"
          >
            <i className="ri-menu-line "></i>
          </p>
        </div>

        <div className="xl:flex xl:items-center xl:h-10 gap-8 py-[1px] px-[1px] rounded-[10px] bg-gray-100 h-12 2xl:h-[42px]  ">
          <div className="hidden xl:block cursor-pointer rounded-[10px]  py-[8px] px-2.5 hover:border-2 hover:border-indigo-300 xl:px-1 xl:py-1">
            <select className="outline-0 text-gray-500 cursor-pointer xl:text-sm">
              <option>All Categories</option>
              <option>Groceries</option>
              <option>Drinks</option>
              <option>Chocolates</option>
            </select>
          </div>
          <div className="w-80 md:w-[32rem] lg:w-[40rem] xl:w-80 lg:p-0 lg:h-[69px] md:py-[9px] md:px-[11px] flex gap-2 rounded-[10px] py-0.5 px-2.5 hover:border-2 hover:border-indigo-300 xl:h-9">
            <form
              onSubmit={handlesubmit}
              className="w-[17rem] md:w-[28rem] lg:py-[3px] lg:w-full text-center flex items-center"
            >
              <input
                type="text"
                value={texts}
                onChange={(e) => setText(e.target.value)}
                className="w-full md:text-2xl outline-0 lg:text-3xl xl:text-[15px] hover:border-blue-400 bg-transparent py-[8px] px-2.5 rounded-[10px]"
                placeholder="Search for more than 20,000 products"
              />

              <button
                type="submit"
                className="text-2xl md:text-3xl lg:text-4xl text-gray-600 xl:text-[21px] px-[1px] cursor-pointer"
              >
                <i className="ri-search-line"></i>
              </button>
            </form>
          </div>
        </div>

        <div className="xl:flex items-center justify-center gap-5">
          <Link
            href="#"
            className="text-xl md:text-4xl uppercase tracking-wider cursor-pointer font-bold font-mono 2xl:text-[21px] xl:text-lg"
          >
            home
          </Link>

          <div className="relative inline-block text-left">
            <div>
              <button
                onClick={() => setOpen((prev) => !prev)}
                type="button"
                className="text-xl inline-flex items-center uppercase w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-0 md:text-4xl xl:text-lg 2xl:text-[21px] font-semibold text-gray-900 shadow-xs  ring-inset hover:bg-gray-50"
                id="menu-button"
                aria-expanded="true"
                aria-haspopup="true"
              >
                pages
                <svg
                  className="-mr-1 size-5 text-gray-400"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                  data-slot="icon"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            </div>

            <div
              className={`overflow-hidden transition-all duration-300 ease-in-out absolute ${
                open ? "max-h-112" : "max-h-0"
              } right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black/5 focus:outline-hidden`}
              role="menu"
              aria-orientation="vertical"
              aria-labelledby="menu-button"
              tabIndex="-1"
            >
              <div className="py-1" role="none">
                <Link
                  href="#"
                  className="block px-4 py-2 text-sm md:text-xl text-gray-500 uppercase font-medium hover:bg-gray-100 xl:text-base"
                  role="menuitem"
                  tabIndex="-1"
                  id="menu-item-0"
                >
                  About Us
                </Link>
                <Link
                  href="#"
                  className="block px-4 py-2 text-sm md:text-xl text-gray-500 uppercase font-medium hover:bg-gray-100 xl:text-base"
                  role="menuitem"
                  tabIndex="-1"
                  id="menu-item-1"
                >
                  Shop
                </Link>
                <Link
                  href="#"
                  className="block px-4 py-2 text-sm md:text-xl text-gray-500 uppercase font-medium hover:bg-gray-100 xl:text-base"
                  role="menuitem"
                  tabIndex="-1"
                  id="menu-item-2"
                >
                  Single Product
                </Link>
                <Link
                  href="#"
                  className="block px-4 py-2 text-sm md:text-xl text-gray-500 uppercase font-medium hover:bg-gray-100 xl:text-base"
                  role="menuitem"
                  tabIndex="-1"
                  id="menu-item-2"
                >
                  Cart
                </Link>
                <Link
                  href="#"
                  className="block px-4 py-2 text-sm md:text-xl text-gray-500 uppercase font-medium hover:bg-gray-100 xl:text-base"
                  role="menuitem"
                  tabIndex="-1"
                  id="menu-item-2"
                >
                  Checkout
                </Link>
                <Link
                  href="#"
                  className="block px-4 py-2 text-sm md:text-xl text-gray-500 uppercase font-medium hover:bg-gray-100 xl:text-base"
                  role="menuitem"
                  tabIndex="-1"
                  id="menu-item-2"
                >
                  Blog{" "}
                </Link>
                <Link
                  href="#"
                  className="block px-4 py-2 text-sm md:text-xl text-gray-500 uppercase font-medium hover:bg-gray-100 xl:text-base"
                  role="menuitem"
                  tabIndex="-1"
                  id="menu-item-2"
                >
                  Single Post{" "}
                </Link>
                <Link
                  href="#"
                  className="block px-4 py-2 text-sm md:text-xl text-gray-500 uppercase font-medium hover:bg-gray-100 xl:text-base"
                  role="menuitem"
                  tabIndex="-1"
                  id="menu-item-2"
                >
                  Styles{" "}
                </Link>
                <Link
                  href="#"
                  className="block px-4 py-2 text-sm md:text-xl text-gray-500 uppercase font-medium hover:bg-gray-100 xl:text-base"
                  role="menuitem"
                  tabIndex="-1"
                  id="menu-item-2"
                >
                  Contact{" "}
                </Link>
                <Link
                  href="#"
                  className="block px-4 py-2 text-sm md:text-xl text-gray-500 uppercase font-medium hover:bg-gray-100 xl:text-base"
                  role="menuitem"
                  tabIndex="-1"
                  id="menu-item-2"
                >
                  Thank You{" "}
                </Link>
                <Link
                  href="#"
                  className="block px-4 py-2 text-sm md:text-xl text-gray-500 uppercase font-medium hover:bg-gray-100 xl:text-base"
                  role="menuitem"
                  tabIndex="-1"
                  id="menu-item-2"
                >
                  My Account{" "}
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-5 md:gap-6 lg:gap-6 xl:gap-4">
          <Link href="#">
            <Image
              width={40}
              height={40}
              className="w-6 md:w-10 lg:w-10 xl:w-[23px] 2xl:w-[27px]"
              src="/images/account.png"
              alt=""
            />
          </Link>
          <Link href="#">
            <Image
              width={40}
              height={40}
              className="w-6 md:w-9 lg:w-10 xl:w-[22px]"
              src="/images/bookmark.png"
              alt=""
            />
          </Link>
          <Link href="#">
            <Image
              width={40}
              height={40}
              className="w-6 md:w-10 lg:w-10 xl:w-[23px] 2xl:w-[27px]"
              src="/images/cart.png"
              alt=""
            />
          </Link>
        </div>
      </div>

      {/* for mobile device */}
      <div
        className={`bg-white lg:min-w-88 md:min-w-84 2xl:min-w-86 h-screen absolute ${
          sidebar ? "left-0" : "left-[-26rem]"
        }  z-50 px-2 overflow-y-scroll transition-all duration-600 ease-in-out`}
      >
        <div className="flex items-center justify-between pb-5 px-1 py-2 md:px-2 md:py-3 md:pb-8 lg:py-5 lg:pb-8 2xl:py-2 2xl:pb-5">
          <h4 className="uppercase md:text-2xl lg:text-3xl 2xl:text-lg xl:text-lg text-gray-700">
            menu
          </h4>
          <button
            onClick={() => setSidebar(false)}
            className="cursor-pointer md:text-2xl lg:text-3xl 2xl:text-lg xl:text-lg text-gray-500 hover:text-gray-800"
          >
            <i className="ri-close-large-line"></i>
          </button>
        </div>

        <div className="px-1 md:px-3 lg:px-3 2xl:px-3">
          <ul>
            <li className="border-b border-gray-400 hover:bg-gray-100">
              <Link
                href="#"
                className="flex items-center gap-3 py-2 md:py-4 xl:py-1.5 2xl:py-2"
              >
                <Image
                  width={50}
                  height={50}
                  className="w-5 2xl:w-6 md:w-8 lg:w-9 xl:w-6"
                  src="/images/fruits.png"
                  alt=""
                />
                <span className="font-medium text-sm md:text-2xl 2xl:text-[17px] lg:text-[28px] xl:text-[17px] text-black/80">
                  Fruits and vegetables
                </span>
              </Link>
            </li>
            <li className="border-b border-gray-400 hover:bg-gray-100">
              <Link
                href="#"
                className="flex items-center gap-3 py-2 md:py-4 xl:py-1.5 2xl:py-2"
              >
                <Image
                  width={50}
                  height={50}
                  className="w-5 2xl:w-6 md:w-8 lg:w-9 xl:w-6"
                  src="/images/dairy.png"
                  alt=""
                />
                <span className="font-medium text-sm md:text-2xl 2xl:text-[17px] lg:text-[28px] xl:text-[17px] text-black/86">
                  Dairy and Eggs
                </span>
              </Link>
            </li>
            <li className="border-b border-gray-400 hover:bg-gray-100">
              <Link
                href="#"
                className="flex items-center gap-3 py-2 md:py-4 xl:py-1.5 2xl:py-2"
              >
                <Image
                  width={50}
                  height={50}
                  className="w-5 2xl:w-6 md:w-8 lg:w-9 xl:w-6"
                  src="/images/meat.png"
                  alt=""
                />
                <span className="font-medium text-sm md:text-2xl 2xl:text-[17px] lg:text-[28px] xl:text-[17px] text-black/86">
                  Meat and Poultry
                </span>
              </Link>
            </li>
            <li className="border-b border-gray-400 hover:bg-gray-100">
              <Link
                href="#"
                className="flex items-center gap-3 py-2 md:py-4 xl:py-1.5 2xl:py-2"
              >
                <Image
                  width={50}
                  height={50}
                  className="w-5 2xl:w-6 md:w-8 lg:w-9 xl:w-6"
                  src="/images/seafood.png"
                  alt=""
                />
                <span className="font-medium text-sm md:text-2xl 2xl:text-[17px] lg:text-[28px] xl:text-[17px] text-black/86">
                  Seafood
                </span>
              </Link>
            </li>
            <li className="border-b border-gray-400 hover:bg-gray-100">
              <Link
                href="#"
                className="flex items-center gap-3 py-2 md:py-4 xl:py-1.5 2xl:py-2"
              >
                <Image
                  width={50}
                  height={50}
                  className="w-5 2xl:w-6 md:w-8 lg:w-9 xl:w-6"
                  src="/images/bakery.png"
                  alt=""
                />
                <span className="font-medium text-sm md:text-2xl 2xl:text-[17px] lg:text-[28px] xl:text-[17px] text-black/86">
                  Backery and Bread
                </span>
              </Link>
            </li>
            <li className="border-b border-gray-400 hover:bg-gray-100">
              <Link
                href="#"
                className="flex items-center gap-3 py-2 md:py-4 xl:py-1.5 2xl:py-2"
              >
                <Image
                  width={50}
                  height={50}
                  className="w-5 2xl:w-6 md:w-8 lg:w-9 xl:w-6"
                  src="/images/can.png"
                  alt="image"
                />
                <span className="font-medium text-sm md:text-2xl 2xl:text-[17px] lg:text-[28px] xl:text-[17px] text-black/86">
                  Canned Goods
                </span>
              </Link>
            </li>
            <li className="border-b border-gray-400 hover:bg-gray-100">
              <Link
                href="#"
                className="flex items-center gap-3 py-2 md:py-4 xl:py-1.5 2xl:py-2"
              >
                <Image
                  width={50}
                  height={50}
                  className="w-5 2xl:w-6 md:w-8 lg:w-9 xl:w-6"
                  src="/images/frozen.png"
                  alt=""
                />
                <span className="font-medium text-sm md:text-2xl 2xl:text-[17px] lg:text-[28px] xl:text-[17px] text-black/86">
                  Frozen Foods
                </span>
              </Link>
            </li>
            <li className="border-b border-gray-400 hover:bg-gray-100">
              <Link
                href="#"
                className="flex items-center gap-3 py-2 md:py-4 xl:py-1.5 2xl:py-2"
              >
                <Image
                  width={50}
                  height={50}
                  className="w-5 2xl:w-6 md:w-8 lg:w-9 xl:w-6"
                  src="/images/pasta.png"
                  alt=""
                />
                <span className="font-medium text-sm md:text-2xl 2xl:text-[17px] lg:text-[28px] xl:text-[17px] text-black/86">
                  Pasta and Rice
                </span>
              </Link>
            </li>
            <li className="border-b border-gray-400 hover:bg-gray-100">
              <Link
                href="#"
                className="flex items-center gap-3 py-2 md:py-4 xl:py-1.5 2xl:py-2"
              >
                <Image
                  width={50}
                  height={50}
                  className="w-5 2xl:w-6 md:w-8 lg:w-9 xl:w-6"
                  src="/images/breakfast.png"
                  alt=""
                />
                <span className="font-medium text-sm md:text-2xl 2xl:text-[17px] lg:text-[28px] xl:text-[17px] text-black/86">
                  Breakfast Foods
                </span>
              </Link>
            </li>
            <li className="border-b border-gray-400 hover:bg-gray-100">
              <Link
                href="#"
                className="flex items-center gap-3 py-2 md:py-4 xl:py-1.5 2xl:py-2"
              >
                <Image
                  width={50}
                  height={50}
                  className="w-5 2xl:w-6 md:w-8 lg:w-9 xl:w-6"
                  src="/images/snacks.png"
                  alt=""
                />
                <span className="font-medium text-sm md:text-2xl 2xl:text-[17px] lg:text-[28px] xl:text-[17px] text-black/86">
                  Snacks and Chips
                </span>
              </Link>
            </li>

            <li className="border-b border-gray-400 hover:bg-gray-100">
              <div
                onClick={() => setBeverages((prev) => !prev)}
                className="flex items-center justify-between cursor-pointer"
              >
                <div className="flex items-center gap-3 py-2 md:py-4 xl:py-1.5 2xl:py-2">
                  <Image
                    width={50}
                    height={50}
                    className="w-6 md:w-8 lg:w-9 xl:w-6"
                    src="/images/beverages.png"
                    alt=""
                  />
                  <span className="font-medium text-sm md:text-2xl 2xl:text-[17px] lg:text-[28px] xl:text-[17px] text-black/86">
                    Beverages
                  </span>
                </div>
                <div className="cursor-pointer">
                  <i className="ri-arrow-down-s-fill"></i>
                </div>
              </div>
              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  beverages ? "max-h-40" : "max-h-0"
                }`}
              >
                <ul className="flex flex-col gap-3 pl-8">
                  <Link
                    href="#"
                    className="text-lg text-gray-500 cursor-pointer"
                  >
                    Water
                  </Link>
                  <Link
                    href="#"
                    className="text-lg text-gray-500 cursor-pointer"
                  >
                    Juice
                  </Link>
                  <Link
                    href="#"
                    className="text-lg text-gray-500 cursor-pointer"
                  >
                    Soda
                  </Link>
                  <Link
                    href="#"
                    className="text-lg text-gray-500 cursor-pointer"
                  >
                    Tea
                  </Link>
                </ul>
              </div>
            </li>

            <li className="border-b border-gray-400 hover:bg-gray-100">
              <Link
                href="#"
                className="flex items-center gap-3 py-2 md:py-4 xl:py-1.5 2xl:py-2"
              >
                <Image
                  width={50}
                  height={50}
                  className="w-5 2xl:w-6 md:w-8 lg:w-9 xl:w-6"
                  src="/images/spices.png"
                  alt=""
                />
                <span className="font-medium text-sm md:text-2xl 2xl:text-[17px] lg:text-[28px] xl:text-[17px] text-black/86">
                  Spices and Seasonings
                </span>
              </Link>
            </li>
            <li className="border-b border-gray-400 hover:bg-gray-100">
              <Link
                href="#"
                className="flex items-center gap-3 py-2 md:py-4 xl:py-1.5 2xl:py-2"
              >
                <Image
                  width={50}
                  height={50}
                  className="w-5 2xl:w-6 md:w-8 lg:w-9 xl:w-6"
                  src="/images/baby.png"
                  alt=""
                />
                <span className="font-medium text-sm md:text-2xl 2xl:text-[17px] lg:text-[28px] xl:text-[17px] text-black/86">
                  Baby Food and Formula
                </span>
              </Link>
            </li>
            <li className="border-b border-gray-400 hover:bg-gray-100">
              <Link
                href="#"
                className="flex items-center gap-3 py-2 md:py-4 xl:py-1.5 2xl:py-2"
              >
                <Image
                  width={50}
                  height={50}
                  className="w-5 2xl:w-6 md:w-8 lg:w-9 xl:w-6"
                  src="/images/health.png"
                  alt=""
                />
                <span className="font-medium text-sm md:text-2xl 2xl:text-[17px] lg:text-[28px] xl:text-[17px] text-black/86">
                  Health and Wellness
                </span>
              </Link>
            </li>
            <li className="border-b border-gray-400 hover:bg-gray-100">
              <Link
                href="#"
                className="flex items-center gap-3 py-2 md:py-4 xl:py-1.5 2xl:py-2"
              >
                <Image
                  width={50}
                  height={50}
                  className="w-5 2xl:w-6 md:w-8 lg:w-9 xl:w-6"
                  src="/images/cart.png"
                  alt=""
                />
                <span className="font-medium text-sm md:text-2xl 2xl:text-[17px] lg:text-[28px] xl:text-[17px] text-black/86">
                  Household Supplies
                </span>
              </Link>
            </li>
            <li className="border-b border-gray-400 hover:bg-gray-100">
              <Link
                href="#"
                className="flex items-center gap-3 py-2 md:py-4 xl:py-1.5 2xl:py-2"
              >
                <Image
                  width={50}
                  height={50}
                  className="w-5 2xl:w-6 md:w-8 lg:w-9 xl:w-6"
                  src="/images/care.png"
                  alt=""
                />
                <span className="font-medium text-sm md:text-2xl 2xl:text-[17px] lg:text-[28px] xl:text-[17px] text-black/86">
                  Personal Care
                </span>
              </Link>
            </li>
            <li className="border-b border-gray-400 hover:bg-gray-100">
              <Link
                href="#"
                className="flex items-center gap-3 py-2 md:py-4 xl:py-1.5 2xl:py-2"
              >
                <Image
                  width={50}
                  height={50}
                  className="w-5 2xl:w-6 md:w-8 lg:w-9 xl:w-6"
                  src="/images/pet.png"
                  alt=""
                />
                <span className="font-medium text-sm md:text-2xl 2xl:text-[17px] lg:text-[28px] xl:text-[17px] text-black/86">
                  Pet Food and Supplies
                </span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
