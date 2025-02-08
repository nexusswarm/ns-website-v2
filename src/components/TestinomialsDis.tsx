import React from 'react'
import TestimonialCard from './TestimonialCard'
import { testinomial } from '@/lib/testimonials'
import Link from 'next/link'
const TestinomialsDis = () => {
  return (
    <div className='flex flex-col items-center' id='testimonials'>
        <h1 className='text-[#D29BAE] uppercase text-2xl font-bold py-10'>
         Testinomials
        </h1>
            <span className='font-bold capitalize text-4xl text-center py-1 pb-14'>
            read what others 
            <br/>
            have to say
            </span>
            <div className='flex sm:flex-row gap-10 flex-col'>
            {testinomial.slice(0,3).map((item) => (<TestimonialCard key={item.id} name={item.name} review={item.review} />))}
            </div>


            <Link 
            className='pt-6 font-bold text-xl hover:text-white text-gray-100/60 cursor-pointer transition-all transition-color'
            href='/reviews'>
            <span>See more...</span></Link>
    </div>
  )
}

export default TestinomialsDis