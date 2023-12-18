
import Banner from "../components/HomeComponents/Firstcomponent";
import Secondcomponent from "../components/HomeComponents/SecondComponent";
import ThiredComponent from "../components/HomeComponents/ThiredComponent";
import FouthComponent from "../components/HomeComponents/FourthComponent";
import Fifthcomponent from "../components/HomeComponents/Fifthcomponent";
import Sixthcomponent from "../components/HomeComponents/Sixthcomponent";
import Seventhcomponent from "../components/HomeComponents/Seventhcomponent";
import EighthComponent from "../components/HomeComponents/Eighthcomponent";
import CouponList from "../components/Atoms/Coupons";
import FAQComponent from "../components/Atoms/Accodation";

const Home = () => {
  return (
    <>
     <div>
     <Banner />
     <Secondcomponent />
     <FouthComponent />
     <ThiredComponent />
     <EighthComponent variant='cart-3' />
    
     <Fifthcomponent />
     <CouponList />
     <Seventhcomponent />
     <FAQComponent />
     <Sixthcomponent />
    
    
    
     </div>
    </>
  );
};

export default Home;
