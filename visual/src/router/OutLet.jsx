import { Outlet } from "react-router-dom";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";



const OutLet = (theme) => {

  console.log(theme)

  return (
    <>
    <Header />
      <Outlet/>
      <Footer/>
    </>
  );
};

export default OutLet;
