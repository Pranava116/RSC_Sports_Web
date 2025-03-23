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
import football from '../assets/football_color.png'
import chess from '../assets/chess_color.png'
import cri from '../assets/cricket_color.png'
import al from '../assets/ATHLETICS_color.png'
import pl from '../assets/POWER_LIFTING_color.png'
import bad from '../assets/badminton_color.png'
import kab from '../assets/kabbadi_color.png'
function AgonesPage() {
  const router = useRouter()
  return (
    <div>
        <Navbar/>
        <div className='flex flex-wrap'>
          <SportsCard src={basket.src} title="Basket Ball" additionalInfo="RNSIT boasts a dedicated basketball court, where students engage in competitive matches, refining their skills and fostering teamwork. The court serves as a hub for athleticism and camaraderie."/>
          <SportsCard src = {tt.src} title="Table Tennis"/>
          <SportsCard src = {volley.src} title="Volley Ball"/>
          <SportsCard src = {football.src} title="FootBall"/>
          <SportsCard src = {cri.src} title="Cricket"/>
          <SportsCard src = {chess.src} title="Chess"/>
          <SportsCard src = {al.src} title="Athletics"/>
          <SportsCard src = {pl.src} title="Power Lifting"/>
          <SportsCard src = {bad.src} title="Badminton"/>
          <SportsCard src = {kab.src} title="Kabbadi"/>
        </div>
        <div>
        <Footer/>
        </div>
    </div>
  )
}

export default AgonesPage
