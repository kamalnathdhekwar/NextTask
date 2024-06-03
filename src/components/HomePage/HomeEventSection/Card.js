import React from 'react'
import Link from 'next/link'

const Card = () => {
  return (
    <div>
        <div className="w-48 h-48 bg-slate-300">
            {/* heading */}
            <h1 className="text-5xl">this is heaibng</h1>

            {/* description */}
            <p className=""></p>

            {/* navigate link */}

            <Link
            href="/eventform"
            >
                view more
            </Link>
        </div>
    </div>
  )
}

export default Card