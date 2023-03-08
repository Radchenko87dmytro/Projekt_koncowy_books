import React, {Component} from 'react';

class Delete_book extends Component {

    

    render() {

const deleteBookHandler = () => {
    console.log("Delete");
    //  this.props.deleteBook()
        
    }

        return (
            <button className={this.props.Delete_book} 
                    onClick={deleteBookHandler}>{this.props.Delete_book}
            </button>
        )
    }
}
export default Delete_book