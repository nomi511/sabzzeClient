import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./productSlice";
import cartReducer from "./cartSlice";
import { cartTotals } from "./cartSlice";

const store = configureStore({
    reducer:{
        products: productReducer,
        cart: cartReducer
    }
})


export default store 