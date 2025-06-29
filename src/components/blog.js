import Link from "next/link";
import React from "react";
import "remixicon/fonts/remixicon.css";
import blogdata from "@/data/blogdata";
import Image from "next/image";

function blog() {
  return (
    <div>
      <div className="w-full flex items-center justify-between py-4 px-[9px] md:px-4 lg:px-5 xl:w-[90%] xl:m-auto 2xl:w-[99%]">
        <h1 className="capitalize font-bold text-[22px] md:text-4xl xl:text-2xl 2xl:text-3xl 2xl:tracking-wide">
          Our Recent Blog
        </h1>
        <Link
          href="#"
          className="capitalize bg-[#6bb252] py-[7px] px-2.5 rounded-sm text-base text-white cursor-pointer md:text-2xl lg:text-3xl xl:text-lg 2xl:text-base hover:bg-[#f7a422]"
        >
          view all
        </Link>
      </div>

      <div className="flex flex-col md:flex-row items-center justify-center py-[22px] px-[21px] md:gap-12 md:mt-5 md:px-[30px]">
        {blogdata.map((item, id) => (
          <div
            key={id}
            className="shadow-lg rounded-sm w-72 overflow-hidden mb-12 xl:w-80 2xl:w-[30rem] border border-gray-200 md:mb-0 lg:mb-0 xl:mb-0 2xl:mb-0"
          >
            <div className="2xl:px-4 ">
              <Image
                width={499}
                height={241}
                className="rounded"
                src={item.image}
                alt="blog img"
              />
            </div>
            <div className="flex justify-start pt-[11px] px-2.5 gap-4 uppercase text-sm text-gray-500 2xl:pl-5">
              <p className="xl:text-[13px]">
                <i className="ri-calendar-line"></i> {item.date}
              </p>
              <p className="xl:text-[13px]">
                <i className="ri-folder-line"></i> {item.belong}
              </p>
            </div>
            <Link
              href="#"
              className="inline-block px-2.5 text-2xl font-bold cursor-pointer md:text-[28px] xl:text-[26px] xl:pr-10 xl:tracking-wide xl:py-2 2xl:pl-5 "
            >
              {item.name}
            </Link>
            <p className="pl-2.5 pr-5 text-gray-500 leading-7 md:text-base md:tracking-wide lg:text-lg xl:text-base xl:pr-[27px] 2xl:pl-5 2xl:leading-8 2xl:pb-8">
              {item.para}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default blog;
