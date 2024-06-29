import React from "react";
import * as S from "./style";
import Car1 from "../../assets/Car1.png";

const CarDetail = () => {
  return (
    <S.Layout>
      <S.Header>
        <S.Left>
          <S.CarName>The 2024 Morning</S.CarName>
          <S.CarSpecifications>
            <S.CarSpecification>1.0 가솔린</S.CarSpecification>
            <S.CarSpecification>|</S.CarSpecification>
            <S.CarSpecification>시그니처 A/T</S.CarSpecification>
          </S.CarSpecifications>
        </S.Left>
        <S.Rank>Top 1</S.Rank>
      </S.Header>
      <S.CarImg src={Car1} alt="차 사진" />
      <S.CarFeatures>
        <S.CarFeature>
          <S.CarKey>출시일</S.CarKey>
          <S.CarValue>2024-06-10</S.CarValue>
        </S.CarFeature>
        <S.CarFeature>
          <S.CarKey>배기량</S.CarKey>
          <S.CarValue>998 cc</S.CarValue>
        </S.CarFeature>
        <S.CarFeature>
          <S.CarKey>최고 출력</S.CarKey>
          <S.CarValue>76 ps / 6,200 rpm</S.CarValue>
        </S.CarFeature>
        <S.CarFeature>
          <S.CarKey>외장 컬러</S.CarKey>
          <S.CarValue>어드벤쳐러스 그린</S.CarValue>
        </S.CarFeature>
        <S.CarFeature>
          <S.CarKey>옵션 (2)</S.CarKey>
          <S.CarValue>
            드라이브 와이즈 Ⅱ(시그니처) <br /> 스타일(시그니처)
          </S.CarValue>
        </S.CarFeature>
      </S.CarFeatures>
      <S.Footer>
        <S.CarPrice>
          <S.Money>18,300,000</S.Money>
          <S.Won>원</S.Won>
        </S.CarPrice>
        <S.Buttons>
          <S.Button color="white">자세히 보기</S.Button>
          <S.Button color="black">견적 내기</S.Button>
        </S.Buttons>
      </S.Footer>
    </S.Layout>
  );
};

export default CarDetail;
