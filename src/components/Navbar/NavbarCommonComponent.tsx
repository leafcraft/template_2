import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Button from '../../components/Button';
import Typography from '../../components/Atoms/Typography';

import logo from '../../assets/logo.png'
import { useSelector } from 'react-redux';
import { logout } from '../graphql/query';
import { useLazyQuery } from '@apollo/client';
import { store } from '../../Store';
import { resetLoginData } from '../../Store/Reducers/LoginData';
import LogoutResponse, { setlogout } from '../../Store/Reducers/LogoutResponse';

const Data = [
  { name: "Profile", path: "/profile", key: "profile" },
  { name: "Product", path: "/products", key: "products" },
  { name: "Contact Us", path: "/contactus", key: "contact" },
  { name: "HOME", path: "/", key: "home" },
];


const NavbarCommonComponent = (props) => {
  const [showMenu, setShowMenu] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [userIsLoggedIn, setUserIsLoggedIn] = useState(false);

  const isUserLoggedIn = useSelector((data: any) => data.setLoginData?.loginData?.userDetails?.isOk);


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

  function scrollToComponent(sectionId: any) {
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


  // logout handle function
  const [loggoutUser] = useLazyQuery(logout);
  const AccessToken = useSelector((data: any) => data?.setAcessToken?.accessToken?.login?.AccessToken);
  const location = useNavigate();
  const [data, setData] = useState();


  const handleLogout = () => {

    loggoutUser({
      variables: {},
      context: {
        headers: {
          Authorization: AccessToken,
        }
      }
    }).then((res) => {

      const getData = res.data.logout.isOk;
      store.dispatch(setlogout(getData));
      setData(getData);

    })
      .catch((err) => {
        console.log(err, "err,Logout");
      })
    store.dispatch(resetLoginData());
    window.location.reload();
  }
  return (
    <>
      {(() => {
        switch (variant) {
          case 'Navbar':
            return (
              <div className={`relative top-12  z-40 `}>
                <div className={`flex justify-between h-full  items-center lg:px-20 px-6 z-30 absolute w-full max-lg:h-20 text-white  `}>
                  <header className="text-gray-600 body-font contents">
                    <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-start justify-center">
                      <nav className="hidden md:flex xl:flex-wrap items-center text-base justify-between">
                        <div className="flex">
                          <Link to="/aboutus" >
                            <Typography variant="Navbar1">ABOUT US</Typography>
                          </Link>
                          <Link to="/products" onClick={() => scrollToComponent('products')}>
                            <Typography variant="Navbar1">PRODUCTS</Typography>
                          </Link>
                          <Link to="/terms&conditons" onClick={() => scrollToComponent('women_wear')}>
                            <Typography variant="Navbar1"  >TERMS </Typography>
                          </Link>
                        </div>
                        <div className="flex ml-auto">
                          {isUserLoggedIn || data ? ( // Show Profile button if user is logged in
                            <>
                              <Link to="/profile">
                                <Typography variant="Navbar1" className="bg-black p-3 rounded-md">
                                  Profile
                                </Typography>
                              </Link>
                              <Link to="" onClick={handleLogout}>
                                <Typography variant="Navbar1" className="bg-black p-3 rounded-md">
                                  logout
                                </Typography>
                              </Link>
                            </>

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

                  {/* Hamberger menu icon */}
                  <div className=" md:hidden flex ">
                    <div className="lg:hidden z-40 ml-auto my-auto ">
                      <div
                        className={`cursor-pointer h-auto w-10 p-1 flex flex-col gap-1.5 ${showMenu ? " gap-0 mt-2 " : "gap-1 "
                          } `}
                        onClick={() => setShowMenu(!showMenu)}
                      >
                        <div
                          className={`h-1 rounded-xl transition-all duration-250 bg-white  ${showMenu ? " rotate-45 w-8 " : " w-10  "
                            } `}
                        >
                          {" "}
                        </div>
                        <div
                          className={`h-1 rounded-xl transition-all duration-250 bg-white  ${showMenu ? " -rotate-45  -mt-2.5 w-8 " : " w-10 "
                            } `}
                        >
                          {" "}
                        </div>
                        <div
                          className={`h-1 w-10 rounded-xl transition-all duration-100 bg-white ${showMenu ? "hidden " : " "
                            } `}
                        >
                          {" "}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Mobile Menu */}
                  <div
                    className={`absolute top-0 h-screen overflow-hidden bottom-0 pb-32 z-20  left-0 w-full bg-black ${showMenu ? "flex" : "hidden"
                      } flex-col gap-6 p-8 justify-between`}
                  >
                    <div className="flex flex-col gap-10 text-center py-8">
                    {Data.map((props: any) => (
                            <Link key={props.index} to={props.path} onClick={() => setIsMenuOpen(false)}>
                              <button className="text-white">

                                {props.name}

                              </button>
                            </Link>
                          ))}
                      {/* <Button
                    vairant="navbar-secondary"
                    name="Try Now"
                    section="trynow"
                    onClick={() => window.open("https://chat.subtl.ai", "_blank")}
                  /> */}
                    </div>
                  </div>
                </div></div>

            );

          case 'ProtectedNavbar':
            return (
              <header className="bg-gray-100 text-gray-600 body-font flex flex-col  justify-center">
                <div className='bg-black text-white font-Robot font-normal text-[0.50rem] md:text-sm w-full h-8 flex justify-center items-center cursor-pointer leading-6' onClick={() => { navigate('/') }}>Did you know you can make money from your personal wardrobe? Earn with us!</div>
                <div className=" px-8 md:px-12 flex gap-2 p-5 flex-row justify-between md:flex-row items-center">
                  <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
                    <img src={logo} alt='logo' className='w-20 h-auto' />
                  </a>
                  <nav className={`md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center ${isMobile && !showMenu ? 'hidden' : 'md:flex'}`}>
                    {!isMobile && (
                      <>
                        <Link to="/" onClick={() => scrollToComponent('women_wear')}>
                          <Typography variant="Navbar1"  >HOME</Typography>
                        </Link>
                        <Link to="/profile" onClick={() => scrollToComponent('mens_wear')}>
                          <Typography variant="Navbar1">PROFILE</Typography>
                        </Link>
                        <Link to="/products" onClick={() => scrollToComponent('products')}>
                          <Typography variant="Navbar1">PRODUCTS</Typography>
                        </Link>

                        <Link to="/aboutus" >
                          <Typography variant="Navbar1">ABOUT US</Typography>
                        </Link>
                      </>
                    )}
                  </nav>
                  <div className="flex flex-col md:flex-row pb-5">
                    <button className="bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0 mr-4">
                      Search
                    </button>
                    {/* <Icons variant={Search} /> */}
                    {/* <button className="bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">
                    Cart
                  </button> */}
                  </div>
                  {/* Mobile Hamburger Menu */}
                 
                  {/* Hamberger menu icon */}
                  <div className=" md:hidden flex ">
                    <div className="lg:hidden z-40 ml-auto my-auto ">
                      <div
                        className={`cursor-pointer h-auto w-10 p-1 flex flex-col gap-1.5 ${showMenu ? " gap-0 mt-2 " : "gap-1 "
                          } `}
                        onClick={() => setShowMenu(!showMenu)}
                      >
                        <div
                          className={`h-1 rounded-xl transition-all duration-250   ${showMenu ? "bg-white rotate-45 w-8 " : "bg-black w-10  "
                            } `}
                        >
                          {" "}
                        </div>
                        <div
                          className={`h-1 rounded-xl transition-all duration-250   ${showMenu ? "bg-white -rotate-45  -mt-2.5 w-8 " : " bg-black w-10 "
                            } `}
                        >
                          {" "}
                        </div>
                        <div
                          className={`h-1 w-10 rounded-xl transition-all duration-100  ${showMenu ? "bg-white hidden " : "bg-black "
                            } `}
                        >
                          {" "}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Mobile Menu */}
                  <div
                    className={`absolute top-0 h-screen overflow-hidden bottom-0 pb-32 z-20  left-0 w-full bg-black ${showMenu ? "flex" : "hidden"
                      } flex-col gap-6 p-8 justify-between`}
                  >
                    <div className="flex flex-col gap-10 text-center py-20">
                    {Data.map((props: any) => (
                            <Link key={props.index} to={props.path} onClick={() => setIsMenuOpen(false)}>
                              <button className="text-white">

                                {props.name}

                              </button>
                            </Link>
                          ))}
                      {/* <Button
                    vairant="navbar-secondary"
                    name="Try Now"
                    section="trynow"
                    onClick={() => window.open("https://chat.subtl.ai", "_blank")}
                  /> */}
                    </div>
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
                          <li key={item.key} className="block p-4 text-sm font-semibold text-gray-400 hover:bg-blue-50 hover:text-blue-600 rounded">
                            {item.name}

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
