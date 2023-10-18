import React from "react";

interface AccordionItem {
  title: string;
  content: string;
  user: string;
  id: string;
}

const Costing: React.FC = () => {
  const items: AccordionItem[] = [
    {
      title: "Small Teams",
      content: "$20 per user / month",
      user: "1-10 users",

      id: "01",
    },
    {
      title: "SMBs",
      content: "$15 per user / month",
      user: "10-10,000 users",

      id: "02",
    },
    {
      title: "Enterprise",
      content: "Contact us for a tailor made proposal",
      user: "",
      id: "03",
    },

    // Add more items
  ];

  return (
    <div className="bg-black flex flex-col lg:py-20 py-10 px-5" id="costing">
      <div className="self-center  max-md:max-w-full max-w-7xl">
        <div className="flex flex-col items-stretch leading-normal w-full max-md:w-full">
          <div className="z-1 max-md:max-w-full flex flex-col  gap-10 mb-10">
            <h1 className="text-white font-bold text-6xl max-md:text-4xl">
              How much does it cost?
            </h1>
            <div className=" grid xl:grid-cols-4 grid-cols-2 gap-5 text-white max-w-full pl-5 pr-5 pt-2 pb-4">
              {items.map((item) => (
                <div
                  key={item.id}
                  className="mb-4 border-2 justify-between flex flex-col max-md:gap-4 text-center border-white border-opacity-40 hover:border-opacity-100 transition-all duration-200 lg:p-10 md:p-6 p-4 "
                >
                  <div>
                    <div className="text-white font-inter font-bold md:text-4xl text-2xl">
                      {item.title}
                    </div>
                    <div className="text-white font-inter font-normal md:text-2xl text-base h-6">
                      {item.user}
                    </div>
                  </div>

                  <div className="text-[#73E0A9] font-inter font-semibold md:text-2xl text-base ">
                    {item.content}
                  </div>
                </div>
              ))}
              <div className="mb-4 border-2 justify-between flex flex-col max-md:gap-4 text-center border-white border-opacity-40 hover:border-opacity-100 transition-all duration-200 lg:p-10 md:p-6 p-4 ">
                <div>
                  <div className="text-white font-inter font-bold md:text-4xl text-2xl">
                    API usage pricing
                  </div>
                </div>

                <a
                  href="https://calendly.com/vishnu-97/30min"
                  target="_blank"
                  className="bg-[#ffffff] text-black hover:translate-y-0.5 transition-all duration-200 hover:scale-[98%] py-2 font-inter font-semibold md:text-2xl text-base rounded-xl "
                >
                  contact us
                </a>
              </div>
            </div>
            <div className="md:text-base text-sm mx-auto text-white max-w-3xl text-center font-inter font-normal opacity-80 ">
              API usage pricing: $20 / month for managing each set of 100,000
              words of information, $5 per 100 questions. Available via rest API
              or gen AI widget you can plug to your tools.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Costing;
