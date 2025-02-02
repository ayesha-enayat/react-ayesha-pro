


import React from 'react'
import HeroImage from '../assets/hero-bg.webp'

const Hero = () => {
  return (
    <div className="flex flex-col md:flex-row items-center px-4 py-8 bg-gray-50">
      {/* Left Section: Text */}
      <div className="w-full md:w-1/2 text-black space-y-6 px-4 py-8 flex flex-col">
        <h1 className="text-3xl md:text-4xl font-bold text-center">25K+ STUDENTS TRUST US</h1>
        <p className="text-lg md:text-xl text-center">Every day brings with it a fresh set of learning possibilities.</p>
        <div className="space-x-4 flex flex-wrap justify-center">
          <button className="bg-lime-500 border-2  hover:bg-lime-600 border-white text-white px-6 py-2 rounded mb-4 md:mb-0">Get Quote Now</button>
          <button className="bg-white border-2 border-lime  text-lime-500   hover:text-lime-600 px-6 py-2 rounded mb-4 md:mb-0">Get Quote Now</button>
        </div>
      </div>

      {/* Right Section: Image */}
      <div className="w-full md:w-1/2 px-4 py-4">
        <img src={HeroImage} alt="Hero Image" className="w-full h-full object-cover rounded-lg" />
      </div>
    </div>
  );
}

export default Hero;
