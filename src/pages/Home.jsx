import React from 'react'
import Hero from '../components/hero/Hero'
import Popular from '../components/popular/Popular'
import Offers from '../components/offers/Offers'
import NewCollections from '../components/newcollections/NewCollections'
import Newsletter from '../components/newsletter/Newsletter'

const Home = () => {
  return (
    <div>
      <Hero/>
      <NewCollections />
      <Offers />
      <Popular />
      <Newsletter />
    </div>
  )
}

export default Home
