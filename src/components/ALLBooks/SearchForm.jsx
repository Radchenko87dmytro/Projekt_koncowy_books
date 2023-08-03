import React, {useState, useEffect} from 'react';

const SearchForm = ((props) => {

    const[searchQuery, setSearchQuery] = useState("")
    
         useEffect(()=>{ 
            props.searchFormHandler(searchQuery)
            }, [searchQuery])
      
    return (
        <div>
            <h2>Search</h2> 
            <input type="text"
                   value={searchQuery}
                   onChange={e => setSearchQuery(e.target.value)} 
                   placeholder="Search"
                   >
            </input>      
        </div>
    );
});

export default SearchForm;