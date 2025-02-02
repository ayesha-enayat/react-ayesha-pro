import React from "react";
import test1 from "../assets/test1.avif";

const Testimonial = () => {
  const cardItems = [
    {
      id: 1,
      heading: "Expert Instruction",
      description: "The gradual accumulation of information about atomic and small-scale behaviour...",
      image: test1, 
      name:"Mark Toun",
      designation: "CTO",
    },
    {
      id: 2,
      heading: "Expert Instruction",
      description: "The gradual accumulation of information about atomic and small-scale behaviour...",
      image: test1,
      name:"David Henry",
      designation: "CEO"
    },
    {
      id: 3,
      heading: "Expert Instruction",
      description: "The gradual accumulation of information about atomic and small-scale behaviour...",
      image: test1,
      name:"Robert",
      designation: "Marketing Manager"
    },
  ];

  return (
    <div className="pt-10 px-4 h-min-screen">
      {/* Section Heading */}
      <div className="text-center space-y-4">
        <p className="font-bold text-3xl">
          What our <span className="text-lime-500">clients</span> say
        </p>
        <p className="text-gray-600 max-w-xl mx-auto">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo incidunt ex placeat modi magni quia error alias, adipisci rem similique.
        </p>
      </div>

      {/* Testimonial Cards */}
      <div className="flex flex-wrap justify-center gap-6 pt-6">
        {cardItems.map((item) => (
          <div key={item.id} className="bg-white rounded-lg shadow-lg p-6 max-w-sm text-center border-2 border-lime-500">
            <p className="text-gray-700 italic">{item.description}</p>

            {/* User Info */}
            <div className="flex items-center justify-center gap-4 mt-4">
              <img src={item.image} alt="Client Testimonial" className="w-14 h-14 border-2 border-lime-500 rounded-full object-cover" />
              <div className="text-left">
                <p className="font-semibold text-lg">{item.name}</p>
                <p className="text-gray-500 text-sm">{item.designation}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonial;
