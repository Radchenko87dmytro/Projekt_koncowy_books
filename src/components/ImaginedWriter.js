//import React from 'react'
import React, { Component } from 'react';
import './ALLBooks/AllBooks.scss'
import Delete_book from './Delete_book'

class ImaginedWriter extends React.Component {
    constructor(props){
    super(props)
        // this.state={
         
        // }
        //this.deleteBook = this.deleteBook.bind(this)
    }

    deleteBook(){
        this.props.deleteBook()
        console.log("del");
    }

    render(){
    const writerState = this.props.state    
        return (

        <div className='oneBook_body' >
            <h1>Writer {writerState.number}</h1>
            <h2>{writerState.first_name}</h2>
            <h2>{writerState.last_name}</h2>
            <h2>{writerState.email}</h2>
            <br></br>
            <img src={writerState.avatar}></img>

            <Delete_book classDeleteBook="deleteBook" 
                         Delete_book = "Delete"
                        //  deleteBook={this.props.deleteBook}
                        deleteBook={this.deleteBook}
                        />

        </div>
        )
    }
  
}    
export default ImaginedWriter