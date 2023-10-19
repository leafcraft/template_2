import React, { useState } from "react";
//import LOGO from "../../assets/subtl_Logo.png";
import Button from "../Button";

const Data = [
  { name: "Product", section: "product" },
  { name: "Benefits", section: "benefits" },
  { name: "Use Cases", section: "usecase" },
  { name: "Pricing", section: "costing" },
  { name: "Team", section: "team" },
];
const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <div className="bg-transparent flex justify-between text-white items-center lg:px-20 px-6 z-30 fixed w-screen max-lg:h-20">
      <header className="text-gray-600 body-font contents">
  <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-start">
    <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
      <img src='' alt="logo" />
      <span className="ml-3 text-xl">Logo text</span>
    </a>
    <nav className="md:ml-auto hidden md:flex  flex-wrap items-center text-base justify-center">
      <a className="mr-5 hover:text-gray-900">First Link</a>
      <a className="mr-5 hover:text-gray-900">Second Link</a>
      <a className="mr-5 hover:text-gray-900">Third Link</a>
      <a className="mr-5 hover:text-gray-900">Fourth Link</a>
    </nav>
    <button className=" hidden md:inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">Button
      <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-1" viewBox="0 0 24 24">
        <path d="M5 12h14M12 5l7 7-7 7"></path>
      </svg>
    </button>
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
};

export default Navbar;
