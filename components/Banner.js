
import Image from "next/image";

const Banner = () => {

  return (
    
    <section className='bg-[#e8e7e7] py-10 mb-5 mt-16 sm:mt-[5rem] flex justify-center px-4'>
    <div className='flex flex-col md:flex-row items-center gap-6 md:gap-10 mt-10 mb-7'>
      <div>
        <Image src={"/assets/best.png"}
        alt='best selling book'
        width={400}
        height={400}
        className="w-[300px] sm:w-[320px] md:w-[400px] h-auto"/>
      </div>

     <div className='mt-5 text-center md:text-left'>
  <h1 className="text-3xl sm:text-4xl md:text-[50px] leading-tight md:leading-[80px]">
    Best Selling Book
  </h1>

  <span className="text-base sm:text-[18px] leading-[40px] md:leading-[60px]">
    By : Farhat Ishtiaq
  </span>

  <h1 className="text-2xl sm:text-3xl md:text-[40px] leading-tight md:leading-[30px] mt-2 md:mt-0">
   YE DIL MERA
  </h1>

 <p className="mt-8 mb-5 w-full max-w-[500px] mx-auto md:mx-0">
  A beautiful story of love, emotions, and relationships.
  A simple yet heart-touching journey full of feelings.
</p>
  <button className="bg-[#5a8f7b] text-white text-[18px] py-[8px] px-[20px] active:bg-[#9cd2bd] rounded-2xl mt-5">
    Shop now
  </button>
</div>
    </div>
    </section>
  )
}

export default Banner