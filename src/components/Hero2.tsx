import React from 'react'
import Image from 'next/image'

const Hero2 = () => {
  return (
    <div className='h-auto w-full flex flex-col sm:flex-row p-10 md:p-20 items-center'>
      <div className='w-full sm:w-[40%] flex items-center justify-center sm:justify-end'>
        <Image 
          src={'/image2.png'} 
          width={500} 
          height={500} 
          alt='hero2' 
          className='max-w-full h-auto'
        />
      </div>

      <div className='w-full sm:w-[60%] px-5 sm:pl-20 text-center sm:text-left'>
        <p className='from-gradient-1 to-gradient-2 inline-block bg-gradient-to-r bg-clip-text text-transparent font-extrabold text-xl sm:text-2xl'>
          ABOUT US
        </p>
        <h1 className='text-4xl sm:text-5xl md:text-7xl font-bold py-4'>
          Building A Stronger Community, One Idea At A Time
        </h1>
        <p className='w-full sm:w-[80%] tracking-wide text-lg sm:text-xl py-1 pb-8 sm:pb-16'>
          Nexus Swarm is a student community focused on innovation, collaboration, and growth. We empower students to lead and create a lasting impact.
        </p>
        <button className='inline-flex items-center justify-center gap-2 transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 border shadow-sm hover:text-accent-foreground h-12 sm:h-9 border-blob-1 bg-blob-2 rounded-full px-12 sm:px-20 py-4 sm:py-9 text-lg sm:text-xl font-bold hover:bg-transparent'>
          Know more about us
        </button>
      </div>
    </div>
  )
}

export default Hero2
