import React from 'react';

const ContentCard = ({ 
  heading1,
  heading2, 
  mainText,
  buttonText,
  buttonAction,
  bulletPoints = [],
  imageSrc 
}) => {
  return (
    <div className="flex flex-col md:flex-row w-full max-w-6xl mx-auto p-4 gap-6 mt-12">
      <div className="flex-1 space-y-6">
        {heading1 && (
          <h2 className="text-2xl font-semibold text-white">{heading1}</h2>
        )}

        {heading2 && (
          <h3 className="text-3xl font-bold text-white my-4">{heading2}</h3>
        )}
        
        {mainText && (
          <p className="text-white">
            {mainText}
          </p>
        )}
        
        {bulletPoints && bulletPoints.length > 0 && (
          <ul className="list-disc pl-6 space-y-2">
            {bulletPoints.map((point, index) => (
              <li key={index} className="text-white">{point}</li>
            ))}
          </ul>
        )}
        
        <button 
          onClick={buttonAction || (() => alert('Button clicked!'))}
          className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors duration-200"
        >
          {buttonText || "Learn More"}
        </button>
      </div>
      
      <div className="flex-1 flex items-center justify-center">
        {/* Using a placeholder since we can't directly use external images in this interface */}
        <div className="relative w-full h-40 pb-3/4 md:pb-0 md:h-96">
          <img 
            src={imageSrc || "/api/placeholder/800/600"}
            alt="Forest treehouse with pool" 
            className="absolute w-full h-full object-cover rounded-lg"
          />
        </div>
      </div>
    </div>
  );
};

// Example usage component with sample data
const AltBanner = () => {
  const sampleData = {
    heading1: "Nature Retreats",
    heading2: "We will be with you forever",
    mainText: "It really matters and then like it really doesn't matter. What matters is the people who are sparked by it. And the people who are like offended by it, it doesn't matter.",
    buttonText: "Book Your Stay",
    bulletPoints: [
      "People are so scared to lose their hope",
      "That's the main thing people",
      "Thoughts- their perception of themselves!"
    ],
    imageSrc: "https://images.unsplash.com/photo-1589793463357-5fb813435467?q=80&w=1976&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" // Using placeholder image
  };

  return <ContentCard {...sampleData} />;
};

export default AltBanner;