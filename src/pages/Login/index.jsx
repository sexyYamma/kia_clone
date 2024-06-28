import React from "react";
import * as S from "./style";
import Logo from "../../assets/WhiteLogo";

const Login = () => {
  return (
    <S.Container>
      <S.Header>
        <Logo />
      </S.Header>
      <S.Layout>
        <S.Inputs>
          <S.Input_Title>∙ 이메일 로그인</S.Input_Title>
          <S.Input_Box type="text" placeholder="이메일" />
          <S.Input_Box type="password" placeholder="비밀번호" />
          <S.Button>로그인</S.Button>
          <S.Nav>
            <S.Left>
              <S.Item>아이디 찾기</S.Item>
              <S.Item>|</S.Item>
              <S.Item>비밀번호 찾기</S.Item>
            </S.Left>
            <S.Item>회원가입</S.Item>
          </S.Nav>
        </S.Inputs>
      </S.Layout>
      <hr />
      <S.Footer>
        <S.Footer_Big>
          <S.Item>이용약관</S.Item>
          <S.Item>|</S.Item>
          <S.Item>개인정보 처리방침</S.Item>
        </S.Footer_Big>
        <S.Footer_Small>
          COPYRIGHT@KIA CORP. ALL RIGHTS RESERVED.
        </S.Footer_Small>
      </S.Footer>
    </S.Container>
  );
};

export default Login;
