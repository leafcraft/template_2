import React, { useState } from 'react';

const FAQSection = ( props:{variant:any}) => {
  const faqs = [
    {
      question: "Lorem ipsum dolor sit amet?",
      answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, dignissimos. Neque eos, dignissimos provident reiciendis debitis repudiandae commodi perferendis et itaque, similique fugiat cumque impedit iusto vitae dolorum. Nostrum, fugit!",
    },
    {
      question: "Consectetur adipisicing elit?",
      answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, dignissimos. Neque eos, dignissimos provident reiciendis debitis repudiandae commodi perferendis et itaque, similique fugiat cumque impedit iusto vitae dolorum. Nostrum, fugit!",
    },
    {
      question: "Neque eos, dignissimos provident reiciendis debitis?",
      answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, dignissimos. Neque eos, dignissimos provident reiciendis debitis repudiandae commodi perferendis et itaque, similique fugiat cumque impedit iusto vitae dolorum. Nostrum, fugit!",
    },
  ];

  const [expandedAnswers, setExpandedAnswers] = useState({});

  const toggleExpand = (index) => {
    setExpandedAnswers((prev) => ({ ...prev, [index]: !prev[index] }));
  };

  return (

    (() => {
        switch (props.variant) {
          case 'cart-1':
            return (
                <div className="p-8">
                <div className="bg-white p-4 rounded-lg shadow-xl py-8 mt-12">
                  <h4 className="text-4xl font-bold text-gray-800 tracking-widest uppercase text-center">FAQ</h4>
                  <p className="text-center text-gray-600 text-sm mt-2">Here are some of the frequently asked questions</p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 xl:gap-12 px-2 xl:px-12 mt-4">
                    {faqs.map((faq, index) => (
                      <div key={index} className="flex space-x-8 mt-8">
                        <div>
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path d="M12 14l9-5-9-5-9 5 9 5z"></path>
                            <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"></path>
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"></path>
                          </svg>
                        </div>
                        <div>
                          <h4 className="text-xl font-bold text-gray-700 ">{faq.question}</h4>
                          <p className="text-gray-600 my-2">
                            {expandedAnswers[index] ? faq.answer : faq.answer.slice(0, 150)}
                            {faq.answer.length > 150 && !expandedAnswers[index] && (
                              <span
                                className="text-blue-600 hover:text-blue-800 hover:underline cursor-pointer ml-2 underline"
                                onClick={() => toggleExpand(index)}
                              >
                                Read More
                              </span>
                            )}
                            {expandedAnswers[index] && (
                              <span
                                className="text-blue-600 hover:text-blue-800 hover:underline cursor-pointer ml-2 underline"
                                onClick={() => toggleExpand(index)}
                              >
                                Read Less
                              </span>
                            )}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );

          case 'cart-2':
            return (
             <div>
                faq
             </div>
            );

          default:
            return null;
        }
      })()
    
  );
};


export default FAQSection;
