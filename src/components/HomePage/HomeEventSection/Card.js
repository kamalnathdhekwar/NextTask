import React from 'react'
import Link from 'next/link'
import Image from 'next/image'



const Card = ({heading, image,cardDetail,navPage,bgColor}) => {
  return (
    <div data-aos="zoom-in" data-aos-duration="1500" >
        <div className=" hover:scale-110 duration-500 cursor-pointer">
        <Link href={`/${navPage}`}>
        <div data-aos="flip-down" data-aos-duration="1000" 
         className={`w-full h-48 rounded-xl  flex flex-col gap-4 p-6 bg-info-500 relative ${bgColor} shadow-md shadow-slate-800 `}>
             
             {/* image */}
             <Image
            
             src={image} 
             className='w-10 h-10 bg-white   py-1 pl-1 rounded-md'
             />

            {/* heading */}
            <h1 data-aos="slide-down" data-aos-duration="2000" 
             className="font-bold text-lg text-white">{heading}</h1>

            {/* description */}
            <p data-aos="slide-up" data-aos-duration="2000" 
            className="">{cardDetail}</p>

           
        </div>
        </Link>
        </div>
    </div>
  )
}

export default Card