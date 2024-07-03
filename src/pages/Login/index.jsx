import React, { useState } from "react";
import * as S from "./style";
import Logo from "../../assets/WhiteLogo";
import { useNavigate } from "react-router-dom";
import { useAtom } from "jotai";
import { login } from "../../atoms/login";

const Login = () => {
  const navigate = useNavigate();
  const [isLogin, setIsLogin] = useAtom(login);
  const [inputs, setInputs] = useState({
    id: "",
    password: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  const handleLogin = async () => {
    if (inputs.id === "" || inputs.password === "") {
      alert("아이디나 비밀번호를 입력하세요.");
    } else {
      try {
        const response = await fetch("http://localhost:3000/api/auth/login", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            username: inputs.id,
            password: inputs.password,
          }),
        });
        if (response.ok) {
          setIsLogin(true);
          alert("로그인 성공!");
          navigate("/");
        } else {
          throw new Error("로그인에 실패했습니다.");
        }
      } catch (error) {
        alert(error.message);
      }
    }
  };

  return (
    <S.Container>
      <S.Header>
        <S.LogoLayout onClick={() => navigate("/")}>
          <Logo color="black" />
        </S.LogoLayout>
      </S.Header>
      <S.Layout>
        <S.Inputs>
          <S.Input_Title>∙ 이메일 로그인</S.Input_Title>
          <S.Input_Box
            name="id"
            onChange={handleInputChange}
            type="text"
            placeholder="이메일"
            value={inputs.id}
          />
          <S.Input_Box
            name="password"
            onChange={handleInputChange}
            type="password"
            placeholder="비밀번호"
            value={inputs.password}
          />
          <S.Button onClick={handleLogin}>로그인</S.Button>
          <S.Nav>
            <S.Left>
              <S.Item>아이디 찾기</S.Item>
              <S.Item>|</S.Item>
              <S.Item>비밀번호 찾기</S.Item>
            </S.Left>
            <S.Item to="/register">회원가입</S.Item>
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
