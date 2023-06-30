import { Outlet } from "react-router-dom";
import Header from "../../Components/Static/Header/Header";
import Footer from "../../Components/Static/Footer/Footer";

const Main = () => {
  return (
    <div className="Main">
      <Header></Header>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default Main;
