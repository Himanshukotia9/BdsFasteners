import React from 'react'
import CardComp from './CardComp';

export default function Products({data}) {
  return (
    <div className='flex flex-col justify-evenly items-center space-y-4 p-6'>
        <h1 className='text-3xl font-bold font-heading py-4'>Categories</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {data.map((product) => (
            <CardComp
            imageUrl={product.imageSrc} 
            imageAlt="Product image"
            title={product.title}
          />
        ))}
        </div>
    </div>
  )
}
