
import React from "react";
import Link from "next/link";



const Footer = () => {
  return (
    <footer className="bg-[#e8e7e7] text-white mt-[6rem]">

      <div className="container mx-auto px-6 py-10">

        <div className="flex flex-col md:flex-row justify-between items-center gap-8">

          {/* Logo / Name */}
          <div className="text-center md:text-left">
            <h1 className="text-[30px] font-bold">
              ShopVibe
            </h1>

            <p className="text-md text-gray-500 mt-2">
              Discover stories, emotions and beautiful journeys.
            </p>
          </div>

          {/* Links */}
          <div className="flex gap-6 text-md">
            <Link href="/" className="hover:text-[#a8d5c5] transition  text-gray-500">
              Home
            </Link>

                                                
            <Link href="/product" className="hover:text-[#a8d5c5] transition  text-gray-500">
              Novels
            </Link>

            <Link href="/about" className="hover:text-[#a8d5c5] transition  text-gray-500">
              About
            </Link>

            <Link href="/blog" className="hover:text-[#a8d5c5] transition  text-gray-500">
             Blog
            </Link>
          </div>

         

        </div>

        {/* Bottom */}
        <div className="border-t border-gray-400 mt-8 pt-5 text-center">
          <p className="text-md  text-gray-500">
            © 2026 ShopVibe. All rights reserved.
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;     