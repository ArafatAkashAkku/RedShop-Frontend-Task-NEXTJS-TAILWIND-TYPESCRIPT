import React from 'react'
import { FaQuoteLeft } from "react-icons/fa";
import { FaStar } from "react-icons/fa";

const TestimonialCard = () => {
  return (
    <div className='w-full px-4 py-10 bg-orange-50 rounded-lg'>
        <div className='mb-2'>
        <FaQuoteLeft className='text-7xl'/>
        </div>
        <div className='flex items-center gap-1 mb-2'>
        <FaStar className='text-2xl text-yellow-500'/><FaStar className='text-2xl text-yellow-500'/><FaStar className='text-2xl text-yellow-500'/><FaStar className='text-2xl text-yellow-500'/><FaStar className='text-2xl text-yellow-500'/>
        </div>
        <div>
            <p className='text-sm font-medium mb-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae facilis odit sint provident nihil animi.</p>
            <h3 className='text-2xl font-extrabold'>Lorem, ipsum dolor.</h3>
        </div>
    </div>
  )
}

export default TestimonialCard
