import React from 'react'
import { TypeAnimation } from 'react-type-animation';
function Hero() {
  return (
      <div className='animate-fade-in-up'>
       <TypeAnimation
      sequence={[
        // Same substring at the start will only be typed out once, initially
        '',
        300, // wait 1s before replacing "Mice" with "Hamsters"
        'RNSIT Sports Club Presents',
        1000,
        "",
        1000

      ]}
      wrapper="div"
      speed={30}
      style={{ fontSize: '3.2rem', display: 'block', color:"white"}}
      repeat={Infinity}
    />
    </div>
  )
}

export default Hero



/*<div className=''>
      <h1 className='relative w-[max-content] font-mono
before:absolute before:inset-0 before:animate-typewriter
before:bg-white
after:absolute after:inset-0 after:w-[0.125em] after:animate-caret
after:bg-blackr'>Sports Club</h1>
    </div>*/
