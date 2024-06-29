import React from "react";
import Footer from "../../components/Footer";
import FirstPage from "./layouts/FirstPage";
import SecondPage from "./layouts/SecondPage";
import ThirdPage from "./layouts/ThirdPage";
import FourthPage from "./layouts/FourthPage";

const Main = () => {
  return (
    <>
      <FirstPage />
      <SecondPage />
      <ThirdPage />
      <FourthPage />
      <Footer />
    </>
  );
};

export default Main;
