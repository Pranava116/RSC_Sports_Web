import React, {useState} from 'react'
import {motion} from 'framer-motion'
import foot from '/Users/Pranava G Rao/Desktop/Full Web Dev/RSC Web/client/public/football.png'

const OpenCards = () => {

  const [expandedIndex, setExpandedIndex] = useState(null)

  const handleCardHover = (index) => {
    setExpandedIndex(index === expandedIndex ? -1 : index)
  }
  const handleCardHoverEnd = (index) => {
    setExpandedIndex(false)
  }

  const cardVariants = {
    expanded: {
      width: "450px"
    },
    collapsed: {
      width: '300px'
    }
  }

  const cardImages = [foot, foot, foot, foot]

  const cardDescriptions = [
    'This is a description, write whatever you need here, this is just text for a test',
    'This is a description, write whatever you need here, this is just text for a test',
    'This is a description, write whatever you need here, this is just text for a test',
    'This is a description, write whatever you need here, this is just text for a test',
  ]
  return (
   <section className='py-16 pb-[300px] bg-transparent'>
      <div className='mt-12 flex flex-col md:flex-row justify-center items-center gap-'>
        {[0, 1, 2, 3].map((index) => (
            <motion.div
            key={index}
            className={`card cursor-pointer h-[500px] bg-cover bg-center rounded-[20px] ${index === expandedIndex ? 'expanded': ''}`}
            variants={cardVariants}
            initial="collapsed"
            animate={index === expandedIndex ? 'expanded': 'collapsed'}
            transition={{duration: 0.5}}
            onHoverStart={() => handleCardHover(index)}
            onHoverEnd={() => handleCardHoverEnd(index)}
            style={{
                            backgroundImage: `url(${cardImages[index]})`,
                            backgroundColor: 'black',
                            marginLeft: '10px',
                            marginRight: '10px'

            }}
          >
              <div className='card-content h-full flex flex-col justify-end'>
                  <div className='card-footer rounded-b-[20px] bg-gray-800 bg-opacity-75 min-h-[100px] flex flex-col items-center justify-center'>
                    <h2 className='text-xl font-semibold text-white text-center'>Card {index + 1}</h2>
                    {index === expandedIndex && (
                      <p className='mt-2 text-gray-300 text-center'>{cardDescriptions[index]} </p>
                    )

                    }
                  </div>
              </div>
          </motion.div>
        ))}
      </div>
   </section>
  )
}

export default OpenCards


/* <div className='flex flex-col justify-center items-center'>
        <div className='flex flex-col items-center justify-center max-w-[500px] h-[500px] mr-[50px] mb-[100px] ml-[50px] bg-black'>
            <img src='/football.jpg' className='object-contain w-[400px]'></img>
            <h1 className='text-white'>FootBall</h1>
        </div>
    </div>*/