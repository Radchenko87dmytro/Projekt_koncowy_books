import React, { Component } from 'react'; 
import Opis from '../Opis';
import Title from '../Title';
import Author from '../Author';
import './OneBook.scss';
import Delete_book from '../Delete_book';
import Edit_book from '../Edit_book';

class OneBook extends Component {

    render() {

         const deleteBook = ()=>{
            console.log("del")
            this.props.deleteBook()
         }
         
        // const edit = ()=>{
        //     alert("edit")
        //     console.log("edit")
        // }
        

        
        return (
            <div className='oneBook_body'>
              <h1>Book {this.props.number}</h1> 
              <Title classTitle="naglowek-1" title={this.props.state.headLine}></Title>
              <Author classAuthor="author-class" author={this.props.state.author}></Author>
              <Opis classOpis="opis-class" opis={this.props.state.opis}></Opis>
              <Delete_book classDeleteBook="deleteBook" Delete_book = "Delete" 
                           deleteBook={deleteBook}/>
               <Edit_book classEditBook="Edit_Book" Edit_book="Edit book"
                            edit={()=>{this.props.edit()}}
                           />
                            {/* edit= {edit} */}
            </div>
                
        )
    }
}
export default OneBook;