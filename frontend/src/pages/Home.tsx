import React from 'react'
import Hero from '../components/Hero.tsx'
import LatesCollection from '../components/LatesCollection.tsx'
import BestSeller from '../components/BestSeller.tsx'
import OurPolicy from '../components/OurPolicy.tsx'
import NewsLetterBox from '../components/NewsLetterBox.tsx'

function Home() {
  return (
    <div>
      <Hero />
      <LatesCollection/>
      <BestSeller/>
      <OurPolicy/>
      <NewsLetterBox/>
    </div>
  )
}

export default Home
