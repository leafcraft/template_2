
import BreadcrumbPlainFlatTextIconPreview from '../../components/Atoms/BreadcrumbPreview';
import BGIMAGE from '../../assets/Products-banner.png';

const Banner = () => {
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
    return (
        <div className='flex flex-col h-full w-full'>
            <div className="relative w-full ">
                <img
                    src={BGIMAGE}
                    alt="Banner Image"
                    className="w-full h-auto object-cover "
                />
                <div className="absolute inset-0  lg:bottom-0 md:bottom[-63px] bottom-0 flex flex-col justify-center items-center text-white bg-opacity-0 bg-black">

                    <div className=" flex flex-grow text-left gap-1 md:gap-5 absolute bottom-0 left-0 p-4 lg:p-20 md:w-2/3 ">
                        <h2 className="text-md md:text-2xl lg:text-4xl xl:text-5xl font-normal font-Robot leading-tigh">
                            NEW ARRIVALS
                        </h2>
                    </div>
                </div>

                
            </div>
            <div className="flex flex-col  py-2">
                    <div className="flex flex-grow items-center justify-between gap-4 ">
                        {/* Left side: Path location, Filters, and Sort By */}
                        <div className="flex flex-col gap-4">
                            <BreadcrumbPlainFlatTextIconPreview breadcrumbs={breadcrumbsData} />
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
