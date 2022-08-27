import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./productSlice";
import cartReducer from "./cartSlice";
import userReducer from "./userSlice";

const store = configureStore({
    reducer:{
        user: userReducer,
        products: productReducer,
        cart: cartReducer,
    }
})


export default store 