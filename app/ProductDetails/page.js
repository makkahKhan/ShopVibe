"use client"

import Image from "next/image";
import categories from '@/data/Categories'
import React, { useState } from 'react'
import { ChevronLeft, ChevronRight } from "lucide-react";
import Link from 'next/link'
import '@/components/Category.css'

const Page = () => {

  const [startIndex, setStartIndex] = useState(0);

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

  console.log("YE FILE CHAL RAHI HAI");
  return (
    <>
   <section className='flex justify-center px-4'>
  <div className='flex flex-col md:flex-row items-center gap-6 md:gap-10 mt-6 sm:mt-10 mb-7'>

    <div className="overflow-hidden">
      <Image
        src={"/assets/novels/crime/1.png"}
        alt='best selling book'
        width={400}
        height={400}
        className="w-[250px] sm:w-[320px] md:w-[400px] h-auto transition-transform duration-300 hover:scale-110"
      />
    </div>

    <div className='w-full md:w-auto mt-2 md:mt-5 text-center md:text-left'>
      <h1 className="text-3xl sm:text-4xl md:text-[50px] leading-tight md:leading-[80px]">
        YE DIL MERA
      </h1>

      <span className="block mt-1 text-base sm:text-[18px] leading-normal md:leading-[20px]">
        By : Farhat Ishtiaq
      </span>

      <h4 className="text-lg sm:text-[20px] mt-6 md:mt-8">
        Description
      </h4>

      <p className="mt-2 mb-5 w-full max-w-[500px] mx-auto md:mx-0">
        A beautiful story of love, emotions, and relationships.
        A simple yet heart-touching journey full of feelings.
      </p>

      <h3 className="text-xl sm:text-[20px] font-bold">Rs : 1000</h3>

      <div className="flex flex-col sm:flex-row gap-3 sm:gap-6 mt-5 items-center md:items-start justify-center md:justify-start">
        <button
          className="w-full sm:w-auto bg-[#5a8f7b] text-white text-base sm:text-[18px] py-[8px] px-[20px] active:bg-[#9cd2bd] rounded-2xl">
          Add to cart
        </button>

        <Link href="/" className="w-full sm:w-auto text-center border-2 border-[#5a8f7b] text-[#2f4858] text-base sm:text-[18px] py-[8px] px-[25px] rounded-2xl">
          Continue shopping
        </Link>

          <Link href="/" className="w-full sm:w-auto text-center border-2 border-[#5a8f7b] text-[#2f4858] text-base sm:text-[18px] py-[8px] px-[25px] rounded-2xl">
          Continue shopping
        </Link>
      </div>
    </div>

  </div>
</section>
     
    </>
  )
}

export default Page