'use client'
import Link from 'next/link'
import React from 'react'

function banner() {
  return (
    <div className='px-5 h-auto grid gap-6 grid-cols-1 xl:flex xl:w-[90%] xl:m-auto 2xl:w-[96%] 2xl:px-0 2xl:mt-5'>
        <div className='h-[27rem] 2xl:h-[26rem] 2xl:w-[54rem] relative'>
           <img className='w-full h-full bg-cover object-cover' src='/images/banner-ad-1.jpg' alt=''/>
           <div className='absolute z-50 top-[29%] left-[17%] md:left-[10%] xl:top-[40%]'>
              <h1 className='text-[24px] font-semibold text-white md:text-3xl'>Items on SALE</h1>
              <p className='text-[17px] py-3 text-white md:text-xl xl:text-[17px]'>Discount up to 30%</p>
              <Link href="#" className='border-b border-white/90 text-white/70 rounded px-2 font-semibold md:text-xl xl:text-[15px] xl:font-bold cursor-pointer'>Shop now</Link>
           </div>
           
        </div>
        <div className='flex flex-col gap-6 relative xl:h-[203px] xl:gap-[37px] 2xl:w-[36rem]'>
            <div className='h-48 w-full'>
                 <img className='w-full h-48 xl:h-[203px] bg-cover object-cover' src='/images/banner-ad-2.jpg' alt=''/>  
                  <div className='absolute z-50 top-[10%] left-[12%] md:left-[8%] xl:top-[16%]'>
              <h1 className='text-[24px] font-semibold text-white md:text-3xl'>Combo offers</h1>
              <p className='text-[17px] py-3 text-white md:text-xl xl:text-[17px]'>Discount up to 50%</p>
              <Link href="#" className='border-b border-white/90 text-white/70 rounded px-2 font-semibold md:text-xl xl:text-[15px] xl:font-bold cursor-pointer'>Shop now</Link>
           </div>        
            </div>
            <div className='h-48 relative xl:h-[203px] 2xl:h-[12rem] '>
                 <img className='w-full h-48 xl:h-[203px] 2xl:h-[11.7rem] bg-cover object-cover' src='/images/banner-ad-3.jpg' alt=''/>
                  <div className='absolute z-50 top-[18%] left-[12%] md:left-[8%] xl:top-[16%]'>
              <h1 className='text-[24px] font-semibold text-white md:text-3xl'>Discount Coupons</h1>
              <p className='text-[17px] py-3 text-white md:text-xl xl:text-[17px]'>Discount up to 40%</p>
              <Link href="#" className='border-b border-white/90 text-white/70 rounded px-2 font-semibold md:text-xl xl:text-[15px] xl:font-bold cursor-pointer'>Shop now</Link>
           </div>
            </div>
        </div>
    </div>
  )
}

export default banner
