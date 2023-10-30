/** @format */

import { useState } from "react";
import { BrowserRouter as Router, Routes, Link, Route, BrowserRouter } from "react-router-dom";
import Home from "./Pages/Home";
import BaseLayout from "./components/Layouts/BaseLayout";
import Test from "./Pages/Test";
import ProtectedNavbar from "./components/Navbar/ProtectedNavbar";
import CartLayout from "./components/Layouts/CartLayout";
import ProductList from "./Pages/Products";
import Product from "./Pages/Product";
import Login from "./Pages/Login";
import ProtectedLayout from "./components/Layouts/ProtectedLayout";
import ShoppingCart from "./Pages/ShoppingCart";
import Profile from "./Pages/Profile";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
        <Route element={<ProtectedLayout />}>
            <Route path='/login' element={<Login />} />
           
            {/* <Route path="/test" element={<Test />} /> */}
          </Route>
        <Route element={<BaseLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<ProductList />} />
            <Route path='/login' element={<Login />} />
           
           
           
            {/* <Route path="/test" element={<Test />} /> */}
          </Route>
          <Route element={<CartLayout />}>
          <Route path="/product/:id" element={<Product />} />
          <Route path='/shoppingcart' element={<ShoppingCart/>} />
          <Route path='/profile' element={<Profile />} />
         
          
          <Route path="/testing" element={<Test />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;