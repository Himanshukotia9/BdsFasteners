import React from 'react'
import { Link } from 'react-router-dom'

export default function CardComp({ 
    imageUrl, 
    imageAlt = "Card image", 
    title, 
  }) {
  return (
    <div className='overflow-hidden rounded-lg shadow-md bg-stone-800 group max-w-sm h-full w-80 flex flex-col'>
      {/* Card Image */}
      <div className="w-full h-48 overflow-hidden">
        <img 
          src={imageUrl} 
          alt={imageAlt} 
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      
      {/* Card Content */}
      <div className="p-4 flex-grow">
        <h3 className="text-xl text-center font-semibold mb-2 text-white font-heading">{title}</h3>
      </div>
      
      {/* Card Button */}
      <div className="px-4 pb-4">
        <Link to={`/products/${title}`}>
          <button className="w-full bg-red-600 hover:bg-red-700 font-primary text-white font-medium py-2 px-4 rounded transition duration-300">
            Learn More
          </button>
        </Link>
      </div>
    </div>
  )
}