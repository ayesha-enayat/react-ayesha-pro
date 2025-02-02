import React from 'react';
import eduImage from '../assets/edu.png'; 

const Card = () => {
  const cardItems = [
    { id: 1, heading: 'Expert Instruction', description: 'The gradual accumulation of information about atomic and small-scale behaviour..', image: eduImage },
    { id: 2, heading: 'Expert Instruction', description: 'The gradual accumulation of information about atomic and small-scale behaviour..', image: eduImage },
    { id: 3, heading: 'Expert Instruction', description: 'The gradual accumulation of information about atomic and small-scale behaviour..', image: eduImage },
  ];

  return (
    <div className="my-5">
      <div className="flex flex-col md:flex-row justify-evenly gap-4 px-4">
        {cardItems.map(item => (
          <div key={item.id} className="bg-white border-2 border-lime-500 p-4 rounded-lg shadow-md hover:shadow-xl w-full sm:w-1/2 lg:w-1/3 mx-auto">
            {/* Set width for different screen sizes */}
            <img src={item.image} alt={item.heading} className="w-20 h-20 mx-auto mb-4" />
            <div className="p-4">
              <h3 className="text-xl font-semibold text-center">{item.heading}</h3>
              <p className="text-gray-600 text-center">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Card;
