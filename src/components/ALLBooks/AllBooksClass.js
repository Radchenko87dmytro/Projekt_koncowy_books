import React, { Component } from 'react'; 
import OneBook from './OneBook';
import './AllBooks.scss';
import MySelect from './MySelect';
import SearchForm from './SearchForm';

class AllBooks extends React.Component {

    constructor(props) 

    render () {

       

     const addBookValue = (this.props.addBook)
     console.log(addBookValue)

        return (
            <div className='allBooks_body'>
                <div className='allBooks_border'>
                    {state.map((state, index) => 
                        <OneBook number={index+1}  state={state} key={index}/> 
                    )
                }
                </div>
            </div>
        )
    }
}

export default AllBooks