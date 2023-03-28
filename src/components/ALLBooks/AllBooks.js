import React, { Component, useState } from 'react'; 
import OneBook from './OneBook';
import './AllBooks.scss';
import MySelect from './MySelect';


const AllBooks =(props)=> {
     

    
        return (
            <div className='allBooks_body'>
                <div className='allBooks_border' >

                    <MySelect
                        defaultValue="Filter by"
                        options={[
                            {value: "headLine", name : "By title"},
                            {value: "author", name : "By authot"},
                            {value: "opis", name : "By description"},
                        ]}
                    />

                    {/* {props.stateValue.map((stateValue, pos) => 
                        <OneBook deleteBook={()=>deleteBook(pos)}  number={pos+1}  state={stateValue} key={pos}/> 
                    )
                } */}
        
                {props.stateValue.length == 0 
                    ? 
                    <h2>Book store is empty</h2>
                    :
                    props.stateValue.map((stateValue, pos, id) => 
                        <OneBook deleteBook={()=>props.deleteBook(pos)} number={pos+1}  state={stateValue} key={pos} editBook={()=>props.editBook} pos={pos}/>
                    )
                }     
                    
                </div>
            </div>
        )
}


export default AllBooks