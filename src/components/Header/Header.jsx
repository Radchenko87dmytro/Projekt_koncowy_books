import React, { useEffect, useRef, useState } from "react";
import "./Header.css";
import InputForm from "./InputForm";

const Header = (props) => {
  const [visible, setVisible] = useState(true);
  const [inpntFormVisible, setInpntFormVisible] = useState(false);

  const inputFormRef = useRef(null);

  // Hide InputForm if clicked outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        inputFormRef.current &&
        !inputFormRef.current.contains(event.target)
      ) {
        setInpntFormVisible(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

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
        <button className="button" onClick={() => setInpntFormVisible(true)}>
          Add book
        </button>
      </div>

      <div className="input_area" ref={inputFormRef}>
        {inpntFormVisible && (
          <InputForm
            addBookHandler={props.addBookHandler}
            cancelHandler={() => setInpntFormVisible(false)}
          />
        )}
      </div>
    </div>
  );
};

export default Header;
