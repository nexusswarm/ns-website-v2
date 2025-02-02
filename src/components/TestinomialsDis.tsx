import React from 'react'
import TestimonialCard from './TestimonialCard'
const TestinomialsDis = () => {
  return (
    <div className='flex flex-col items-center'>
        <h1 className='text-[#D29BAE] uppercase text-2xl font-bold py-10'>
         Testinomials
        </h1>
            <span className='font-bold capitalize text-4xl text-center py-1 pb-14'>
            read what others 
            <br/>
            have to say
            </span>
            <div className='flex sm:flex-row gap-10 flex-col'>
            <TestimonialCard />
            <TestimonialCard />
            <TestimonialCard />
            </div>
    </div>
  )
}

export default TestinomialsDis