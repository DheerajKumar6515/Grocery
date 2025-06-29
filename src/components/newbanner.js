"use client";
import Image from "next/image";
import React, { useState } from "react";

function newbanner() {
  const [firstName, SetFirstname] = useState("");
  const [email, Setemail] = useState("");

  const handlesubmit = () => {
    e.preventDefault();
  };

  return (
    <div className="mt-5 px-[18px] h-[30rem] relative xl:h-[21rem] xl:w-[90%] xl:m-auto xl:px-0 xl:mt-8 2xl:w-[97%] 2xl:h-[19rem]">
      <Image
        width={998}
        height={500}
        className="w-full h-full bg-cover object-cover"
        src="/images/banner-newsletter.jpg"
        alt=""
      />
      <div className="absolute text-white z-50 top-12 px-10 md:flex">
        <div className="md:w-1/2">
          <h1 className="text-3xl tracking-wide md:text-[40px] py-5 md:px-[73px] md:leading-[50px] xl:font-semibold 2xl:pr-2.5 2xl:pl-[192px] 2xl:leading-[53px] 2xl:tracking-wider">
            Get 25% Discount on your first purchase
          </h1>
          <p className="font-sans pt-0 md:px-[73px] md:pt-0 xl:font-medium 2xl:pr-2.5 2xl:pl-[192px] ">
            Just Sign Up & Register it now to become member.
          </p>
        </div>

        <form
          onSubmit={handlesubmit}
          className="mt-8 flex gap-4 flex-col items-center justify-center md:w-1/2 md:px-[50] md:justify-start 2xl:w-[30rem] 2xl:pr-0"
        >
          <input
            value={firstName}
            onChange={(e) => SetFirstname(e.target.value)}
            className="w-full bg-white/90 text-gray-600 h-9 px-3 outline-0 md:h-11 xl:h-10 2xl:h-9"
            type="text"
            placeholder="Name"
          />

          <input
            value={email}
            onChange={(e) => Setemail(e.target.value)}
            className="w-full bg-white/90 text-gray-600 h-9 px-3 outline-0 md:h-11 xl:h-10 2xl:h-9"
            type="email"
            placeholder="Email Address"
          />

          <button
            className="w-full h-9 text-white bg-[#212529] font-medium md:h-10 cursor-pointer 2xl:h-9"
            type="submit"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default newbanner;
