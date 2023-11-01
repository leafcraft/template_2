import React from "react";
import Icons from "../Icons";

interface ContentItem {
  name: string;
  section: string;
  link:any;
}

interface ContentGroup {
  contents: ContentItem[];
}

const Content: ContentGroup[] = [
  {
    contents: [
      { name: "About Us", section: "hallucinations" , link : '/aboutus' },
      { name: "Contact Us", link : '/' , section: "benefits" },
      { name: "FAQS", link : '/' , section: "Trynow" },
      { name: "Blog", link : '/' , section: "blog" },
    ],
  },
  {
    contents: [
      { name: "Media", link : '/' , section: "" },
      { name: "Cancellation Policy", link : '/' , section: "blog" },
      { name: "Privacy Policy", link : '/' , section: "" },
    ],
  },
  {
    contents: [
      { name: "Return Policy", link : '/' , section: "team" },
      { name: "T&C", link : '/' , section: "Trynow" },
      { name: "Cookie Policy", link : '/' , section: "Trynow" },
    ],
  },
];

const Footer: React.FC = () => {
  return (
    <footer className="text-white body-font bg-bg-footer md:p-5 flex flex-col justify-center items-center">
      <div className="container px-5 gap-8 py-16  flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
        <div className="w-64 flex flex-col gap-4 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left md:mt-0 mt-10 cursor-pointer">
          <a>Logo</a>
          <p className="mt-2 text-sm text-gray-500">
            Air plant banjo lyft occupy retro adaptogen indego
          </p>
          <span className="inline-flex  sm:mt-0 mt-2 justify-center sm:justify-start">
          <a className="text-gray-500">
            <svg
              fill="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              className="w-5 h-5"
              viewBox="0 0 24 24"
            >
              <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
            </svg>
          </a>
          <a className="ml-3 text-gray-500">
            <svg
              fill="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              className="w-5 h-5"
              viewBox="0 0 24 24"
            >
              <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
            </svg>
          </a>
          <a className="ml-3 text-gray-500">
            <svg
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              className="w-5 h-5"
              viewBox="0 0 24 24"
            >
              <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
              <path
                d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"
              ></path>
            </svg>
          </a>
          <a className="ml-3 text-gray-500">
            <svg
              fill="currentColor"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="0"
              className="w-5 h-5"
              viewBox="0 0 24 24"
            >
              <path
                stroke="none"
                d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
              ></path>
              <circle cx="4" cy="4" r="2" stroke="none"></circle>
            </svg>
          </a>
        </span>
        
        </div>
        <div className="flex-grow flex flex-wrap -mb-10 md:text-left text-center order-first">
          {Content.map((props: ContentGroup, index) => (
            <div className="lg:w-1/4 md:w-2/6 w-full " key={index}>
              <nav className="list-none mb-10 flex flex-col gap-2">
                {props.contents.map((map: ContentItem, subIndex) => (
                  <li key={subIndex}>
                    <a href={map.link} className="text-white hover:text-brown cursor-pointer">
                      {map.name}
                    </a>
                  </li>
                ))}
              </nav>
            </div>
          ))}
        </div>
      </div>

      <div className="container mx-auto py-4 px-5 flex justify-evenly flex-wrap flex-col sm:flex-row">
        <p className="text-gray-500 text-sm text-center sm:text-left">
        <p className="font-medium w-full flex-grow">© 2022 Company <a className='text-green-500' target='_blank' href='https://leafcraft.co/'>LeafCraft.co</a> All Rights Reserved</p>

        </p>
        <p className="text-sm text-center sm:text-left">Powered By  <a className='text-green-500' target='_blank' href='https://leafcraft.co/'>LeafCraft</a></p>
      </div>
    </footer>
  );
};

export default Footer;
