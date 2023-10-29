import React, { useState } from 'react';
import CustomCarousel from './Carousel.Atoms';
import ProductCard from './Productcard.Atoms';
import { useNavigate } from 'react-router';

const CartPage = ({ images, products }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false); // State to manage dropdown visibility

  const handleDropdownClick = () => {
    setIsDropdownOpen(!isDropdownOpen); // Toggle dropdown visibility
  };

  const navigate = useNavigate();
  return (
    <section className=" overflow-hidden">
      <div className=" px-5  py-8 md:py-24 ">
        <div className=" grid grid-cols-1 md:grid-cols-2   place-content-center gap-24">
          <div className="">
            <p className='pb-8 pl-4 md:pl-14'>Home
              ›
              All products
              ›
              Blue Velvet Fully Embroidered Lehenga Set</p>
           <div className='p-14'> <CustomCarousel images={images} /></div> 
          </div>
          <div className=" flex flex-col gap-4 pr-10">
            <div>            <h2 className="text-sm font-normal font-Robot pb-8 tracking-widest">Stylease Exclusive</h2>
            <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">Blue Velvet Fully Embroidered Leheng Set</h1></div>


            <div className="flex items-center gap-3 mb-4">
              <span className="font-normal font-Robot text-xl">Rent :</span>
              <span className="font-normal font-Robot text-xl">$58.00</span>
            </div>
<div className='flex gap-2'> <div className="mb-4 w-full">
              <label className="text-gray-500">Rental Duration</label>
              <input
                type="time"
                className="w-full bg-gray-100 border-2 border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-indigo-200 focus:border-indigo-500"
              />
            </div>

{/* size */}
            <div className="mb-4 w-full flex items-end"> <div className='w-full'>
      <button
        onClick={handleDropdownClick}
        className="text-black flex justify-between w-full bg-gray-100 border-2 border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-indigo-200 focus:border-indigo-500"
        type="button"
      >
        Dropdown button <svg className="w-2.5 h-2.5 ml-2.5 my-auto" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
          <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4"/>
        </svg>
      </button>

      {isDropdownOpen && ( // Display the dropdown if isDropdownOpen is true
        <div className="z-30 bg-red divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700">
          <ul className="py-2 text-sm text-gray-700 dark:text-gray-200">
            <li>
              <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Dashboard</a>
            </li>
            {/* Other list items */}
          </ul>
        </div>
      )} 
    </div>

            </div>
            </div>
           
<div className='flex gap-2'><div className="mb-4 w-full">
              <label className="text-gray-500">Start Date</label>
              <input
                type="date"
                className="w-full bg-gray-100 border-2 border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-indigo-200 focus:border-indigo-500"
              />
            </div>

            <div className="mb-4 w-full">
              <label className="text-gray-500">return Date</label>
              <input
                type="date"
                className="w-full bg-gray-100 border-2 border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-indigo-200 focus:border-indigo-500"
              />
            </div></div>
            

            <button onClick={()=> navigate('/shoppingcart')} className='bg-black text-white font-normal font-Robot p-4'> Add to cart</button>

            <div className="mt-4">
              <a href="#" className="text-gray-500">
                <i className="fab fa-facebook mr-4"></i>
              </a>
              <a href="#" className="text-gray-500">
                <i className="fab fa-twitter"></i>
              </a>
            </div>

            <div className="mt-4">
              <h2 className="text-xl font-medium mb-2">Description</h2>
              <p className="leading-relaxed">
                Fam locavore kickstarter distillery. Mixtape chillwave tumeric sriracha taximy chia microdosing tilde DIY.
                XOXO fam indxgo juiceramps cornhole raw denim forage brooklyn. Everyday carry +1 seitan poutine tumeric.
                Gastropub blue bottle austin listicle pour-over, neutra jean shorts keytar banjo tattooed umami cardigan.
              </p>
            </div>

            <div className="mt-4">
              <h2 className="text-xl font-medium mb-2">Stylist's Notes</h2>
              <p className="leading-relaxed">
                Add Stylist's Notes here.
              </p>
            </div>

            <div className="mt-4">
              <h2 className="text-xl font-medium mb-2">Material and Care</h2>
              <p className="leading-relaxed">
                Add Material and Care information here.
              </p>
            </div>

            <div className="mt-4">
              <h2 className="text-xl font-medium mb-2">About Product</h2>
              <p className="leading-relaxed">
                Add information about the product here.
              </p>
            </div>
          </div>
        </div>
        <section className="text-gray-600 body-font">
          <div className="container px-5 py-24 mx-auto">
            <div className="flex flex-wrap -m-4">
              {products.map((product, index) => (
                <ProductCard key={index} {...product} />
              ))}
            </div>
          </div>
        </section>
        <section className='flex justify-center items-center'>
          <button onClick={()=>navigate('/products')} className='bg-black text-white font-normal font-Robot p-4'> view all products</button>
        </section>
      </div>
    </section>
  );
};

export default CartPage;