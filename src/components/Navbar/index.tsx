import React, { useEffect, useState } from "react";
//import LOGO from "../../assets/subtl_Logo.png";
import Button from "../Button";
import Typography from "../Atoms/Typography";
import { Link } from "react-router-dom";

const Data = [
  { name: "Product", section: "product" },
  { name: "Benefits", section: "benefits" },
  { name: "Use Cases", section: "usecase" },
  { name: "Pricing", section: "costing" },
  { name: "Team", section: "team" },
];
const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

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

  return (
    <div className={`flex justify-between  items-center lg:px-20 px-6 z-30 absolute w-full max-lg:h-20 text-white`}>
      <header className="text-gray-600 body-font contents">
  <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-start justify-center">
  <nav className="hidden md:flex  flex-wrap items-center text-base justify-center">
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
        </Link>
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
};

export default Navbar;
