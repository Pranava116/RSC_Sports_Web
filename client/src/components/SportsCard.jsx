

import { Carousel } from "@material-tailwind/react";
import React, {useState} from 'react'
import {motion} from 'framer-motion'
import { CardBody, CardContainer, CardItem } from "./ui/3d-card";
import foot from '/Users/Pranava G Rao/Desktop/Full Web Dev/RSC Web/client/public/football.png'
import volley from '/Users/Pranava G Rao/Desktop/Full Web Dev/RSC Web/client/public/volleyball_new2.png'
import basket from '/Users/Pranava G Rao/Desktop/Full Web Dev/RSC Web/client/public/basketball.png'
// const SportsCard = (props) => {

//   const [expandedIndex, setExpandedIndex] = useState(null)

//   const handleCardHover = (index) => {
//     setExpandedIndex(index === expandedIndex ? -1 : index)
//   }
//   const handleCardHoverEnd = (index) => {
//     setExpandedIndex(false)
//   }

//   const cardVariants = {
//     expanded: {
//       width: "450px"
//     },
//     collapsed: {
//       width: '300px'
//     }
//   }

//   const cardImages = [volley, foot, basket, foot]
//   const CardTitle = [
//     "VolleyBall",
//     "Cricket",
//     "Basketball",
//     "Football"
//   ]
//   const cardDescriptions = [
//     'This is a description, write whatever you need here, this is just text for a test',
//     'This is a description, write whatever you need here, this is just text for a test',
//     'This is a description, write whatever you need here, this is just text for a test',
//     'This is a description, write whatever you need here, this is just text for a test',
//   ]
//   const windowSize = window.innerWidth;
//   return (
  // function mainCard(){
  //  <section className='flex flex-row bg-transparent'>

  //     <div>
  //     <CardContainer className=" w-[300px] mx-[30px] inter-var justify-center items-cent">
      
  //      <CardBody
  //       className="bg-gray-50 relative group/card w-[500px] h-[500px] dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1]  sm:w-[30rem] rounded-xl p-6 border  ">
  //       <CardItem
  //         translateZ="50"
  //         className="text-xl font-bold text-neutral-600 dark:text-white ">
  //         Cricket
  //       </CardItem>
  //       <CardItem
  //         as="p"
  //         translateZ="60"
  //         className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300">
          
  //       </CardItem>
  //       <CardItem translateZ="100" className="w-[250px] object-contain items-center mt-8">
  //         {/* {[0, 1, 2, 3 ].map((index) => {
  //           return( */}
  //             <img
  //           src={props.src}
  //           height="200"
  //           width="200"

  //           style={{
  //             marginLeft: "10px"
  //           }}
  //           className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
  //           alt="thumbnail" />
            
  //         {/* })}
  //         {  } */}
  //       </CardItem>
  //       <div className="flex justify-between items-center mt-20">
  //         <CardItem
  //           translateZ={20}
  //           // as={Link}
  //           href="https://twitter.com/mannupaaji"
  //           target="__blank"
  //           className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white">
  //           Try now →
  //         </CardItem>
  //         <CardItem
  //           translateZ={20}
  //           as="button"
  //           className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold">
  //           Sign up
  //         </CardItem>
  //       </div>
  //     </CardBody>
  //   </CardContainer>
  //     </div>
      
  //  </section>
   //}
   
//   )
// }

const SportsCard = (props) => {
  const [currentIndex, setCurrentIndex] = useState(0)
  // Sample content for the carousel
  const slides = [
    mainCard(props),
  mainCard(props),
  mainCard(props) ,
  mainCard(props),
  mainCard(props),
  mainCard(props),
  mainCard(props),

  ]
  const screenWidth = window.innerWidth
  if (screenWidth > 800 ){
    
  }
  // Handle previous and next slide change
  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % (slides.length - 3)); // Adjust for 4 visible slides
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? slides.length - 4 : prevIndex - 1 // Adjust for 4 visible slides
    );
  };
  return (
    <div className="relative w-full max-w-7xl mx-auto ">
      {/* Carousel content */}
      <div className="overflow-hidden">
        <div
          className="flex transition-all duration-500"
          style={{ transform: `translateX(-${currentIndex * 25}%)`}}
        >
          {slides.map((slide, index) => (
            <div key={index} className="w-1/4 flex-shrink-0 px-2">
              {slide}
            </div>
          ))}
        </div>
      </div>

      {/* Navigation buttons */}
      <button
        onClick={handlePrev}
        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-black text-white rounded-full p-2"
      >
        &#60;
      </button>
      <button
        onClick={handleNext}
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-black text-white rounded-full p-2"
      >
        &#62;
      </button>
    </div>
  );
}
export default SportsCard


function mainCard(props){
  return(
  <section className='flex flex-row bg-transparent'>

     <div>
     <CardContainer className=" w-[300px] mx-[30px] inter-var justify-center items-cent">
     
      <CardBody
       className="bg-gray-50 relative group/card w-[500px] h-[500px] dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1]  sm:w-[30rem] rounded-xl p-7 border  ">
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



// const SportsCard = () => {
//   const [currentIndex, setCurrentIndex] = useState(0);

//   // Sample content for the carousel
//   const slides = [
//     <div className="bg-blue-500 text-white p-10 rounded-lg">Slide 1</div>,
//     <div className="bg-red-500 text-white p-10 rounded-lg">Slide 2</div>,
//     <div className="bg-green-500 text-white p-10 rounded-lg">Slide 3</div>,
//     <div className="bg-yellow-500 text-white p-10 rounded-lg">Slide 4</div>,
//     <div className="bg-purple-500 text-white p-10 rounded-lg">Slide 5</div>,
//     <div className="bg-pink-500 text-white p-10 rounded-lg">Slide 6</div>,
//     <div className="bg-indigo-500 text-white p-10 rounded-lg">Slide 7</div>,
//   ];

//   // Handle previous and next slide change
//   const handleNext = () => {
//     setCurrentIndex((prevIndex) => (prevIndex + 1) % (slides.length - 3)); // Adjust for 4 visible slides
//   };

//   const handlePrev = () => {
//     setCurrentIndex((prevIndex) =>
//       prevIndex === 0 ? slides.length - 4 : prevIndex - 1 // Adjust for 4 visible slides
//     );
//   };

//   return (
//     <div className="relative w-full max-w-7xl mx-auto">
//       {/* Carousel content */}
//       <div className="overflow-hidden">
//         <div
//           className="flex transition-all duration-500"
//           style={{ transform: `translateX(-${currentIndex * 25}%)` }} // 100% / 4 = 25%
//         >
//           {slides.map((slide, index) => (
//             <div key={index} className="w-1/4 sm:w-1/2 lg:w-1/4 xl:w-1/5 flex-shrink-0 px-2">
//               {slide}
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* Navigation buttons */}
//       <button
//         onClick={handlePrev}
//         className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-black text-white rounded-full p-2"
//       >
//         &#60;
//       </button>
//       <button
//         onClick={handleNext}
//         className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-black text-white rounded-full p-2"
//       >
//         &#62;
//       </button>
//     </div>
//   );
// };

// export default SportsCard