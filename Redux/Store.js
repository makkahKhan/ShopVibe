import { configureStore } from "@reduxjs/toolkit";
import cartReduser from './CartSlice'




export const store = configureStore ({

    reducer : {
      cart  : cartReduser
    }

})