import React from "react";
import Navbar from "../Navbar";
import Footer from "../Footer";
import { useOutlet } from "react-router-dom";
import { useLocation } from "react-router";

const BaseLayout = () => {

  const mainMenuItems = [
    { label: "WOMENS WEAR", section: "home" },
    { label: "MENS WEAR", section: "about" },
    { label: "RENT FOR A CAUSE", section: "services" },
    { label: "BLOG", section: "contact" },
  ];
  
  
  const outlet = useOutlet();


  return (
    <>
     
      <div className="flex flex-col min-h-screen justify-between">
      <Navbar menuItems={mainMenuItems} />
        <div className=" flex-grow max-w-screen overflow-hidden ">
          {outlet}
        </div>
        <Footer />
        
      </div>
    </>
  );
};

export default BaseLayout;
