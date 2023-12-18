import React, { useState } from 'react';

const FAQComponent = () => {
  const faqItems = [
    {
      id: 1,
      question: 'Is there a free trial with Appsy?',
      answer: 'Lorem ipsum, consectetur adipisicing elit. Adipisci eligendi...',
    },
    {
      id: 2,
      question: 'Lorem ipsum dolor sit amet consectetur adipisicing elit?',
      answer: 'Lorem ipsum, <b>dolor sit amet</b> consectetur adipisicing elit. Adipisci eligendi...',
    },
    {
      id: 3,
      question: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio.?',
      answer: 'Lorem ipsum, <b>dolor sit amet</b> consectetur adipisicing elit. Adipisci eligendi...',
    },
    {
      id: 4,
      question: 'Lorem ipsum dolor sit amet.?',
      answer: 'Lorem ipsum, <b>dolor sit amet</b> consectetur adipisicing elit. Adipisci eligendi...',
    },
  ];

  const [selectedFAQ, setSelectedFAQ] = useState(null);

  const handleFAQClick = (id) => {
    setSelectedFAQ(selectedFAQ === id ? null : id);
  };

  return (
    <div className="relative mx-auto w-full py-16 px-5 font-sans text-gray-800 sm:px-20 md:max-w-screen-lg lg:py-24">
      <h2 className="mb-5 text-center font-sans text-4xl sm:text-5xl font-bold">Frequently asked Questions</h2>
      <p className="mb-12 text-center text-lg text-gray-600">
        We have written down answers to some of the frequently asked questions. But, if you still have any queries,
        feel free to ping us on chat.
      </p>
      <ul className="space-y-4">
        {faqItems.map((item) => (
          <li key={item.id} className="text-left">
            <label
              htmlFor={`accordion-${item.id}`}
              className="relative flex flex-col rounded-md border border-gray-100 shadow-md"
            >
              <input
                type="checkbox"
                id={`accordion-${item.id}`}
                className="peer hidden"
                checked={selectedFAQ === item.id}
                onChange={() => handleFAQClick(item.id)}
              />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="absolute right-0 top-4 ml-auto mr-5 h-4 text-gray-500 transition peer-checked:rotate-180"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
              <div className="relative ml-4 cursor-pointer select-none items-center py-4 pr-12">
                <h3 className="text-sm text-gray-600 lg:text-base">{item.question}</h3>
              </div>
              <div className="max-h-0 overflow-hidden transition-all duration-500 peer-checked:max-h-96">
                <div className="p-5">
                  <p className="text-sm" dangerouslySetInnerHTML={{ __html: item.answer }} />
                </div>
              </div>
            </label>
          </li>
        ))}
      </ul>
      <div className="mt-20 flex justify-center">
        <a className="inline-flex cursor-pointer rounded-lg bg-blue-500 py-3 px-5 text-lg text-white" href="#">
          Still have questions?
        </a>
      </div>
    </div>
  );
};

export default FAQComponent;
