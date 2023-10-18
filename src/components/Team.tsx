import React from "react";
import Vishnu from "../assets/Team/vishnu.png";
import Sharat from "../assets/Team/sharat.png";
import Manish from "../assets/Team/Koushik.png";
import vaibhav from "../assets/Team/vaibhav.png";
import ganesh from "../assets/Team/ganesh.png";
import pranav from "../assets/Team/pranav.png";
import TeamCard from "./Atoms/TeamCard";

const FounderTeamDAta = [
  {
    Image: Vishnu,
    name: " Vishnu ",
    designation: "Co-founder / First employee",
    link: "https://www.linkedin.com/in/vishnu-ramesh-7705b117b/",
  },
  {
    Image: Sharat,
    name: " Sarat ",
    designation: "Co-founder / Product ninja",
    link: "https://www.linkedin.com/in/sarath-chandra-026b3b81/",
  },
];
const TeamDAta = [
  {
    Image: Manish,
    name: "Manish Shrivastava ",
    designation: "chief scientist",
    link: "https://www.linkedin.com/in/manishrivastava/",
  },
  {
    Image: vaibhav,
    name: " Vaibhav Sharma ",
    designation: "BFSI Sales ninja",
    link: "https://www.subtl.ai/",
  },
  {
    Image: pranav,
    name: " Pranav ",
    designation: "gen AI ninja",
    link: "https://www.linkedin.com/in/pranavg174/",
  },
  {
    Image: ganesh,
    name: " Ganesh ",
    designation: "gen AI ninja",
    link: "https://www.subtl.ai/",
  },
];

const Team = () => {
  return (
    <div id="team" className="bg-[#101012] flex flex-col self-stretch pt-10 px-5 max-md:max-w-full ">
      <div className="flex-col md:gap-20 gap-10 flex max-w-full w-full min-h-[839px] self-center ml-px mt-3 px-5 py-10 max-md:max-w-full max-md:min-h-[482px]">
        <div className="max-w-xl mx-auto">
          <p className="text-white text-center font-WhyteBold font-bold tracking-normal text-[52px] self-center -ml-0.5 mt-0.5 max-md:text-4xl">
            Who are we ?
          </p>
          <p className="text-white text-center font-normal tracking-normal md:text-2xl taxt-base self-center -ml-0.5 mt-0.5 ">
            We started subtl.ai because we believe in a future where AI and
            humans work together hand in hand, applied in the right manner this
            is a reality. We are now building this future, working with major
            Banks, Airports, Ed-techs and OEM partners to make this a reality.
            Stay tuned for more updates!
          </p>
        </div>

        <div className=" flex flex-col w-full max-w-2xl mx-auto md:gap-14 gap-5">
          <div className="flex flex-center  md:gap-16 gap-10 mx-auto text-white text-center ">
            {FounderTeamDAta.map((props: any) => (
              <TeamCard
                big
                Image={props.Image}
                name={props.name}
                designation={props.designation}
                link={props.link}
              />
            ))}
          </div>
          <div className=" grid md:grid-cols-4 grid-cols-2 content-center self-center md:gap-5 gap-8 mx-8">
            {TeamDAta.map((props: any) => (
              <TeamCard
                Image={props.Image}
                name={props.name}
                designation={props.designation}
                link={props.link}
              />
            ))}
          </div>
          <p className="text-white text-center font-WhyteBold font-bold tracking-normal text-3xl self-center -ml-0.5 mt-0.5 max-md:text-4xl">
           + many more
          </p>
        </div>
      </div>
    </div>
  );
};

export default Team;
