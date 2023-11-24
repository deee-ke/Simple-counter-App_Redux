import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment, reset } from "../redux/counterSlice";

function Counter(){

    //state to hold the input value
    const [range,setRange]=useState("")


    //hook to dispatch a function in action
    const dispatch = useDispatch()
    //component can access the state by using useSelector hook
    const count = useSelector((state)=>state.counter.value)

    console.log(range);

    return (
        <>
        
            <div className="d-flex align-items-center mt-2  flex-column rounded-2 bg-light p-4">
                <header className="App-header d-flex text-center justify-content-center  ">
                    <h2>Simple Counter App</h2>
                </header>
                <h1 style={{fontSize:"90px"}}>{count}</h1>
                <div className="mt-5">
                    {/* Number() method is used to convert string into number */}
                    <button onClick={()=>dispatch(decrement(Number(range)))} className="btn btn-warning p-3">Decrement</button>
                    <button onClick={()=>dispatch(reset())} className="btn btn-danger ms-3 p-3">Reset</button>
                    <button onClick={()=>dispatch(increment(Number(range)))} className="btn btn-success ms-3 p-3">Increment</button>
                </div>
                <div className="w-100 mt-4">
                  <input type="text" onChange={(e)=>setRange(e.target.value)} className="form-control border border-primary" placeholder="Enter the Range" />
                </div>
            </div>
        
        </>
       )
}

export default Counter;