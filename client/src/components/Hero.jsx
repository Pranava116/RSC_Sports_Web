import React from 'react'
import { TypeAnimation } from 'react-type-animation';
function Hero() {
  return (
     
    <div className=''>
      <div className='animate-fade-in-up'>
       <TypeAnimation
      sequence={[
        // Same substring at the start will only be typed out once, initially
        '',
        300, // wait 1s before replacing "Mice" with "Hamsters"
        
        "",
        1000,
        "RNSIT Sports Club Presents",
        1000,

      ]}
      wrapper="div"
      speed={30}
      style={{ fontSize: '3.4rem', display: 'block', color:"white", fontFamily: "Alkatra, system-ui"}}
      repeat={0}
      cursor='false'
    />
    </div>
    </div>
  )
}

export default Hero




