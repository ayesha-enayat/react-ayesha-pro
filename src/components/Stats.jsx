import React from 'react';

const Stats = () => {
  const statsItems = [
    { id: 1, heading: '15k', description: "Happy Customers" },
    { id: 2, heading: '150k', description: "Monthly Visitors" },
    { id: 3, heading: '15', description: "Countries Worldwide" },
    { id: 4, heading: '100+', description: "Top Partner" },
  ];

  return (
    <div className="my-10 overflow-x-auto px-4 pt-12">
      <div className="flex flex-col sm:flex-row justify-center gap-8 w-full flex-wrap">
        {statsItems.map(item => (
          <div key={item.id} className="text-center flex flex-col items-center w-full sm:w-auto">
            <h3 className="font-bold text-lime-500 text-5xl">{item.heading}</h3>
            <p className="text-black">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Stats;
