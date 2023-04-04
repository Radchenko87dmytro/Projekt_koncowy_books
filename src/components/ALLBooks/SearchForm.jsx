import React, {useState} from 'react';

const SearchForm = (props) => {

    const[searchQuery, setSearchQuery] = useState("")
      
    const searchFormHandler = (event)=>{
        setSearchQuery(event.target.value)
        // setSearchQuery({
        //     ...searchQuery,
        //        "" : event.target.value,
        // })
        props.searchFormHandler(searchQuery)
        console.log(searchQuery)
        console.log(event.target.value)
    }   
       
            

    return (
        <div>
             <h2>Search</h2> 
                        <input value={searchQuery} onChange={searchFormHandler}></input>
                    
        </div>
    );
};

export default SearchForm;