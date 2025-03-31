import React from 'react'

export default function BulletPoint({ data }) {
  return (
    <div className='px-4 md:px-8 py-8'>
      {data && data.length > 0 && (
        <ul className="list-none pl-3 grid grid-cols-1 md:grid-cols-2 gap-8">
          {data.map((point, index) => (
            <li key={index} className="text-white flex items-start">
              <span className="mr-4 flex-shrink-0 text-red-600 size-10">{point.icon}</span>
              <div className='space-y-2'>
                <h3 className='text-xl md:text-2xl font-semibold uppercase font-heading'>{point.title}</h3>
                <p className='text-white md:text-lg font-primary pb-2'>{point.text}</p>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
