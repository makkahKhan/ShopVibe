
"use client"
import {useActionState, useState} from 'react'
import { useDispatch, useSelector } from "react-redux";
import {checkoutForm} from './actionForm'
import { clearCart } from "@/Redux/CartSlice";
import  Link  from 'next/link';
const page = () => {
const [shipping , setShipping] = useState(0);
const [state , formAction] = useActionState(checkoutForm , null);
const dispatch = useDispatch()
const [typingField, setTypingField] = useState(null);







const items = useSelector((state) => state.cart.items)
console.log(items);



  return (
  <>
  <section className="container mx-auto px-4 mb-10 mt-8 flex flex-col md:flex-row justify-center items-center md:items-start gap-6">

  <form
    action={(formData) => {
      setTypingField(null);
      formAction(formData);
    }}
    className="w-full max-w-md md:w-[55%] md:max-w-none flex flex-col gap-4 bg-white shadow-xl rounded-2xl p-5 sm:p-8">

    <div className="text-center mb-2">
      <h1 className="text-2xl sm:text-3xl font-bold text-[#2f4858]">Checkout</h1>
      <p className="text-sm text-gray-500 mt-1">Enter your details to place the order</p>
    </div>

    <input
      type="text"
      name="name"
      placeholder="Full Name"
      onChange={() => setTypingField("name")}
      defaultValue={state?.values?.name}
      className="border-2 border-[#e8e7e7] p-2.5 rounded-xl focus:outline-none focus:border-[#5a8f7b]"
    />
    {state?.field === "name" && typingField !== "name" && (
      <p className="text-red-500 text-sm">{state.message}</p>
    )}

    <input
      type="text"
      name="email"
      placeholder="Em@il"
      onChange={() => setTypingField("email")}
      defaultValue={state?.values?.email}
      className="border-2 border-[#e8e7e7] p-2.5 rounded-xl focus:outline-none focus:border-[#5a8f7b]"
    />
    {state?.field === "email" && typingField !== "email" && (
      <p className="text-red-500 text-sm">{state.message}</p>
    )}

    <input
      type="tel"
      name="number"
      placeholder="Phone"
      onChange={() => setTypingField("number")}
      defaultValue={state?.values?.number}
      className="border-2 border-[#e8e7e7] p-2.5 rounded-xl focus:outline-none focus:border-[#5a8f7b]"
    />
    {state?.field === "number" && typingField !== "number" && (
      <p className="text-red-500 text-sm">{state.message}</p>
    )}

    <input
      type="text"
      name="address"
      placeholder="Address"
      onChange={() => setTypingField("address")}
      defaultValue={state?.values?.address}
      className="border-2 border-[#e8e7e7] p-2.5 rounded-xl focus:outline-none focus:border-[#5a8f7b]"
    />
    {state?.field === "address" && typingField !== "address" && (
      <p className="text-red-500 text-sm">{state.message}</p>
    )}

    <input
      type="text"
      name="city"
      placeholder="City"
      onChange={() => setTypingField("city")}
      defaultValue={state?.values?.city}
      className="border-2 border-[#e8e7e7] p-2.5 rounded-xl focus:outline-none focus:border-[#5a8f7b]"
    />
    {state?.field === "city" && typingField !== "city" && (
      <p className="text-red-500 text-sm">{state.message}</p>
    )}

    <input type="hidden" name="cartItems" value={JSON.stringify(items)} />

    {/* Shipping ko form ke saath bhejna */}
    <input type="hidden" name="shipping" value={shipping} />

    <button
      type="submit"
      className="bg-[#5a8f7b] text-white text-[18px] py-2 rounded-2xl active:bg-[#8abca9] transition-colors duration-300 cursor-pointer"
    >
      Place Order
    </button>
  </form>

  <div className="rounded-2xl w-full max-w-md md:max-w-none md:w-[40%] border border-[#e8e7e7] shadow-xl">
    <div className="p-5">
      <h1 className="text-xl sm:text-[22px]">Cart summary</h1>

      {/* Shipping options */}
      <div className="mt-4 flex justify-between gap-2 border border-[#e8e7e7] shadow p-3">
        <div className="flex items-center">
          <input
            value="0"
            onClick={() => setShipping(0)}
            type="radio"
            name="shipping-option"
            defaultChecked
            className="w-5 h-5 accent-black"
          />
          <span className="text-[15px] ml-2">Free Shipping</span>
        </div>
        <div>
          <span>Rs : 0.00</span>
        </div>
      </div>

      <div className="mt-4 flex justify-between gap-2 border border-[#e8e7e7] shadow p-3">
        <div className="flex items-center">
          <input
            value="150"
            onClick={() => setShipping(150)}
            type="radio"
            name="shipping-option"
            className="w-5 h-5 accent-black"
          />
          <span className="text-[15px] ml-2">Express Shipping</span>
        </div>
        <div>
          <span>Rs : 150</span>
        </div>
      </div>

      {/* Total items */}
      <div className="mt-7 flex justify-between p-3 border-b border-gray-200">
        <span className="text-[15px] text-black">Total Items</span>
        <span className="font-bold">
          {items.reduce((total, item) => total + item.quantity, 0)}
        </span>
      </div>

      {/* Subtotal */}
      <div className="flex justify-between p-3 border-b border-gray-200">
        <span className="text-[15px] text-black">Subtotal</span>
        <span className="font-bold">
          Rs : {items.reduce((total, item) => total + item.price * item.quantity, 0)}
        </span>
      </div>

      {/* Shipping */}
      <div className="flex justify-between p-3 border-b border-gray-200">
        <span className="text-[15px] text-black">Shipping</span>
        <span className="font-bold">Rs : {shipping}</span>
      </div>

      {/* Total */}
      <div className="mt-2 flex justify-between p-3">
        <span className="text-[15px] font-bold text-black">Total</span>
        <span className="font-bold">
          Rs : {items.reduce((total, item) => total + item.price * item.quantity, 0) + shipping}
        </span>
      </div>
    </div>
  </div>

</section>
  
  {state?.success && (
  <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">

    <div className="bg-white rounded-2xl p-8 w-[90%] max-w-md text-center shadow-xl">

      <h2 className="text-2xl font-bold text-[#2f4858]">
        Order Placed Successfully 🎉
      </h2>

      <p className="text-gray-500 mt-3">
        Your order has been placed successfully.
      </p>

      <Link
        href="/"
         onClick={() => dispatch(clearCart())}
        className="inline-block mt-6 bg-[#5a8f7b] text-white px-6 py-3 rounded-xl"
      >
        Continue Shopping
      </Link>

    </div>

  </div>
)}

  
  </>
    
 
  )
}

export default page
