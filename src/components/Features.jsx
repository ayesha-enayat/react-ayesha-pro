import React from 'react'
import HeroImage from '../assets/kid.png'

const Hero = () => {
  return (
    <section className="flex flex-col md:flex-row items-center px-4 py-8 bg-gray-50">
      {/* Left Section: Text */}
      <div className="w-full md:w-1/2 text-black space-y-6 px-4 py-8 flex flex-col">
        <h1 className="text-3xl md:text-4xl font-bold text-center">Every Client Matters</h1>
        <p className="text-lg md:text-xl text-center">Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics.</p>
        <div className="space-x-4 flex flex-wrap justify-center">
          <button className="bg-lime-500 border-2  hover:bg-lime-600 border-white text-white px-6 py-2 rounded mb-4 md:mb-0">Learn More</button>
        </div>
      </div>

      {/* Right Section: Image */}
      <div className="w-full md:w-1/2 px-4 py-4 flex justify-center items-center">
        <img src={HeroImage} alt="Hero Image" className="w-full h-full object-cover rounded-lg" />
      </div>
    </section>
  );
}

export default Hero;
