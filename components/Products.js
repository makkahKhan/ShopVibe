"use client"

import React, { useState } from 'react'
import Link from 'next/link'
import Image from "next/image";
import '../app/globals.css'
import products from '@/data/Products'
import { ShoppingCart } from "lucide-react";
import { useDispatch } from 'react-redux';
import { addToCart } from '@/Redux/CartSlice';
import toast from 'react-hot-toast';

const Products = () => {
    const [category , setCategory] = useState('All')
    const dispatch = useDispatch();
    
     

  return (
//    <section className="mt-6 mb-6 flex justify-center flex-col">
//      <div className='text-center'>
//       <h1 className='text-[35px] text-center'>Feature Products</h1>
//     <div className="section-divider divider-triangle"></div>

//     </div>
//     <div className="flex gap-4 mt-7 justify-center text-center">
//         <button onClick={() => setCategory("All")} className="p-1 px-5 bg-[#e3ece9] rounded text-[#2f4858];  tex-[18px] shadow shadow-[#2f485869] active:bg-[#f0f7f5]"> All </button>
//                <button onClick={() => setCategory("Love")} className="p-1 px-5 bg-[#e3ece9] rounded text-[#2f4858]  tex-[18px] shadow shadow-[#2f485869] active:bg-[#f0f7f5]">Love </button>
//         <button onClick={ () => setCategory("Islamic")} className="p-1 px-5 bg-[#e3ece9] rounded text-[#2f4858]  tex-[18px] shadow shadow-[#2f485869] active:bg-[#f0f7f5]"> Islamic </button>
//         <button onClick={ () => setCategory("Crime")} className="p-1 px-5 bg-[#e3ece9] rounded text-[#2f4858]   tex-[18px] shadow shadow-[#2f485869] active:bg-[#f0f7f5]"> Crime </button>

//     </div>

// <div className="container px-4 mx-auto grid xl:grid-cols-4 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-5 mt-8">      
    

// {products.filter((pro) => category === 'All' || pro.cat === category)
// .slice(0, category === 'All' ? 8 : products.length)
// .map((pro)=>(
//      <div key={pro.id}  className='category-card shadow-2xl'>
//      <div className="flex justify-center text-center overflow-hidden ">

//          <Image
//         src={pro.img}
//         alt='book image'
//         width={270}
//         height = {270}
//         className='translate-all duration-300 hover:scale-110'
//         />
//        </div>
//        <div className='mx-5 py-4 cursor-pointer'>
//         <div className='flex justify-between items-center'>
//          <h1 className='text-[25px]'>{pro.title}</h1>
//           <button
//           onClick={() => {
//             dispatch(addToCart(pro)),
//             toast.success("item add to cart successfully")
//           }}
//           className='bg-[#5a8f7b] text-white py-[15] px-[15] rounded-3xl text-[14px] '>
//            <ShoppingCart size={18} className='transition-transform duration-110 active:scale-50 cursor-pointer'/>
//     </button>
         
//          </div>
//         <div className='flex justify-between items-center mt-3'>
//      <span className='text-[20px] text-bold'>Rs : {pro.price}</span>
//        <Link href={`/product/${pro.id}`} className=' text-[14px text-gray-500'>
//     View Details
//     </Link>
   
//         </div>
//        </div>
//       </div>
// ))}

       

      

     





//     </div>
//    </section>

<section className="mt-6 mb-6 flex justify-center flex-col px-4">
  <div className="text-center">
    <h1 className="text-2xl sm:text-3xl md:text-[35px] font-bold  lg:text-[40px]">Feature Products</h1>
    <div className="section-divider divider-triangle"></div>
  </div>

  <div className="flex flex-wrap gap-3 sm:gap-4 mt-7 justify-center text-center">
    {["All", "Love", "Islamic", "Crime"].map((cat) => (
      <button
        key={cat}
        onClick={() => setCategory(cat)}
        className="p-1 px-4 sm:px-5 bg-[#e3ece9] rounded text-[#2f4858] text-base text-sm sm:text-[18px] shadow shadow-[#2f485869] active:bg-[#f0f7f5]"
      >
        {cat}
      </button>
    ))}
  </div>

  <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-5 mt-8">
    {products
      .filter((pro) => category === "All" || pro.cat === category)
      .slice(0, category === "All" ? 8 : products.length)
      .map((pro) => (
        <div key={pro.id} className="category-card shadow-2xl rounded-lg overflow-hidden">
          <div className="relative w-full aspect-square overflow-hidden">
            <Image
              src={pro.img}
              alt={pro.title || "book image"}
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1280px) 33vw, 25vw"
              className="object-cover transition-all duration-300 hover:scale-110"
            />
          </div>

          <div className="px-4 py-4">
            <div className="flex justify-between items-center gap-2">
              <h1 className="text-lg sm:text-xl font-medium line-clamp-1">
                {pro.title}
              </h1>
              <button
                onClick={() => {
                  dispatch(addToCart(pro));
                  toast.success("item add to cart successfully");
                }}
                className="shrink-0 bg-[#5a8f7b] text-white p-2.5 sm:p-3 rounded-full"
              >
                <ShoppingCart
                  size={18}
                  className="transition-transform duration-100 active:scale-50"
                />
              </button>
            </div>

            <div className="flex justify-between items-center mt-3 gap-2">
              <span className="text-base sm:text-lg font-bold">Rs : {pro.price}</span>
              <Link href={`/product/${pro.id}`} className="text-sm text-gray-500 hover:underline">
                View Details
              </Link>
            </div>
          </div>
        </div>
      ))}
  </div>
</section>



  )
}

export default Products
