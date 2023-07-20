import React from 'react'
import './ALLBooks/AllBooks.scss'

const ImaginedWriter = (props) => {
  return (

    <div className='oneBook_body' >
        <h1>Writer {props.number}</h1>
        <h2>{props.state.first_name}</h2>
        <h2>{props.state.last_name}</h2>
        <h2>{props.state.email}</h2>
        <br></br>
        <img src={props.state.avatar}></img>
    </div>
  )
}

export default ImaginedWriter