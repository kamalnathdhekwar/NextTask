import React from 'react'
import Link from 'next/link'
import Image from 'next/image'



const Card = ({heading, image,cardDetail,navPage,bgColor}) => {
  return (
    <div data-aos="zoom-in" data-aos-duration="1500" >
        <div className=" hover:scale-110 duration-500 cursor-pointer">
        <Link href={`/${navPage}`}>
        <div data-aos="flip-down" data-aos-duration="1000" 
         className={`w-[350px] h-48 rounded-xl  flex flex-col gap-4 p-6 bg-info-500 relative ${bgColor} shadow-md shadow-slate-800 dark:shadow-slate-400 `}>
             
             {/* image */}
             <Image
            
             src={image} 
             className='w-10 h-10 bg-white p-1 rounded-md animate-bounce'
             />

            {/* heading */}
            <h1 data-aos="slide-down" data-aos-duration="2000" 
             className="font-bold text-lg text-white">{heading}</h1>

            {/* description */}
            <p data-aos="slide-up" data-aos-duration="2000" 
            className="w-[90%] text-slate-100">{cardDetail}</p>

           
        </div>
        </Link>
        </div>
    </div>
  )
}

export default Card