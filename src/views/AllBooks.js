import React, { Component } from 'react'; 
import OneBook from './OneBook';
class AllBooks extends Component {







    render () {
        const arr = [1,2,3,4,5]
        const books = arr.map(item => {
            return (<div key={item}>
                <p>jestem klonem {item}</p>
                <OneBook></OneBook>
            </div>)
        })
        return (
            <div>
               {books} 
            </div>
        )
    }
}

export default AllBooks