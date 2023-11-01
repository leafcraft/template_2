import React from 'react'
import Carts from '../components/Atoms/Carts.atoms'


import img12 from '../assets/products/img12.png';
import img13 from '../assets/products/img13.png';
import img14 from '../../assets/products/img14.png';

const ShoppingCart = () => {

  const cartItems = [
    {
      id: 1,
      img: img12,
      name: "Blue Kurthi",
      size: "M",
      price: 259.0,
      count: 1,
    },
    {
      id: 2,
      img: img13,
      name: "Pink Border Saree",
      size: "",
      price: 259.0,
      count: 1,
    },
    // Add more items as needed
  ];
  
  return (
    <div><Carts variant={'cart-1'}  cartItems={cartItems} /></div>
  )
}

export default ShoppingCart