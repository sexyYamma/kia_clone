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

  const handleSubmit = (e) => {
    e.preventDefault();

    if (inputs.id === "" || inputs.password === "") {
      alert("아이디나 비밀번호를 입력하세요.");
    } else {
      const storedId = localStorage.getItem("id");
      const storedPw = localStorage.getItem("pw");

      if (storedId === inputs.id && storedPw === inputs.password) {
        setIsLogin(true);
        alert("로그인 성공!");
        navigate("/");
      } else {
        if (storedId !== inputs.id) {
          alert("일치하는 계정이 없습니다.");
          setInputs({ id: "", password: "" });
        } else if (storedId === inputs.id && storedPw !== inputs.password) {
          alert("비밀번호가 일치하지 않습니다.");
          setInputs({ id: inputs.id, password: "" });
        }
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
        <form onSubmit={handleSubmit}>
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
            <S.Button type="submit">로그인</S.Button>
            <S.Nav>
              <S.Left>
                <S.Item>아이디 찾기</S.Item>
                <S.Item>|</S.Item>
                <S.Item>비밀번호 찾기</S.Item>
              </S.Left>
              <S.Item to="/register">회원가입</S.Item>
            </S.Nav>
          </S.Inputs>
        </form>
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
