import React, { Component, useState } from 'react';
import './Header.scss';

const InputForm = (props) =>{

    const [titleValue, setTitleValue] = useState("")
    const [authorValue, setAuthorValue] = useState("")
    const [descriptionValue, setDescriptionValue] = useState("")

    const titleChangeHandler = (event) => {
            setTitleValue(event.target.value)
            //console.log(titleValue) 
        }
    const autorChangeHandler = (event) => {
            setAuthorValue(event.target.value)
        }
    const descriptionChangeHandler = (event) => {
        setDescriptionValue(event.target.value)
        }

        // const submitHandler = (event) => {
        //     event.preventDefault(); // this method prevents action - request to the server

    
    
    const saveDataInput = (event)=> {
        const inputValue = {
                headLine: titleValue,
                author: authorValue,
                opis: descriptionValue,
            }
         props.addBookHandler(inputValue)
        
         console.log(inputValue)
         setTitleValue("");
         setAuthorValue("");
         setDescriptionValue("");
    }
   //props.saveDataInput()

        return (
            <div className='input_form_items' >
                <div className='form_item' >
                    <label>Tile</label>
                    <input value={titleValue} onChange={titleChangeHandler}></input>
                </div>
                <div className='form_item' >
                    <label>Autor</label>
                    <input value={authorValue} onChange={autorChangeHandler}></input>
                </div>
                <div className='form_item' >
                    <label>Description</label>
                    <input value={descriptionValue} onChange={descriptionChangeHandler}></input>
                </div>
                <button onClick={saveDataInput}>Add book</button>
                <button>Cancel</button>
                
            </div>
         )
    

} 

export default InputForm;



