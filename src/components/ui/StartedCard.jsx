import React from 'react';


const StartedCard = ({step, icon:icon, title, description}) => {
    return (
         <div className="flex items-center justify-center">
      <div className="relative bg-white rounded-2xl shadow-md p-8 w-80 text-center">
        
        {/* Step badge */}
        <div className="absolute top-4 right-4 bg-purple-600 text-white text-xs font-semibold w-8 h-8 flex items-center justify-center rounded-full">
          {step}
        </div>

        {/* Icon */}
        <div className="flex items-center justify-center mb-4">
          <div className="bg-purple-100 p-4 rounded-full text-purple-800">
           {icon}
           
          </div>
        </div>

        {/* Title */}
        <h2 className="text-lg font-semibold text-gray-800">
          {title}
        </h2>

        {/* Description */}
        <p className="text-sm text-gray-500 mt-2">
          {description}
        </p>
      </div>
    </div>
    );
};

export default StartedCard;