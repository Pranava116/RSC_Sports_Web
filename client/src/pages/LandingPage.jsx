import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Card from '../components/Card'
import Hero from '../components/Hero'
import data from '../data.js'
import Logo from '../components/Logo.jsx'
import Text from '../components/Text.jsx'
function LandingPage() {
  return (
    <div className=' bg-transparent'>
        <Navbar/>
        <div className='flex flex-col items-center justify-center'>
            <div className='my-6 mx-6'>
            <Hero/>
          </div>
           <Logo/>
        <Text/>
      <div className='my-12 block md:flex '>
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
