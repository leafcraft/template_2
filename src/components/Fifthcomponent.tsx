import ThiredCommonComponent from "./Atoms/ThiredCommonComponent";

export default function Fifthcomponent() {
  const dynamicComponentProps = {
    smallHeader: 'Small Header Text',
    title: 'Main Title Text',
    subtitle: 'Subtitle Text',
    buttonText: 'Explore',
    buttonLink: 'https://example.com',
    images: [
      {
        src: 'image1.jpg',
        alt: 'Image 1',
        description: 'Description for Image 1',
      },
      {
        src: 'image2.jpg',
        alt: 'Image 2',
        description: 'Description for Image 2',
      },
      {
        src: 'image3.jpg',
        alt: 'Image 3',
        description: 'Description for Image 3',
      },
    ],
  };

  return <ThiredCommonComponent {...dynamicComponentProps} />;
};
