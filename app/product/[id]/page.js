
"use client"

import Image from "next/image";
import categories from '@/data/Categories'
import React, { useState } from 'react'
import { ChevronLeft, ChevronRight} from "lucide-react";
import Link from 'next/link'
import '@/components/Category.css'
import products  from "@/data/Products";
import { useParams } from 'next/navigation'
import { useDispatch } from "react-redux";
import { addToCart } from "@/Redux/CartSlice";
import toast from "react-hot-toast";
const page = () => {



    const dispatch = useDispatch();
    const [startIndex , setStartIndex] = useState(0);

  const params = useParams();
  const pro = products.find((pro) => pro.id ===Number(params.id));

   const NextSlide = () => {
  if (startIndex + 1 < categories.length) {
    setStartIndex(startIndex + 1);
  }
}

const PrevSlide = () => {
  if (startIndex > 0) {
    setStartIndex(startIndex - 1);
  }
}



  return (
     <>
   <section className='flex justify-center px-4'>
  <div className='flex flex-col md:flex-row items-center gap-6 md:gap-10 mt-6 sm:mt-10 mb-7'>

    <div className="overflow-hidden">
      <Image
        src={pro.img}
        alt={pro.title}
        width={400}
        height={400}
        className="w-[300px] sm:w-[320px] md:w-[400px] h-auto transition-transform duration-300 hover:scale-110"
      />
    </div>

    <div className='w-full md:w-auto mt-2 md:mt-5 text-center md:text-left'>
      <h1 className="text-3xl sm:text-4xl md:text-[50px] leading-tight md:leading-[80px]">
        {pro.title}
      </h1>

      <span className="block mt-1 text-base sm:text-[18px] leading-normal md:leading-[20px]">
        By : {pro.writer}
      </span>

      <h4 className="text-lg sm:text-[20px] mt-6 md:mt-8">
        Description
      </h4>

      <p className="mt-2 mb-5 w-full max-w-[500px] mx-auto md:mx-0">
        {pro.des}
      </p>

      <h3 className="text-xl sm:text-[20px] font-bold">Rs : {pro.price}</h3>

      <div className="flex flex-col sm:flex-row gap-3 sm:gap-6 mt-5 items-center md:items-start justify-center md:justify-start">
        <button
          onClick={() => {
            dispatch(addToCart(pro));
            toast.success("Item added to cart successfully!");
          }}
          className="w-full sm:w-auto bg-[#5a8f7b] text-white text-base sm:text-[18px] py-[8px] px-[20px] active:bg-[#9cd2bd] rounded-2xl cursor-pointer">
          Add to cart
        </button>

        <Link href="/" className="w-full sm:w-auto text-center border-2 border-[#5a8f7b] text-[#2f4858] text-base sm:text-[18px] py-[8px] px-[25px] rounded-2xl">
          Continue shopping
        </Link>
      </div>
    </div>

  </div>
</section>


  <section className="container mx-auto mt-16 sm:mt-[5rem] px-2">

     <div className="text-center mb-4">
       <h1 className="text-2xl sm:text-3xl md:text-[40px] font-bold text-center mt-8">
        Shop By Category 
      </h1>
       <div className="section-divider divider-triangle"></div>
     </div>

       <div className="relative flex items-center justify-center mb-5">

<button
  onClick={PrevSlide}
  disabled={startIndex === 0}
  className="absolute left-0 z-10 bg-[#5a8f7b] text-white w-8 h-8 sm:w-10 sm:h-10 rounded-full cursor-pointer disabled:opacity-40 flex items-center justify-center"
>
  <ChevronLeft size={24} />
</button>

      <div className="w-[80%] sm:w-[90%] overflow-hidden">
     <div
       className="flex transition-transform duration-500 ease-in-out [--cols:1] sm:[--cols:2] md:[--cols:3] lg:[--cols:4]"
       style={{
         transform: `translateX(calc(${startIndex} * -100% / var(--cols)))`,
       }}
      >

        {categories.map((category) => (
       <div
         key={category.id}
         className="shrink-0 basis-full sm:basis-1/2 md:basis-1/3 lg:basis-1/4 px-2"
       >
        <div className="shadow-xl overflow-hidden cursor-pointer category-card mt-5 mb-5">
          <div className="overflow-hidden hover:shadow mx-2 my-2">
             <Image 
            src={category.img}
            alt={category.title}
            width={300}
            height={200}
            className="w-full h-auto transition-transform duration-300 hover:scale-110"
          />
          </div>

          <div className="p-3 mb-2 flex justify-between items-center gap-2">
            <span className="text-lg sm:text-[20px] text-gray-600 hover:text-[#5a8f7b]">{category.title}</span>
            <Link href={`/product?category=${category.title}`} className="shrink-0 text-sm sm:text-[15px] text-white px-3 sm:px-[18px] py-[8px] rounded-2xl bg-[#5a8f7b] active:bg-[#8abca9] transition-colors duration-300 cursor-pointer">View All</Link>
          </div>
        </div>
       </div>
        ))}

      </div>
</div>
         <button
          onClick={NextSlide}
          disabled={startIndex + 1 >= categories.length}
  className="absolute right-0 z-10 bg-[#5a8f7b] text-white w-8 h-8 sm:w-10 sm:h-10 rounded-full cursor-pointer disabled:opacity-40 flex items-center justify-center"
        >
          <ChevronRight />
        </button>

      </div>

    </section>


    </>
  )
}

export default page
