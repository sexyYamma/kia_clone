import React from "react";
import * as S from "./style";
import WhiteLogo from "../../assets/WhiteLogo";
import Members from "../../assets/Members.png";
import What from "../../assets/What.png";
import Facebook from "../../assets/Facebook";
import Instagram from "../../assets/Instagram";
import Youtube from "../../assets/Youtube";
import Home from "../../assets/Home";
import World from "../../assets/World";
import UnderArrow from "../../assets/UnderArrow";
import Explain1 from "../../assets/Explain1.jpg";
import Explain2 from "../../assets/Explain2.jpg";
import Explain3 from "../../assets/Explain3.jpg";
import Explain4 from "../../assets/Explain4.jpg";
import Explain5 from "../../assets/Explain5.jpg";
import Explain6 from "../../assets/Explain6.jpg";

const Footer = () => {
  const HelpList = [
    "판매 네트워크",
    "견적 내기",
    "구매 상담 신청",
    "시승 신청",
    "기아렌터카",
  ];
  const NoticeList = ["New Kia", "공지사항", "뉴스", "IR", "채용"];
  const NavList = [
    "개인정보 처리방침",
    "프라이버시 센터",
    "이용약관",
    "윤리경영 사이버감사실",
    "전자공고",
    "사이트맵",
  ];
  const ExplainList = [
    {
      img: Explain1,
      text: "23년 국가고객만족도(NCSI)",
      career: "경형승용(9년연속), 중형승용(4년연속) 컴팩트RV, 대형RV 1위"
    },
    {
      img: Explain2,
      text: "24년 한국 산업의 서비스 품질지수",
      career: "우수 콜센터 선정 (21년 연속)"
    },
    {
      img: Explain3,
      text: "22년 한국산업의 서비스 품질지수",
      career: "자동차 A/S부문 1위 (9년 연속)"
    },
    {
      img: Explain4,
      text: "24년 대한민국 국가브랜드 대상",
      career: "자동차 멤버십 부문 1위 (13년 연속)"
    },
    {
      img: Explain5,
      text: "23년 한국서비스품질지수(KS-SQI)",
      career: "자동차 판매서비스 부문 1위 (4년 연속)"
    },
    {
      img: Explain6,
      text: "웹 접근성 품질인증",
      career: ""
    },
  ];
  return (
    <S.Layout>
      <S.Top>
        <WhiteLogo color="white" />
        <S.Top2>
          <S.Left>
            <S.Helps>
              {HelpList.map((item) => (
                <S.Help>{item}</S.Help>
              ))}
            </S.Helps>
            <S.Notices>
              {NoticeList.map((item) => (
                <S.Notice>{item}</S.Notice>
              ))}
            </S.Notices>
          </S.Left>
          <div>
            <S.SNS>
              <img src={Members} alt="members" />
              <img src={What} alt="what" />
              <Facebook />
              <Instagram />
              <Youtube />
            </S.SNS>
          </div>
        </S.Top2>
        <S.Bottom2>
          <S.Left2>
            <Home />
            <S.Help>홈</S.Help>
          </S.Left2>
          <S.Right2>
            <S.Language>
              <World />
              <S.Help>한국</S.Help>
            </S.Language>
            <S.FamilySite>
              <S.Help>Family Site</S.Help>
              <UnderArrow />
            </S.FamilySite>
          </S.Right2>
        </S.Bottom2>
      </S.Top>
      <S.Bottom>
        <S.Contents>
          <S.Notice>© Kia Corp. All rights reserved</S.Notice>
          <S.Nav>
            {NavList.map((item) => (
              <S.Notice>{item}</S.Notice>
            ))}
          </S.Nav>
        </S.Contents>
        <S.Explains>
          {ExplainList.map((item) => (
            <S.Explain>
              <div>
                <S.ExplainImg src={item.img} alt="사진" />
              </div>
              <div>
                <S.ExplainText>{item.text}</S.ExplainText>
                <S.ExplainText>{item.career}</S.ExplainText>
              </div>
            </S.Explain>
          ))}
        </S.Explains>
      </S.Bottom>
    </S.Layout>
  );
};

export default Footer;
