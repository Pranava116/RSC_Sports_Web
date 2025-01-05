import React from 'react'
import OpenCards from '../components/SportsCard'
import Navbar from '../components/Navbar'
import SportsCard from '../components/SportsCard'
import tt from '../assets/tt_color.png'
import basket from '../assets/bb_color.png'
import volley from '../assets/volley_color.png'

function AgonesPage() {
  return (
    <div>
        <Navbar/>
      
        <div className='flex flex-wrap'>
          <SportsCard src={basket} title="Basket Ball"/>
          <SportsCard src = {tt} title="Table Tennis"/>
          <SportsCard src = {volley} title="Volley Ball"/>
        </div>
    </div>
  )
}

export default AgonesPage
