import React, {Component} from 'react';

class Delete_book extends React.Component {
    
    render() {
        
// const deleteBookHandler = () => {
//     this.props.deleteBook() 
//     }

        return (
            <button className={this.props.classDeleteBook} 
                    onClick={this.props.deleteBook}>{this.props.Delete_book}
            </button>
        )
    }
}
export default Delete_book