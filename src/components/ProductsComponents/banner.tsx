
import BGIMAGE from '../../assets/Products-banner.png';

const Banner = () => {
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
            <div className="flex flex-col justify-center items-center py-10">
                    <div className="container flex flex-grow items-center justify-between gap-4 px-10">
                        {/* Left side: Path location, Filters, and Sort By */}
                        <div className="flex flex-col gap-4">
                            {/* Path location */}
                            <div className=" text-3xl leading-6 gap-2 flex"> 
                                <span className='text-black font-Robot font-normal text-sm leading-6 opacity-50'>Home</span>
                                <span>/</span>
                                <span className='text-black font-Robot font-normal text-base leading-6'>Products</span>
                            </div>
                        </div>

                        {/* Right side: eCommerce content */}
                        <div className="container flex items-center justify-center gap-4">
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
