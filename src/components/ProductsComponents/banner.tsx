
import BreadcrumbPlainFlatTextIconPreview from '../../components/Atoms/BreadcrumbPreview';
import BGIMAGE from '../../assets/Products-banner.png';
import BGIMG1 from '../../assets/bgCAr1.jpg';
import BGIMG2 from '../../assets/bgCar2.jpg';
import BGIMG3 from '../../assets/bgCar3.jpg';
import BGIMG from '../../assets/bg-signup.png';
import "../../../node_modules/react-image-gallery/styles/css/image-gallery.css";
import ImageGallery, { ReactImageGalleryItem } from "react-image-gallery";
import Icons from '../Icons';
import { useRef, useState } from 'react';
import ReactImageGallery from 'react-image-gallery';
import { useLazyQuery } from '@apollo/client';
import toast from 'react-hot-toast';
import { SEARCH_PRODUCT } from '../graphql/query';
import { sreachProducts } from '../../Store/Reducers/ProductsData';
import { store } from '../../Store';



const Banner = () => {
  const imageGalleryRef = useRef<ReactImageGallery>(null);
  const [SearchResults] = useLazyQuery(SEARCH_PRODUCT);
  const [searchTerm, setSearchTerm] = useState('');
  const breadcrumbsData = [
    {
      path: "Home",
      to: "/",
    },
    {
      path: "Products",
      to: "/products",
    },

  ];
  const data = [{
    id: 1,
    original: BGIMG,

  },
  {
    id: 2,
    original: BGIMG1,

  },
  {
    id: 3,
    original: BGIMG2,

  },
  {
    id: 4,
    original: BGIMG3,

  },
  ]
  const handleSearch = (searchTerm) => {
    SearchResults({
      variables: {
        organisationID: "650439122f67cb537c73d076",
        name: searchTerm,
      },
    })
      .then((res) => {
        console.log(res?.data?.searchProduct, "response Search");
        const searchData = res?.data?.searchProduct || [];
       store.dispatch(sreachProducts(searchData));
       window.location.reload();
        // Further logic to handle search results
      })
      .catch((err) => {
        toast.error(err);
      });
     
  };


  return (
    <div className='flex flex-col h-full w-full'>
      <div className="relative w-full  flex">
         <div className=" inline-block w-full">
            <div className="wrapper w-full">
              <ImageGallery
                ref={imageGalleryRef}
                items={data}
                showPlayButton={false}
                showFullscreenButton={false}
                showNav={false}
                autoPlay={true}
                additionalClass=" bg-black w-full bg-cover object-fit"
              />
            <div/>
          </div>
        </div>
        <div className="absolute inset-0 lg:bottom-0 md:bottom[-63px] bottom-0 flex flex-col justify-center items-center text-white bg-opacity-0 bg-black">
          <div className="flex flex-grow text-left gap-1 md:gap-5 absolute bottom-0 left-0 p-4 lg:p-20 md:w-2/3 ">
            <h2 className="text-md md:text-2xl lg:text-4xl xl:text-5xl font-normal font-Robot leading-tigh">
              NEW ARRIVALS
            </h2>
          </div>
        </div>

      </div>
      <div className="flex flex-col  py-2">
        <div className="flex flex-col md:flex-row flex-grow items-center justify-between ">
          {/* Left side: Path location, Filters, and Sort By */}
          <div className="flex flex-col gap-4">
            <BreadcrumbPlainFlatTextIconPreview breadcrumbs={breadcrumbsData} />
          </div>

          <div >
          <div className=" flex flex-col flex-grow text-left gap-1  p-4 lg:p-20  ">
                      
                      <label
    className=" flex-col relative bg-white min-w-sm max-w-2xl text-black md:flex md:flex-row items-center justify-between border py-2 px-2 rounded-2xl shadow-2xl focus-within:border-gray-300"
    htmlFor="search-bar" 
  >
    <input
      id="search-bar"
      placeholder="your keyword here"
      className=" px-1 py-2 w-full rounded-md flex-1 outline-none bg-white"
      onChange={(e) => setSearchTerm(e.target.value)}
    />
    <button
     onClick={() => handleSearch(searchTerm)}
      className="w-full md:w-auto py-2 px-1  md:px-6 md:py-3 bg-yellow-100 border-black text-white fill-white active:scale-95 duration-100 border will-change-transform overflow-hidden relative rounded-xl transition-all disabled:opacity-70"
    >
      <div className="relative">
        {/* Loading animation change opacity to display */}
        <div className="flex items-center justify-center h-3 w-3 absolute inset-1/2 -translate-x-1/2 -translate-y-1/2 transition-all">
          <svg className="opacity-0 animate-spin w-full h-full" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
          </svg>
        </div>

        <div className="flex items-center transition-all opacity-1 valid:">
          <span className="text-sm font-semibold whitespace-nowrap truncate mx-auto">
           <Icons variant='Search' />
          </span>
        </div>
      </div>
    </button>
  </label>
                  </div>
          </div>

          {/* Right side: eCommerce content */}
          <div className=" flex items-center justify-center gap-4">
            {/* Filters and Sort By buttons */}
            <div className="flex gap-4">
              <button className="text-black border border-black px-6 py-3 font-Robot font-normal text-base leading-5">
                Filters
              </button>
              <button className="text-black px-6 py-3 font-Robot font-normal text-base leading-5">
                Sort By
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
