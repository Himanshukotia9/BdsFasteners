import React from 'react';
import { Link } from 'react-router-dom';

const AltBanner = ({ data, reverse }) => {
  return (
    <div className={`flex flex-col md:flex-row ${
        reverse ? "md:flex-row-reverse" : ""
      }  w-full max-w-6xl mx-auto py-12 px-4 sm:px-8 gap-6`}>
      <div className="flex-1 space-y-6">
        {data.heading1 && (
          <h2 className="text-2xl font-semibold text-red-600 uppercase font-heading">{data.heading1}</h2>
        )}

        {data.heading2 && (
          <h3 className="text-3xl font-bold font-heading text-white my-4 uppercase">{data.heading2}</h3>
        )}
        
        {data.mainText && (
          <p className="text-white font-primary">
            {data.mainText}
          </p>
        )}
        
        {data.bulletPoints && data.bulletPoints.length > 0 && (
          <ul className="list-none pl-3 space-y-2">
          {data.bulletPoints.map((point, index) => (
            <li key={index} className="text-white flex items-start">
              <span className="mr-4 flex-shrink-0 text-red-600">{point.icon}</span>
              <div className='space-y-2'>
                <h3 className='text-xl font-semibold uppercase font-heading'>{point.title}</h3>
                <p className='text-white font-primary pb-2'>{point.text}</p>
              </div>
            </li>
          ))}
        </ul>
        )}
        
        {data.button && (
          <Link to={data.button.link}>
            <button className="px-6 py-2 mt-6 bg-red-600 text-white rounded-md hover:bg-red-700 transition-colors duration-200 uppercase font-primary">
              {data.button.text || "Learn More"}
            </button>
          </Link>
        )}
      </div>
      
      <div className="flex-1 flex items-center justify-center">
        <div className="relative w-full h-40 pb-3/4 md:pb-0 md:h-96">
          <img 
            src={data.imageSrc}
            alt="About Bds Fasteners" 
            className="absolute w-full h-full object-cover rounded-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default AltBanner;