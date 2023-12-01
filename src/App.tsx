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

        <Route path="/products/:slug/:id" element={<Product />} />
          <Route path='/shoppingcart' element={<ShoppingCart />} />
          <Route path='/profile' element={<Profile />} />
          <Route  path='/aboutus' element={<AboutUs />} />
          <Route path='/faqs' element={<FAQs />} />
          <Route path='/contactus' element={<ContactUs />} />
          <Route path='/terms&conditons' element={<TermsConditions />} />
         
          
          <Route path="/testing" element={<Test />} />
           
          
            {/* <Route path="/test" element={<Test />} /> */}
          </Route>
        <Route element={<BaseLayout />}>
           
           
        <Route path='/login' element={<Login />} />
           
             
            {/* <Route path="/test" element={<Test />} /> */}
          </Route>
          <Route element={<NavBar />}>
          <Route path="/" element={<Home />} />
            <Route path="/products" element={<ProductList />} />
            <Route path='/login' element={<Login />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;