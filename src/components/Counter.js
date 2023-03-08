import React, { Component } from 'react'; 
import { useState } from 'react';

const Counter = (props)=> {
    const [Count, setCount]=useState(props.count)
    // const [Count, setCount]=useState(5)
    //console.log(props)
    const increment = () => {
        setCount(Count+1)
        console.log(Count)
    }
    function decrement(){
        setCount(Count-1)
    }

    return(
        <div>
            <h1>{Count}</h1>
           
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
        </div>
    )
}
export default Counter