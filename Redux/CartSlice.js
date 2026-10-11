
import {createSlice} from '@reduxjs/toolkit'

const cartSlice = createSlice ({

    name : 'cart',
    
    initialState : {
        items :[]
        
    },

    reducers : {
        addToCart : (state , action) => {
           const existingPro = state.items.find((item) =>
             item.id === action.payload.id);

           if(existingPro){
              existingPro.quantity += 1;
           }else{
               state.items.push({
                ...action.payload,
                quantity : 1
               })
           }

        },

        inCreaseQuantity : (state , action) => {
          
            const item = state.items.find((item) => 
            item.id === action.payload);
            item.quantity +=1;
        },

        decreaseQuantity : (state, action) => {
          const item = state.items.find((item) => 
           item.id === action.payload
        );

          if(item.quantity > 1) {
             item.quantity -=1
          }
        },

        removeItem : (state , action) => {

            state.items = state.items.filter((item) => 
            item.id !== action.payload);
            
        }
    }
    
})


export const {addToCart , inCreaseQuantity, decreaseQuantity, removeItem} = cartSlice.actions
export default cartSlice.reducer;