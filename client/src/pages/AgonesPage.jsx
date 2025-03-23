'use client'
import React from 'react'
// import OpenCards from '../../components/SportsCard'
 import Navbar from '../components/Navbar'
import SportsCard from '../components/SportsCard'
import tt from '../assets/tt_color.png'
import basket from '../assets/bb_color.png'
import volley from '../assets/volley_color.png'
import { useRouter } from 'next/navigation'
import Footer from '../components/Footer'
function AgonesPage() {
  const router = useRouter()
  return (
    <div>
        <Navbar/>
        <div className='flex flex-wrap'>
          <SportsCard src={basket.src} title="Basket Ball"/>
          <SportsCard src = {tt.src} title="Table Tennis"/>
          <SportsCard src = {volley.src} title="Volley Ball"/>
        </div>
        <div>
        <Footer/>
        </div>
    </div>
  )
}

export default AgonesPage
