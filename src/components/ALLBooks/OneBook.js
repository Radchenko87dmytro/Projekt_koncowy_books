import React, { Component } from 'react'; 
import Opis from '../Opis';
import Title from '../Title';
import Author from '../Author';
import './OneBook.scss';
import Delete_book from '../Delete_book';

class OneBook extends Component {

    render() {

         const deleteBook = ()=>{
            console.log("del")
            this.props.deleteBook()
         }
        
        return (
            <div className='oneBook_body'>
              <h1>Book {this.props.number}</h1> 
              <Title classTitle="naglowek-1" title={this.props.state.headLine}></Title>
              <Author classAuthor="author-class" author={this.props.state.author}></Author>
              <Opis classOpis="opis-class" opis={this.props.state.opis}></Opis>
              <Delete_book Delete_book = "Delete" 
                           deleteBook={deleteBook}/>
            </div>

        )
    }
}
export default OneBook;