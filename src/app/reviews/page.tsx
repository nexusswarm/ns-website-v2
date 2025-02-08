import TestimonialCard from '@/components/TestimonialCard'
import { testinomial } from '@/lib/testimonials'
import React from 'react'

const AllTestinomials = () => {
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
        <div className='grid grid-cols-1 sm:grid-cols-3 gap-10'>
        {testinomial.map((item) => (<TestimonialCard key={item.id} name={item.name} review={item.review} />))}
        </div>

        <span className='pt-6 font-bold text-xl hover:text-white text-gray-100/60 cursor-pointer transition-all transition-color'>See more</span>
</div>
  )
}

export default AllTestinomials