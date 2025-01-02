// "use client";

// import Image from "next/image";
// import React from "react";
// import { CardBody, CardContainer, CardItem } from "./ui/3d-card";
// import Link from "next/link";

// export function SportsCard() {
//   return (
//     (<CardContainer className="inter-var">
//       <CardBody
//         className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
//         <CardItem
//           translateZ="50"
//           className="text-xl font-bold text-neutral-600 dark:text-white">
//           Make things float in air
//         </CardItem>
//         <CardItem
//           as="p"
//           translateZ="60"
//           className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300">
//           Hover over this card to unleash the power of CSS perspective
//         </CardItem>
//         <CardItem translateZ="100" className="w-full mt-4">
//           <Image
//             src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=2560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
//             height="1000"
//             width="1000"
//             className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
//             alt="thumbnail" />
//         </CardItem>
//         <div className="flex justify-between items-center mt-20">
//           <CardItem
//             translateZ={20}
//             as={Link}
//             href="https://twitter.com/mannupaaji"
//             target="__blank"
//             className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white">
//             Try now →
//           </CardItem>
//           <CardItem
//             translateZ={20}
//             as="button"
//             className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold">
//             Sign up
//           </CardItem>
//         </div>
//       </CardBody>
//     </CardContainer>)
//   );
// }

import { Carousel } from "@material-tailwind/react";
import React, {useState} from 'react'
import {motion} from 'framer-motion'
import { CardBody, CardContainer, CardItem } from "./ui/3d-card";
import foot from '/Users/Pranava G Rao/Desktop/Full Web Dev/RSC Web/client/public/football.png'
import volley from '/Users/Pranava G Rao/Desktop/Full Web Dev/RSC Web/client/public/volleyball_new2.png'
import basket from '/Users/Pranava G Rao/Desktop/Full Web Dev/RSC Web/client/public/basketball.png'
const SportsCard = (props) => {

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

  const cardImages = [volley, foot, basket, foot]
  const CardTitle = [
    "VolleyBall",
    "Cricket",
    "Basketball",
    "Football"
  ]
  const cardDescriptions = [
    'This is a description, write whatever you need here, this is just text for a test',
    'This is a description, write whatever you need here, this is just text for a test',
    'This is a description, write whatever you need here, this is just text for a test',
    'This is a description, write whatever you need here, this is just text for a test',
  ]
  const windowSize = window.innerWidth;
  return (
    
   <section className='flex flex-row bg-transparent'>
      {/* <div className='mt-12 flex flex-col md:flex-row justify-center items-center  gap-'>
        {[0, 1, 2, 3].map((index) => (
            <motion.div
            key={index}
            className={`card cursor-pointer h-[500px] bg-cover bg-center rounded-[13px] ${index === expandedIndex ? 'expanded': ''}`}
            variants={cardVariants}
            initial="collapsed"
            animate={index === expandedIndex ? 'expanded': 'collapsed'}
            transition={{duration: 0.5}}
            onHoverStart={() => handleCardHover(index)}
            onHoverEnd={() => handleCardHoverEnd(index)}
            style={{
                            //backgroundImage: <img src={{volley}} />*//*`url(${cardImages[index]})`,
                            backgroundColor: 'black',
                            marginLeft: '10px',
                            marginRight: '10px',
                            border: '1px solid gray',
            }}
          >
              <div className='card-content h-full flex flex-col justify-end'>
                  <div className='flex justify-center items-center mb-100px'>
                  <img src={cardImages[index]} style={{width: '150px', marginBottom: '120px'}}/>
                  </div>
  
                
                  <div className='card-footer rounded-b-[20px] bg-black min-h-[100px] flex flex-col items-center justify-center'>
                    <h2 className='text-xl font-semibold text-white text-center'>{CardTitle[index]}</h2>
                    <p className='text-white'>{windowSize}</p>
                    {index === expandedIndex && (
                      <p className='mt-2 text-gray-300 text-center px-[50px]'>{cardDescriptions[index]} </p>
                    )

                    }
                  </div>
              </div>
          </motion.div>
        ))}
      </div> */}

      <div>
      <CardContainer className=" w-[300px] mx-[30px] inter-var justify-center items-cent">
      
       <CardBody
        className="bg-gray-50 relative group/card w-[500px] h-[500px] dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1]  sm:w-[30rem] rounded-xl p-6 border  ">
        <CardItem
          translateZ="50"
          className="text-xl font-bold text-neutral-600 dark:text-white ">
          Cricket
        </CardItem>
        <CardItem
          as="p"
          translateZ="60"
          className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300">
          
        </CardItem>
        <CardItem translateZ="100" className="w-[250px] object-contain items-center mt-8">
          {/* {[0, 1, 2, 3 ].map((index) => {
            return( */}
              <img
            src={props.src}
            height="200"
            width="200"

            style={{
              marginLeft: "10px"
            }}
            className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
            alt="thumbnail" />
            
          {/* })}
          {  } */}
        </CardItem>
        <div className="flex justify-between items-center mt-20">
          <CardItem
            translateZ={20}
            // as={Link}
            href="https://twitter.com/mannupaaji"
            target="__blank"
            className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white">
            Try now →
          </CardItem>
          <CardItem
            translateZ={20}
            as="button"
            className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold">
            Sign up
          </CardItem>
        </div>
      </CardBody>
    </CardContainer>
      </div>
      
   </section>
   
  )
}

export default SportsCard

{/* <div className='flex flex-col justify-center items-center'>
        <div className='flex flex-col items-center justify-center max-w-[500px] h-[500px] mr-[50px] mb-[100px] ml-[50px] bg-black'>
            <img src='/football.jpg' className='object-contain w-[400px]'></img>
            <h1 className='text-white'>FootBall</h1>
        </div>
    </div> */}