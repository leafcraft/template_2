import React from 'react';
import { useParams } from 'react-router-dom';

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
  // Add more product data here
];

const ProductDetails: React.FC = () => {
  const { id }: id: string = useParams(); // Get the product ID from the route params

  const product = products.find((p) => p.id === parseInt(id, 10)); // Find the product with the matching ID

  if (!product) {
    // Handle the case where the product is not found
    return <div>Product not found</div>;
  }

  return (
    <div>
      <h1>{product.name}</h1>
      <p>Category: {product.category}</p>
      <p>Price: {product.price}</p>
      <img src={product.imageSrc} alt={product.name} />
    </div>
  );
};

export default ProductDetails;
