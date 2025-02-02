import { useState } from "react";
import { Menu, X } from "lucide-react"; // Icons for hamburger menu

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="flex items-center justify-between p-4 bg-white shadow-md">
      
      {/* Left Section: Logo */}
      <div className="text-2xl font-bold text-lime-500">AyeshaPRO</div>

      {/* Right Section: Hamburger Menu (Hidden on Large Screens) */}
      <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Navigation Links - Mobile & Desktop */}
      <div className={`absolute md:static top-16 left-0 w-full bg-white md:bg-transparent shadow-md md:shadow-none p-4 md:p-0 ${isOpen ? "block" : "hidden"} md:flex md:items-center md:justify-center`}>
        <ul className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-6 text-gray-700">
          <li><a href="#" className="hover:text-lime-500">Home</a></li>
          <li><a href="#" className="hover:text-lime-500">Info</a></li>
          <li><a href="#" className="hover:text-lime-500">Pricing</a></li>
          <li><a href="#" className="hover:text-lime-500">Teacher</a></li>
          <li><a href="#" className="hover:text-lime-500">Review</a></li>
          <li><a href="#" className="hover:text-lime-500">Contact</a></li>
        </ul>
      </div>

      {/* Buttons - Visible only on larger screens */}
      <div className="hidden md:flex space-x-4">
        <button className="p-2 text-lime-500 hover:text-lime-600 font-bold rounded-md">Login</button>
        <button className="p-2 bg-lime-500 hover:bg-lime-600 font-bold text-white rounded-md">SignUp</button>
      </div>
    </nav>
  );
}

