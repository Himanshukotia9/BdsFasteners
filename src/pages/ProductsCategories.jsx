import React from 'react'
import { productsPage } from '../../public/data'
import { useParams } from 'react-router-dom';
import HeroBanner from '../components/HeroBanner';

export default function ProductsCategories() {
    const {homeBanner2, products} = productsPage;
    const { title } = useParams();
    const productTitle = title;
    const product = products.find(p => p.title === productTitle);
  return (
    <>
        <HeroBanner data={homeBanner2}/>
        <div className="flex flex-col items-center justify-center md:flex-row w-full max-w-6xl m-auto py-12 px-4 sm:px-8 gap-6">
            <div className="flex-1 flex">
                <div className="relative w-80 md:w-full h-80 pb-3/4 md:pb-0 md:h-96">
                    <img 
                        src={product.imageSrc}
                        alt="About Bds Fasteners" 
                        className="absolute w-full h-full object-cover rounded-lg"
                    />
                </div>
            </div>
            <div className="flex-1 space-y-6">
                {product.title && (
                <h2 className="text-2xl font-semibold text-red-600 uppercase font-heading">{product.title}</h2>
                )}
                
                {product.sizeRange && (
                <div>
                    <h3 className='text-xl font-semibold font-heading underline'>Size Range:</h3>
                    <div className='flex space-x-2'>
                        <h4 className='text-lg font-medium font-heading'>MM Size : </h4>
                        <p className="text-white text-lg font-primary">
                            {product.sizeRange.mmSize}
                        </p>
                    </div>
                    <div className='flex space-x-2'>
                        <h4 className='text-lg font-medium font-heading'>BSW Size : </h4>
                        <p className="text-white text-lg font-primary">
                            {product.sizeRange.bswSize}
                        </p>
                    </div>
                </div>
                )}

                {product.material && (
                    <div className='flex flex-col'>
                        <h3 className='text-xl font-semibold font-heading underline'>Material : </h3>
                        <p className="text-white text-lg font-primary">
                            {product.material}
                        </p>
                    </div>
                )}

                {product.finish && (
                    <div className='flex flex-col'>
                        <h3 className='text-xl font-semibold font-heading underline'>Finish : </h3>
                        <p className="text-white text-lg font-primary">
                            {product.finish}
                        </p>
                    </div>
                )}
            </div>
        </div>
    </>
  )
}
