import React, {Component} from 'react';

class Opis_ksiazki extends Component {

    render() {
        return (
            <p className={this.props.classOpis_ksiazki}>{this.props.Opis_ksiazki}</p>
        )
    }
}
export default Opis_ksiazki