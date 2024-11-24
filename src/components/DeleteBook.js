import React from "react";
import "./ALLBooks/OneBook.css";

class DeleteBook extends React.Component {
  render() {
    return (
      <button className="oneBookButton" onClick={this.props.deleteBook}>
        Delete
      </button>
    );
  }
}
export default DeleteBook;
