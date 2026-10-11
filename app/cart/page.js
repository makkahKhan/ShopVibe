// "use client"

// import {useState} from 'react'
// import Image from 'next/image'
// import { useDispatch, useSelector } from "react-redux";
// import { decreaseQuantity, inCreaseQuantity, removeItem } from '@/Redux/CartSlice';
// import { Trash } from 'lucide-react';
// import toast from 'react-hot-toast';
// import Link from 'next/link'



// const page = () => {
// const [shipping , setShipping] = useState(0);
// const dispatch = useDispatch()

// const items = useSelector((state) => state.cart.items)
// console.log(items);


//   return (
//     <div>
      
//       <section className=' bg-[#e8e7e7] py-6'>
//         <div className='text-center mt-4  mx-auto'>
//           <h1 className='text-[30px] font-bold'> Cart</h1>
//            <span className='text-[18px] text-gray-600'>Home / Cart</span> 
//         </div> 
// </section>
//     <section className='flex justify-center container mx-auto mt-[5rem]'>
 

//  {items.length > 0 ? (


// <>
//   <table className="border-separate border-spacing-x-25">
   
   

//     <thead>
//       <tr>
//         <th className='text-[20px] text-gray-600'>Product Title</th>
//         <th className='text-[20px] text-gray-600'>Image</th>
//         <th className='text-[20px] text-gray-600 font-bold'>Quantity</th>
//         <th className='text-[20px] text-gray-600 font-bold'>Price</th>
//         <th className='text-[20px] text-gray-600 font-bold'>Subtotal</th>
//       </tr>
//     </thead>

     

//          <tbody>
       
//       {items.map((item) => (
//         <tr className='text-center border-b border-gray-400' key={item.id}>
        
//          <td>
//              <h4 className='text-[18px]'>{item.title}</h4>
            
//           <div className="flex justify-center items-center">
//   <span>
//     <Trash
//       onClick={() => {dispatch(removeItem(item.id)),
//         toast.success("item remove successfully")
//       }}
//       size={25}
//       className="text-red-700 cursor-pointer"
//     />
//   </span>
// </div>
          
//         </td>

//         <td>
//             <Image
//             src={item.img}
//             width={200}
//             height={200}
//             alt='book img'
//             />
//          </td>

//         <td>
//   <button
//   onClick={() => dispatch(inCreaseQuantity(item.id))}
//   className="mr-2 bg-[#5a8f7b] active:bg-[#8abca9] w-5 h-5  rounded-[5px] text-[15px] font-bold text-white">
//     +
//   </button>

//   <span>{item.quantity}</span>

//   <button
//    onClick={() => dispatch(decreaseQuantity(item.id))}
//    className="ml-2 bg-[#5a8f7b] active:bg-[#8abca9] w-5 h-5  rounded-[5px] text-[15px] font-bold text-white">
//     -
//   </button>
// </td>

//         <td>Rs : {item.price}</td>
//         <td>Rs : {item.price * item.quantity}</td>

//       </tr>
//       ))}    
  

//     </tbody>
    
//   </table>
    
  
// </>
   

// )   : ( 
//           <div className='mt-3 mb-5  text-red-800 text-[20px]'>
//          <span>Your Cart is empty</span>
//         </div>
//       ) }


// </section>



//     {
//     items.length && (
//        <div className="flex justify-center">
//       <Link href="/checkout">

//       <button className='mt-5 py-3 px-5 text-white bg-[#5a8f7b] rounded-2xl active:bg-[#8abca9]'>Checkout</button>
//     </Link>
//     </div>
//     )
//     }

//     </div>
//   )
// }

// export default page


"use client"

import {useState} from 'react'
import Image from 'next/image'
import { useDispatch, useSelector } from "react-redux";
import { decreaseQuantity, inCreaseQuantity, removeItem } from '@/Redux/CartSlice';
import { Trash } from 'lucide-react';
import toast from 'react-hot-toast';
import Link from 'next/link'

