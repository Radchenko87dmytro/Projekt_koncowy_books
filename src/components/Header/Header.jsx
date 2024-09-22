import React, { useState } from "react";
import "./Header.css";
import InputForm from "./InputForm";
import ButtonLog from "./ButtonLog";
import Button from "../Button";

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
            {/* <img src="https://cdn.pixabay.com/photo/2016/11/29/12/50/bookcases-1869616__340.jpg"></img>   */}
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
          className="header_link"
          onClick={() => setInpntFormVisible(!inpntFormVisible)}
        >
          Add book
        </button>
      </div>

      <div className="buttons">
        {/* <ButtonLog /> */}
        <ButtonLog text="log" />
        <button disabled>Sign up</button>
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
