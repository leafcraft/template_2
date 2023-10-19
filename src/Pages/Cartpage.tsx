
import CustomCarousel from '../components/Atoms/Carousel.Atoms';
import Product1 from '../assets/Product1.png';
import ProductCard from '../components/Atoms/Productcard.Atoms';

const CartPage = () => {
  const images = [
    {
      src: Product1, // Update with your image paths
      alt: 'Image 1',
    },
    {
      src: Product1,
      alt: 'Image 2',
    },
    {
      src: Product1,
      alt: 'Image 3',
    },
    // Add more images as needed
  ];
  const products = [
    {
      imageUrl: 'https://dummyimage.com/420x260',
      category: 'CATEGORY',
      title: 'The Catalyzer',
      price: '$16.00',
    },
    {
      imageUrl: 'https://dummyimage.com/421x261',
      category: 'CATEGORY',
      title: 'Shooting Stars',
      price: '$21.15',
    },
    {
        imageUrl: 'https://dummyimage.com/420x260',
        category: 'CATEGORY',
        title: 'The Catalyzer',
        price: '$16.00',
      },
      {
        imageUrl: 'https://dummyimage.com/421x261',
        category: 'CATEGORY',
        title: 'Shooting Stars',
        price: '$21.15',
      },
    // Add more product data as needed
  ];
  return (
    <section className="text-gray-600 body-font overflow-hidden">
      <div className="container px-5 py-24 mx-auto">
        <div className="lg:w-4/5 mx-auto flex flex-row flex-wrap">
        <div  className="lg:w-1/2 w-full"><CustomCarousel images={images} /></div>
          <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
            <h2 className="text-sm title-font text-gray-500 tracking-widest">BRAND NAME</h2>
            <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">The Catcher in the Rye</h1>

            {/* Rent and Price */}
            <div className="flex items-center mb-4">
              <span className="title-font font-medium text-2xl text-gray-900">$58.00</span>
            </div>

            {/* Rental Duration */}
            <div className="mb-4">
              <label className="text-gray-500">Rental Duration</label>
              <input
                type="text"
                className="w-full bg-gray-100 border-2 border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-indigo-200 focus:border-indigo-500"
              />
            </div>

            {/* Size */}
            <div className="mb-4">
              <label className="text-gray-500">Size</label>
              <input
                type="text"
                className="w-full bg-gray-100 border-2 border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-indigo-200 focus:border-indigo-500"
              />
            </div>

            {/* Start Date */}
            <div className="mb-4">
              <label className="text-gray-500">Start Date</label>
              <input
                type="date"
                className="w-full bg-gray-100 border-2 border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-indigo-200 focus:border-indigo-500"
              />
            </div>

            {/* Add to Cart Button */}
            <button className="flex ml-auto text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded">Add to Cart</button>

            {/* Social Icons */}
            <div className="mt-4">
              <a href="#" className="text-gray-500">
                <i className="fab fa-facebook mr-4"></i>
              </a>
              <a href="#" className="text-gray-500">
                <i className="fab fa-twitter"></i>
              </a>
            </div>

            {/* Description */}
            <div className="mt-4">
              <h2 className="text-xl font-medium mb-2">Description</h2>
              <p className="leading-relaxed">
                Fam locavore kickstarter distillery. Mixtape chillwave tumeric sriracha taximy chia microdosing tilde DIY.
                XOXO fam indxgo juiceramps cornhole raw denim forage brooklyn. Everyday carry +1 seitan poutine tumeric.
                Gastropub blue bottle austin listicle pour-over, neutra jean shorts keytar banjo tattooed umami cardigan.
              </p>
            </div>

            {/* Stylist's Notes */}
            <div className="mt-4">
              <h2 className="text-xl font-medium mb-2">Stylist's Notes</h2>
              <p className="leading-relaxed">
                Add Stylist's Notes here.
              </p>
            </div>

            {/* Material and Care */}
            <div className="mt-4">
              <h2 className="text-xl font-medium mb-2">Material and Care</h2>
              <p className="leading-relaxed">
                Add Material and Care information here.
              </p>
            </div>

            {/* About Product */}
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
