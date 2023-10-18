import React from "react";
import Icons from "../Icons";

const TeamCard = (props: any) => {
  return (
    <>
      {props?.big ? (
        <a
          href={props.link}
          target="_blank"
          className=" flex flex-col gap-4  text-white text-center"
        >
          <img
            src={props.Image}
            alt=""
            className="rounded-full aspect-square md:max-w-72 max-w-36 "
          />
          <div className=" gap-2">
            <div className="md:text-[32px] text-2xl font-inter font-semibold leading-[26px] ">
              {props.name}
            </div>
            <div className="md:text-xl flex items-center justify-center gap-2 text-base font-inter font-normal leading-[26px] ">
              ( {props.designation} )
              <span>
                <Icons variant="linkedin" />{" "}
              </span>
            </div>
          </div>
        </a>
      ) : (
        <a
          href={props.link}
          target="_blank"
          className=" grid content-center gap-4 md:max-w-[152px] w-full text-white text-center"
        >
          <img
            src={props.Image}
            alt=""
            className="rounded-full aspect-square md:max-w-[152px] w-full max-w-16 mx-auto "
          />
          <div className=" gap-2 items-center">
            <div className="text-[15.25px] font-inter font-semibold leading-[16.5px] ">
              {props.name}
            </div>
            <div className="text-[12.71px] justify-center flex items-center gap-1 font-inter wrap font-normal leading-[16.5px] ">
              ( {props.designation} ) <span>
                <Icons variant="linkedin" />{" "}
              </span>
            </div>
          </div>
        </a>
      )}
    </>
  );
};

export default TeamCard;
