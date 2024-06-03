import React from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import Link from 'next/link';

const HeroSection = () => {
  return (

    <div className='h-screen w-full '>
        <div className="flex flex-col justify-center items-center py-20 space-y-10 ">
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

            <div className="flex flex-row gap-6">
            <Link href="/">
                <button type="button" class="py-3 px-6 inline-flex items-center gap-x-2 text-sm font-semibold rounded-full border border-transparent bg-orange-600 text-white hover:bg-gray-900 disabled:opacity-50 disabled:pointer-events-none dark:bg-orange-700 dark:text-neutral-800 hover:scale-110 hover:shadow-xl hover:shadow-slate-700 duration-500">Get Started</button>
                </Link>

                <Link href="/eventlist">
                <button className=' py-3 px-4 inline-flex items-center gap-x-2 text-sm font-semibold rounded-full border  hover:text-white border-slate-950  hover:bg-slate-900 disabled:opacity-50 disabled:pointer-events-none dark:bg-white dark:text-neutral-800    hover:scale-110 hover:shadow-xl hover:shadow-slate-700 duration-500'>Find Events</button>
                </Link>
            </div>
        </div>
    </div>
  )
}

export default HeroSection