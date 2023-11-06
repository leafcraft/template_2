import React, { useState } from 'react';

const DropdownComponent = ({ options, handleSelect }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);

  const handleDropdownSelect = (option) => {
    handleSelect(option.value);
    setSelectedOption(option.label);
    setIsDropdownOpen(false);
  };

  return (
    <div className="mb-4 w-full">
      <div className="relative">
        <input
          onClick={() => setIsDropdownOpen(!isDropdownOpen)}
          value={selectedOption || ''}
          readOnly
          className="w-full bg-gray-100 border-2 border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-indigo-200 focus:border-indigo-500"
          type="text"
          placeholder="Select an option"
        />
        <svg
          className="w-2.5 h-2.5 absolute top-3 right-3"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 10 6"
        >
          <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
        </svg>

        {isDropdownOpen && (
          <div className="absolute z-20 bg-white top-12 w-full divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700">
            <ul className="py-2 text-sm text-gray-700 dark:text-gray-200">
              {options.map((option, index) => (
                <li key={index}>
                  <a
                    href="#"
                    onClick={() => handleDropdownSelect(option)}
                    className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                  >
                    {option.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default DropdownComponent;
