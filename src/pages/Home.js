//Will include Hero, Featured and Trending
import React from 'react'
import Featured from '../components/Featured'
import Hero from '../components/Hero'
import Trending from '../components/Trending'

function Home() {
  return (
    <div className='home-wrapper'>
        <Hero/>
        <Featured/>
        <Trending/>
    </div>
  )
}

export default Home