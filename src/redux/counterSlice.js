import { createSlice } from "@reduxjs/toolkit";


const counterSlice = createSlice({
    name:'CounterApp',
    initialState:{
        value:0
    },
    //actions are created inside this reducers key
    reducers:{
        //logics to update state

        //function for increment number
        increment:(state,action)=>{
            //if its an argument function then it can be accessed by action and value in payload
            state.value += action.payload
        },
        //function for decrementing
        decrement:(state,action)=>{
            state.value -= action.payload
        },
        //function for reset
        reset:(state)=>{
            state.value = 0
        }
    }
})

//action is required by component inorder to update state
export const{increment,decrement,reset} = counterSlice.actions

//reducer is required for store to change the state value
export default counterSlice.reducer