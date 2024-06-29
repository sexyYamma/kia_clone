import React, { useState } from "react";
import * as S from "./style";
import CarDetail from "../../../../components/CarDetail";

const SecondPage = () => {
  const carType = ["최근 출시", "연비 효율", "적재공간", "안전성"];
  const [selectedIndex, setSelectedIndex] = useState(0);

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
        <CarDetail />
      </S.Cars>
    </S.Layout>
  );
};

export default SecondPage;
