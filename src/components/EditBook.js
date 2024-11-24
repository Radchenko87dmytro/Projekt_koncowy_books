import React, { Component } from "react";
import "./ALLBooks/OneBook.css";

class EditBook extends Component {
  render() {
    return (
      <button
        className="oneBookButton"
        onClick={() => {
          this.props.edit();
        }}
      >
        Edit
      </button>
    );
  }
}
export default EditBook;
