import React, { Component } from 'react'; 
import { useState } from 'react';
import Counter from './Counter';

const FundamentalCours = (props)=> {
    
   const counts = [
        {count: 1},
        {count: 4},
        {count: 6},
        {count: 8},
        
        
   ]
   //console.log(counts)
    return(
        <div className='App' >
           {counts.map((counts, index)=>
           <Counter 
                count={counts.count}
                key={index} 
            />
           )} 
        </div>
    )
}
export default FundamentalCours