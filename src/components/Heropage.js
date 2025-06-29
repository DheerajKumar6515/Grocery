"use client";
import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Link from "next/link";

function Heropage() {
  return (
    <div>
      <Navbar />

      <div className="w-full h-auto xl:h-auto px-6 bg-[#fadc7c]  img">
        <h3 className="text-[42px] md:text-7xl lg:text-8xl text-start pt-16 font-sans leading-[55px] md:leading-22 lg:leading-28 tracking-tight text-black/85 xl:text-[5rem] xl:pt-20 xl:pl-12 xl:leading-24 xl:pr-[37rem] 2xl:w-[84rem]">
          <span className="font-bold text-[#6bb252]">Organic</span> Foods at
          your <span className="font-bold text-black">Doorsteps</span>
        </h3>
        <p className="text-[21px] md:text-2xl lg:text-3xl lg:pt-3 pt-2 text-[#282837] pr-[7px] font-sans leading-[35px] xl:pl-12 xl:text-[23px]">
          Dignissim massa diam elementum.
        </p>

        <div className="mt-5 md:mt-12 flex items-center gap-6 justify-center md:justify-start xl:pl-12 xl:mt-[35px]">
          <Link
            href="#"
            className="text-center uppercase w-42 md:w-[15rem] md:py-5 font-medium text-white/85 bg-[#6bb252] px-5 py-2 rounded-full hover:bg-[#f7a422] xl:py-4 xl:w-48  md:text-xl lg:text-2xl xl:text-base xl:font-normal"
          >
            start shopping
            {/* <Link href='#' className='md:text-xl lg:text-2xl xl:text-base xl:font-normal'>start shopping</Link> */}
          </Link>
          <Link
            href="#"
            className="text-center uppercase w-30 md:w-40 md:py-5 font-medium text-white/85 bg-black hover:bg-black/80 px-6 py-2 rounded-full lg:w-[11rem] xl:py-4 xl:w-32 md:text-xl lg:text-2xl xl:text-base xl:font-normal"
          >
            join now
            {/* <Link href='#' className='md:text-xl lg:text-2xl xl:text-base xl:font-normal '>join now</Link> */}
          </Link>
        </div>

        <div className="flex items-center justify-center md:justify-between py-7 md:py-15 xl:py-[51px] xl:px-12 xl:justify-start xl:gap-12 2xl:gap-3">
          <div className="px-4 md:flex md:items-center md:gap-2 xl:items-start xl:flex-col 2xl:flex-row 2xl:gap-5">
            <h1 className="text-2xl font-sans font-semibold md:text-4xl lg:text-5xl xl:text-[40px] xl:font-bold">
              14k+
            </h1>
            <p className="uppercase font-sans antialiased text-[#282837] text-sm md:text-lg md:font-medium lg:text-xl xl:font-normal xl:text-[19px] xl:w-24 xl:leading-[18px]">
              product varieties
            </p>
          </div>

          <div className="px-4 md:flex md:items-center md:gap-2 xl:items-start xl:flex-col 2xl:flex-row 2xl:gap-5">
            <h1 className="text-2xl font-sans font-semibold md:text-4xl lg:text-5xl xl:text-[40px] xl:font-bold">
              50k+
            </h1>
            <p className="uppercase antialiased text-[#282837] text-sm font-sans md:text-lg md:font-medium lg:text-xl xl:font-normal xl:text-[19px] xl:w-24 xl:leading-[18px]">
              happy customers
            </p>
          </div>

          <div className="px-4 md:flex md:items-center md:gap-2 xl:items-start xl:flex-col 2xl:flex-row 2xl:gap-5">
            <h1 className="text-2xl font-sans font-semibold md:text-4xl lg:text-5xl xl:text-[40px] xl:font-bold">
              10k+
            </h1>
            <p className="uppercase antialiased text-[#282837] text-sm font-sans md:text-lg md:font-medium lg:text-xl xl:font-normal xl:text-[19px] xl:w-24 xl:leading-[18px]">
              store locations
            </p>
          </div>
        </div>

        <div className="flex flex-col md:flex-row xl:justify-center">
          <div className="bg-[#6bb252] h-48 p-6 md:h-[13rem] xl:flex xl:items-start xl:gap-0 xl:p-5 xl:h-32 xl:w-[23rem] 2xl:w-[26rem]">
            <div className="w-full flex justify-center xl:w-36">
              <img
                className="md:w-16 xl:w-12"
                src="/images/exchange.png"
                alt=""
              />
            </div>
            <div>
              <h3 className="font-semibold text-xl text-white md:text-2xl lg:text-3xl xl:text-[22px]">
                Fresh from farm
              </h3>
              <p className="text-white font-sans leading-9 text-base  md:text-lg lg:text-xl xl:text-[17px] xl:leading-7 xl:pt-1">
                Lorem ipsum dolor sit amet, consectetur adipi elit.
              </p>
            </div>
          </div>

          <div className="bg-[#364127] h-48 p-6 md:h-[13rem] xl:flex xl:items-start xl:gap-0 xl:p-5 xl:h-32 xl:w-[23rem] 2xl:w-[26rem]">
            <div className="w-full flex justify-center xl:w-36">
              <img className="md:w-16 xl:w-12" src="/images/leaf.png" alt="" />
            </div>
            <div>
              <h3 className="font-semibold text-xl text-white md:text-2xl lg:text-3xl xl:text-[22px]">
                100% Organic
              </h3>
              <p className="text-white font-sans leading-9 text-base md:text-lg lg:text-xl xl:text-[17px] xl:leading-7 xl:pt-1">
                Lorem ipsum dolor sit amet, consectetur adipi elit.
              </p>
            </div>
          </div>

          <div className="bg-[#f95f09] h-48 p-6 md:h-[13rem] xl:flex xl:items-start xl:gap-0 xl:p-5 xl:h-32 xl:w-[23rem] 2xl:w-[26rem]">
            <div className="w-full flex justify-center xl:w-36">
              <img className="md:w-16 xl:w-12" src="/images/truck.png" alt="" />
            </div>
            <div>
              <h3 className="font-semibold text-xl text-white md:text-2xl lg:text-3xl xl:text-[22px]">
                Free delivery
              </h3>
              <p className="text-white font-sans leading-9 text-base md:text-lg lg:text-xl xl:text-[17px] xl:leading-7 xl:pt-1">
                Lorem ipsum dolor sit amet, consectetur adipi elit.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Heropage;
