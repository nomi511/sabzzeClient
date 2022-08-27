import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    // token: "",
    // location: null,
    // region: null,
    user: null,
    loading: false,
    error: '',
}


const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers:{
        addUser(state, action){
            state.user = action.payload
        },
        changeRegion(state, action){
            state.user.region = action.payload;
        }
    }
}) 
 

export const {addUser, changeRegion} = userSlice.actions

export default userSlice.reducer