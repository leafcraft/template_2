import { useLazyQuery } from '@apollo/client';
import React, { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { ProductsData } from '../graphql/query';
import { store } from '../../Store';
import { setProducts } from '../../Store/Reducers/ProductsData';

interface Product {
  slug: any;
  _id: string;
  name: string;
  category: string;
  price: string;
  image: string;
  type: string; // Assuming 'type' is a property in your product data
}


const ProductsCommonComponent  = (props:{variant:any }) => {
  const { variant } = props; 
  
  const [data, setData] = useState<Product[]>([]);
  const [productDetails] = useLazyQuery(ProductsData);
  const AccessToken = useSelector((data:any)=>data?.setAcessToken?.accessToken?.login?.AccessToken);

  useEffect(() => {
   
    productDetails({
      variables: {
        organisationID:"650439122f67cb537c73d076",
        isAllowed: true,
        isAdmin: false,
      },
      context: {
        headers: {
          Authorization: AccessToken,
        }
      }
    }).then((res) => {
    
      const getdata = res?.data?.products?.items || [];
      setData(getdata);
      store.dispatch(setProducts(getdata));
    }).catch((err) => {
      toast.error(err);
    });
  }, [AccessToken]); // Empty dependency array triggers the effect only on initial render



 
  return (
    <> {(() => {
        switch (variant) {
          case 'products-1':
            return (
                <div id='women_wear' className=" px-5 py-8 mx-auto">
                <div className="flex flex-wrap ">
                  {data.map((product:any) => (
                    <div key={product._id} className="lg:w-1/4 md:w-1/3 p-7 w-full cursor-pointer" onClick={()=>console.log('pass the props')}>
                      <Link to={`/products/${product.slug}/${product._id}`}>
                        <a className="flex relative h-80 rounded overflow-hidden">
                          <img
                            alt="ecommerce"
                            className="object-cover object-center w-full h-full block"
                            src={product.image}
                          />
                        </a>
                      </Link>
                      <div className="mt-4 text-center">
                        
                        <h2 className="text-gray-900 title-font text-lg font-medium">
                          {product.name}
                        </h2>
                        <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                          {product.type}
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
                    {data.map((product:any) => (
                      <div key={product._id} className="group relative">
                        <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                          <img src={product.image} alt={product.name} className="h-full w-full object-cover object-center lg:h-full lg:w-full" />
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
            case 'products-4':
            return (
              <div className=" bg-yellow-100 flex flex-col justify-center p-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {data.map((product) => (
                  <div
                    key={product._id}
                    className="bg-white p-4 rounded-md shadow-md transition duration-300 transform hover:scale-105"
                  >
                     <div className="overflow-x-hidden rounded-md relative">
                     <Link to={`/products/${product.slug}/${product._id}`} >
                                <img className="h-40 rounded-md w-full object-cover text-white" src={product.image} alt={`Product ${product._id + 1}`} />
                                </Link>
                              </div>
                    <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
                    <p className="text-gray-600">{product.price}</p>
                  </div>
                ))}
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
