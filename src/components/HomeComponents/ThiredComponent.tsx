import ThiredCommonComponent from "../Atoms/ThiredCommonComponent";
import poster from "../../assets/bg-signup.png";
import product1 from "../../assets/bgCAr1.jpg";
import product2 from "../../assets/bgCar2.jpg";
import Product3 from "../../assets/bgCar3.jpg";



export default function ThiredComponent() {

  const handleImageClick = (image: any) => {
    console.log('Clicked image data:', image);
    // Perform additional actions based on the clicked image data here
  };
  const imagesData = [
    {
      id: '1',
      src: product1,
      alt: 'Image 1',
      description: 'Product title Rs. 99.00',
    },
    {
      id: '2',
      src: product2,
      alt: 'Image 2',
      description: 'Cream Fully Embroidered Sherwani With Dupatta Rs. 6,500.00',
    },
    {
      id: '3',
      src: Product3,
      alt: 'Image 1',
      description: 'Product title Rs. 99.00',
    },
    // Add more images as needed
  ];

  return (
    <>
  
    <div id='mens_wear'> <ThiredCommonComponent
        smallHeader='Mens Wear'
        title='Why Should Girls Have All The Fun?'
        subtitle='For the dapper and uber stylish modern man'
        buttonText='RENT NOW'
        buttonLink='/products'
        images={imagesData}
        posterImage={poster}
        onImageClick={handleImageClick} // Pass the function to handle image click
      /></div>
    </>
  );
};
