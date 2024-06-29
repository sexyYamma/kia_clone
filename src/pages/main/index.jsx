import React from "react";
import * as S from "./layouts/FirstPage/style";
import Footer from "../../components/Footer";
import FirstPage from "./layouts/FirstPage";
import ThirdPage from "./layouts/ThirdPage";
import FourthPage from "./layouts/FourthPage";
import SecondPage from "./layouts/SecondPage";

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
