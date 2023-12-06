/** @format */

import { BrowserRouter as Router, Routes, Link, Route, BrowserRouter } from "react-router-dom";
import Home from "./Pages/Home";
import BaseLayout from "./components/Layouts/BaseLayout";
import Test from "./Pages/Test";
import ProductList from "./Pages/Products";
import Product from "./Pages/Product";
import Login from "./Pages/Login";
import ProtectedLayout from "./components/Layouts/ProtectedLayout";
import ShoppingCart from "./Pages/ShoppingCart";
import Profile from "./Pages/Profile";
import AboutUs from "./Pages/AboutUs";
import NavBar from "./components/Layouts/Navbar";
import FAQs from "./Pages/FAQs";
import ContactUs from "./Pages/CotactUs";
import CartCard from "./components/Cart.Card";
import TermsConditions from "./Pages/Terms&condtions";
import { useSelector } from "react-redux";
import { ABOUTUS, CONTACTUS, FAQS, HOME, LOGIN, PRODUCTID, PRODUCTS, PROFILE, SHOPPINGCART, TAC } from "./components/ConstantLinks";
import NotFound from "./Pages/PageNotFpund";

function App() {
  const isUserLoggedIn = useSelector((data:any)=> data.setLoginData?.loginData?.userDetails?.isOk);
  const isLogout = useSelector((data:any)=> data.logout);
  console.log("logout:",isLogout);
  return (
    <>
   {isUserLoggedIn || isLogout ? <CartCard /> : null } 
      <BrowserRouter>
        <Routes>
        <Route element={<ProtectedLayout />}>
        <Route path={PRODUCTID} element={<Product />} />
          <Route path={SHOPPINGCART} element={<ShoppingCart />} />
          <Route path={PROFILE} element={<Profile />} />
          <Route  path={ABOUTUS} element={<AboutUs />} />
          <Route path={FAQS} element={<FAQs />} />
          <Route path={CONTACTUS} element={<ContactUs />} />
          <Route path={TAC} element={<TermsConditions />} />
          </Route>
        <Route element={<BaseLayout />}>
        <Route path={LOGIN} element={<Login />} />
          </Route>
          <Route element={<NavBar />}>
          <Route path={HOME} element={<Home />} />
            <Route path={PRODUCTS} element={<ProductList />} />
          </Route>
          
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;