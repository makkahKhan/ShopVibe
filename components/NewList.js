

const NewList = () => {


    return (

     <section className="shadow-2xl mt-16  sm:mt-[7rem] mb-[3rem]   py-5 mx-auto  container flex flex-col  justify-center items-center bg-[#e3ece9] rounded-2xl">
        <div className=" mt-4 mb-3 text-center">
          <h1 className="text-3xl sm:text-4xl md:text-[45px]">Join Our NewsLetter</h1>
           <h1 className="text-3xl sm:text-4xl md:text-[45px]">To Stay Update</h1>
        </div>
        <div className="mt-5 py-1  px-1 mx-0 rounded-3xl bg-white flex items-center w-[90%] sm:w-[70%] md:w-[50%] shadow-2xl">
            <input type="text" name="text" placeholder="Enter your em@il" className="outline-none flex-1 min-w-0 pl-5 text-gray-600 text-[16px]"/>
            <button className="py-2 px-4 text-[13px] sm:text-[18px] md:text-[15px] lg:text-[18px]  shrink-0 sm:px-5 active:bg-[#e3ece7]  cursor-pointer bg-[#5a8f7b] text-white rounded-3xl">Subscribe</button>
        </div>
      <div className="mt-6 sm:mt-9 mb-3 text-center text-[#777777] w-[90%] md:w-[50%]">
    <p> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fuga asperiores labore, unde eveniet vero reprehenderit necessitatibus iure! Quibusdam, asperiores dolores. </p>
   
</div>
     </section>

    )
}

export default NewList