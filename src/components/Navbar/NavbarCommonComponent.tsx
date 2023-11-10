import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Button from '../../components/Button';
import Typography from '../../components/Atoms/Typography';

import logo from '../../assets/logo.png'

const Data = [
  { name: "Product", section: "product", key: "product" },
  { name: "Benefits", section: "benefits", key: "benefits" },
  { name: "Use Cases", section: "usecase", key: "usecase" },
  { name: "Pricing", section: "costing", key: "costing" },
  { name: "Team", section: "team", key: "team" },
];


const NavbarCommonComponent  = (props) => {
  const [showMenu, setShowMenu] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [userIsLoggedIn, setUserIsLoggedIn] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
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

  // protactive navbar
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
  
  //Navbar3
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const { variant, products } = props; 
  return (
    <>
     {(() => {
        switch (variant) {
          case 'Navbar':
            return (
              <div className={`flex justify-between  items-center lg:px-20 px-6 z-30 absolute w-full max-lg:h-20 text-white`}>
              <header className="text-gray-600 body-font contents">
          <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-start justify-center">
          <nav className="hidden md:flex xl:flex-wrap items-center text-base justify-between">
            <div className="flex"> 
            <Link to="#" onClick={() => scrollToComponent('women_wear')}>
                  <Typography variant="Navbar1"  >WOMENS WEAR</Typography>
                </Link>
                <Link to="#" onClick={() => scrollToComponent('mens_wear')}>
                  <Typography variant="Navbar1">MENS WEAR</Typography>
                </Link>
                <Link to="/products" onClick={() => scrollToComponent('products')}>
                  <Typography variant="Navbar1">RENT FOR A CAUSE</Typography>
                </Link>
               
                <Link to="#" onClick={() => scrollToComponent('blog')}>
                  <Typography variant="Navbar1">BLOG</Typography>
                </Link></div>
                <div className="flex ml-auto">
                {userIsLoggedIn ? ( // Show Profile button if user is logged in
                    <Link to="/profile">
                      <Typography variant="Navbar1" className="bg-black p-3 rounded-md">
                        Profile
                      </Typography>
                    </Link>
                  ) : ( // Show Sign Up button if user is not logged in
                    <Link to="/login">
                      <Typography variant="Navbar1" className="bg-black p-3 rounded-md">
                        Sign Up
                      </Typography>
                    </Link>
                  )}
                </div>
               
              </nav>
        
          </div>
        </header>
        
              {/* Hamberger menu  */}
              <div className=" md:hidden flex ">
                <div className="lg:hidden ml-auto my-auto ">
                  <div
                    className={`cursor-pointer h-auto w-10 p-1 flex flex-col gap-1.5 ${
                      showMenu ? " gap-0 mt-2 " : "gap-1 "
                    } `}
                    onClick={() => setShowMenu(!showMenu)}
                  >
                    <div
                      className={`h-1 rounded-xl transition-all duration-250 bg-white  ${
                        showMenu ? " rotate-45 w-8 " : " w-10  "
                      } `}
                    >
                      {" "}
                    </div>
                    <div
                      className={`h-1 rounded-xl transition-all duration-250 bg-white  ${
                        showMenu ? " -rotate-45  -mt-2.5 w-8 " : " w-10 "
                      } `}
                    >
                      {" "}
                    </div>
                    <div
                      className={`h-1 w-10 rounded-xl transition-all duration-100 bg-white ${
                        showMenu ? "hidden " : " "
                      } `}
                    >
                      {" "}
                    </div>
                  </div>
                </div>
              </div>
        
              {/* Mobile Menu */}
              <div
                className={`fixed top-20 h-auto bottom-0 pb-32 z-20  left-0 w-full bg-black ${
                  showMenu ? "flex" : "hidden"
                } flex-col gap-6 p-8 justify-between`}
              >
                <div className="flex flex-col gap-10 text-center">
                  {Data.map((props: any) => (
                    <Button 
                    
                      vairant="navbar"
                      name={props.name}
                      // section={props.section}
                      onClick={(e: any) => {
                        setShowMenu(false);
        
                        let contactus = document.getElementById(props.section);
                        e.preventDefault(); // Stop Page Reloading
                        if (contactus) {
                          const elementTop =
                            contactus.getBoundingClientRect().top + window.scrollY;
                          const scrollTo = elementTop - 80;
        
                          window.scrollTo({
                            top: scrollTo,
                            behavior: "smooth",
                          });
                        }
                      }}
                      classtext=" !text-3xl"
                    />
                  ))}
                  <Button
                    vairant="navbar-secondary"
                    name="Try Now"
                    section="trynow"
                    onClick={() => window.open("https://chat.subtl.ai", "_blank")}
                  />
                </div>
              </div>
            </div>
            );

          case 'ProtectedNavbar':
            return (
              <header className="bg-gray-100 text-gray-600 body-font flex flex-col items-center justify-center">
              <div className='bg-black text-white font-Robot font-normal  text-[0.50rem] md:text-sm w-full h-8 flex justify-center items-center cursor-pointer leading-6' onClick={()=>{navigate('/')}}>Did you know you can make money from your personal wardrobe? Earn with us!</div>
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

            case 'Navbar3':
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
                        {Data.map((item) => (
                        <li key={item.key}>
                            <a href="#" className="block p-4 text-sm font-semibold text-gray-400 hover:bg-blue-50 hover:text-blue-600 rounded">
                              {item.name}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </nav>
                  </div>
                )}
              </>
              );

          default:
            return null;
        }
      })()}</>
   
   
  

  );
};

export default NavbarCommonComponent;
