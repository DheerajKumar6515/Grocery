'use client'
import React from 'react'
import CategoryProduct from '@/data/category'
import Link from 'next/link'

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

function category() {
     
  return (
    <div className=' xl:w-[90%] xl:flex xl:flex-col xl:m-auto 2xl:w-[99%] 2xl:mt-5'>
        <div className='w-full flex items-center justify-between py-4 px-[9px] md:px-4 lg:px-5'>
            <h1 className='capitalize font-bold text-[22px] md:text-4xl xl:text-2xl 2xl:text-3xl 2xl:tracking-wide'>category</h1>
            <Link href="#" className='capitalize bg-[#6bb252] py-[7px] px-2.5 rounded-sm text-base text-white cursor-pointer md:text-2xl lg:text-3xl xl:text-lg 2xl:text-base hover:bg-[#f7a422]'>view all</Link>
        </div>

        <div className='px-[6px] md:py-6 w-full flex items-center justify-between gap-0 relative xl:p-0'>
         

         <Carousel opts={{ align: "start" }} className="w-full max-w-screen">
       <CarouselContent className="px-2 gap-x-6 md:gap-x-3 lg:gap-x-1      xl:gap-x-3 2xl:gap-x-0">
         {CategoryProduct.map((item, index) => (
          <CarouselItem
        key={index}
        className="basis-1/2 md:basis-1/3 lg:basis-1/4 xl:basis-1/5 2xl:basis-1/8"
      >
        <Link href="#" className="w-36 pl-0 py-3 md:w-56 md:h-[17rem] flex items-center flex-col justify-center lg:h-72 xl:w-[10rem] xl:h-54  2xl:ml-0">
          <div className="rounded-full overflow-hidden w-full h-full bg-center bg-cover md:w-full md:h-full">
            <img className="w-full" src={item.image} alt="" />
          </div>
          <p className="text-center pt-[3px] tracking-wide text-[14px] text-black/85 font-sans md:text-xl md:font-medium lg:text-2xl lg:mt-2 xl:text-base 2xl:font-normal">
            {item.name}
          </p>
        </Link>
      </CarouselItem>
    ))}
  </CarouselContent>
  <CarouselPrevious className="-left-0 md:-left-2 xl:-left-12 2xl:left-[-5px]" />
  <CarouselNext className="cursor-pointer right-[0.3rem] xl:right-[-3rem] 2xl:right-0" />
</Carousel>


        </div>
      
    </div>
  )
}

export default category
