

"use client"

import Link from 'next/link'
import { useSelector } from "react-redux";
import { ShoppingCart, Menu } from "lucide-react";
import { useState } from 'react';

const Navbar = () => {

  const[openMenu , setOpenMenu] = useState(false);
    
  const MenuHandler = () => {
    setOpenMenu(!openMenu)
  }

  const items = useSelector((state) => state.cart.items)

  return (
   <nav className="sticky top-2 z-50 rounded-2xl mx-2 bg-[#5a8f7b] py-4 shadow-lg px-4">

     <div className='flex justify-between lg:justify-around items-center'>

     {/* Left: menu (sirf mobile) */}
<div className='sm:hidden w-10'>
  <button
  onClick={MenuHandler}
  className='text-white'>
    <Menu size={24} />
  </button>

  { openMenu && (

  <div className='absolute left-0 right-17 top-full mt-2 z-50 flex flex-col gap-2 border-1 border-gray-300 p-4 bg-white rounded-xl shadow-lg'>
    <Link href="/" className='text-gray-500' onClick={() => setOpenMenu(false)}>Home</Link>
    <Link href="/product" className='text-gray-500'  onClick={() => setOpenMenu(false)}>Shop</Link>
    <Link href="/about" className='text-gray-500'  onClick={() => setOpenMenu(false)}>About</Link>
    <Link href="/blog" className='text-gray-500'  onClick={() => setOpenMenu(false)}>Blog</Link>
  </div>
  )}
</div>
      {/* Center: logo */}
      <div>
        <h1 className='text-3xl  font-bold text-white'
        style={{color : 'white'}}>ShopVibe</h1>
      </div>

      {/* Desktop links */}
      <div className='hidden sm:flex gap-8'>
        <Link href="/" className='text-white'>Home</Link>
        <Link href="/product" className='text-white'>Shop</Link>
        <Link href="/about" className='text-white'>About</Link>
        <Link href="/blog" className='text-white'>Blog</Link>
        <Link href="/cart" className='text-white relative'>
          <ShoppingCart size={20} className='mt-1'/>
          <span
            style={{
              position: "absolute",
              top: 0,
              right: -10,
              borderRadius: "20px",
              padding: "0px 4px",
              fontSize: '10px',
              background: 'red'
            }}
          >
            {items.reduce((total, item) => total + item.quantity, 0)}
          </span>
        </Link>
      </div>

      {/* Right: cart (sirf mobile) */}
      <div className='sm:hidden w-10 flex justify-end'>
        <Link href="/cart" className='text-white relative'>
          <ShoppingCart size={22} />
          <span
            style={{
              position: "absolute",
              top: -6,
              right: -10,
              borderRadius: "20px",
              padding: "0px 4px",
              fontSize: '10px',
              background: 'red'
            }}
          >
            {items.reduce((total, item) => total + item.quantity, 0)}
          </span>
        </Link>
      </div>

     </div>
   </nav>
  )
}

export default Navbar