import ThiredCommonComponent from "../Atoms/ThiredCommonComponent";
import poster from "../../assets/poster-component3.png";
import product1 from "../../assets/product1-component3.png";
import product2 from "../../assets/product2-component3.png";
import Product3 from "../../assets/product3-component3.png";

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
        description: 'Silver Rectangular Patterned Blazer Rs. 2,800.00',
      },
      {
        src: product2,
        alt: 'Image 2',
        description: 'Product title Rs. 99.00',
      },
      {
        src: Product3,
        alt: 'Image 3',
        description: 'Blue Bandi With Kurta Set Rs. 2,800.00',
      },
    ],
    posterImage: poster ,
  };

  return <div id="women_wear"><ThiredCommonComponent {...dynamicComponentProps} /></div>;
};
