import React from 'react';
import Header from '../../components/Header';
import styled from 'styled-components';

import MainCar from '../../assets/MainCar.png'

const Main = () => {
  return (
    <Layout>
      <Header />
      <BackgroundImg />
    </Layout>
  );
};

const Layout = styled.div`
  width: 100%;
  height: 100vh;
`
const BackgroundImg = styled.div`
  width: 100%;
  height: 100%;
  background-image: url(${MainCar});
  background-size: cover;
  background-position: center;
`

export default Main;