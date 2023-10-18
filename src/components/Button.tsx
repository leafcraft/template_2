import React from "react";
import { Link } from "react-router-dom";

const Button = (props: any) => {
  switch (props.vairant) {
    case "primary":
      return (
        <Link
          to={props.section}
          className="leading-none border-2 border-transparent  transition-all duration-300 hover:bg-white hover:text-black hover:border-white rounded-xl p-3"
        >
          {props.name}
        </Link>
      );
    case "navbar":
      return (
        <a
          key={props.key}
          href="/"
          className={` text-center px-4 py-2 font-bold text-white cursor-pointer transition my-auto duration-300 ease-in-out border-black border-2 border-opacity-50  rounded-xl delay-50 hover:scale-105 hover:bg-white hover:text-black tracking-wide ${props.classname} `}
          {...props}
        >
          {props.name}
        </a>
      );
      case "navbar-secondary":
      return (
        <a
          key={props.key}
          href="/"
          className={` text-center px-4 py-2 font-bold bg-white text-black cursor-pointer transition my-auto duration-300 ease-in-out border-white border-2 border-opacity-50  rounded-xl delay-50 hover:scale-105 hover:bg-black hover:text-white tracking-wide ${props.classname} `}
          {...props}
        >
          {props.name}
        </a>
      );
  }
};

export default Button;
