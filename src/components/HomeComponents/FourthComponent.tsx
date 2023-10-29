import img1 from '../../assets/img1-component4.png'
import img2 from '../../assets/img2-component4.png'
import img3 from '../../assets/img3-component4.png'
import img4 from '../../assets/img4-component4.png'
import img5 from '../../assets/img5-component4.png'

const imageSources = [
  { image: img1, text: "The Cocktail Collection" },
  { image: img2, text: "Top Rated" },
  { image: img4, text: "Stylease Exclusive" },
  { image: img5, text: "The Party Edit" },
];

const FourthComponent = () => {
  return (
    <div className={`px-5 py-8 grid gap-4 grid-cols-1  md:grid-cols-3  w-full `}>
    <div className=" col-span-2 grid grid-cols-3 gap-4">
      {imageSources.map((src, index) => (
        <div
          key={index}
          className={`relative ${
            index / 3 === 0 || index / 3 === 1 ? " col-span-2 " : " "
          } `}
        >
          <img
            className="block h-full w-full object-cover object-center"
            src={src.image}
            alt={`Image ${index + 1}`}
          />
          <div className="absolute bottom-1 left-1 text-lg font-normal font-Robot text-white p-2 group-hover:opacity-75">
           {src.text}{index + 1}
          </div>
        </div>
      ))}
    </div>
    <div><img
      className=" h-full w-full object-cover object-center"
      src={img3}
      alt="Image 3"
    />
    <div className="hidden absolute top-0 left-4 text-lg font-normal font-Robot text-white p-2 group-hover:opacity-75">
         Mens Wear
          </div></div>
    
  </div>

  );
};

export default FourthComponent;
