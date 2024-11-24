import React from "react";

const MySelect = ({ options, defaultValue, value, onChange }) => {
  const onChangeHandler = (event) => {
    onChange(event.target.value);
  };

  return (
    <div>
      <h2>Filter</h2>
      <select
        value="All"
        onChange={onChangeHandler}
        style={{ padding: "20px 20px", borderRadius: "10px" }}
      >
        <option value="">{defaultValue}</option>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default MySelect;
