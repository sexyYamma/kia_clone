import React from 'react';
import * as S from './style'
import Tasman from '../../../../assets/NewsImg.png'

const FourthPage = () => {
  return (
    <S.Layout>
      <S.Title>News</S.Title>
      <S.NewsLayout>
        <S.NewsContent>
          <S.Cate>기아 소식</S.Cate>
          <S.Tits>기아, 〈2024 부산모빌리티쇼〉 참가</S.Tits>
          <S.DetailBtn>자세히 보기</S.DetailBtn>
        </S.NewsContent>
        <S.NewsImgLayout>
          <S.NewsImg src={Tasman} />
        </S.NewsImgLayout>
      </S.NewsLayout>
      <S.NewsListLayout>
        <li>
          <S.Cates>뉴스</S.Cates>
          <S.Preview>기아, 〈2024 부산모빌리티쇼〉 참가</S.Preview>
        </li>
        <li>
          <S.Cates>뉴스</S.Cates>
          <S.Preview>기아 진유석 선임 오토컨설턴트, 4천대 판매 ‘그랜드 마스터’ 등극</S.Preview>
        </li>
        <li>
          <S.Cates>공지</S.Cates>
          <S.Preview>개인정보 처리방침 변경 안내 (2024.05.31)</S.Preview>
        </li>
      </S.NewsListLayout>
    </S.Layout>
  );
};

export default FourthPage;