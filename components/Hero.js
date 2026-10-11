

"use client"

import React, { useEffect, useState } from 'react'

const Hero = () => {
 const[current , SetCurrent] = useState(0);
  const slides = [
   {
    title: "In store & Online",
    mainHeading: "Every Story Is a Journey",
    image: "/assets/slide-1.png",
  },
  {
    title: "NEW Collection 2026",
    mainHeading: "Love,Mystery & Tradition",
    image: "/assets/slide-3.png",
  },
  ];



 useEffect(() => {
    const Interval = setInterval(() => {
        SetCurrent((prev) => (prev === 0 ? 1 : 0))
    },3000)

    return () => clearInterval(Interval);
 },[]);

  return (
  
//   <section className='w-full min-h-[70vh] md:min-h-screen bg-cover bg-right md:bg-center bg-no-repeat flex items-center transition-all duration-700'
//  style={{backgroundImage: `url(${slides[current].image})`}}>

 


//       <div className="p-6 sm:p-10 md:p-20 transition-all duration-700">
//         <div className=''>
//          <span className="text-sm sm:text-base md:text-[18px] tracking-[1px] md:tracking-[2px] font-bold text-[#5a8f7b] tracking-[2px] ">{slides[current].title}</span>
//         <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[56px] tracking-[1px] md:tracking-[2px]  font-bold text-[#2f4858]  mt-2 mb-2">
//          {slides[current].mainHeading}
//         </h1>
//         <span className="text-base sm:text-lg md:text-[20px] text-[#6c757d] block mt-5 font-[var(--font-poppins)] tracking-[1px] md:tracking-[2px]">30% SALE OFF</span>

//       </div>
//       <div className='mt-6'>
//      <button className="text-[16px] rounded-2xl text-white px-6 py-2.5 md:px-[30px] md:py-[12px] bg-[#5a8f7b] active:bg-[#8abca9] cursour-pointer">Shop now</button>

//       </div>
//       </div>
//   </section>


<section className='relative w-full min-h-[70vh] md:min-h-screen bg-cover bg-right md:bg-center bg-no-repeat flex items-center transition-all duration-700'
 style={{backgroundImage: `url(${slides[current].image})`}}>

  {/* light white overlay */}
  <div className="absolute inset-0 bg-white/50 sm:bg-transparent"></div>

  <div className="relative z-10 p-6 sm:p-10 md:p-20 transition-all duration-700">
    <div className=''>
      <span className="text-sm sm:text-base md:text-[18px] tracking-[1px] md:tracking-[2px] font-bold text-[#5a8f7b]">{slides[current].title}</span>
      <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[56px] tracking-[1px] md:tracking-[2px] font-bold text-[#2f4858] mt-2 mb-2">
        {slides[current].mainHeading}
      </h1>
      <span className="text-base sm:text-lg md:text-[20px] text-[#6c757d] block mt-5 font-[var(--font-poppins)] tracking-[1px] md:tracking-[2px]">30% SALE OFF</span>
    </div>
    <div className='mt-6'>
      <button className="text-[16px] rounded-2xl text-white px-6 py-2.5 md:px-[30px] md:py-[12px] bg-[#5a8f7b] active:bg-[#8abca9] cursor-pointer">Shop now</button>
    </div>
  </div>
</section>


  )
}

export default Hero
