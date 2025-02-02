import React from 'react'

const GetStarted = () => {
  return (
    <div className='w-[55%]'>

        <div 
        className='bg-gradient-to-br from-[#E7B467] to-[#D29BAE] py-8 w-full flex flex-col rounded-[60px] justify-center items-center gap-14'>
                <h2 className='uppercase font-bold text-2xl tracking-[0.4rem] text-black'>are you ready?</h2>
                <h1 className='capitalize font-bold text-5xl text-center'>be a part of the 
                <br/>    
                next big thing
                </h1>
                <button 
                // actions
                className='bg-[#1F0B2F] text-[#FFFFFF] rounded-[60px] uppercase font-bold py-3 px-24'>
                Get Started
                </button>
        </div>
    </div>  
  )
}

export default GetStarted