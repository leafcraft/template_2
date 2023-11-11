import React from 'react';
import Product1 from '../../assets/Product1.png';

import img6 from '../assets/products/img6.png';
import img7 from '../assets/products/img7.png';
import img8 from '../assets/products/img8.png';
import img9 from '../assets/products/img9.png';
import CartPage from '../components/Atoms/CartCommon.Atoms';



const products = [
  {
    imageUrl: img6,
    category: 'CATEGORY',
    title: 'The Catalyzer',
    price: '$16.00',
  },
  {
    imageUrl: img7,
    category: 'CATEGORY',
    title: 'Shooting Stars',
    price: '$21.15',
  },
  {
    imageUrl: img8,
    category: 'CATEGORY',
    title: 'The Catalyzer',
    price: '$16.00',
  },
  {
    imageUrl: img9,
    category: 'CATEGORY',
    title: 'Shooting Stars',
    price: '$21.15',
  },
  // Add more product data as needed
];

const items = [
  {
    id: 1,
    category: 'Stylease Exclusive',
    title: 'Blue Velvet Fully Embroidered Lehenga Set',
    price: '$58.00',
    images: [
      { original: img7, thumbnail: img7 },
      { original: img8, thumbnail: img8 },
      { original: img7, thumbnail: img7 },
    ],
    description: 'Fam locavore kickstarter distillery...',
    materialAndCare: 'Add Material and Care information here.',
    aboutProduct: 'Add information about the product here.',
    stylistNotes: 'Add Stylist\'s Notes here.',
  },
  // Add more products as needed
];



const Product = () => {
  return (
    <div>
      {/* ... other content ... */}
      <CartPage products={products} items={items} />
      {/* ... other content ... */}
    </div>
  );
};

export default Product;
