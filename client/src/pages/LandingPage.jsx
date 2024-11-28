import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Card from '../components/Card'
import Hero from '../components/Hero'
import data from '../data.js'
function LandingPage() {
  return (
    <div>
      <Navbar/>
      <div className='flex flex-col justify-center items-center'>
      <Hero/>
      <div className='my-12 block md:flex'>
        {data.map(({title, component, desc}) => {
          return(
          <Card title={title} component={component} desc={desc} />
          )
        })}
        </div>
      </div>
      <Footer/>
    </div>
  )
}

export default LandingPage
