
import ProductsCommonComponent from '../components/Atoms/Products.Atoms';
// import "dotenv/config";
import img1 from '../assets/products/img1.png';
import img2 from '../assets/products/img2.png';
import img3 from '../assets/products/img3.png';
import img4 from '../assets/products/img4.png';
import img5 from '../assets/products/img5.png';
import img6 from '../assets/products/img6.png';
import img7 from '../assets/products/img7.png';
import img8 from '../assets/products/img8.png';
import img9 from '../assets/products/img9.png';
import img10 from '../assets/products/img10.png';
import img11 from '../assets/products/img11.png';
import img12 from '../assets/products/img12.png';
import img13 from '../assets/products/img13.png';
import img14 from '../assets/products/img14.png';
import Banner from '../components/ProductsComponents/banner';
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { useLazyQuery } from '@apollo/client';
import { ProductsData } from '../components/graphql/query';
import toast from 'react-hot-toast';
import { date } from 'yup';

const products = [
  {
    id: 1,
    name: 'Royal Blue Strappy Flowy Gown with Trail',
    category: 'Stylease Exclusive',
    price: 'From Rs. 3,500.00',
    imageSrc: img1,
  },
  {
    id: 2,
    name: 'Blue velvet jacket',
    category: 'The Suit Story',
    price: 'From Rs. 2,500.00',
    imageSrc: img2,
  },
  {
    id: 3,
    name: 'Neptune',
    category: 'CATEGORY',
    price: '$12.00',
    imageSrc: img3,
  },
  {
    id: 4,
    name: 'The Catalyzer',
    category: 'CATEGORY',
    price: '$16.00',
    imageSrc: img4,
  },
  {
    id: 5,
    name: 'Shooting Stars',
    category: 'CATEGORY',
    price: '$21.15',
    imageSrc: img5,
  },
  {
    id: 6,
    name: 'Neptune',
    category: 'CATEGORY',
    price: '$12.00',
    imageSrc: img6,
  },
  {
    id: 7,
    name: 'The Catalyzer',
    category: 'CATEGORY',
    price: '$16.00',
    imageSrc: img7,
  },
  {
    id: 8,
    name: 'Shooting Stars',
    category: 'CATEGORY',
    price: '$21.15',
    imageSrc: img8,
  },
  {
    id: 9,
    name: 'Neptune',
    category: 'CATEGORY',
    price: '$12.00',
    imageSrc: img9,
  },
  {
    id: 10,
    name: 'The Catalyzer',
    category: 'CATEGORY',
    price: '$16.00',
    imageSrc: img10,
  },
  {
    id: 11,
    name: 'Shooting Stars',
    category: 'CATEGORY',
    price: '$21.15',
    imageSrc: img11,
  },
  {
    id: 12,
    name: 'Neptune',
    category: 'CATEGORY',
    price: '$12.00',
    imageSrc: img12,
  },
  {
    id: 13,
    name: 'The Catalyzer',
    category: 'CATEGORY',
    price: '$16.00',
    imageSrc: img13,
  },
  {
    id: 14,
    name: 'Shooting Stars',
    category: 'CATEGORY',
    price: '$21.15',
    imageSrc: img14,
  }, // Add product data for img14
  // Add more product data here
];



// const productData = useSelector((data:any)=>data.productData);
// console.log(productData,"produuts data ");

const Products = () => {
  

  return (
    <section className="text-gray-600 body-font">
      <Banner />
      <ProductsCommonComponent variant={'products-4'}  />
    </section>
  );
}

export default Products;