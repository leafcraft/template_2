
import Banner from "../components/HomeComponents/Firstcomponent";
import Secondcomponent from "../components/HomeComponents/SecondComponent";
import ThiredComponent from "../components/HomeComponents/ThiredComponent";
import FouthComponent from "../components/HomeComponents/FourthComponent";
import Fifthcomponent from "../components/HomeComponents/Fifthcomponent";
import Sixthcomponent from "../components/HomeComponents/Sixthcomponent";
import Seventhcomponent from "../components/HomeComponents/Seventhcomponent";
import EighthComponent from "../components/HomeComponents/Eighthcomponent";

const Home = () => {
  return (
    <>
     <div>
     <Banner />
     <Secondcomponent />
     <ThiredComponent />
     <FouthComponent />
     <Fifthcomponent />
     <Sixthcomponent />
     <Seventhcomponent />
     <EighthComponent variant='cart-1' />
     </div>
    </>
  );
};

export default Home;
