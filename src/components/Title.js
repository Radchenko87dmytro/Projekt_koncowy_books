import React, {Component} from 'react'; 
import './Title.scss'


class Title extends Component {
// render zwraca nam widok 
    render() {
        return (
            <div>
  <h1 className={this.props.classTitle}>{this.props.title}</h1>
            
            </div>
          
        )
    }
}
export default Title