const page = () => {
const [shipping , setShipping] = useState(0);
const dispatch = useDispatch()

const items = useSelector((state) => state.cart.items)

  return (
    <div>

      <section className='bg-[#e8e7e7] py-6'>
        <div className='text-center mt-4 mx-auto'>
          <h1 className='text-2xl sm:text-[30px] font-bold'> Cart</h1>
          <span className='text-base sm:text-[18px] text-gray-600'>Home / Cart</span>
        </div>
      </section>

      <section className='container mx-auto mt-10 sm:mt-[5rem] px-4'>

        {items.length > 0 ? (
          <>
            {/* MOBILE: cards (md se neeche) */}
            <div className="md:hidden flex flex-col gap-4">
              {items.map((item) => (
                <div key={item.id} className="flex gap-3 shadow-xl rounded-2xl p-3 border border-[#e8e7e7]">

                  <div className="shrink-0">
                    <Image
                      src={item.img}
                      width={200}
                      height={200}
                      alt={item.title}
                      className="w-20 h-auto rounded-lg"
                    />
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="flex justify-between items-start gap-2">
                      <h4 className="text-base font-medium break-words">{item.title}</h4>
                      <Trash
                        onClick={() => {
                          dispatch(removeItem(item.id));
                          toast.success("item remove successfully");
                        }}
                        size={22}
                        className="shrink-0 text-red-700 cursor-pointer"
                      />
                    </div>

                    <p className="text-sm text-gray-600 mt-1">Rs : {item.price}</p>

                    <div className="flex items-center gap-2 mt-2">
                      <button
                        onClick={() => dispatch(decreaseQuantity(item.id))}
                        className="bg-[#5a8f7b] active:bg-[#8abca9] w-7 h-7 rounded-[5px] font-bold text-white flex items-center justify-center">
                        -
                      </button>
                      <span className="min-w-[1.5rem] text-center">{item.quantity}</span>
                      <button
                        onClick={() => dispatch(inCreaseQuantity(item.id))}
                        className="bg-[#5a8f7b] active:bg-[#8abca9] w-7 h-7 rounded-[5px] font-bold text-white flex items-center justify-center">
                        +
                      </button>
                    </div>

                    <p className="font-bold mt-3 text-right">Subtotal: Rs : {item.price * item.quantity}</p>
                  </div>

                </div>
              ))}
            </div>

            {/* TABLET / DESKTOP: table (md se upar) */}
            <div className="hidden md:block w-full overflow-x-auto">
              <table className="mx-auto border-separate md:border-spacing-x-10 lg:border-spacing-x-24">

                <thead>
                  <tr>
                    <th className='text-[20px] text-gray-600'>Product Title</th>
                    <th className='text-[20px] text-gray-600'>Image</th>
                    <th className='text-[20px] text-gray-600 font-bold'>Quantity</th>
                    <th className='text-[20px] text-gray-600 font-bold'>Price</th>
                    <th className='text-[20px] text-gray-600 font-bold'>Subtotal</th>
                  </tr>
                </thead>

                <tbody>
                  {items.map((item) => (
                    <tr className='text-cente [&>td]:py-3' key={item.id}>

                      <td className="align-middle min-w-[150px] px-1">
                        <h4 className='text-[18px] break-words'>{item.title}</h4>
                        <div className="flex justify-center items-center mt-1">
                          <Trash
                            onClick={() => {
                              dispatch(removeItem(item.id));
                              toast.success("item remove successfully");
                            }}
                            size={22}
                            className="text-red-700 cursor-pointer"
                          />
                        </div>
                      </td>

                      <td className="align-middle">
                        <Image
                          src={item.img}
                          width={200}
                          height={200}
                          alt='book img'
                          className="w-28 md:w-[200px] h-auto mx-auto"
                        />
                      </td>

                      <td className="align-middle whitespace-nowrap">
                        <button
                          onClick={() => dispatch(inCreaseQuantity(item.id))}
                          className="mr-2 bg-[#5a8f7b] active:bg-[#8abca9] w-5 h-5 rounded-[5px] text-[15px] font-bold text-white">
                          +
                        </button>
                        <span>{item.quantity}</span>
                        <button
                          onClick={() => dispatch(decreaseQuantity(item.id))}
                          className="ml-2 bg-[#5a8f7b] active:bg-[#8abca9] w-5 h-5 rounded-[5px] text-[15px] font-bold text-white">
                          -
                        </button>
                      </td>

                      <td className="align-middle whitespace-nowrap">Rs : {item.price}</td>
                      <td className="align-middle whitespace-nowrap">Rs : {item.price * item.quantity}</td>

                    </tr>
                  ))}
                </tbody>

              </table>
            </div>
          </>
        ) : (
          <div className='mt-3 mb-5 text-center text-red-800 text-lg sm:text-[20px]'>
            <span>Your Cart is empty</span>
          </div>
        )}

      </section>

      {items.length > 0 && (
        <div className="flex justify-center px-4">
          <Link href="/checkout" className="w-full sm:w-auto">
            <button className='w-full sm:w-auto mt-5 mb-8 py-3 px-5 text-white bg-[#5a8f7b] rounded-2xl active:bg-[#8abca9]'>Checkout</button>
          </Link>
        </div>
      )}

    </div>
  )
}

export default page