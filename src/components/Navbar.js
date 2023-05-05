import React from 'react'
import '../styles/Navbar.css'

function Navbar() {
  return (
    <div className='navbar-wrapper'>
        <h1 className='navbar-logo'>Alchemist Shack</h1>
        <ul className='navbar-menu'>
            <li className='menu-item'>Home</li>
            <li className='menu-item'>Potions</li> 
            <li className='menu-item'>Ingeridients</li>
            <li className='menu-item'>Gallery</li>
            <li className='menu-item'>Location</li>
            <li className='menu-item'>Send us a raven</li>
        </ul>
    </div>
  )
}

export default Navbar

// The browse will have a drop down menu with all the jewelry categories such as rings, amulets, earrings etc..