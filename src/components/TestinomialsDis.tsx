'use client'

import React, { useRef } from 'react'
import TestimonialCard from './TestimonialCard'
import { testinomial } from '@/lib/testimonials'

const TestimonialsDis = () => {
  const scrollRef = useRef<HTMLDivElement>(null)

  const scroll = (direction: 'left' | 'right') => {
    const container = scrollRef.current
    if (!container) return

    const scrollAmount = 300 // Adjust as needed
    container.scrollBy({
      left: direction === 'left' ? -scrollAmount : scrollAmount,
      behavior: 'smooth',
    })
  }

  return (
    <div className='flex flex-col items-center w-full overflow-x-hidden' id='testimonials'>
      <h1 className='text-[#D29BAE] uppercase text-2xl font-bold py-10'>
        Testimonials
      </h1>

      <span className='font-bold capitalize text-4xl text-center py-1 pb-14'>
        read what others 
        <br />
        have to say
      </span>

      <div className='relative w-full max-w-[100vw]'>
        {/* Left Arrow */}
        <button
          className='absolute left-2 top-1/2 transform -translate-y-1/2 z-10 p-3 bg-black/40 text-white rounded-full text-2xl hover:bg-black/60 transition-all'
          onClick={() => scroll('left')}
        >
          ←
        </button>

        {/* Horizontal Scroll Container */}
        <div
          ref={scrollRef}
          className='flex flex-row gap-6 px-12 overflow-x-auto scroll-smooth scrollbar-hide w-full'
        >
          {testinomial.map((item) => (
            <div className='min-w-[300px] flex-shrink-0' key={item.id}>
              <TestimonialCard name={item.name} review={item.review} />
            </div>
          ))}
        </div>

        {/* Right Arrow */}
        <button
          className='absolute right-2 top-1/2 transform -translate-y-1/2 z-10 p-3 bg-black/40 text-white rounded-full text-2xl hover:bg-black/60 transition-all'
          onClick={() => scroll('right')}
        >
          →
        </button>
      </div>
    </div>
  )
}

export default TestimonialsDis
