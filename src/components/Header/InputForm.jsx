import React, { useState } from "react";
import "./InputForm.css";

const InputForm = (props) => {
  const [titleValue, setTitleValue] = useState("");
  const [authorValue, setAuthorValue] = useState("");
  const [descriptionValue, setDescriptionValue] = useState("");

  const titleChangeHandler = (event) => {
    setTitleValue(event.target.value);
  };
  const autorChangeHandler = (event) => {
    setAuthorValue(event.target.value);
  };
  const descriptionChangeHandler = (event) => {
    setDescriptionValue(event.target.value);
  };

  const saveDataInput = (event) => {
    const inputValue = {
      headLine: titleValue,
      author: authorValue,
      opis: descriptionValue,
      id: Date.now(),
    };

    props.addBookHandler(inputValue);
    setTitleValue("");
    setAuthorValue("");
    setDescriptionValue("");
  };

  const cancelHandler = () => {
    console.log("cancel");
    props.cancelHandler();
  };

  return (
    <div className="input_form_items">
      <div className="input_wrapper">
        <div className="form_item">
          <label>Tile</label>
          <input value={titleValue} onChange={titleChangeHandler}></input>
        </div>
        <div className="form_item">
          <label>Autor</label>
          <input value={authorValue} onChange={autorChangeHandler}></input>
        </div>
        <div className="form_item">
          <label>Description</label>
          <input
            value={descriptionValue}
            onChange={descriptionChangeHandler}
          ></input>
        </div>
        <div className="form_item">
          <button className="button" onClick={saveDataInput}>
            Confirm
          </button>
          <button className="button" onClick={cancelHandler}>
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default InputForm;
