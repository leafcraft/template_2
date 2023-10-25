import React from 'react';
import Banner from '../components/ProductsComponents/banner';
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
    name: 'The Catalyzer',
    category: 'CATEGORY',
    price: '$16.00',
    imageSrc: 'https://dummyimage.com/420x260',
  },
  {
    id: 2,
    name: 'Shooting Stars',
    category: 'CATEGORY',
    price: '$21.15',
    imageSrc: 'https://dummyimage.com/421x261',
  },
  {
    id: 3,
    name: 'Neptune',
    category: 'CATEGORY',
    price: '$12.00',
    imageSrc: 'https://dummyimage.com/422x262',
  },
  {
    id: 4,
    name: 'The Catalyzer',
    category: 'CATEGORY',
    price: '$16.00',
    imageSrc: 'https://dummyimage.com/420x260',
  },
  {
    id: 5,
    name: 'Shooting Stars',
    category: 'CATEGORY',
    price: '$21.15',
    imageSrc: 'https://dummyimage.com/421x261',
  },
  {
    id: 6,
    name: 'Neptune',
    category: 'CATEGORY',
    price: '$12.00',
    imageSrc: 'https://dummyimage.com/422x262',
  },
  {
    id: 7,
    name: 'The Catalyzer',
    category: 'CATEGORY',
    price: '$16.00',
    imageSrc: 'https://dummyimage.com/420x260',
  },
  {
    id: 8,
    name: 'Shooting Stars',
    category: 'CATEGORY',
    price: '$21.15',
    imageSrc: 'https://dummyimage.com/421x261',
  },
  {
    id: 9,
    name: 'Neptune',
    category: 'CATEGORY',
    price: '$12.00',
    imageSrc: 'https://dummyimage.com/422x262',
  },
  // Add more product data here
];

const ProductList: React.FC = () => {
  return (
    <section className="text-gray-600 body-font">
    <Banner />
    <div className="container px-5 py-24 mx-auto">
      <div className="flex flex-wrap -m-4">
        {products.map((product) => (
          <div key={product.id} className="lg:w-1/4 md:w-1/3 p-4 w-full">
            <Link to={`/product/${product.id}`}>
              <a className="block relative h-48 rounded overflow-hidden">
                <img
                  alt="ecommerce"
                  className="object-cover object-center w-full h-full block"
                  src={product.imageSrc}
                />
              </a>
            </Link>
            <div className="mt-4">
              <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                {product.category}
              </h3>
              <h2 className="text-gray-900 title-font text-lg font-medium">
                {product.name}
              </h2>
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
