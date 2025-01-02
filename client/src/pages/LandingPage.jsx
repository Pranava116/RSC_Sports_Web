import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Card from '../components/Card'
import Hero from '../components/Hero'
import data from '../data.js'
import foot from '/Users/Pranava G Rao/Desktop/Full Web Dev/RSC Web/client/public/football.png'
import volley from '/Users/Pranava G Rao/Desktop/Full Web Dev/RSC Web/client/public/volleyball_new2.png'
import basket from '/Users/Pranava G Rao/Desktop/Full Web Dev/RSC Web/client/public/basketball.png'

import Logo from '../components/Logo.jsx'
import Text from '../components/Text.jsx'
import SportsCard from '../components/SportsCard.jsx'
function LandingPage() {
  const width = window.innerWidth
  const height = window.innerHeight
  return (
    <div className=' bg-transparent'>
        <Navbar/>
        <div className='flex flex-col items-center justify-center'>
            <div className='my-6 mx-6'>
            <Hero/>
          </div>
           <Logo/>
        <Text text="EVENTS"/>
      <div className='my-12 block md:flex '>
        {data.map(({title, component, desc, desc_sm}) => {
          return(
          <Card title={title} component={component} desc={desc} desc_sm={desc_sm} />
          )
        })}
        </div>
        <div className='flex-col items-center justify-center'>
          <div className=''>
          <Text text="SPORTS" />
          </div>
        
        <div className='flex flex-wrap justify-center items-center'>
          <SportsCard src={foot}/>
          <SportsCard src={volley}/>
          <SportsCard src={basket}/>
          <SportsCard/>
        </div>
      </div>
      </div>
      <Footer/>
    </div>
  )
}

export default LandingPage
