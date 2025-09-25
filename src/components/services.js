import React from "react";

function Services() {
  return (
    <div className="mt-15 px-6 xl:w-[90%] xl:m-auto xl:pt-20 2xl:w-[99%] bg-gray-100">
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
        <div className="border-2 border-gray-400 rounded px-4 py-4">
          <p className="text-3xl text-gray-400 lg:text-5xl xl:text-xl">
            <i className="ri-truck-line"></i>
          </p>
          <h1 className="text-lg py-1.5 text-black/85 font-bold tracking-wide md:text-xl lg:text-2xl xl:text-xl">
            Free delivery
          </h1>
          <p className="tracking-wider leading-6 text-slate-600 font-sans lg:text-[19px] lg:tracking-wider lg:leading-8 xl:text-sm xl:leading-7 2xl:text-base">
            Lorem ipsum dolor sit amet,consectetur adipi elit.
          </p>
        </div>

        <div className="border-2 border-gray-400 rounded px-4 py-4">
          <p className="text-3xl text-gray-400 lg:text-5xl xl:text-[26px]">
            <i className="ri-secure-payment-line"></i>
          </p>
          <h1 className="text-lg py-1.5 text-black/85 font-bold tracking-wide md:text-xl lg:text-2xl xl:text-xl">
            100% secure payment
          </h1>
          <p className="tracking-wider leading-6 text-slate-600 font-sans lg:text-[19px] lg:tracking-wider lg:leading-8 xl:text-sm xl:leading-7 2xl:text-base">
            Lorem ipsum dolor sit amet,consectetur adipi elit.
          </p>
        </div>

        <div className="border-2 border-gray-400 rounded px-4 py-4">
          <p className="text-3xl text-gray-400 lg:text-5xl xl:text-[26px]">
            <i className="ri-verified-badge-line"></i>
          </p>
          <h1 className="text-lg py-1.5 text-black/85 font-bold tracking-wide md:text-xl lg:text-2xl xl:text-xl">
            Quality guarantee
          </h1>
          <p className="tracking-wider leading-6 text-slate-600 font-sans lg:text-[19px] lg:tracking-wider lg:leading-8 xl:text-sm xl:leading-7 2xl:text-base">
            Lorem ipsum dolor sit amet,consectetur adipi elit.
          </p>
        </div>

        <div className="border-2 border-gray-400 rounded px-4 py-4">
          <p className="text-3xl text-gray-400 lg:text-5xl xl:text-[26px]">
            <i className="ri-wallet-3-line"></i>
          </p>
          <h1 className="text-lg py-1.5 text-black/85 font-bold tracking-wide md:text-xl lg:text-2xl xl:text-xl">
            guaranted savings
          </h1>
          <p className="tracking-wider leading-6 text-slate-600 font-sans lg:text-[19px] lg:tracking-wider lg:leading-8 xl:text-sm xl:leading-7 2xl:text-base">
            Lorem ipsum dolor sit amet,consectetur adipi elit.
          </p>
        </div>

        <div className="border-2 border-gray-400 rounded px-4 py-4">
          <p className="text-3xl text-gray-400 lg:text-5xl xl:text-[26px]">
            <i className="ri-emotion-happy-line"></i>
          </p>
          <h1 className="text-lg py-1.5 text-black/85 font-bold tracking-wide md:text-xl lg:text-2xl xl:text-xl">
            Daily offers
          </h1>
          <p className="tracking-wider leading-6 text-slate-600 font-sans lg:text-[19px] lg:tracking-wider lg:leading-8 xl:text-sm xl:leading-7 2xl:text-base">
            Lorem ipsum dolor sit amet,consectetur adipi elit.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Services;
