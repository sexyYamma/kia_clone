import React from "react";
import * as S from './style'
import Arrow from '../../assets/Arrow.svg'

const BannerCard = ({title,icon}) => {
  return (
    <S.BoxLayout>
      <S.IconLayout>
        <S.Icon src={require(`../../assets/${icon}`)} />
      </S.IconLayout>
      <S.TextLayout>
        <S.Text>{title}</S.Text>
      </S.TextLayout>
      <S.Arrow src={Arrow} />
    </S.BoxLayout>
  );
};

export default BannerCard;
