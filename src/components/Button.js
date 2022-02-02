import React, { Component } from 'react'; 
import './Button.scss'

class Button extends Component {
  
    render() {
        return (
            <div>
                <button className={this.props.classButton}>{this.props.ButtonValue}</button>

            </div>

        )
    }
}
export default Button