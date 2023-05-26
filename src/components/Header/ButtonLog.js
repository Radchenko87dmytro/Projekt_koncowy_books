import React, { useEffect } from 'react'
import { useState } from 'react'

const ButtonLog = (props) => {

    const [click, setClick] = useState(0)
    console.log(click)
    
    useEffect(()=>{
        //document.title  = `pressed ${click}`
        console.log("useEffect")
        document.h1 = ` useEffect clicks ${click}`
        // {` useEffect ${click}`}
    })
    

  return (
    <button onClick={()=> setClick(click+1)}>{props.text} {document.h1} </button>
  )
}

// ButtonLog.defaultProps = {
//     text: "LogIn"
// }

export default ButtonLog