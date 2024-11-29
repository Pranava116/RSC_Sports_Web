import React from 'react'
import { FaPersonRunning } from "react-icons/fa6";
function Card(props) {
  return (
<div class="flex flex-col animate-slide mx-8 my-20 mt-[-30px] p-6 max-w-[500px] bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 justify-evenly sm:animate-fade-in-up">
    <div className=' flex '>
    <a href="#">
        <h5 class="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">{props.title}</h5>
    </a>
    <div className='mx-5'>
      <FaPersonRunning color='white' size={30}/>
    </div>
    </div>
    <p class="mb-3 font-normal text-wrap text-gray-500 dark:text-gray-400">{props.desc}</p>
    <div className='flex flex-row text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 '>
        <h3>Date:</h3>
        <h3 className='mx-2'>12/04/2024</h3>
    </div>
    <div className='flex flex-row my-3 text-white'>
        <h3 >Venue: </h3>
        <h3 className='mx-2'>Bengaluru</h3>
    </div>
    <button className="text-white hover:text-transparent text-2xl bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 scale-x-100transition-transform duration-300" >Know More</button>
</div>

  )
}

export default Card


/*<svg class="w-3 h-3 ms-2.5 rtl:rotate-[270deg]" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11v4.833A1.166 1.166 0 0 1 13.833 17H2.167A1.167 1.167 0 0 1 1 15.833V4.167A1.166 1.166 0 0 1 2.167 3h4.618m4.447-2H17v5.768M9.111 8.889l7.778-7.778"/>
</svg>*/

/*bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded*/