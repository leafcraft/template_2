import React from "react";
//import LOGO from "../../assets/subtl_Logo.png";
import Icons from "../Icons";

const Footer = () => {
  const Content = [
    {
      Title: "Product",
      contents: [
        { name: "Features", section: "hallucinations" },
        { name: "Benefits", section: "benefits" },
        { name: "Try Now", section: "Trynow" },
      ],
    },
    {
      Title: "Explore",
      contents: [
        { name: "Events", section: "" },
        { name: "Blogs", section: "blog" },
      ],
    },
    {
      Title: "Company ",
      contents: [
        { name: "About us", section: "team" },
        { name: "Contact us", section: "Trynow" },
      ],
    },
  ];

  return (
    <>
      <div className="bg-black grid ">
        <div className=" flex md:flex-row flex-col justify-between text-white items-center lg:px-20 px-10 py-10 border-b border-white ">
          <img src='{LOGO}' alt="" />

          <div className=" gap-10 flex  ">
            {Content.map((props: any) => (
              <div className="flex flex-col mt-px max-md:mt-12">
                <div className="text-white text-opacity-70 text-xl">
                  {props.Title}
                </div>

                {props.contents.map((map: any) => (
                  <div
                    className="text-white tracking-normal cursor-pointer text-lg mt-8"
                    onClick={(e) => {
                      let contactus = document.getElementById(map.section);
                      e.preventDefault(); // Stop Page Reloading
                      if (contactus) {
                        const elementTop =
                          contactus.getBoundingClientRect().top +
                          window.scrollY;
                        const scrollTo = elementTop - 80;

                        window.scrollTo({
                          top: scrollTo,
                          behavior: "smooth",
                        });
                      }
                    }}
                  >
                    {map.name}
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
        <div className="text-white flex md:flex-row flex-col justify-between w-full p-10 items-center ">
          <div className=" flex md:gap-10 gap-2 md:flex-row flex-col max-md:text-center ">
            <div>© 2023 Subtl.ai. All right reserved.</div>
            <div>Privacy Policy</div>
            <div>Terms of Service</div>
          </div>
          <div className=" flex gap-4 items-center justify-center ">
            <Icons variant="Youtube" Link="https://www.youtube.com" />
            <Icons variant="Twitter" Link="https://www.twitter.com" />
            <Icons
              variant="LinkedIn"
              Link="https://www.linkedin.com/company/subtl-ai/"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
