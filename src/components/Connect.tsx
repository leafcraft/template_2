import React from "react";
import SNAP from "../assets/snap.png";
import PEACH from "../assets/peachBg.png";
import HOW from "../assets/subtlHow.png";
import USING from "../assets/usingSubtl.png";
import WHYSUBTl from "../assets/whySubtl.png";
import CONNECTIMG from "../assets/SubtlHelp.png";
import NOTION from "../assets/notion.png";
import DRIVE from "../assets/drive.png";
import ONEDRIVE from "../assets/Onedrive.png";
import FRESHWORKS from "../assets/Freshworks.png";
import Icons from "./Icons";

const Connect = () => {
  return (
    <div
      className="items-start bg-black flex flex-col self-stretch px-5 py-10 max-md:max-w-full"
      id="benefits"
    >
      <div className="flex max-w-7xl flex-col self-center lg:mt-14 max-md:px-2 lg:mb-14  max-md:max-w-full">
        <div className="flex max-w-full w-[421px] flex-col max-md:max-w-full">
          <div className="text-white text-opacity-80 text-2xl">
            With subtl.ai, you can
          </div>
          <p className="text-white font-bold tracking-tighter text-6xl mt-3 max-md:text-4xl">
            Connect
          </p>
          <div className="text-white text-opacity-80 text-2xl mt-4">
            Documents, websites, videos and knowledge databases of your choice.
          </div>
        </div>
        <div className="flex max-w-full flex-col lg:mt-24 mt-10 max-md:max-w-full">
          <div className="flex flex-col self-stretch max-md:max-w-full">
            <div className="flex w-full md:flex-row md:gap-10  flex-col self-stretch md:items-center xl:min-h-[500px]  max-md:max-w-full max-md:min-h-[305px] relative bg-[url('/src/assets/bg1.png')] bg-cover overflow-visible px-5 py-10">
              <div className="flex-col flex  w-full self-stretch  z-10   max-md:max-w-full max-md:min-h-[305px] max-md: bg-transparent ">
                <div className="text-black font-bold md:text-3xl text-xl  ml-12  max-md:ml-2.5  w-full ">
                  How does subtl.ai <br />
                  help?
                </div>
                <div className="text-zinc-600 font-medium md:text-lg text-xs md:ml-11 mt-6 max-md:ml-2.5  md:w-1/2 w-full">
                  Our retriver LM brings in trusted information at a granular
                  level, to provide focused evidences to LLMs to create sharp
                  answers with a low error rate, along with exact sublinks to
                  evidences of information.
                </div>
                <div className="text-zinc-600  font-medium text-xs md:pl-11 mt-6 max-md:pt-2 pb-9 max-md:pl-2.5 w-full">
                  Asked a question that you did not get an answer for? Drive
                  adding more knowledge to your knowledge rooms with our
                  escalation workflows, giving admins an option to directly
                  answer questions asked.
                </div>
              </div>
              <div className=" w-full flex items-center justify-center h-full ">
                <img src={CONNECTIMG} alt="" className=" w-full   " />
              </div>
            </div>
          </div>
          <div className="self-stretch mt-4 max-md:max-w-full">
            <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
              <div className="leading-[normal] w-[58%] relative max-md:w-full bg-[url('/src//assets/peachBg.png')] bg-cover">
                <div className="w-full h-full max-md:max-w-full   ">
                  <div className="flex-col h-full  flex w-full self-stretch max-md:max-w-full  ">
                    <div className="lg:w-3/4 w-full">
                      <div className="text-black font-bold md:text-3xl text-xl ml-12 mt-12 max-md:ml-2.5 px-5 ">
                        How can I use subtl.ai ?
                      </div>
                      <div className="text-zinc-600 font-medium md:text-lg text-sm ml-11 mt-7 max-md:max-w-full max-md:ml-2.5 px-5">
                        Use our cloud or for a premium fee we will deploy
                        subtl.ai on your private cloud.
                      </div>
                      <div className="text-zinc-600  font-medium text-xs ml-11 mt-6 max-md:max-w-full max-md:ml-2.5 px-5">
                        The platform is available as a product to use, an API we
                        help you integrate, or an plug and play infoGPT chatbot.
                        With us, roll it out branded and in 15 days guaranteed!
                      </div>
                    </div>

                    <div className=" flex items-end w-full h-full  mx-auto flex-grow ">
                      <img
                        src={USING}
                        alt=""
                        className="  mb-0 w-full ml-16 h-full  overflow-hidden"
                      />
                    </div>
                  </div>
                </div>
              </div>
              {/* <div className="flex flex-col flex-grow items-stretch leading-[normal] w-[42%] max-md:w-full "> */}
                <div className=" justify-around items-center bg-white flex flex-col md:w-[42%] w-full gap-10 py-28 px-5 max-md:max-w-full max-md:mt-4 max-md:py-10">
                  <div className="text-zinc-600 text-opacity-60  font-DelBold text-center md:text-3xl text-xl ml-0 self-center ">
                    Integrate With
                  </div>
                  <div className="flex flex-col md:gap-10 gap-6 items-center ">
                    <img className="  md:h-10 h-6  " src={NOTION} alt="" />
                    <img className="  md:h-10 h-6  " src={DRIVE} alt="" />
                    <img className="  md:h-8 h-6  " src={ONEDRIVE} alt="" />
                    <img className="  md:h-10 h-6  " src={FRESHWORKS} alt="" />
                  </div>
                  <div className="text-zinc-600 text-opacity-60 font-WhyteBold text-center md:text-3xl text-xl ml-0 self-center ">
                  & many more
                  </div>
                </div>
              {/* </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Connect;
