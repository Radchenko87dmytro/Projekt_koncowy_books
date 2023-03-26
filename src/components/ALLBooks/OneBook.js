import React, { Component } from 'react'; 
import Opis from '../Opis';
import Title from '../Title';
import Author from '../Author';
import './OneBook.scss';
import Delete_book from '../Delete_book';
import Edit_book from '../Edit_book';
import InputForm from '../Header/InputForm';
import EditForm from './EditForm';

class OneBook extends React.Component {

    constructor(props){
        super(props)
        this.state={
            editBook: false
        }
        //this.edit =  this.edit.bind(this)
        
    }
    
    // edit (inputValue){ 
    //     console.log("edit")
    //     console.log(inputValue)
    //     this.props.edit(inputValue)
    //     }

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
              <Delete_book classDeleteBook="deleteBook" Delete_book = "Delete" 
                           deleteBook={deleteBook}/>
               <Edit_book classEditBook="Edit_Book" Edit_book="Edit book"
                            edit={()=>{
                                this.setState({
                                    editBook: !this.state.editBook
                                })
                            }}
                           />
                            
                <div className='editt_area'>
                    {this.state.editBook && <EditForm state={this.props.state} pos={this.props.pos} addBookHandler={this.props.editBook()} cancelHandler={()=>{
                                this.setState({
                                    editBook: false
                                })
                            }}/>}
                </div>
                
            </div>
                
        )
    }
}
export default OneBook;