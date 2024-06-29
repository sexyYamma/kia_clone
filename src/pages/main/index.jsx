import React from "react";
import Header from "../../components/Header";
import * as S from "./style";
import Footer from "../../components/Footer";

const Main = () => {
  return (
    <S.Layout>
      <Header type="white" />
      <S.BackgroundImg />
      <Footer />
    </S.Layout>
  );
};

export default Main;
