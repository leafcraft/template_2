import img1 from '../../assets/img1-component4.png'
import img2 from '../../assets/img2-component4.png'
import img3 from '../../assets/img3-component4.png'
import img4 from '../../assets/img4-component4.png'
import img5 from '../../assets/img5-component4.png'

const imageSources = [
  img1,img2,img4,img5
];

const FourthComponent = () => {
  return (
    <div className={`px-5 py-2 grid w-full ${img1 ? 'grid-cols-3 row-span-2':''} ${img5 ? 'grid-cols-3 row-span-2':''} md:-m-2`}>
      {imageSources.map((src, index) => (
        <div key={index} className="relative col-span-2 group p-1 md:p-2">
          <img className="block h-full w-full rounded-lg object-cover object-center" src={src} alt={`Image ${index + 1}`} />
          <div className="absolute bottom-0 left-0 bg-black text-white p-2 group-hover:opacity-75">
            Text on Image {index + 1}
          </div>
        </div>
      ))}
    </div>
  );
};

export default FourthComponent;
