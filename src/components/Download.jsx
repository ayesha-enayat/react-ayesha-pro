import React from "react";
import DownloadImage from "../assets/download1.avif";

const Download = () => {
  return (
    <div className="container mx-auto mt-12  p-10 rounded-lg flex flex-col md:flex-row items-center justify-between">
      
      {/* Image Section */}
      <div className="flex-1 flex justify-center">
        <img src={DownloadImage} alt="Download App" className="w-64 md:w-80 rounded-full shadow-lg" />
      </div>

      {/* Text Section */}
      <div className="flex-1 text-center md:text-left p-4">
        <p className="text-2xl font-bold">Download Our Free Mobile App</p>
        <p className=" mt-2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut corporis
          esse dolorum, illum, consectetur earum provident alias dolore omnis
          quis tempore voluptatum excepturi ea numquam? Aperiam fugiat
          consequuntur nostrum odio.
        </p>

        {/* Buttons Section */}
        <div className="mt-4 flex flex-col md:flex-row gap-4">
          <button className="bg-black text-white px-4 py-2 rounded-md text-sm hover:bg-gray-800 transition">
            Get it on the App Store
          </button>
          <button className="bg-lime-600 text-white px-4 py-2 rounded-md text-sm hover:bg-lime-500 transition">
            Get it on Google Play
          </button>
        </div>
      </div>
    </div>
  );
};

export default Download;
