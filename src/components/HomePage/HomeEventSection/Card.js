import React from 'react'
import Link from 'next/link'

const Card = ({heading, image,cardDetail,navpage}) => {
  return (
    <div>
        <div className="w-full lg:w-3/4 h-48 rounded-xl bg-indigo-400 flex flex-col gap-4 p-6 bg-info-500 relative">
            {/* heading */}
            <h1 className="font-bold text-lg text-white">{heading}</h1>

            {/* description */}
            <p className="">{cardDetail}</p>

            {/* navigate link */}

            <Link
            href={`/${navpage}`}
            >
                {heading}
            </Link>
        </div>
    </div>
  )
}

export default Card