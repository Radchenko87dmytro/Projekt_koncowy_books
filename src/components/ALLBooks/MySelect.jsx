import React from 'react';

const MySelect = ({options, defaultValue, value, onChange}) => {
    
    const  onChangeHandler = (event) =>{
        console.log(event.target.value)
        onChange(event.target.value)
    }

    return (
        <div>
            <h2>Filter</h2>
             <select value={value}
                     onChange={onChangeHandler}
                     style={{padding: "20px 20px", borderRadius: "10px"}}
             >

                <option value={defaultValue}>{defaultValue}</option>
                {options.map(option =>
                    <option key={option.value} value={option.value}>
                        {option.name}
                    </option>
                )}

                {/* <option value="value2">By autor</option>
                <option value="value3">By description</option> */}

            </select>
        </div>
    );
};

export default MySelect;

