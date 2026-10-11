// "use client"

// import React, { useState } from "react";
// import Image from "next/image";
// import categories from "@/data/Categories"
// import './Category.css'
// import '../app/globals.css'
// import Link from 'next/link'
// import { ChevronLeft, ChevronRight } from "lucide-react";
// const Category = () => {

// const [startIndex , setStartIndex] = useState(0);

// const nextSlide = () => {
//   if(startIndex + 3 < categories.length){
//     setStartIndex(startIndex + 1);
//   }
// }

// const prevSlide = () => {
//   if(startIndex > 0){
//     setStartIndex(startIndex -1);
//   }
// }


//   return (
//     <section className="container mx-auto mt-[5rem] ">

//      <div className="text-center mb-4">
//        <h1 className="text-[40px] font-bold text-center  mt-8">
//         Shop By Category 
//       </h1>
       
//        <div className="section-divider divider-triangle"></div>
//      </div>

//        <div className="relative flex items-center justify-center mb-5">
      
  

// <button
//   onClick={prevSlide}
//   disabled={startIndex === 0}
//   className="absolute left-4 z-10 bg-[#5a8f7b] text-white w-10 h-10 rounded-full cursor-pointer disabled:opacity-40 flex items-center justify-center"
// >
//   <ChevronLeft size={24} />
// </button>

//       <div className=" w-[90%] h-[90%]  overflow-hidden ">
//      <div className="flex gap-6 mx-2 transition-transform duration-500 ease-in-out "


//        style={{
//   transform: `translateX(-${startIndex * 280}px)`,
// }}
//       >

//         {categories.map((category) => (
//        <div key={category.id} className="shadow-xl  overflow-hidden cursor-pointer category-card w-[265px] flex-shrink-0 mt-5 mb-5">
//         <div className="overflow-hidden hover:shadow  mx-2 my-2" >
//              <Image 
//             src={category.img}
//             alt="Love novels"
//             width={300}
//             height={200}
//             className="transition-transform duration-300 hover:scale-110"
//           />
//         </div>

//           <div className="p-3 mb-2 flex justify-between items-center">
//             <span className="text-[20px] text-gray-600 hover:text-[#5a8f7b]">{category.title}</span>
//          <div className=''>
//      <Link href={`/product?category=${category.title}`} className="text-[15px]  text-white px-[18px] py-[8px] rounded-2xl bg-[#5a8f7b]  active:bg-[#8abca9] transition-colors duration-300 cursor-pointer">View All</Link>

//       </div>

//       </div>
//         </div>
//         ))}
      

//       </div>
// </div>
//          <button
//           onClick={nextSlide}
//           disabled={startIndex + 3 >= categories.length}
//   className="absolute right-0 z-10 bg-[#5a8f7b] text-white w-10 h-10 rounded-full cursor-pointer disabled:opacity-40 flex items-center justify-center"
//         >
//           <ChevronRight />
//         </button>

//       </div>


//     </section>
//   );
// };




// export default Category;



// "use client"

// import React, { useState } from "react";
// import Image from "next/image";
// import categories from "@/data/Categories"
// import './Category.css'
// import '../app/globals.css'
// import Link from 'next/link'
// import { ChevronLeft, ChevronRight } from "lucide-react";
// const Category = () => {

// const [startIndex , setStartIndex] = useState(0);

// const nextSlide = () => {
//   if(startIndex + 1 < categories.length){
//     setStartIndex(startIndex + 1);
//   }
// }

// const prevSlide = () => {
//   if(startIndex > 0){
//     setStartIndex(startIndex -1);
//   }
// }


//   return (
//     <section className="container mx-auto mt-16 sm:mt-[5rem] px-2">

//      <div className="text-center mb-4">
//        <h1 className="text-2xl sm:text-3xl md:text-[40px] font-bold text-center mt-8">
//         Shop By Category 
//       </h1>
       
//        <div className="section-divider divider-triangle"></div>
//      </div>

//        <div className="relative flex items-center justify-center mb-5">

// <button
//   onClick={prevSlide}
//   disabled={startIndex === 0}
//   className="absolute left-0 sm:left-4 z-10 bg-[#5a8f7b] text-white w-8 h-8 sm:w-10 sm:h-10 rounded-full cursor-pointer disabled:opacity-40 flex items-center justify-center"
// >
//   <ChevronLeft size={24} />
// </button>

//       <div className="w-[75%] sm:w-[90%] h-[90%] overflow-hidden">
//      <div className="flex gap-0 sm:gap-6 sm:mx-2 transition-transform duration-500 ease-in-out [--step:100%] sm:[--step:280px]"

//        style={{
//   transform: `translateX(calc(${startIndex} * var(--step) * -1))`,
// }}
//       >

//         {categories.map((category) => (
//        <div key={category.id} className="shadow-xl overflow-hidden cursor-pointer category-card w-full sm:w-[265px] flex-shrink-0 mt-5 mb-5">
//         <div className="overflow-hidden hover:shadow mx-2 my-2" >
//              <Image 
//             src={category.img}
//             alt="Love novels"
//             width={300}
//             height={200}
//             className="w-full h-auto transition-transform duration-300 hover:scale-110"
//           />
//         </div>

//           <div className="p-3 mb-2 flex justify-between items-center">
//             <span className="text-lg sm:text-[20px] text-gray-600 hover:text-[#5a8f7b]">{category.title}</span>
//          <div className=''>
//      <Link href={`/product?category=${category.title}`} className="text-sm sm:text-[15px] text-white px-3 sm:px-[18px] py-[8px] rounded-2xl bg-[#5a8f7b] active:bg-[#8abca9] transition-colors duration-300 cursor-pointer">View All</Link>

//       </div>

//       </div>
//         </div>
//         ))}
      

//       </div>
// </div>
//          <button
//           onClick={nextSlide}
//           disabled={startIndex + 1 >= categories.length}
//   className="absolute right-0 z-10 bg-[#5a8f7b] text-white w-8 h-8 sm:w-10 sm:h-10 rounded-full cursor-pointer disabled:opacity-40 flex items-center justify-center"
//         >
//           <ChevronRight />
//         </button>

//       </div>


//     </section>
//   );
// };

// export default Category;




"use client"

import React, { useState } from "react";
import Image from "next/image";
import categories from "@/data/Categories"
import './Category.css'
import '../app/globals.css'
import Link from 'next/link'
import { ChevronLeft, ChevronRight } from "lucide-react";
const Category = () => {

const [startIndex , setStartIndex] = useState(0);

const nextSlide = () => {
  if(startIndex + 1 < categories.length){
    setStartIndex(startIndex + 1);
  }
}

const prevSlide = () => {
  if(startIndex > 0){
    setStartIndex(startIndex -1);
  }
}

  return (
    <section className="container mx-auto mt-16 sm:mt-[5rem] px-2">

     <div className="text-center mb-4">
       <h1 className="text-2xl sm:text-3xl md:text-[40px] font-bold text-center mt-8">
        Shop By Category 
      </h1>
       <div className="section-divider divider-triangle"></div>
     </div>

       <div className="relative flex items-center justify-center mb-5">

<button
  onClick={prevSlide}
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
          onClick={nextSlide}
          disabled={startIndex + 1 >= categories.length}
  className="absolute right-0 z-10 bg-[#5a8f7b] text-white w-8 h-8 sm:w-10 sm:h-10 rounded-full cursor-pointer disabled:opacity-40 flex items-center justify-center"
        >
          <ChevronRight />
        </button>

      </div>

    </section>
  );
};

export default Category;