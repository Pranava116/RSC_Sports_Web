import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Card from '../components/Card'
import Hero from '../components/Hero'

function LandingPage() {
  return (
    <div>
      <Navbar/>
      <div className='flex flex-col justify-center items-center'>
      <Hero/>
      <div className='flex flex-row'>
      <Card/>
      <Card/>
      </div>
      </div>
      
    
      <Footer/>
    </div>
  )
}

export default LandingPage
