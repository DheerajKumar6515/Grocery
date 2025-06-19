import React from 'react'
import 'remixicon/fonts/remixicon.css'
import arrivedproduct from '@/data/arrivedproduct'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import Link from 'next/link'


function justarrived() {
  return (
    <div className=' mt-5 md:mt-10 lg:mt-12 xl:mt-18 xl:w-[90%] xl:flex xl:flex-col xl:m-auto 2xl:w-[99%] 2xl:mt-16'>
               <div className='w-full flex items-center justify-between py-4 px-[9px] md:px-4 lg:px-5'>
                   <h1 className='capitalize font-bold text-[22px] md:text-4xl xl:text-2xl 2xl:text-3xl 2xl:tracking-wide'>Just arrived</h1>
                   <Link href="#" className='capitalize bg-[#6bb252] py-[7px] px-2.5 rounded-sm text-base text-white cursor-pointer md:text-2xl lg:text-3xl xl:text-lg 2xl:text-base hover:bg-[#f7a422]'>view all</Link>
               </div>
       
               <div className='px-[6px] md:py-6 w-full flex items-center justify-between gap-0 relative xl:p-0'>
                
       
                <Carousel opts={{ align: "start" }} className="w-full max-w-screen">
         <CarouselContent className="px-2 gap-x-2 md:gap-x-2 lg:gap-x-1 xl:gap-x-3 2xl:gap-x-0 m-auto">
           {arrivedproduct.map((item, id) => (
             <CarouselItem
               key={id}
               className="basis-1/1 md:basis-1/3 lg:basis-1/4 xl:basis-1/4 2xl:basis-1/5 p-0 flex items-center justify-center"
             >
               <div key={id} className='w-[19rem] md:w-64 h-[363px] rounded-sm py-2 px-1 group hover:bg-[#fff] mb-5 ml-5 md:ml-0 md:px-0 hover:shadow-lg'>
   
                <div className='w-full flex items-center justify-center '>
                   <img className='mix-blend-multiply' src={item.image} alt=''/>
                </div>
                <p className='text-center tracking-wide font-sans text-black/75 font-normal md:text-lg xl:text-base xl:font-normal md:font-medium 2xl:text-sm '>{item.name}</p>
                <div className='flex gap-[5px] items-center justify-center'>
                   <p className='text-[#ffc107] text-[22px]'>
                  <i className="ri-star-s-fill"></i>
                  <i className="ri-star-s-fill"></i>
                  <i className="ri-star-s-fill"></i> 
                  <i className="ri-star-s-fill"></i>
                  <i className="ri-star-half-s-fill"></i>
                  </p>
   
                  <p className='text-black/75'>({item.rating})</p>
                </div>
   
                <div className='flex gap-2 items-center justify-center font-sans'>
                   <p className='line-through text-black/65'>${item.actualprice}.00</p>
                   <p className='font-semibold'>${item.price}.00</p>
                   <p className='border text-xs px-1 py-[1px] text-black/65'>10% OFF</p>
                </div>
    
                 <div className='hidden group-hover:block'>
                <div className='flex mt-3 h-[41px] gap-[5px]'>
                   <div className='h-full border border-gray-400 w-12 text-center text-xl pt-2 px-2 rounded-sm cursor-pointer'>
                      <input className='w-full outline-0' type='number' placeholder='1'/>
                   </div>
                   <div className='text-[13px] w-48 rounded-sm flex items-center justify-center bg-[#6bb252] text-white hover:bg-[#f7a422] cursor-pointer'>
                      <p><i className="ri-shopping-cart-2-line"></i> Add to Cart</p>
                   </div>
                   <div className='border border-black text-xl text-center rounded-sm py-[6px] px-1.5 w-10 cursor-pointer hover:bg-black hover:text-white'>
                      <p><i className="ri-heart-line"></i></p>
                   </div>
                </div>
                </div>
                
             </div>
             </CarouselItem>
           ))}
         </CarouselContent>
         <CarouselPrevious className="-left-[6] xl:-left-[30px] 2xl:left-[-0px]" />
         <CarouselNext className="cursor-pointer z-50 right-[0.3rem] xl:right-[-3rem] 2xl:right-0" />
       </Carousel>
   
       
               </div>
             
           </div>
  )
}

export default justarrived
