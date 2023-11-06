
import { useOutlet } from "react-router-dom";

const BaseLayout = () => {
  const outlet = useOutlet();
  return (
    <>
     
      <div className="flex flex-col min-h-screen justify-between">

        <div className=" flex-grow max-w-screen overflow-hidden ">
          {outlet}
        </div>
       
        
      </div>
    </>
  );
};

export default BaseLayout;
