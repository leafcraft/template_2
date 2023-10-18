import React from "react";
import CUSTOMER from "../assets/customerSupport.png";
import SALES from "../assets/sales.png";
import TRAINING from "../assets/training.png";

const WHO = () => {
  return (
    <div className="bg-white flex flex-col self-stretch px-5 py-10 max-md:max-w-full" id="usecase">
      <div className="flex max-w-full w-[1278px] flex-col self-center lg:mt-12 lg:mb-20 max-md:max-w-full">
        <div className="text-zinc-600  font-bold tracking-tighter text-6xl max-md:text-4xl mb-10">
          Who is it for?
        </div>
        <div className="bg-black bg-opacity-10 flex max-w-full w-[1271px] h-[1px] flex-col  max-md:max-w-full" />
        <div className="max-w-full w-[1277px] max-md:max-w-full">
          <div className="gap-5 flex max-md:flex-col max-md:items-stretch items-center max-md:gap-0  mt-6 ">
            <div className="flex flex-col items-stretch leading-[normal] w-3/12 max-md:w-full">
              <div className="flex flex-col max-md:mt-6">
                <a
                   
                  className="text-zinc-600 font-bold tracking-tighter text-3xl"
                >
                  Customer Support
                </a>
                <div className="text-zinc-600 text-opacity-80 font-medium text-sm mt-1.5">
                  Solve more tickets everyday with instant answers
                </div>
              </div>
            </div>
            <div className="flex flex-col items-stretch leading-[normal] w-9/12 md:ml-5 max-md:w-full">
              <div className="justify-end items-center flex flex-col rounded-[384px] max-md:max-w-full max-md:mt-8">
                {" "}
                <img src={CUSTOMER} alt="" />
              </div>
            </div>
          </div>
        </div>
        <div className="bg-black bg-opacity-10 flex max-w-full w-[1271px] min-h-[1px] flex-col mt-6 max-md:max-w-full" />
        <div className="self-stretch mt-6 max-md:max-w-full">
          <div className="gap-5 flex max-md:flex-col max-md:items-stretch items-center max-md:gap-0">
            <div className="flex flex-col items-stretch leading-[normal] w-[23%] max-md:w-full">
            <div className="flex flex-col  justify-center max-md:mt-6">

                <a
                   
                  className="text-zinc-600 font-bold tracking-tighter text-3xl"
                >
                  Sales
                </a>
                <div className="text-zinc-600 text-opacity-80 font-medium text-sm mt-3">
                  Launch info bots to answer questions that customers and
                  prospects have
                </div>
              </div>
            </div>
            <div className="flex flex-col items-stretch leading-[normal] w-[77%] md:ml-5 max-md:w-full">
              <div className="justify-center items-center flex flex-col rounded-[384px] max-md:max-w-full max-md:mt-6">
                <img src={SALES} alt="" />
              </div>
            </div>
          </div>
        </div>
        <div className="bg-black bg-opacity-10 flex max-w-full w-[1271px] min-h-[1px] flex-col mt-6 max-md:max-w-full" />
        <div className="self-stretch mt-6 max-md:max-w-full">
          <div className="gap-5 flex max-md:flex-col max-md:items-stretch items-center max-md:gap-0">
            <div className="flex flex-col items-stretch leading-[normal] w-[24%] max-md:w-full">
              <div className="flex flex-col  justify-center max-md:mt-6">
                <a

                  className="text-zinc-600 font-bold tracking-tighter text-3xl"
                >
                  Customer Success
                </a>
                <div className="text-zinc-600 text-opacity-80 font-medium text-sm mt-1">
                  Improve learning outcomes, let people talk to recorded video
                  sessions and lectures
                </div>
              </div>
            </div>
            <div className="flex flex-col items-stretch leading-[normal] w-[76%] md:ml-5 max-md:w-full">
              <div className="justify-center items-center  flex flex-col rounded-[384px] max-md:max-w-full max-md:mt-6">
                {" "}
                <img src={TRAINING} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WHO;
