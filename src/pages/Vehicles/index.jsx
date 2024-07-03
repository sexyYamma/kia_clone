import React, { useState } from "react";
import styled from "styled-components";
import Header from "../../components/Header";
import VehicleCard from "../../components/VehicleCard";
import Footer from "../../components/Footer";

const Vehicles = () => {
  const carType = ["EV & PBV", "승용", "RV", "택시 & 버스 & 상용"];
  const [selectedIndex, setSelectedIndex] = useState(0);

  return (
    <Layout>
      <Header type="black" />
      <MainNavLayout>
        <NavTextLayout>
          {carType.map((item, index) => (
            <NavText
              key={index}
              onClick={() => setSelectedIndex(index)}
              isSelected={selectedIndex === index}
            >
              {item}
            </NavText>
          ))}
        </NavTextLayout>
      </MainNavLayout>
      <VehiclesLayout>
        <VehiclesContents>
          {/* {
            CarData.map((item,index) => (
              <VehicleCard name={item.name} price={item.price} img={require(`../../assets/${item.img}`)} />
            ))
          } */}
        </VehiclesContents>
      </VehiclesLayout>
      <Footer />
    </Layout>
  );
};

const Layout = styled.div`
  width: 100%;
`;

const MainNavLayout = styled.div`
  height: 180px;
  width: 100%;
  display: flex;
  align-items: end;
  border-bottom: 1px solid #dadbdc;
`;

const NavTextLayout = styled.div`
  display: flex;
  height: 56px;
  padding-right: 40px;
  gap: 40px;
  margin-left: 30px;
`;

const NavText = styled.button`
  color: ${({ isSelected }) => (isSelected ? "black" : "#697279")};
  font-family: Arial;
  font-size: 20px;
  font-weight: 700;
  border: none;
  background-color: transparent;
  border-bottom: ${({ isSelected }) =>
    isSelected ? "2px solid black" : "none"};
  cursor: pointer;
`;

const VehiclesLayout = styled.div`
  width: 100%;
  max-width: 84pc;
  padding: 94pt 0 0;
  margin: 0 auto;
`;

const VehiclesContents = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
`;

export default Vehicles;
