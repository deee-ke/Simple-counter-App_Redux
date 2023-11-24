import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./counterSlice";



export const store = configureStore({
    //Only reducer can update the value in the store
    //reducer key is predefine (its an object which can more than one reducer)
    reducer:{
        //reducer is comimg from counterSlice since we are exporting reducer as default.
        counter:counterSlice
    }
})