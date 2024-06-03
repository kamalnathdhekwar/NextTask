import React from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';

const HeroSection = () => {
  return (
    <div className='h-[80%] w-full '>
        <div className="flex flex-col justify-center items-center py-20 ">
            <div className="mt-7 flex flex-col justify-center items-center md:space-y-5 space-y-2">
                <h1
                 className="lg:text-9xl md:text-7xl text-5xl t font-extrabold  font-sans  animate-bounce">
                    <span className=' text-orange-600  '>Event </span>
                    <span className=' text-slate-900 dark:text-slate-200'>  Manager</span>
                </h1>

                <h2 className="lg:text-2xl font- font-medium  text-slate-700 dark:text-slate-400 text-center ">
                    Organize, Search, and Explore Events 
                </h2>
            </div>
        </div>
    </div>
  )
}

export default HeroSection