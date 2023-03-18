import React, { Component, useState } from 'react'; 
import OneBook from './OneBook';
import './AllBooks.scss';


const AllBooks =(props)=> {

    const[editBook, seteditBook] = useState(false)
    

    
     const edit = ()=>{
            alert("edit")
            console.log("edit")
            seteditBook(!editBook)
            console.log(editBook)
        } 

    
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
                        <OneBook deleteBook={()=>props.deleteBook(pos)} edit={()=>{edit()}}  number={pos+1}  state={stateValue} key={pos}/>
                        
                    )
                    
                }     
                    {editBook && <p>edit</p>}
                </div>
            </div>
        )
}


export default AllBooks