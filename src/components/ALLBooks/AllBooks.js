import React, { Component, useState } from 'react'; 
import OneBook from './OneBook';
import './AllBooks.scss';


 const state = [
        {
        id: 1,
        headLine: "W pustyni i puszczy",
        author: "Juliusz Słowacki",
        opis: "Ksiązka długa, fajna i nudna jedocześnie. ",
       },
       {
        id: 2,
        headLine: "W pustyni",
        author: "Juliusz ",
        opis: "Ksiązka długa, . ",
       },
       {
        id: 3,
        headLine: "W pustyni i puszczy",
        author: "Juliusz Słowacki",
        opis: "Ksiązka długa, fajna i nudna jedocześnie. ",
       },
       {
        id: 4,
        headLine: "fbdfb",
        author: "dfbdfbi",
        opis: "dbdf ",
       },
       
    ]

const AllBooks =(props)=> {

    const[newBook, setNewBook]=useState([])
    const[stateValue, setNewBookValue] =useState(state)

    const deleteBook = (pos)=>{
        props.deleteBook(pos)
     }

    console.log(props.stateValue.length)
    
        return (
            <div className='allBooks_body'>
                <div className='allBooks_border' >

                    {/* {props.stateValue.map((stateValue, pos) => 
                        <OneBook deleteBook={()=>deleteBook(pos)}  number={pos+1}  state={stateValue} key={pos}/> 
                    )
                } */}
        
                {props.stateValue.length == 0 
                    ? 
                    <h2>Book store is empty</h2>
                    :
                    props.stateValue.map((stateValue, pos) => 
                        <OneBook deleteBook={()=>deleteBook(pos)}  number={pos+1}  state={stateValue} key={pos}/> 
                    )
                }     

                </div>
            </div>
        )
}


export default AllBooks