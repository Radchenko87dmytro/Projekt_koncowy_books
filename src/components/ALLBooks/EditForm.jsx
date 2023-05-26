import React, { Component, useState } from 'react';
//import './Header.scss';

const EditForm = (props) =>{

    console.log(props.state)

    const [titleValue, setTitleValue] = useState(props.state.headLine)
    const [authorValue, setAuthorValue] = useState(props.state.author)
    const [descriptionValue, setDescriptionValue] = useState(props.state.opis)

    const titleChangeHandler = (event) => {
            setTitleValue(event.target.value) 
        }
    const autorChangeHandler = (event) => {
            setAuthorValue(event.target.value)
        }
    const descriptionChangeHandler = (event) => {
        setDescriptionValue(event.target.value)
        }

        
    const saveDataInput = (event)=> {
       
    const   inputValue = {
            headLine: titleValue,
            author: authorValue,
            opis: descriptionValue,
            }
            
          if(props.pos)
          console.log(props.pos)
          inputValue.id = props.pos
        
         props.addBookHandler(inputValue)
         
         console.log(inputValue)
         setTitleValue("");
         setAuthorValue("");
         setDescriptionValue("");
    }

    const cancelHandler = ()=>{
    props.cancelHandler()
   }

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
                <button onClick={saveDataInput}>Confirm</button>
                <button onClick={cancelHandler}>Cancel</button>
                
            </div>
         )
    

} 

export default EditForm;



