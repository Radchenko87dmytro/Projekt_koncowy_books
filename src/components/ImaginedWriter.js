//import React from 'react'
import React, { Component } from "react";
import "./ALLBooks/AllBooks.css";
import Delete_book from "./Delete_book";

class ImaginedWriter extends React.Component {
  // constructor(props){
  // super(props)
  // this.state={

  // }
  //this.deleteBook = this.deleteBook.bind(this)
  //}

  // deleteBook(){
  //     console.log("del")
  //     this.props.deleteBook()
  // }

  render() {
    const writerState = this.props.state;
    console.log(this.props.loading);

    return (
      <div className="oneBook_body">
        {this.props.loading ? (
          <h2>Loading...</h2>
        ) : (
          <span>
            <h1>Writer {writerState.id}</h1>
            <h2>{writerState.first_name}</h2>
            <h2>{writerState.last_name}</h2>
            <h2>{writerState.email}</h2>

            <img src={writerState.avatar} />

            <Delete_book
              classDeleteBook="deleteBook"
              Delete_book="Delete"
              //  deleteBook={this.props.deleteBook}
              deleteBook={this.props.deleteBook}
            />
          </span>
        )}
      </div>
    );
  }
}
export default ImaginedWriter;
