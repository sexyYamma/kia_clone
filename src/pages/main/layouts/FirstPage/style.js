import styled from "styled-components";
import MainCar from "../../../../assets/MainCar.png";

export const Layout = styled.div`
  width: 100%;
  height: 100vh;
  z-index: 1;
`;
export const BackgroundImg = styled.div`
  width: 100%;
  height: 100%;
  background-image: url(${MainCar});
  background-size: cover;
  background-position: center;
  position: absolute;
  top: 0;
  z-index: -1;
`;
export const FirstPage = styled.div`
  width: 100%;
  height: 100vh;
`
export const ContentsLayout = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 0 3pc 4pc;
  position: absolute;
  right: 0;
  top: 0;
  bottom: 0;
  left: 0;
`
export const ContentsGrid = styled.div`
  display: grid;
grid-template-columns: 9.5fr 2fr 1.25fr;
grid-template-rows: 140px 1fr 130px;
height: 100%;
position: relative;
width: 100%;
z-index: 0;
`
export const Contents = styled.div`
  width: 100%;
  position: absolute;
  bottom: 0;
`
export const MyMovingInfra = styled.p`
  color: #fff;
  font-family: Arial;
  font-size: 18px;
  line-height: 1.67;
`
export const CarName = styled.h2`
  color: #fff;
  font-family: Arial;
  font-size: 52px;
  font-weight: 600;
  letter-spacing: normal;
  line-height: 1.43;
  line-height: 1.23;
  margin-top: 1pc;
`
export const BtnLayoutCover = styled.div`

`
export const BtnLayout = styled.div`
  margin-top: 3pc;
  width: fit-content;
`
export const DetailBtn = styled.button`
  background-color: #fff;
  border: 1px solid #fff;
  color: #05141f;
  font-family: Arial;
  font-size: 14px;
  font-weight: 700;
  line-height: 1;
  min-width: 88px;
  padding: 1pc 24px;
  position: relative;
  text-align: center;
  z-index: 1;
  cursor: pointer;

  &:nth-child(2) {
    background-color: #05141f;
    border: 1px solid #05141f;
    color: white;
    margin-left: 1pc;
  }
`