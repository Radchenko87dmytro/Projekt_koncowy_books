import React, { useState } from "react";
import OneBook from "./OneBook";
import "./AllBooks.css";
import MySelect from "./MySelect";
import SearchForm from "./SearchForm";

const AllBooks = (props) => {
  const [selectedSort, setSelectedSort] = useState("");

  const onChange = (sortValue) => {
    setSelectedSort(sortValue);
    props.onChange(sortValue);
  };

  return (
    <div className="allBooks_body">
      <div className="allBooks_border">
        <MySelect
          value={selectedSort}
          onChange={onChange}
          //defaultValue="All"
          options={[
            //{value: "All", name : "All"},
            { value: "headLine", name: "By title" },
            { value: "author", name: "By authot" },
            { value: "opis", name: "By description" },
          ]}
        />

        <SearchForm searchFormHandler={props.searchFormHandler} />

        {/* {props.stateValue.map((stateValue, pos) => 
                        <OneBook deleteBook={()=>deleteBook(pos)}  number={pos+1}  state={stateValue} key={pos}/> 
                    )
                } */}

        {props.stateValue.length === 0 ? (
          <h2>Book store is empty</h2>
        ) : (
          props.stateValue.map((el, pos) => (
            <OneBook
              deleteBook={() => props.deleteBook(pos)}
              number={pos + 1}
              state={el}
              key={el.id}
              editBook={() => props.editBook}
              pos={pos}
              //  id={idItem}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default AllBooks;
