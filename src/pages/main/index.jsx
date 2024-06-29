import React from "react";
import * as S from "./layouts/FirstPage/style";
import Footer from "../../components/Footer";
import FirstPage from "./layouts/FirstPage";
import ThirdPage from "./layouts/ThirdPage";

const Main = () => {
  return (
    <>
      <FirstPage />
      <ThirdPage />
      <Footer />
    </>
  );
};

export default Main;
