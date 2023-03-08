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


        //  const addBookHandler=()=>{
        //     //console.log(inputValue)
        //     //(props.addBook) 
        //  } 
    //  const addBookHandler=(inputValue)=>{
    //     console.log(inputValue)
  
  const addBookHandler = (props.addBookHandler)
  console.log(addBookHandler)
 const addBookH = (addBookHandler)=>{
    console.log(addBookHandler)
    setNewBook([addBookHandler])
         console.log(newBook)
    console.log(addBookHandler)
    
 }
        
      const addBookHandle= (props)=>{
      const s= (props.addBookHandler)
       
        
        setNewBookValue([...stateValue, ])
        
    }

        return (
            <div className='allBooks_body'>
                <div className='allBooks_border' >
                    {stateValue.map((stateValue, index) => 
                        <OneBook number={index+1}  state={stateValue} key={index}/> 
                    )
                }
                </div>
            </div>
        )
}


export default AllBooks