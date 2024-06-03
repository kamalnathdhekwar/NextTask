import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const Card = ({heading, image,cardDetail,navpage,bgColor}) => {
  return (
    <div>
        <div className={`w-full lg:w-3/4 h-48 rounded-xl  flex flex-col gap-4 p-6 bg-info-500 relative ${bgColor}`}>
             
             {/* image */}
             <Image
             src={image} 
             className='w-10 h-10 bg-white   py-1 pl-1 rounded-md'
             />

            {/* heading */}
            <h1 className="font-bold text-lg text-white">{heading}</h1>

            {/* description */}
            <p className="">{cardDetail}</p>

            {/* navigate link */}

           
        </div>
    </div>
  )
}

export default Card