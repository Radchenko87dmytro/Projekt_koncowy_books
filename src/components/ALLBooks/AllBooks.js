import React, { Component, useState, useMemo } from 'react'; 
import OneBook from './OneBook';
import './AllBooks.scss';
import MySelect from './MySelect';
import SearchForm from './SearchForm';


const AllBooks =(props)=> {
     
    const[selectedSort, setSelectedSort] = useState("")
    

    // function getSortedPosts() {
    //     if(selectedSort=="All") {
    //         return props.stateValue
    //     }
    // }

    // const sortedAndSearchedPosts = useMemo(() => {
    //     return props.stateValue.filter(post => post.headLine.include(searchQuery))
    // }, [searchQuery, props.stateValue])

    const  onChange = (sortValue) => {
        setSelectedSort(sortValue)
        console.log(sortValue)
        props.onChange(sortValue)
    }

    const searchFormHandler = (searchQuery)=> {
        
        console.log(searchQuery)
        console.log("work funk search...")
        props.searchFormHandler(searchQuery)
        
    }
    //setSearchQuery("")
    
        return (
            <div className='allBooks_body'>
                <div className='allBooks_border' >

                    <MySelect
                        value={selectedSort}
                        onChange={onChange}
                        defaultValue="All"
                        options={[
                            {value: "headLine", name : "By title"},
                            {value: "author", name : "By author"},

                        defaultValue="Filter by"
                        options={[
                            {value: "headLine", name : "By title"},
                            {value: "author", name : "By authot"},
                            {value: "opis", name : "By description"},
                        ]}
                    />

                    <hr></hr>
                    <hr></hr>
                    
                    <SearchForm
                        //value={searchQuery}
                        searchFormHandler={searchFormHandler}
                        placeholder="Search"
                    />

                    {/* {props.stateValue.map((stateValue, pos) => 
                        <OneBook deleteBook={()=>deleteBook(pos)}  number={pos+1}  state={stateValue} key={pos}/> 
                    )
                } */}
        
                {props.stateValue.length == 0 
                    ? 
                    <h2>Book store is empty</h2>
                    :
                    props.stateValue.map((stateValue, pos, id) => 
                        <OneBook deleteBook={()=>props.deleteBook(pos)} number={pos+1}  state={stateValue} key={pos} editBook={()=>props.editBook} pos={pos}/>
                    )
                }     
                    
                </div>
            </div>
        )
}


export default AllBooks