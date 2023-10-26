import React from 'react';
import Banner from '../components/ProductsComponents/banner';
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
import { Link } from 'react-router-dom';

interface Product {
  id: number;
  name: string;
  category: string;
  price: string;
  imageSrc: string;
}

const products: Product[] = [
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

const ProductList: React.FC = () => {
  return (
    <section className="text-gray-600 body-font ">
    <Banner />
    <div id='women_wear' className=" px-5 py-8 mx-auto">
      <div className="flex flex-wrap ">
        {products.map((product) => (
          <div key={product.id} className="lg:w-1/4 md:w-1/3 p-7 w-full cursor-pointer" onClick={()=>console.log('pass the props')}>
            <Link to={`/product/${product.id}`}>
              <a className="flex relative h-80 rounded overflow-hidden">
                <img
                  alt="ecommerce"
                  className="object-cover object-center w-full h-full block"
                  src={product.imageSrc}
                />
              </a>
            </Link>
            <div className="mt-4 text-center">
              
              <h2 className="text-gray-900 title-font text-lg font-medium">
                {product.name}
              </h2>
              <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                {product.category}
              </h3>
              <p className="mt-1">{product.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
  );
};

export default ProductList;
