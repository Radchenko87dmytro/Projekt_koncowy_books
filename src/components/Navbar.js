import React from 'react'
import "../App.scss"
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className='navLinks'>
        <h1>Navbar panel</h1>
        
        <Link to="/">Home page</Link>
        <Link to="/AllBooks">AllBooks function component</Link>
        <Link to="/AllBooksClass">AllBooksClass component</Link>
    </div>
  )
}

export default Navbar