import React from 'react';

// JSON data for the sections
const sections = [
  {
    description: 'Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.',
    author: 'Person 1',
  },
  {
    description: 'Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.',
    author: 'Person 2',
  },
  {
    description: 'Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.',
    author: 'Person 3',
  },
];

const EighthComponent = () => {
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <h1 className="text-3xl font-medium title-font text-center text-gray-900 mb-3">Join The Revolution</h1>
        <div className="flex flex-wrap -mx-4 -my-8">
          {sections.map((section, index) => (
            <div key={index} className="py-8 px-4 md:w-1/2 lg:w-1/3">
              <div className="h-full flex items-start">
                <div className="flex-grow pl-6">
                  <p className="leading-relaxed mb-2">{section.description}</p>
                  <p className="text-gray-500 text-right">- {section.author}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* New Section with Basic Button */}
      <div className="bg-gray-100 py-10">
        <div className="container flex items-center justify-center gap-4">
          <button className="bg-blue-500 text-black px-6 py-3 rounded-full hover:bg-blue-600 transition-colors duration-300">
            Centered Button
          </button>
          <button className="bg-blue-500 text-black px-6 py-3 rounded-full hover:bg-blue-600 transition-colors duration-300">
            Instagram
          </button>
        </div>
      </div>
    </section>
  );
};

export default EighthComponent;
