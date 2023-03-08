import React, { Component, useState } from 'react';
import './Header.scss';

class InputForm extends React.Component{

    constructor(props){
        super(props)
        this.state={
            titleValue: ("")
        }
        this.titleChangeHandler = this.titleChangeHandler.bind(this)
    }
    titleChangeHandler = (event)=>{
            this.setState({titleValue: event.target.value})
            console.log(event.target.value)
            //console.log(titleValue)
        }

    render() {

        

        

        // const autorChangeHandler = () => {
            
        // }

        // const descriptionChangeHandler = () => {

        // }

        return (
            <div className='input_form_items'>
                <div className='form_item' >
                    <label>Tile</label>
                    <input placeholder='Some title' onChange={this.titleChangeHandler}></input>
                </div>
                <div className='form_item' >
                    <label>Autor</label>
                    <input placeholder='Some autor' onChange={this.autorChangeHandler}></input>
                </div>
                <div className='form_item' >
                    <label>Description</label>
                    <input placeholder='Some description' onChange={this.descriptionChangeHandler}></input>
                </div>
                <button>Add book</button>
                <button>Cancel</button>
                
            </div>
         )
    }
}
    

export default InputForm;



