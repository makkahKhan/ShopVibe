
import Hero from "@/components/Hero";
import Category from "@/components/Category"
import Banner from "@/components/Banner"
import Products from "@/components/Products";
import NewList from '@/components/NewList'

export default function Home() {
  // let data = {
  //   name : "makkah",
  //   role : "coder"
  // }
  // const handleClick = async () => {
  //  let a = await fetch("/api/add", 
  //   {method : "Post" ,
  //     headers : {
  //       "Content-Type"  : "application/json"
  //     },
  //     body : JSON.stringify(data),
  //   }
  //  )
  //  let response = await a.json();
  //  console.log(response);
  // }


  return (
  
   <>
   <Hero/> 
    <Category/> 
     <Banner/>
   <Products/> 
   <NewList/>
   </>

  );
}
