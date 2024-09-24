import React from 'react'
import Hero from '../components/Hero'
import Shop from '../components/Shop'
import Offer from '../components/Offer'

const Home = () => {
  return (
    <div>
      {/* hero section */}
      <Hero />
      {/* shop section */}
      <Shop />
      {/* offer section */}
      <Offer />
    </div>
  )
}

export default Home