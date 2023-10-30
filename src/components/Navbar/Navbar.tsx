import React, { useState } from 'react';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <nav className="bg-bg-footer w-full flex justify-between items-center h-full px-6">
        <div className="px-4 py-4 flex justify-between w-full items-center text-white relative z-10">
          {/* Your logo */}
          <div className="flex items-center justify-start space-x-3">
            <span className="bg-black rounded-full w-8 h-8"></span>
            <a href="#" className="font-medium text-xl text-white">Brand</a>
          </div>
          {/* Conditionally render the hamburger menu button on mobile screens */}
          <div className="md:hidden order-3">
            <button className="navbar-burger flex items-center text-white p-3" onClick={handleMenuToggle}>
              {isMenuOpen ? '✕' : '☰'}
            </button>
          </div>
          <div className="hidden md:flex">
            <button className="navbar-burger flex items-center text-white p-3" onClick={handleMenuToggle}>
              {/* Your menu items */}
              Women Wear
            </button>
            <button className="navbar-burger flex items-center text-white p-3" onClick={handleMenuToggle}>
              Men Wear
            </button>
            <button className="navbar-burger flex items-center text-white p-3" onClick={handleMenuToggle}>
              Offers
            </button>
          </div>
          <div>
            <a href="#" className="hidden lg:inline-block lg:ml-auto lg:mr-3 py-2 px-6 bg-gray-50 hover:bg-gray-100 text-sm text-white font-bold rounded-xl transition duration-200">
              Sign In
            </a>
            <a href="#" className="hidden lg:inline-block py-2 px-6 bg-blue-500 hover:bg-blue-600 text-sm text-white font-bold rounded-xl transition duration-200">
              Sign Up
            </a>
          </div>
        </div>
      </nav>

      {isMenuOpen && (
        <div className="navbar-menu fixed inset-0 z-50">
          <div className="navbar-backdrop fixed inset-0 bg-gray-800 opacity-25" onClick={handleMenuToggle}></div>
          <nav className="fixed top-0 left-0 bottom-0 flex flex-col w-full py-6 px-6 bg-white border-r overflow-y-auto z-50">
            <button className="navbar-close text-2xl absolute top-0 right-0 p-4" onClick={handleMenuToggle}>
              ✕
            </button>
            {/* Mobile menu content */}
            <ul>
              <li>
                <a href="#" className="block p-4 text-sm font-semibold text-gray-400 hover:bg-blue-50 hover:text-blue-600 rounded">Women Wear</a>
              </li>
              <li>
                <a href="#" className="block p-4 text-sm font-semibold text-gray-400 hover:bg-blue-50 hover:text-blue-600 rounded">Men Wear</a>
              </li>
              <li>
                <a href="#" className="block p-4 text-sm font-semibold text-gray-400 hover:bg-blue-50 hover:text-blue-600 rounded">Offers</a>
              </li>
            </ul>
          </nav>
        </div>
      )}
    </>
  );
};

export default Navbar;
