import React from 'react';

const MySelect = ({options, defaultValue, value, onChange}) => {
<<<<<<< HEAD
    
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

                <option value="">{defaultValue}</option>
=======
    return (
        <div>
            <p>Filter</p>
             <select value={value}
                     onChange={event => onChange(event.target.value)}
             >

                <option disabled value="">{defaultValue}</option>
>>>>>>> 8e011a324f38add253ed1248892bc180e644f72a
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

