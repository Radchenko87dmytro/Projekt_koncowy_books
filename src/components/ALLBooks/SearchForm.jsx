import React, {useState, useRef, useEffect} from 'react';

const SearchForm = ((props, ref) => {

    const[searchQuery, setSearchQuery] = useState("")
    const inputEl = useRef("")
    // const getSearch = ()=>{
    //     props.searchFormHandler(inputEl.current.value)
    //     console.log(inputEl.current.value)
    //     setSearchQuery(inputEl.current.value)
    // }

     
        
        
     //const searchFormHandler = (e)=>{
            
            //setSearchQuery(e.target.value)
            //props.searchFormHandler(searchQuery)
            console.log(searchQuery)         
        //}
      
         useEffect(()=>{ 
            props.searchFormHandler(searchQuery)
            }, [searchQuery])
      
     

    return (
        <div>
            <h2>Search</h2> 
            <input type="text"
                   //value={inputEl.current.value}
                   value={searchQuery}
                   //onChange={getSearch}
                   onChange={e => setSearchQuery(e.target.value)} 
                   placeholder="Search"
                   ref={inputEl}
                   >
            </input>
                    
        </div>
    );
});

export default SearchForm;