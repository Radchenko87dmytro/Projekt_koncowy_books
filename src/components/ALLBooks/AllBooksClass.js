import React, { Component } from 'react'; 
import OneBook from './OneBook';
import './AllBooks.scss';

class AllBooks extends Component {

    render () {

       const state = [
        {
        id: 1,
        headLine: "W pustyni i puszczy",
        author: "Juliusz Słowacki",
        opis: "Ksiązka długa, fajna i nudna jedocześnie. ",
       },
       {
        id: 2,
        headLine: "W pustyni",
        author: "Juliusz ",
        opis: "Ksiązka długa, . ",
       },
       {
        id: 3,
        headLine: "W pustyni i puszczy",
        author: "Juliusz Słowacki",
        opis: "Ksiązka długa, fajna i nudna jedocześnie. ",
       },
       {
        id: 4,
        headLine: "fbdfb",
        author: "dfbdfbi",
        opis: "dbdf ",
       },

    ]

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