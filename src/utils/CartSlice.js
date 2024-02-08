import { createSlice } from "@reduxjs/toolkit";

const cartSlice= createSlice({
    name: 'cart',
    initialState:{
        items:[]
    },
    reducers:{
        //redux uses immer behind the state
        addItem: (state,action)=>{
            //mutating the state here
            state.items.push(action.payload)
        },
        removeItem:(state,action)=>{
            state.items.pop()
        },
        clearCart:(state)=>{
            //RTK(redux toolkit) either mutate the existingmstate or reurn a new state
            //i.e, we can do it as belo or return{items:[]}
            state.items.length=0; //makes state as empty array
        }
    }
})

export const {addItem, removeItem, clearCart} = cartSlice.actions;
export default cartSlice.reducer;
