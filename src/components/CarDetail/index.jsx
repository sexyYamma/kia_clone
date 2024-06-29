import React from "react";
import * as S from "./style";
const CarDetail = ({
  CarName,
  Rank,
  CarSpecification1,
  CarSpecification2,
  CarImg,
  ReleaseDay,
  High,
  Amount,
  OutsideColor,
  Option1,
  Option2,
  Price,
}) => {
  return (
    <S.Layout>
      <S.Header>
        <S.Left>
          <S.CarName>{CarName}</S.CarName>
          <S.CarSpecifications>
            <S.CarSpecification>{CarSpecification1}</S.CarSpecification>
            <S.CarSpecification>|</S.CarSpecification>
            <S.CarSpecification>{CarSpecification2}</S.CarSpecification>
          </S.CarSpecifications>
        </S.Left>
        <S.Rank>{Rank}</S.Rank>
      </S.Header>
      <S.CarImg src={CarImg} alt="차 사진" />
      <S.CarFeatures>
        <S.CarFeature>
          <S.CarKey>출시일</S.CarKey>
          <S.CarValue>{ReleaseDay}</S.CarValue>
        </S.CarFeature>
        <S.CarFeature>
          <S.CarKey>배터리 용량</S.CarKey>
          <S.CarValue>{Amount}</S.CarValue>
        </S.CarFeature>
        <S.CarFeature>
          <S.CarKey>최고 출력</S.CarKey>
          <S.CarValue>{High}</S.CarValue>
        </S.CarFeature>
        <S.CarFeature>
          <S.CarKey>외장 컬러</S.CarKey>
          <S.CarValue>{OutsideColor}</S.CarValue>
        </S.CarFeature>
        <S.CarFeature>
          <S.CarKey>옵션 (2)</S.CarKey>
          <S.CarValue>
            {Option1} <br /> {Option2}
          </S.CarValue>
        </S.CarFeature>
      </S.CarFeatures>
      <S.Footer>
        <S.CarPrice>
          <S.Money>{Price}</S.Money>
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
