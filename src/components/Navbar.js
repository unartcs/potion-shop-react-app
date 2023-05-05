import React from 'react'
import '../styles/Navbar.css'

function Navbar() {
  return (
    <div className='navbar-wrapper'>
        <h1 className='navbar-logo'>JEWELS |</h1>
        <ul className='navbar-menu'>
            <li className='navbar home'>Home</li>
            <li className='navbar browse'>Browse</li> 
            <li className='navbar contact'>Contact</li>
        </ul>
    </div>
  )
}

export default Navbar

// The browse will have a drop down menu with all the jewelry categories such as rings, amulets, earrings etc..