import { createSlice } from "@reduxjs/toolkit";
import {PRODUCTS} from '../assets/data/products'


const initialState = {
    products: PRODUCTS
}

const productsReducer = createSlice({
    name: "products",
    initialState,
})

export default productsReducer.reducer