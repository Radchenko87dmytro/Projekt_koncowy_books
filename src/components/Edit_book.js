import React, {Component} from 'react';

class Edit_book extends Component {

    render() {
        return (
            <button className={this.props.classEditBook}  onClick={()=>{this.props.edit()}}>{this.props.Edit_book}</button>
        )
    }
}
export default Edit_book