import React from 'react'
import Image from 'next/image'
import TestImg from '../../public/ss.png'

interface TestimonialCardProps {
  name: string,
  review: string
}

const TestimonialCard = ({name, review}:TestimonialCardProps) => {
  return (
    <div className='flex flex-col items-center hover:scale-105 transition-all duration-300 ease-in-out'>
         <Image src={TestImg} alt='avatar'
            className='rounded-full flex -mb-16 z-20 sm:w-[138px] sm:h-[127px] w-[100px] h-[100px]'
            />
    <div className='bg-[#1F0B2F] h-[328px] w-[345px] rounded-2xl flex flex-col justify-center items-center'>
        <div className='px-8 text-center '>

        <h1 className='text-[#AAD9D9] text-xl font-bold uppercase pt-4 pb-4'>
            {/* name of the person */}
           {name}
        </h1>
        <p className='text-lg leading-7'>
            {/* description */}
            {review}
        </p>
        </div>
       
    </div></div>
  )
}

export default TestimonialCard