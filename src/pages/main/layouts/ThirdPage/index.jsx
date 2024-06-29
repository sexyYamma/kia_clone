import React from "react";
import * as S from "./style";
import Car from "../../../../assets/Car.svg";
import Arrow from "../../../../assets/Arrow.svg";
import BannerCard from "../../../../components/BannerCard";

const ThirdPage = () => {
  const titleList = [
    { title: "견적내기", icon: "Car.svg" },
    { title: "시승신청", icon: "Drive.svg" },
    { title: "판매 네트워크", icon: "Location.svg" },
    { title: "이 달의 구매 혜택", icon: "Present.svg" },
  ];
  return (
    <S.Layout>
      <S.ContentsLayoutCover>
        <S.ContentsLayout>
          {
            titleList.map((item,index) => (
              <BannerCard title={item.title} icon={item.icon} key={index} />
            ))
          }
        </S.ContentsLayout>
      </S.ContentsLayoutCover>
    </S.Layout>
  );
};

export default ThirdPage;
