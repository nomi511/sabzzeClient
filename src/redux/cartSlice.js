import { createSlice } from "@reduxjs/toolkit";



const initialState = {
    cartItems:[],
    cartTotalQuantity: 0,
    cartTotalWeight: 0,
    cartTotalAmount: 0
}



const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers:{
        addToCart(state, action){
            const itmIndex = state.cartItems.findIndex((itm)=> itm.id === action.payload.id)
            
            if(itmIndex >=0)
            {
                state.cartItems[itmIndex].cartQuantity += action.payload.cartQuantity
            } else {

                state.cartItems.push(action.payload)
            }
        },
        removeFromCart(state, action){
            const newitems = state.cartItems.filter((itm)=> itm.id!==action.payload.id)
            state.cartItems = newitems
        },
        decreaseQuantity(state, action){
            const itmIndex = state.cartItems.findIndex((itm)=> itm.id === action.payload.id)
            if(state.cartItems[itmIndex].cartQuantity > 1)
            {
                state.cartItems[itmIndex].cartQuantity -= 1
            }else{
                const newitems = state.cartItems.filter((itm)=> itm.id!==action.payload.id)
                state.cartItems = newitems
            }
        },
        increaseQuantity(state, action){
            const itmIndex = state.cartItems.findIndex((itm)=> itm.id === action.payload.id)
            state.cartItems[itmIndex].cartQuantity += 1
        },
        cartTotals(state, action)
        {
            let {amount, quantity} = state.cartItems.reduce((totals, item)=>{

                const {price, cartQuantity} = item
                const total = (price*cartQuantity)

                totals.amount += total
                totals.quantity += cartQuantity
                
                return totals

            }, {
                amount: 0,
                quantity: 0,
            })

            state.cartTotalQuantity = quantity
            state.cartTotalAmount = amount
            state.cartTotalWeight = quantity
        }
    }
})


export const { addToCart, removeFromCart, decreaseQuantity, increaseQuantity, cartTotals } = cartSlice.actions;

export default cartSlice.reducer;