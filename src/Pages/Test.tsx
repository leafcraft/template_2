import React from "react";
import BGIMAGE from '../assets/bg-component1.svg'

const Test = () => {
  return (
    <div className="relative">
      {/* Banner Image */}
      <img
        src={BGIMAGE}
        alt="Banner Image"
        className="w-full h-auto bg-slate-600"
      />

      {/* Navigation Bar */}
      <div className="absolute top-0 left-0 right-0 bg-opacity-80 bg-black text-white p-4 z-10">
        <nav className="container mx-auto flex justify-between items-center">
          <a href="/" className="text-2xl font-bold text-white">
            Your Logo
          </a>
          <ul className="flex space-x-6">
            <li>
              <a href="#" className="hover:text-gray-400">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-400">
                About
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-400">
                Services
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-400">
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Test;
