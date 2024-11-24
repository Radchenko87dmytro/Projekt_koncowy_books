import React from "react";
import "./OneBook.css";
import EditForm from "./EditForm";
import DeleteBook from "../DeleteBook";
import EditBook from "../EditBook";

class OneBook extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      editBook: false,
    };
  }

  render() {
    return (
      <div className="oneBook_body">
        <h1>Book {this.props.number}</h1>
        <div className="booksProperties">
          <h2 className="naglowek-1">
            {/* <h3>Title: </h3> */}
            {this.props.state.headLine}
          </h2>
          <h2 className="author-class">
            {/* <p>Author</p> */}
            {this.props.state.author}
          </h2>
          <h2 className="opis-class">
            {/* <p>Description</p> */}
            {this.props.state.opis}
          </h2>
        </div>

        <DeleteBook deleteBook={this.props.deleteBook} />
        <EditBook
          edit={() => {
            this.setState({
              editBook: !this.state.editBook,
            });
          }}
        />
        <div>
          <svg
            width="34px"
            height="34px"
            className="w-6 h-6 text-gray-800 dark:text-white"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 21 20"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m11.479 1.712 2.367 4.8a.532.532 0 0 0 .4.292l5.294.769a.534.534 0 0 1 .3.91l-3.83 3.735a.534.534 0 0 0-.154.473l.9 5.272a.535.535 0 0 1-.775.563l-4.734-2.49a.536.536 0 0 0-.5 0l-4.73 2.487a.534.534 0 0 1-.775-.563l.9-5.272a.534.534 0 0 0-.154-.473L2.158 8.48a.534.534 0 0 1 .3-.911l5.294-.77a.532.532 0 0 0 .4-.292l2.367-4.8a.534.534 0 0 1 .96.004Z"
            />
          </svg>
        </div>

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
