import React from "react";
import Footer from "../Footer";
import { useOutlet } from "react-router-dom";
import NavbarCommonComponent from "../Navbar/NavbarCommonComponent";

const NavBar = () => {
  const outlet = useOutlet();
  return (


    <div className="flex flex-col min-h-screen justify-between">
      <NavbarCommonComponent variant="Navbar" />
      <div className=" flex-grow max-w-screen overflow-hidden ">
        {outlet}
      </div>
      <Footer />

    </div>

  );
};

export default NavBar;
