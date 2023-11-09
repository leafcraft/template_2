const Typography = (props: {
    variant?: string;
    children: any;
    className?: string;
    loading?: boolean;
    classText?: string;
  }) => {
    switch (props.variant) {
      case "Navbar1":
        return (
          <p
            className={`mr-5 hover:text-gray-900 font-Robot text-[10px] lg:text-sm  font-normal leading-4 lg:leading-6 ${
              props?.className ? props?.className : ""
            }`}
          >
            {props.children}
          </p>
        );
        break;
     case "featuresHeader":
          return (
            <p
              className={`w-56 font-Robot font-normal text-sm md:text-lg leading-5 text-white  animate-flip-down animate-once animate-duration-[1500ms] animate-delay-500 ${
                props?.className ? props?.className : ""
              }`}
            >
              {props.children}
            </p>
          );
          break;
      default:
        return (
          <p
            className={`font-pop  text-t2 font-medium text-t pt-1 ${
              props?.className ? props?.className : ""
            }`}
          >
            {props.children}
          </p>
        );
        break;
    }
  };
  
  export default Typography;
  