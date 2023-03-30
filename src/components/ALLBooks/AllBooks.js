import React, { Component, useState } from 'react'; 
import OneBook from './OneBook';
import './AllBooks.scss';
import MySelect from './MySelect';


const AllBooks =(props)=> {
     
    const[selectedSort, setSelectedSort] = useState("")

    const  onChange = (sortValue) => {
        setSelectedSort(sortValue)
        console.log(sortValue)
        props.onChange(sortValue)
    }
    
        return (
            <div className='allBooks_body'>
                <div className='allBooks_border' >

                    <MySelect
                        
                        value={selectedSort}
                        onChange={onChange}
                        defaultValue="All"
                        options={[
                            {value: "headLine", name : "By title"},
                            {value: "author", name : "By author"},
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