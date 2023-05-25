import React from 'react'
import WIP from "../assets/Wip.gif"

const AboutUs = () => {
  return (
    <div className='my-8'>
      <div className='text-center text-2xl font-semibold p-4'>Work in Progress</div>
      <div className='flex items-center justify-center rounded-3xl w-2/3 h-auto m-auto'>
        <img className='rounded-3xl shadow-xl drop-shadow-xl' src={WIP} alt="" />
      </div>
    </div>
  )
}

export default AboutUs;