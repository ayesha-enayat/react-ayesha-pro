import React from "react";
import graphics1 from "../assets/graphic1.avif"; 
import graphics2 from "../assets/graphic1.avif";
import graphics3 from "../assets/graphic1.avif";

const Course = () => {
  const courses = [
    {
      id: 1,
      title: "Graphic Design",
      description: "Learn the fundamentals of design with creative courses.",
      price: "129",
      image: graphics1,
    },
    {
      id: 2,
      title: "Web Development",
      description: "Build responsive websites with HTML, CSS, and JavaScript.",
      price: "149",
      image: graphics2,
    },
    {
      id: 3,
      title: "UI/UX Design",
      description: "Master the art of creating intuitive and attractive interfaces.",
      price: "199",
      image: graphics3,
    },
  ];

  return (
    <div> 
      <p className="text-center text-3xl pt-5 font-bold pb-5">Our popular Courses</p>
      <div className="flex flex-col md:flex-row justify-evenly gap-6 pt-10 items-center">

        {courses.map((course) => (
          <div
            key={course.id}
            className="rounded-lg shadow-lg dark:bg-gray-800 w-75" // Updated width
          >
            {/* Card Header */}
            <div className="px-4 py-2">
              <h1 className="text-2xl font-bold text-gray-800 uppercase dark:text-white">
                {course.title}
              </h1>
              <p className="mt-1 text-sm text-gray-500">{course.description}</p>
            </div>

            {/* Image Section */}
            <img
              className="w-full h-auto object-cover"
              src={course.image}
              alt={course.title}
            />

            {/* Footer Section */}
            <div className="flex items-center justify-between px-4 py-2 bg-gray-900 mt-4">
              <h1 className="text-lg font-bold text-white">${course.price}</h1>
              <button className="px-3 py-1 text-xs font-semibold text-gray-900 uppercase transition-colors duration-300 transform bg-white rounded hover:bg-gray-200">
                Add to cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Course;
