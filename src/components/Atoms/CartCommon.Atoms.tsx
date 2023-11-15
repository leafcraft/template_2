import React, { useState } from 'react';
import CustomCarousel from './Carousel.Atoms';
import ProductCard from './Productcard.Atoms';
import { useNavigate } from 'react-router';
import DropdownComponent from '../../components/Atoms/Dropdown';
import { useDispatch } from 'react-redux';
import BreadcrumbPlainFlatTextIconPreview from './BreadcrumbPreview';
import CartCard from '../Cart.Card';
import { store } from '../../Store';




const CartPage = ({ products ,items }) => {
  // dropdown
  const handleDropdownSelect = (selectedValue) => {
    // Do something with the selected value, e.g., update state or perform an action
    console.log(`Selected value: ${selectedValue}`);
  };

  const dropdownOptions = [
    { label: 'item 1', value: 'Value 1' },
    { label: 'item 2', value: 'Value 2' },
    { label: 'item 3', value: 'Value 3' },
    // Add more options as needed
  ];



  const [isDropdownOpen, setIsDropdownOpen] = useState(false); // State to manage dropdown visibility

  // Size select radio
  const [selectedSize, setSelectedSize] = useState('');

  const handleSizeChange = (value) => {
    setSelectedSize(value);
    console.log(value);
  };

  const labelClass = 'inline-block cursor-pointer rounded-lg border border-[#e7e7e7] py-1 px-3 select-label';
  const selectedLabelClass = 'inline-block cursor-pointer rounded-lg bg-black text-white border border-[#e7e7e7] py-1 px-3 select-label';

  const sizes = ['S', 'M', 'L', 'XL'];

  const navigate = useNavigate();

  const dispatch = useDispatch();

  const handleAddToCart = (product) => {
    // dispatch(addToCart(product));
    // You can navigate to the cart page or show a confirmation message
    console.log('Added to cart:', product.id);
    store.dispatch({
      type:'AdditemCart'
    })
  };
  const breadcrumbsData = [
    {
      path: "Home",
      to: "/", 
    },
    {
      path: " All products",
      to: "/products", 
    },
    {
      path: " Blue Velvet Fully Embroidered Lehenga Set",
      to: "/products", 
    },
   
  ];
  
  return (
    <section className=" overflow-hidden">
      <div className=" px-5  pt-8 md:py-24 ">
        <div className=" grid grid-cols-1 md:grid-cols-2   place-content-center gap-24">
          <div >
          <div className="flex flex-col gap-1">
                            <BreadcrumbPlainFlatTextIconPreview breadcrumbs={breadcrumbsData} />
                        </div>
          
            <div className='p-14'>
            {items.map((product) => (
      <CustomCarousel key={product.id} images={product.images} />
    ))}

            </div>
          </div>
          <div className="flex flex-col gap-4 pr-10">
  {items.map((product:any) => (
    <div key={product.id}>
      <h2 className="text-sm font-normal font-Robot pb-8 tracking-widest">{product.category}</h2>
      <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">{product.title}</h1>

      <div className="flex items-center gap-3 mb-4">
        <span className="font-normal font-Robot text-xl">Rent :</span>
        <span className="font-normal font-Robot text-xl">{product.price}</span>
      </div>

      <div className='flex gap-4 mb-4'>
        <div>
          <h4 className="text-lg font-semibold mb-4">Select Size</h4>
          <div className="flex space-x-4">
            {sizes.map((size) => (
              <div className="relative" key={size}>
                <input
                  type="radio"
                  id={`size${size}`}
                  name="size"
                  value={size}
                  className="hidden"
                  checked={selectedSize === size}
                  onChange={() => handleSizeChange(size)}
                />
                <label
                  htmlFor={`size${size}`}
                  className={selectedSize === size ? selectedLabelClass : labelClass}
                >
                  {size}
                </label>
              </div>
            ))}
          </div>
        </div>
        {/* Dropdown and Date inputs can be added here */}
      </div>

      <button onClick={() => handleAddToCart(product)} className='bg-black text-white font-normal font-Robot p-4'>Add to cart</button>

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
        <p className="leading-relaxed">{product.description}</p>
      </div>

      <div className="mt-4">
        <h2 className="text-xl font-medium mb-2">Stylist's Notes</h2>
        <p className="leading-relaxed">{product.stylistNotes}</p>
      </div>

      <div className="mt-4">
        <h2 className="text-xl font-medium mb-2">Material and Care</h2>
        <p className="leading-relaxed">{product.materialAndCare}</p>
      </div>

      <div className="mt-4">
        <h2 className="text-xl font-medium mb-2">About Product</h2>
        <p className="leading-relaxed">{product.aboutProduct}</p>
      </div>
      
    </div>
    
  ))}
</div>



        </div>
      </div>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap -m-4">
            {products.map((product:any, index:any) => (
              <ProductCard key={index} {...product} />
            ))}
          </div>
        </div>
      </section>
      <section className='flex justify-center items-center pb-10'>
        <button onClick={() => navigate('/products')} className='bg-black text-white font-normal font-Robot p-4'> view all products</button>
      </section>
    </section >
  );
};

export default CartPage;