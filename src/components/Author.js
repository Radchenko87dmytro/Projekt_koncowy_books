import React, { Component } from 'react'; 
import '../var/podstawowe.scss';


class Author extends Component {
    // render zwraca nam widok 
    render() {
        return (
            <div>
                <h2 className={this.props.classAuthor}>{this.props.author}</h2>

            </div>

        )
    }
}
export default Author