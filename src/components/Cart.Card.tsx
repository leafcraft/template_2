import React, { useState } from 'react';
import Icons from './Icons';

import img13 from '../assets/products/img13.png';
import img14 from '../assets/products/img14.png';

const CartCard = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const [products, setProducts] = useState( [
    {
      id: 1,
      name: 'Throwback Hip Bag',
      price: '$90.00',
      color: 'Salmon',
      imageUrl: img13,
    },
    {
      id: 2,
      name: 'Medium Stuff Satchel',
      price: '$32.00',
      color: 'Blue',
      imageUrl: img14,
    },
  ]);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handleRemoveItem = (productId) => {
    // Update the cart state to remove the item with the given productId
    const updatedProducts = products.filter((product) => product.id !== productId);
    setProducts(updatedProducts);
  };

  const calculateSubtotal = () => {
    const subtotal = products.reduce((acc, product) => acc + Number(product.price.replace(/[^\d.-]/g, '')), 0);
    return subtotal;
  };

  return (
    <div className="relative z-20 ">
      <button
        type="button"
        onClick={toggleSidebar}
        className="fixed bottom-8 right-8 bg-black p-3  text-white rounded-full focus:outline-none"
      >
        {isSidebarOpen ? (
          <span className="sr-only">Close cart</span>
        ) : (
          <span className="sr-only">Open cart</span>
        )}
        {isSidebarOpen ? (
          <svg width="33" height="32" viewBox="0 0 33 32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M30.9576 8.33412C30.7272 7.93494 30.3973 7.60229 30 7.36861C29.6028 7.13493 29.1517 7.0082 28.6909 7.00078H11.6242L10.8509 3.98745C10.7728 3.69657 10.5985 3.44071 10.3563 3.26154C10.1142 3.08238 9.8186 2.99047 9.51758 3.00078H6.85091C6.49729 3.00078 6.15815 3.14126 5.9081 3.39131C5.65805 3.64135 5.51758 3.98049 5.51758 4.33412C5.51758 4.68774 5.65805 5.02688 5.9081 5.27692C6.15815 5.52697 6.49729 5.66745 6.85091 5.66745H8.50424L12.1842 19.3475C12.2624 19.6383 12.4367 19.8942 12.6788 20.0734C12.9209 20.2525 13.2166 20.3444 13.5176 20.3341H25.5176C25.7638 20.3334 26.005 20.2645 26.2145 20.135C26.4239 20.0056 26.5934 19.8207 26.7042 19.6008L31.0776 10.8541C31.2671 10.4568 31.3554 10.0187 31.3344 9.57903C31.3135 9.13931 31.184 8.71162 30.9576 8.33412ZM24.6909 17.6674H14.5309L12.3576 9.66745H28.6909L24.6909 17.6674Z" fill="#828282"/>
          <path d="M12.8506 28.0007C13.9552 28.0007 14.8506 27.1053 14.8506 26.0007C14.8506 24.8962 13.9552 24.0007 12.8506 24.0007C11.746 24.0007 10.8506 24.8962 10.8506 26.0007C10.8506 27.1053 11.746 28.0007 12.8506 28.0007Z" fill="#828282"/>
          <path d="M26.1836 28.0007C27.2882 28.0007 28.1836 27.1053 28.1836 26.0007C28.1836 24.8962 27.2882 24.0007 26.1836 24.0007C25.079 24.0007 24.1836 24.8962 24.1836 26.0007C24.1836 27.1053 25.079 28.0007 26.1836 28.0007Z" fill="#828282"/>
          </svg>
          
        ) : (
         <Icons variant='cart' />
          
        )}
      </button>

      {isSidebarOpen && (
        <>
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" onClick={toggleSidebar}></div>
          <div className="fixed inset-0 overflow-hidden">
            <div className="absolute inset-0 overflow-hidden">
              <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
                <div className="pointer-events-auto w-screen max-w-md">
                  <div className="flex h-full flex-col overflow-y-scroll bg-white shadow-xl">
                    <div className="flex-1 overflow-y-auto px-4 py-6 sm:px-6">
                      <div className="flex items-start justify-between">
                        <h2 className="text-lg font-medium text-gray-900" id="slide-over-title">
                          Shopping cart
                        </h2>
                        <div className="ml-3 flex h-7 items-center">
                          <button
                            type="button"
                            className="relative -m-2 p-2 text-gray-400 hover:text-gray-500"
                            onClick={toggleSidebar}
                          >
                            <span className="absolute -inset-0.5"></span>
                            <span className="sr-only">Close panel</span>
                            <svg
                              className="h-6 w-6"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke-width="1.5"
                              stroke="currentColor"
                              aria-hidden="true"
                            >
                              <path d="M6 18L18 6M6 6l12 12" />
                            </svg>
                          </button>
                        </div>
                      </div>

                      <div className="mt-8">
                        <div className="flow-root">
                          <ul role="list" className="-my-6 divide-y divide-gray-200">
                            {products.map((product) => (
                              <li key={product.id} className="flex py-6">
                                <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                                  <img
                                    src={product.imageUrl}
                                    alt={`Product: ${product.name}`}
                                    className="h-full w-full object-cover object-center"
                                  />
                                </div>

                                <div className="ml-4 flex flex-1 flex-col">
                                  <div>
                                    <div className="flex justify-between text-base font-medium text-gray-900">
                                      <h3>
                                        <a href="#">{product.name}</a>
                                      </h3>
                                      <p className="ml-4">{product.price}</p>
                                    </div>
                                    <p className="mt-1 text-sm text-gray-500">{product.color}</p>
                                  </div>
                                  <div className="flex flex-1 items-end justify-between text-sm">
                                    <p className="text-gray-500">Qty 1</p>

                                    <div className="flex">
                                      <button
                                        type="button"
                                        className="font-medium text-indigo-600 hover:text-indigo-500"
                                        onClick={() => handleRemoveItem(product.id)}
                                      >
                                        Remove
                                      </button>
                                    </div>
                                  </div>
                                </div>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>

                    <div className="border-t border-gray-200 px-4 py-6 sm:px-6">
                      <div className="flex tracking-wider justify-between text-base font-semibold text-gray-900">
                      Subtotal: ${calculateSubtotal()}
                      </div>
                      <p className="mt-0.5 text-sm text-gray-500">Shipping and taxes calculated at checkout.</p>
                      <div className="mt-6">
                        <a
                          href="/shoppingcart"
                          className="flex items-center justify-center rounded-md border border-transparent bg-black px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700"
                        >
                          Checkout
                        </a>
                      </div>
                      <div className="mt-6 flex flex-col  justify-center text-center text-sm text-gray-500">
                        <p>
                          or
                          </p>
                          <button
                            type="button"
                            className="font-medium pt-2 text-indigo-600 hover:text-indigo-500"
                            onClick={toggleSidebar}
                          >
                            Continue Shopping
                            <span aria-hidden="true"> &rarr;</span>
                          </button>
                        
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default CartCard;
