import React, { Component } from "react";
import "./Button.css";

class Button extends Component {
  render() {
    return (
      <div>
        <button className={this.props.classButton}>
          {this.props.ButtonValue}
        </button>
      </div>
    );
  }
}
export default Button;
