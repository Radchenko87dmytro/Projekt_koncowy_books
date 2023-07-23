import React, { Component, useState } from 'react';
import './Header.scss';

const InputForm = (props) =>{

    console.log(props.state)

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

        //const [idValue, setIdValue] = useState(0)
        
// const pos =(pos)=>{
// console.log(pos)
// }

        
    const saveDataInput = (event)=> {
        //setIdValue(props.id)

    const   inputValue = {
            // id: props.stateValue.length + 1,
            headLine: titleValue,
            author: authorValue,
            opis: descriptionValue,
            }
        //   if(props.pos)
        //   console.log(props.pos)
        //   inputValue.id = props.pos
         //console.log(props.pos(pos))
        // console.log(id(id))
        
         props.addBookHandler(inputValue)
         
         setTitleValue("");
         setAuthorValue("");
         setDescriptionValue("");

    }


    const cancelHandler = ()=>{
    console.log("cancel")
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

export default InputForm;



