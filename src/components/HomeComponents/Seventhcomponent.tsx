import image1 from '../../assets/bgCAr1.jpg';
import image2 from '../../assets/bg-signup.png';
const Seventhcomponent
 = () => {
  return (
    <div className="flex flex-col md:flex-row">
      <div className=" ">
        {/* Left Image */}
        <img
          src={image1}
          alt="Left Image"
          className="w-full h-auto"
        />
      </div>
      <div className="relative">
        {/* Right Image */}
        <img
          src={image2}
          alt="Right Image"
          className="w-full h-auto"
        />

        {/* Centered Button */}
        <div className="flex flex-col  text-center bottom-24 lg:left-14 lg:right-14 left-1 right-1 gap-1 md:gap-4  text-white justify-center mt-4 absolute top-0">
          <h3 className='font-Robot font-normal text-xs leading-6'>Designers</h3>
          <h1 className='font-Robot font-normal text-lg md:text-3xl leading-9'>Quality Is A Habit</h1>
          <div className='font-Robot font-normal leading-6 text-xs md:text-base '>Every outfit we onboard goes through a rigorous screening process to make sure that you get nothing but the best craftsmanship from the most innovative and sought after designers.</div>
          <button className="bg-bg-footer font-Robot font-normal hover:bg-blue-700 text-white leading-5 text-xs md:text-base py-2 px-4 border border-white">
          View All Designs
          </button>
        </div>
      </div>
    </div>
  );
};

export default Seventhcomponent
;
