import React from 'react'
import Link from 'next/link'
const page = () => {
  return (
     <div>
         <section className="w-full h-[300px] flex justify-center items-center w-screen  bg-cover bg-bottom bg-no-repeat"
        style={{backgroundImage:"url('/assets/slide.png')"}}>
                <div className="text-center">
                    <h1 className="text-4xl font-bold text-[#5a8f7b] mb-3">
                       About
                    </h1>

                    <p className="text-[16px] text-gray-600">
                        Home / About
                    </p>
                </div>
            </section> 
     
      <section className="min-h-[60vh] flex flex-col items-center justify-center text-center px-4 py-16">
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#2f4858]">
        About
      </h1>
      <div className="section-divider divider-triangle"></div>
      <p className="mt-4 text-xl sm:text-2xl text-[#5a8f7b] font-medium">
        Coming Soon
      </p>
      <p className="mt-2 text-gray-500 max-w-md">
        We are working on this page. Please check back soon.
      </p>
      <Link
        href="/"
        className="inline-block mt-6 bg-[#5a8f7b] text-white px-6 py-3 rounded-xl"
      >
        Back to home
      </Link>
    </section>
    </div>
  )
}

export default page
