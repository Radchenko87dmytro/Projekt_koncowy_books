import React, { useState } from "react";
import "./Header.css";
import InputForm from "./InputForm";

const Header = (props) => {
  const [visible, setVisible] = useState(true);
  const [inpntFormVisible, setInpntFormVisible] = useState(false);

  const addBookHandler = (inputValue) => {
    props.addBookHandler(inputValue);
  };

  return (
    <div className="header">
      <div className="logo_background">
        {visible && (
          <div className="logo">
            <button className="button" onClick={() => setVisible(false)}>
              Disapear Logo
            </button>
          </div>
        )}
        {!visible && (
          <button className="button" onClick={() => setVisible(true)}>
            Add Logo
          </button>
        )}
      </div>

      <div className="links">
        <h1>Book Store</h1>
        <button
          className="button"
          onClick={() => setInpntFormVisible(!inpntFormVisible)}
        >
          Add book
        </button>
      </div>

      <div className="input_area">
        {inpntFormVisible && (
          <InputForm
            addBookHandler={addBookHandler}
            cancelHandler={() => setInpntFormVisible(false)}
          />
        )}
      </div>
    </div>
  );
};

export default Header;
