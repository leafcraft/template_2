
import Footer from "../Footer";
import { useOutlet } from "react-router-dom";
import ProtectedNavbar from "../Navbar/ProtectedNavbar";

const CartLayout = () => {
  const outlet = useOutlet();
  return (
    <>
      <div className="flex flex-col min-h-screen justify-between">
        <ProtectedNavbar />
        <div className=" flex-grow max-w-screen overflow-hidden ">
          {outlet}
        </div>
        <Footer />
      </div>
    </>
  );
};

export default CartLayout;
