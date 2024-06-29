import React from "react";
import * as S from "./layouts/FirstPage/style";
import Footer from "../../components/Footer";
import FirstPage from "./layouts/FirstPage";
import ThirdPage from "./layouts/ThirdPage";
import FourthPage from "./layouts/FourthPage";

const Main = () => {
  return (
    <>
      <FirstPage />
      <ThirdPage />
      <FourthPage />
      <Footer />
    </>
  );
};

export default Main;
