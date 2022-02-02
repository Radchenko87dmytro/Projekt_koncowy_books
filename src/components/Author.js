import React, { Component } from 'react'; 


class Author extends Component {
    // render zwraca nam widok 
    render() {
        return (
            <div>
                <h2 className={this.props.classAuthor}>{this.props.authorValue}</h2>

            </div>

        )
    }
}
export default Author