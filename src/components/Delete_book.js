import React, {Component} from 'react';

class Delete_book extends Component {

    render() {
        
const deleteBookHandler = () => {
    this.props.deleteBook() 
    }

        return (
            <button className={this.props.classDeleteBook} 
                    onClick={deleteBookHandler}>{this.props.Delete_book}
            </button>
        )
    }
}
export default Delete_book