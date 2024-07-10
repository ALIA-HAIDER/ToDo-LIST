import React from 'react'
import './Header.css';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <div id="top">
    <nav>Get ready to complete your daily goals</nav>
    <div>
      <Link to="/home"   className='opt'>Home</Link>
      <Link to="/About"  className='opt'>About</Link>
      <Link to="/Contact" className='opt' >Contact</Link>
  
    </div>
    </div>
  )
}

export default Header
