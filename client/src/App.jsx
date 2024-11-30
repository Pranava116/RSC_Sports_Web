import React from 'react'
import LandingPage from './pages/LandingPage'
import { useState, useEffect } from 'react';
import {motion} from 'framer-motion'
function App() {
  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0
  });
  const [cursorVariant, setCursorVariant] = useState("default");


  useEffect(() => {
    const mouseMove = e => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY
      })
    }

    window.addEventListener("mousemove", mouseMove);

    return () => {
      window.removeEventListener("mousemove", mouseMove);
    }
  }, []);

  const variants = {
    default: {
      x: mousePosition.x - 200 ,
      y: mousePosition.y - 200,
    },
    
  }
  return (
    <div className=''>
      <motion.div className='cursor'
       variants={variants}
       animate={cursorVariant}>

      </motion.div>
      <LandingPage/>
    </div>
  )
}

export default App
