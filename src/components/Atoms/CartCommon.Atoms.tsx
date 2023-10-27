import React from 'react';
import CustomCarousel from './Carousel.Atoms';
import ProductCard from './Productcard.Atoms';

const CartPage = ({ images, products }) => {
  return (
    <section className=" overflow-hidden">
      <div className=" px-5 py-24 ">
        <div className=" grid grid-cols-2  place-content-center gap-24">
          <div className=" ">
            <p>Home
              ›
              All products
              ›
              Blue Velvet Fully Embroidered Lehenga Set</p>
            <CustomCarousel images={images} />
          </div>
          <div className=" pr-10">
            <h2 className="text-sm title-font text-gray-500 tracking-widest">Stylease Exclusive</h2>
            <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">Blue Velvet Fully Embroidered Leheng Set</h1>

            <div className="flex items-center mb-4">
              <span className="title-font font-medium text-2xl text-gray-900">Rent</span>
              <span className="title-font font-medium text-2xl text-gray-900">$58.00</span>
            </div>

            <div className="mb-4">
              <label className="text-gray-500">Rental Duration</label>
              <input
                type="text"
                className="w-full bg-gray-100 border-2 border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-indigo-200 focus:border-indigo-500"
              />
            </div>

            <div className="mb-4">
              <label className="text-gray-500">Size</label>
              <input
                type="text"
                className="w-full bg-gray-100 border-2 border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-indigo-200 focus:border-indigo-500"
              />
            </div>

            <div className="mb-4">
              <label className="text-gray-500">Start Date</label>
              <input
                type="date"
                className="w-full bg-gray-100 border-2 border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-indigo-200 focus:border-indigo-500"
              />
            </div>

            <div className="mb-4">
              <label className="text-gray-500">return Date</label>
              <input
                type="date"
                className="w-full bg-gray-100 border-2 border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-indigo-200 focus:border-indigo-500"
              />
            </div>

            <button className="flex ml-auto text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded">Add to Cart</button>

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
      </div>
    </section>
  );
};

export default CartPage;