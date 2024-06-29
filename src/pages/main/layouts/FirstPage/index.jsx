import React from 'react';
import * as S from "./style"
import Header from '../../../../components/Header';

const FirstPage = () => {
  return (
    <S.Layout>
      <Header type="white" />
      <S.BackgroundImg />
      <S.ContentsLayout>
        <S.ContentsGrid>
          <S.Contents>
            <S.MyMovingInfra>My Moving Infra</S.MyMovingInfra>
            <S.CarName>The Kia EV3</S.CarName>
            <S.BtnLayoutCover>
              <S.BtnLayout>
                <S.DetailBtn>자세히 보기</S.DetailBtn>
                <S.DetailBtn>견적 내기</S.DetailBtn>
              </S.BtnLayout>
            </S.BtnLayoutCover>
          </S.Contents>
        </S.ContentsGrid>
      </S.ContentsLayout>
    </S.Layout>
  );
};

export default FirstPage;