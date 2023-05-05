import React from 'react'
import Home from './Home'
import Navbar from '../components/Navbar'
import Catagories from '../components/Categories'
function Pages() {
  return (
    <div>
        <Navbar/>
        {/* <Home/> */}
        <Catagories/>
    </div>
  )
}

export default Pages


//Will include the current shown page