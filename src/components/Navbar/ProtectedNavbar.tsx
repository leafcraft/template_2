import React, { useState, useEffect } from 'react';
import Typography from '../Atoms/Typography';
import logo from '../../assets/logo.png'
import { useNavigate } from 'react-router';
import Icons from '../Icons';
import { Link } from 'react-router-dom';

const ProtectedNavbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    // Check if the screen width is below a certain threshold (e.g., 768px) to determine if it's a mobile screen
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    // Add a listener to check for window resize
    window.addEventListener('resize', handleResize);

    // Initial check
    handleResize();

    // Clean up the listener
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  
  function scrollToComponent(sectionId:any) {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  }

  return (
    <header className="bg-gray-100 text-gray-600 body-font flex flex-col items-center justify-center">
      <div className='bg-black text-white font-Robot font-normal text-sm w-full h-8 flex justify-center items-center cursor-pointer leading-6' onClick={()=>{navigate('/')}}>Did you know you can make money from your personal wardrobe? Earn with us!</div>
      <div className="container px-12 flex flex-wrap p-5 flex-row justify-between md:flex-row items-center">
        <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
        <img src={logo} alt='logo' className='w-20 h-auto' />
        </a>
        <nav className={`md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center ${isMobile && !showMenu ? 'hidden' : 'md:flex'}`}>
          {!isMobile && (
            <>
             <Link to="/" onClick={() => scrollToComponent('women_wear')}>
          <Typography variant="Navbar1"  >WOMENS WEAR</Typography>
        </Link>
        <Link to="/" onClick={() => scrollToComponent('mens_wear')}>
          <Typography variant="Navbar1">MENS WEAR</Typography>
        </Link>
        <Link to="/products" onClick={() => scrollToComponent('products')}>
          <Typography variant="Navbar1">RENT FOR A CAUSE</Typography>
        </Link>
        <Link to="/" onClick={() => scrollToComponent('blog')}>
          <Typography variant="Navbar1">BLOG</Typography>
        </Link>
            </>
          )}
        </nav>
        <div className="flex">
          <button className="bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0 mr-4">
            Search
          </button>
          {/* <Icons variant={Search} /> */}
          <button className="bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">
            Cart
          </button>
        </div>
        {/* Mobile Hamburger Menu */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setShowMenu(!showMenu)}
            className="bg-transparent p-2 rounded-lg focus:outline-none"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {showMenu ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 12h18M3 6h18M3 18h18"
                />
              )}
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
};

export default ProtectedNavbar;
