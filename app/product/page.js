"use client"

import { Search } from "lucide-react";
import React, { useState, Suspense } from 'react'
import Image from "next/image";
import '../globals.css'
import products from '@/data/Products'
import { ShoppingCart } from "lucide-react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { useDispatch } from "react-redux";
import { addToCart } from "@/Redux/CartSlice";
import toast from "react-hot-toast";



const ProductContent = () => {
const [search , setSearch] = useState("");
const [searchText , setSearchText] = useState("");
const searchParams = useSearchParams();

const dispatch = useDispatch();


const category = searchParams.get("category");

const filterProducts = products.filter((pro) => {
  const matchSearch = pro.title
    ?.toLowerCase()
    .includes(search.toLowerCase());

  const matchCategory =
    !category ||
    pro.cat?.toLowerCase() === category.toLowerCase();

  return matchSearch && matchCategory;
});


    return (
        <div>
            {/* <section className="w-full h-[300px] flex justify-center items-center w-screen  bg-cover bg-bottom bg-no-repeat"
        style={{backgroundImage:"url('/assets/slide.png')"}}>
                <div className="text-center">
                    <h1 className="text-4xl font-bold text-[#5a8f7b] mb-3">
                        Shop
                    </h1>

                    <p className="text-[16px] text-gray-600">
                        Home / Shop
                    </p>
                </div>
            </section> */}

            <section className="container mx-auto mt-[2rem]">
               <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-3 px-3">
    <div>
        <h1 className="text-2xl sm:text-3xl md:text-[30px]">All products</h1>
    </div>
    <div className="rounded-3xl border-2 py-1 border-[#e8e7e7] flex items-center w-full sm:w-auto">
        <input
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            type='text'
            placeholder="Search Book"
            name="book"
            className="flex-1 min-w-0 p-2 focus:outline-none focus:ring-0 focus:border-none"
        />
        <button
            onClick={() => setSearch(searchText)}
            className="shrink-0 py-[2px] px-[10px]">
            <Search className="text-[22px] text-[#2f4858] cursor-pointer" />
        </button>
    </div>
</div>
                <section className="mt-4 mb-6 flex justify-center flex-col">

                     {filterProducts.length > 0 ? (

            <div className=" px-4 grid grid-cols-1  sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-5 mt-8">

              {filterProducts.map((pro) => (

                <div
                  key={pro.id}
                  className="category-card shadow-2xl"
                >

                  <div className=" flex justify-center text-center overflow-hidden bg-white">

                    <Image
                      src={pro.img}
                      alt="book image"
                      width={270}
                      height={270}
                      className="transition-transform duration-300 hover:scale-110"
                    />

                  </div>

                  <div className="mx-5 py-4 cursor-pointer">

                    <div className="flex justify-between items-center">

                      <h1 className="text-2xl sm:text-2xl md:text-[20px] lg:text-[25px] xl:text-[25px]">
                        {pro.title}
                      </h1>

                      <button
                      onClick={() => {
                        dispatch(addToCart(pro)),
                        toast.success("item add to cart successfully")
                      }}
                      className="bg-[#5a8f7b] text-white py-[15px] px-[15px] rounded-3xl">
                        <ShoppingCart
                          size={18}
                          className="transition-transform duration-110 active:scale-50 cursor-pointer"
                        />
                      </button>

                    </div>

                    <div className="flex justify-between items-center mt-3">

                      <span className="text-[18px] sm:text-2xl md:text-[20px] lg:text-[20px] xl:text-[20px]">
                        Rs : {pro.price}
                      </span>
                    
                      <Link href={`/product/${pro.id}`} className="text-[14px] text-gray-500">
                        View Details
                      </Link>

                    </div>

                  </div>

                </div>

              ))}

            </div>

          ) : (

            <div className="text-center mt-10">
              <h2 className="text-2xl text-gray-500">
                No products found
              </h2>
            </div>

          )}
                  
                
                </section>

            </section>



        </div>
    );
};

const Page = () => {
  return (
    <Suspense fallback={<div className="text-center py-10">Loading...</div>}>
      <ProductContent />
    </Suspense>
  );
};

export default Page;