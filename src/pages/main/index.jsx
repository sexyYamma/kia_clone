import React from "react";
import Header from "../../components/Header";
import * as S from "./style";
// import Footer from "../../components/Footer";
import SecondPage from "./layouts/SecondPage";

const Main = () => {
  return (
    <S.Layout>
      <S.FirstPage>
        <Header type="white" />
        <S.BackgroundImg />
      </S.FirstPage>
      <SecondPage />
      {/* <Footer /> */}
    </S.Layout>
  );
};

export default Main;
