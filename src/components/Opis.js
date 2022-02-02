import React, { Component } from 'react';


class Opis extends Component {
    // render zwraca nam widok 
    render() {
        return (
            <div>
                <p className={this.props.classOpis}>{this.props.opisValue}</p>

            </div>

        )
    }
}
export default Opis