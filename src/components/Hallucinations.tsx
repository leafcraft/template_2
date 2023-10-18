import React from "react";

const Hallucinations = () => {
  return (
    <div id="hallucinations" className="items-center bg-white flex flex-col self-stretch  max-md:px-5 p-10 max-md:max-w-full">
      <div className="flex w-full  flex-row items-start justify-between gap-5  md:my-20  max-md:flex-wrap max-md:ml-2.5  max-w-7xl px-auto">
        <div className="flex md:w-1/2 w-full flex-col self-center max-md:max-w-full">
          <p className="text-zinc-600 font-inter text-opacity-80 text-2xl max-md:text-center">
            Wait, What are
          </p>
          <p className="text-zinc-600  font-WhyteBold tracking-tighter text-6xl mt-3.5 max-md:max-w-full max-md:text-4xl max-md:text-center">
            hallucinations?
          </p>
          <div className="text-zinc-600 text-opacity-60 font-inter text-2xl mt-4 max-md:max-w-full max-md:text-center">
            Hallucinations are false answers that generative AI creates.
          </div>
          <div className="text-zinc-600  font-WhyteMed text-sm mt-8 max-md:max-w-full max-md:text-center">
            Hallucination rates significantly increase as the volume of
            knowledge increases, whether its documents, videos, websites or
            knowledge databases. This is a big problem for businesses that want
            to create answers that they can rely on, either for them or their
            customers.
          </div>
        </div>
        <div className="flexmd:w-1/3 w-1/2 mx-auto min-w-[194px] flex-col self-center mt-4">
          <p className="justify-center text-zinc-600 text-center font-bold tracking-tighter text-9xl self-center ml-px max-md:text-7xl">
            7%
          </p>
          <div className="text-zinc-600  font-medium text-sm self-center text-center">
            The average hallucination <br/> rate for existing GPT tools is
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hallucinations;
