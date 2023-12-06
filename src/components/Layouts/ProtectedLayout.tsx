
import Footer from "../Footer";
import { useOutlet } from "react-router-dom";
import NavbarCommonComponent from "../../components/Navbar/NavbarCommonComponent";
import { useSelector } from "react-redux";
import NotFound from "../../Pages/PageNotFpund";

const ProtectedLayout = () => {
  const outlet = useOutlet();

  return (
    <>
       <div className="flex flex-col min-h-screen justify-between">
    <NavbarCommonComponent variant="ProtectedNavbar" />
        <div className=" flex-grow overflow-hidden ">
          {outlet}
        </div>
        <Footer />
      </div>
    </>
  );
};

export default ProtectedLayout;