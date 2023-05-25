import React from 'react';

const dataItems = [
    {
        key: 1,
        text: "We provide end product solution to our clients"
    },
    {
        key: 2,
        text: "We give promised tech support after delivery of project"
    },
    {
        key: 3,
        text: "We have a team of expert who are well in their domain"
    },
    {
        key: 4,
        text: "We deliver the product with promised deadline"
    },
    {
        key: 5,
        text: "We believe in the quality of solution that industry require "
    },
]

const WhyWe = () => {
  return (
    <div className='py-8 px-8 bg-purple-700'>
        <div className='text-center'>
            <h3 className='font-semibold text-2xl text-white'>Why We</h3>
            <h2 className='font-bold text-xl'>Here is the reason, Why should you select us!</h2>
        </div>
        <div>
            {dataItems.map((e)=> {
                return(
                    <div className='flex gap-2 w-4/5 mx-auto font-semibold my-4'>
                        <div className='text-2xl border-gray-600 border-solid rounded-full bg-white px-2 shadow-2xl drop-shadow-xl max-h-9 min-w-fit'>{e.key}</div>
                        <div className='text-xl flex items-center'>{e.text}</div>
                    </div>
                )
            })}
        </div>
    </div>
  )
}

export default WhyWe;