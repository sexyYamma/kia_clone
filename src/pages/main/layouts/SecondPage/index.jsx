import React, { useEffect, useState } from "react";
import * as S from "./style";
import CarDetail from "../../../../components/CarDetail";
import axios from "axios";

const SecondPage = () => {
  const carType = ["최근 출시", "연비 효율", "적재공간", "안전성"];
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [carDetails, setCarDetails] = useState([]);

  useEffect(() => {
    const fetchCarDetails = async () => {
      try {
        const response = await axios.get(
          "http://localhost:3000/api/cardetails"
        ); // 서버의 엔드포인트를 정확히 명시
        setCarDetails(response.data); // 가져온 데이터를 state에 저장
      } catch (error) {
        console.error("Error fetching car details:", error);
      }
    };

    fetchCarDetails(); // 함수 호출
  }, []);
  return (
    <S.Layout>
      <S.Header>
        <S.Title>Best Kia</S.Title>
        <S.Type>
          {carType.map((item, index) => (
            <S.NavText
              key={index}
              onClick={() => setSelectedIndex(index)}
              isSelected={selectedIndex === index}
            >
              {item}
            </S.NavText>
          ))}
        </S.Type>
      </S.Header>
      <S.Cars>
        {carDetails.map((item) => (
          <CarDetail
            CarName={item.CarName}
            Rank={item.Rank}
            CarSpecification1={item.CarSpecification1}
            CarSpecification2={item.CarSpecification2}
            CarImg={require(`../../../../assets/${item.CarImg}.png`)} // 이미지 경로를 require로 수정
            ReleaseDay={item.ReleaseDay}
            High={item.High}
            Amount={item.Amount}
            OutsideColor={item.OutsideColor}
            Option1={item.Option1}
            Option2={item.Op2}
            Price={item.Price}
          />
        ))}
      </S.Cars>
      <S.Notice>
        ※ 차량의 출시일 기준이며 차량별 사양 구성은 최다 판매 기준입니다.
      </S.Notice>
    </S.Layout>
  );
};

export default SecondPage;
