import React from "react";
import Img1 from "../assets/img1.avif"
import Img2 from "../assets/img2.avif"
import Img3 from "../assets/img3.avif"
import Img4 from "../assets/img4.avif"


import { MdOutlineMail } from "react-icons/md";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

const Teachers = () => {
  const TeachersItems = [
    { id: 1, name: "Roy Hardy", title: "Web Developer", image: Img1 },
    { id: 2, name: "Vicki Morales", title: "App Developer", image: Img2 },
    { id: 3, name: "Donnie Houston", title: "Visual Designer", image: Img3 },
    { id: 4, name: "Jake Burke", title: "Graphic Designer", image: Img4 },
  ];

  return (
<div> 
  <p className="text-center font-bold text-3xl">See Our Teachers</p>
   
    <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4 p-8">
      
      {TeachersItems.map((teacher) => (
        <div
          key={teacher.id}
          className="flex flex-col items-center justify-center p-6 rounded-lg shadow-lg bg-gray-100"
        >
          <img
            src={
              teacher.image  
            }
            alt={teacher.name}
            className="w-24 h-24 mb-4 rounded-full"
          />
          <h2 className="text-xl font-semibold">{teacher.name}</h2>
          <p className="text-gray-500">{teacher.title}</p>
          <div className="flex space-x-4 mt-4">
            <span><MdOutlineMail /></span>
            <span><FaTwitter /></span>
            <span><FaLinkedin /></span>
            <span><FaGithub /></span>
          </div>
        </div>
      ))}
    </div>
    </div>
  );

};


export default Teachers;
