import React from 'react';
import Product1 from '../../assets/Product1.png';

import img6 from '../../assets/products/img6.png';
import img7 from '../../assets/products/img7.png';
import img8 from '../../assets/products/img8.png';
import img9 from '../../assets/products/img9.png';
import CartPage from '../Atoms/CartCommon.Atoms';



const products = [
  {
    imageUrl: img8,
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
    imageUrl: img7,
    category: 'CATEGORY',
    title: 'Shooting Stars',
    price: '$21.15',
  },
  // Add more product data as needed
];

const ExamplePage = () => {
  return (
    <div>
      {/* ... other content ... */}
      <CartPage products={products} />
      {/* ... other content ... */}
    </div>
  );
};

export default ExamplePage;
