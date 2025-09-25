import Image from "next/image";
import React from "react";

function Appbanner() {
  return (
    <div className="bg-[#ffc107] mt-3 mx-6 rounded-3xl px-5 h-auto md:flex md:items-center md:justify-center md:px-28 md:h-[25rem] md:mt-10 lg:mt-12 xl:px-40 xl:h-[25rem] xl:w-[85%] xl:mt-13 xl:m-auto 2xl:px-56 2xl:h-[28rem] 2xl:w-[97%] overflow-hidden">
      <div className="pt-16">
        <h1 className="text-2xl font-semibold pr-12 md:font-bold 2xl:text-4xl 2xl:font-semibold">
          Download Organic App
        </h1>
        <p className="text-gray-600 py-3">
          Online Orders made easy, fast and reliable
        </p>

        <div className="2xl:flex 2xl:gap-3">
          <div className="flex items-center justify-start bg-black text-white rounded-lg px-2 py-1 w-[12rem] gap-2 mb-2">
            <div className="text-4xl">
              <i className="ri-apple-fill"></i>
            </div>
            <div>
              <p className="text-sm text-gray-300">Download on the</p>
              <h3 className="text-2xl -mt-1.5">App store</h3>
            </div>
          </div>

          <div className="flex items-center justify-start bg-black text-white rounded-lg px-2 py-1 w-[12rem] gap-2 2xl:h-[54px]">
            <div className="text-4xl">
              <i className="ri-google-play-fill"></i>
            </div>
            <div>
              <p className="text-sm text-gray-300 ">Get it on</p>
              <h3 className="text-2xl -mt-1.5 ">Google play</h3>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-[49px] md:w-80 lg:w-[23rem] xl:w-[24rem] xl:mt-24 2xl:w-[32rem] 2xl:mt-12">
        <Image
          width={602}
          height={477}
          src="/images/banner-onlineapp.png"
          alt="app logo"
        />
      </div>
    </div>
  );
}

export default Appbanner;
