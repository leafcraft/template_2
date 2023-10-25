import ThiredCommonComponent from "./Atoms/ThiredCommonComponent";
import poster from "../assets/poster-component3.png";
import product1 from "../assets/product1-component3.png";
import product2 from "../assets/product2-component3.png";
import Product3 from "../assets/product3-component3.png";

export default function ThiredComponent() {
  const dynamicComponentProps = {
    smallHeader: 'New Arrivals',
    title: 'The Latest Scoop',
    subtitle: 'Get Spring ready in the freshest looks of the season',
    buttonText: 'RENT NOW',
    buttonLink: '/cart',
    images: [
      {
        src: product1,
        alt: 'Image 1',
        description: 'Description for Image 1',
      },
      {
        src: product2,
        alt: 'Image 2',
        description: 'Description for Image 2',
      },
      {
        src: Product3,
        alt: 'Image 3',
        description: 'Description for Image 3',
      },
    ],
    posterImage: poster ,
  };

  return <ThiredCommonComponent {...dynamicComponentProps} />;
};
