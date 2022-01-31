import React, {Component} from 'react';

class Author extends Component {

    render() {
        return (
            <h2 className={this.props.classTitle2}>{this.props.title2}</h2>
        )
    }
}
export default Author