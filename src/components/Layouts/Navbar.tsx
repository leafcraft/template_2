import React from "react";
import Footer from "../Footer";
import { Navigate, useOutlet } from "react-router-dom";
import NavbarCommonComponent from "../Navbar/NavbarCommonComponent";
import { useSelector } from "react-redux";
import NotFound from "../../Pages/PageNotFpund";
import { Console } from "console";
import { Link } from "react-router-dom";
import { LOGIN, SHOPPINGCART } from "../ConstantLinks";

const NavBar = () => {
  const outlet = useOutlet();
  const isUserLoggedIn = useSelector((data:any)=> data.setLoginData?.loginData?.userDetails);
  console.log(isUserLoggedIn,"loggedin")
  return (
    <>
     <div className="flex flex-col min-h-screen justify-between">
<NavbarCommonComponent variant="Navbar3" />
<div className=" flex-grow max-w-screen overflow-hidden ">
  {outlet}
</div>
<Footer />

</div>

   </>
  )
};

export default NavBar;
