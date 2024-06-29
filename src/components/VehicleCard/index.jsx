import React from 'react';
import styled from 'styled-components';

const VehicleCard = ({name,price,img}) => {
  return (
    <Layout>
      <CarImgLayout>
        <CarImg src={img} />
      </CarImgLayout>
      <Name>{name}</Name>
      <Price>{price} 만원 ~</Price>
    </Layout>
  );
};

const Layout = styled.div`
  height: 380px;
  margin-bottom: 24px;
  margin-left: 1.785%;
  max-width: 27pc;
  padding: 2pc 0 40px;
  position: relative;
  text-align: center;
  width: 31.548%;
  border-radius: 12px;

  &:hover {
    background-color: #F7F7F7;
  }
`
const CarImgLayout = styled.div`
  width: 100%;
  height: 177px;
  position: relative;
`
const CarImg = styled.img`
  left: 50%;
  max-width: 25pc;
  position: absolute;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
`
const Name = styled.p`
  margin-top: 1pc;
  color: #05141f;
  font-family: Arial;
  font-size: 18px;
  font-weight: 700;
  line-height: 1.43;
`
const Price = styled.div`
  color: #697278;
  font-family: Arial;
  font-size: 1pc;
  font-weight: 400;
  line-height: 1.43;
  margin-top: 4px;
`

export default VehicleCard;