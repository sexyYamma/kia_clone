import styled from "styled-components";
import MainCar from "../../assets/MainCar.png";

export const Layout = styled.div`
  width: 100%;
  height: 100vh;
`;
export const BackgroundImg = styled.div`
  width: 100%;
  height: 100%;
  background-image: url(${MainCar});
  background-size: cover;
  background-position: center;
`;
