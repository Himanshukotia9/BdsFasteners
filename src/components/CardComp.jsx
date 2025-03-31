import React from 'react'
import { Link } from 'react-router-dom'

export default function CardComp({ 
    imageUrl, 
    imageAlt = "Card image", 
    title, 
    description, 
    buttonText = "Learn More", 
    buttonAction, 
    className = "" 
  }) {
  return (
    <div className={`overflow-hidden rounded-lg shadow-md bg-stone-800 group max-w-sm h-full w-80 flex flex-col ${className}`}>
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
        <h3 className="text-xl font-semibold mb-2 text-white font-heading">{title}</h3>
        {description && (
          <div>
            <p className="text-white mb-4">{description.mmSize}</p>
            <p className="text-white mb-4">{description.bswSize}</p>
          </div>
        )}
      </div>
      
      {/* Card Button */}
      <div className="px-4 pb-4">
        <Link to={`/products/${title}`}>
          <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded transition duration-300">
            Learn More
          </button>
        </Link>
      </div>
    </div>
  )
}