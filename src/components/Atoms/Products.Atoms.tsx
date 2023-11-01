import React from 'react';
import { Link } from 'react-router-dom';

interface Product {
  id: number;
  name: string;
  category: string;
  price: string;
  imageSrc: string;
}



const ProductsCommonComponent  = (props:{variant:any, products: Product[] }) => {
  const { variant, products } = props; 
  return (
    <> {(() => {
        switch (variant) {
          case 'products-1':
            return (
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
            );

          case 'products-2':
            return (
                <div className="bg-white">
                <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
                  <h2 className="text-2xl font-bold tracking-tight text-gray-900">Customers also purchased</h2>
        
                  <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                    {products.map((product) => (
                      <div key={product.id} className="group relative">
                        <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                          <img src={product.imageSrc} alt={product.name} className="h-full w-full object-cover object-center lg:h-full lg:w-full" />
                        </div>
                        <div className="mt-4 flex justify-between">
                          <div>
                            <h3 className="text-sm text-gray-700">
                              <a href="#">
                                <span aria-hidden="true" className="absolute inset-0"></span>
                                {product.name}
                              </a>
                            </h3>
                            <p className="mt-1 text-sm text-gray-500">{product.price}</p>
                          </div>
                          <p className="text-sm font-medium text-gray-900">{product.price}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );

          default:
            return null;
        }
      })()}</>
   
   
  

  );
};

export default ProductsCommonComponent;
