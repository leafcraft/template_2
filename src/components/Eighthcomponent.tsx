import React from 'react';

// JSON data for the sections
const sections = [
  {
    description: `I wore this stunning gold mirror lehenga for my best friend's destination wedding and I absolutely loved the attention that I grabbed that day! The fittimg was perfect too Thank you Team Stylease for making me look so gorgeous in my Insta pictures!`,
    author: 'Shreshtha. H',
  },
  {
    description: `This lehenga came in a packaging that was spot-on. The fittings were absolutely perfect too and I got a lot of compliments on this style. Absolutely love the collection, theres's always something for every occasion. Thank you team Stylease for making sure I look my best this wedding season!`,
    author: 'Juhi. S',
  },
  {
    description: `We loved our experience with The Stylease. We decided to attend a friend's sangeet at the last minute and we didn't want to spend a bomb on something that we weren't going to use. The Stylease went out of their way and helped us look our best for the event.`,
    author: 'Avantika. G',
  },
];

const EighthComponent = () => {
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <h1 className=" text-center mb-3 font-normal font-Robot text-black text-4xl leading-9 ">Join The Revolution</h1>
        <div className="flex flex-wrap -mx-4 -my-8">
          {sections.map((section, index) => (
            <div key={index} className="py-8 px-4 md:w-1/2 lg:w-1/3">
              <div className="h-full flex items-start">
                <div className="flex-grow pl-6">
                  <p className="font-normal font-Robot text-base text-center  leading-6 mb-2">{section.description}</p>
                  <p className="font-normal font-Robot text-sm leading-5 text-right">- {section.author}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* New Section with Basic Button */}
      <div className="bg-gray-100 py-10">
        <div className="container flex items-center justify-center gap-4">
          <button className="text-black px-6 py-3 font-Robot font-normal text-3xl leading-6">
          Instagram
          </button>
          <button className="bg-bg-footer text-white px-6 py-3 text-sm  hover:bg-blue-600 transition-colors duration-300">
          Follow us
          </button>
        </div>
      </div>
    </section>
  );
};

export default EighthComponent;
