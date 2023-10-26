import ThiredCommonComponent from "../Atoms/ThiredCommonComponent";
import poster from "../../assets/poster-component5.png";
import product2 from "../../assets/product2-component3.png";

import product1 from "../../assets/product1-component5.png";

export default function Fifthcomponent() {
  const dynamicComponentProps = {
    smallHeader: 'Trend Alerts',
    title: 'Derisk You Style Experiment',
    subtitle: 'Be any version of yourself without burning your pockets',
    buttonText: 'RENT NOW',
    buttonLink: '/cart',
    images: [
      {
        src: product2,
        alt: 'Image 1',
        description: 'Product title Rs. 99.00',
      },
      {
        src: product2,
        alt: 'Image 2',
        description: 'Product title Rs. 99.00',
      },
      {
        src: product1,
        alt: 'Image 3',
        description: 'Maroon Bodycon Gown Rs. 4,500.00',
      },
    ],
    posterImage: poster ,
  };

  return <ThiredCommonComponent {...dynamicComponentProps} />;
};
