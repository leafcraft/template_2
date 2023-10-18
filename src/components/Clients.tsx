import React from "react";
import SBI from "../assets/SBI.png";
import GRSE from "../assets/GRSE.png";
import NSE from "../assets/NSEtalent.png";

const Clients = () => {
  return (
    <div className="bg-black flex z-10 w-full flex-col self-center  lg:p-16 p-10">
      <div className=" max-w-7xl w-full self-center ">
        <div className="flex flex-col max-md:max-w-full  ">
          <div className="max-w-full w-[719px] max-md:max-w-full">
            <div className="flex flex-col max-md:max-w-full ">
              <div className="text-white text-opacity-80 text-2xl ml-px max-md:ml-px">
                Loved by some of the
              </div>
              <p className="text-white  font-bold tracking-tighter text-6xl  mt-1 max-md:text-4xl">
                Largest platforms.
              </p>
            </div>
          </div>
          <div className=" hidden md:grid grid-cols-3 w-full items-start justify-between gap-5 lg:mt-24">
            <img
              src={SBI}
              alt=""
              className=" lg:max-h-[200px] md:max-h-[150px] w-full px-auto object-contain aspect-auto py-10"
            />
            <img
              src={GRSE}
              alt=""
              className=" lg:max-h-[200px] md:max-h-[150px] w-full px-auto object-contain aspect-auto py-10"
            />
            <img
              src={NSE}
              alt=""
              className=" lg:max-h-[200px] md:max-h-[150px] w-full px-auto object-contain aspect-auto py-10"
            />
            <div className="text-white text-opacity-80 text-center font-medium text-sm   shrink-0 basis-auto">
              Helping 250,000 branch officers save 3,000,000 hours of time a
              year, lost looking for answers.
            </div>
            <div className="text-white text-opacity-80 text-center font-medium text-sm   shrink-0 basis-auto">
              Helping 250 engineers design blueprints 40% faster with customer
              specifications and compliance standards you can talk to.
            </div>
            <div className="text-white text-opacity-80 text-center font-medium text-sm   shrink-0 basis-auto">
              Helping answer questions of 10,000+ students with a 24/7 gen AI teaching assistant, Linked to learning videos, course curriculum and teacher-student discussion boards
            </div>
          </div>
          <div className=" md:hidden grid w-full items-center justify-between gap-5  ">
            <img
              src={SBI}
              alt=""
              className=" max-h-20 w-full mx-auto px-auto object-contain aspect-auto py-4"
            />
            <div className="text-white w-3/4 mx-auto text-opacity-80 text-center font-medium text-xs shrink-0 basis-auto">
              Helping 250,000 branch officers save 3,000,000 hours of time a
              year, lost looking for answers.
            </div>
            <img
              src={GRSE}
              alt=""
              className=" max-h-20 w-full mx-auto px-auto object-contain aspect-auto py-4"
            />
            <div className="text-white w-3/4 mx-auto text-opacity-80 text-center font-medium text-xs shrink-0 basis-auto">
            Helping answer questions of 10,000+ students with a 24/7 gen AI teaching assistant, Linked to learning videos, course curriculum and teacher-student discussion boards
            </div>
            <img
              src={NSE}
              alt=""
              className=" max-h-20 w-full mx-auto px-auto object-contain aspect-auto py-4"
            />
            <div className="text-white w-3/4 mx-auto text-opacity-80 text-center font-medium text-xs shrink-0 basis-auto">
              helping answer questions of 10,000+ students with a 24/7 gen AI teaching assistant, Linked to learning videos, course curriculum and teacher-student discussion boards
            </div>
          </div>
        </div>
      </div>
    </div>
    // </div>
  );
};

export default Clients;
