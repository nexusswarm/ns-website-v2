import React from 'react';

const GetStarted = () => {
  return (
    <div className='w-full lg:w-[60%] p-4'>
      <div className='bg-gradient-to-br from-[#E7B467] to-[#D29BAE] py-8 w-full flex flex-col rounded-[60px] justify-center items-center gap-10 text-center'>
        <h2 className='uppercase font-bold text-2xl tracking-[0.4rem] text-black'>
          Are you ready?
        </h2>
        <h1 className='capitalize font-bold sm:text-5xl text-3xl'>
          Be a part of the <br /> next big thing
        </h1>
        <button className='bg-[#1F0B2F] text-[#FFFFFF] rounded-[60px] uppercase font-bold py-3 px-8 sm:px-24'>
          Get Started
        </button>
      </div>
    </div>
  );
};

export default GetStarted;
