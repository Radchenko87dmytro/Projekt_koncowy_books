import React, { Component } from "react";
import "./Title.css";

class Title extends Component {
  // render zwraca nam widok
  render() {
    return (
      <div>
        <h2 className={this.props.classTitle}>{this.props.title}</h2>
      </div>
    );
  }
}
export default Title;
