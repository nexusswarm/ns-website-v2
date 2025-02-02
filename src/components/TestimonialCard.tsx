import React from 'react'
import Image from 'next/image'
import TestImg from '../../public/ss.png'
const TestimonialCard = () => {
  return (
    <div className='flex flex-col items-center'>
         <Image src={TestImg} alt='avatar'
            className='rounded-full flex -mb-16 z-20 w-[138px] h-[127px]'
            />
    <div className='bg-[#1F0B2F] h-[328px] w-[345px] rounded-2xl flex flex-col justify-center items-center'>
        <div className='px-8 text-center '>

        <h1 className='text-[#AAD9D9] text-xl font-bold uppercase pt-4 pb-4'>
            {/* name of the person */}
            olivia cole
        </h1>
        <p className='text-lg leading-7'>
            {/* description */}
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ullamcorper scelerisque mi, in malesuada felis malesuada vel. 
        </p>
        </div>
       
    </div></div>
  )
}

export default TestimonialCard