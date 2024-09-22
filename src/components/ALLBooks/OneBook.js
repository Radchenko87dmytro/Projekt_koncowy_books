import React, { Component } from "react";
import Opis from "../Opis";
import Title from "../Title";
import Author from "../Author";
import "./OneBook.css";
import Delete_book from "../Delete_book";
import Edit_book from "../Edit_book";
import EditForm from "./EditForm";

class OneBook extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      editBook: false,
      didUpdate: "componentDidUpdate",
    };
  }

  componentDidUpdate() {
    if (this.state.didUpdate != "did") console.log("componentDidUpdate");
  }

  render() {
    return (
      <div className="oneBook_body">
        <h1>Book {this.props.number}</h1>
        <Title
          classTitle="naglowek-1"
          title={this.props.state.headLine}
        ></Title>
        <Author
          classAuthor="author-class"
          author={this.props.state.author}
        ></Author>
        <Opis classOpis="opis-class" opis={this.props.state.opis}></Opis>
        <Delete_book
          classDeleteBook="deleteBook"
          Delete_book="Delete"
          deleteBook={this.props.deleteBook}
        />
        <Edit_book
          classEditBook="Edit_Book"
          Edit_book="Edit book"
          edit={() => {
            this.setState({
              editBook: !this.state.editBook,
            });
          }}
        />

        <div className="editt_area">
          {this.state.editBook && (
            <EditForm
              state={this.props.state}
              pos={this.props.pos}
              addBookHandler={this.props.editBook()}
              cancelHandler={() => {
                this.setState({
                  editBook: false,
                });
              }}
            />
          )}
        </div>
      </div>
    );
  }
}
export default OneBook;
