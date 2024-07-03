import React, { useState } from "react";
import * as S from "./style";
import Logo from "../../assets/WhiteLogo";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();
  const [id, setId] = useState("");
  const [pw, setPw] = useState("");

  const handleRegister = async () => {
    if (id && pw) {
      try {
        const response = await fetch(
          "http://localhost:3000/api/auth/register",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ username: id, password: pw }),
          }
        );
        if (response.ok) {
          alert("회원가입에 성공하였습니다!");
          navigate("/login");
        } else {
          throw new Error("회원가입에 실패했습니다.");
        }
      } catch (error) {
        alert(error.message);
      }
    } else {
      if (!id) {
        alert("이메일이 입력되지 않았습니다.");
      } else {
        alert("비밀번호가 입력되지 않았습니다.");
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
          <S.Input_Title>∙ 이메일 회원가입</S.Input_Title>
          <S.Input_Box
            type="text"
            placeholder="이메일"
            onChange={(e) => setId(e.target.value)}
            value={id}
          />
          <S.Input_Box
            type="password"
            placeholder="비밀번호"
            onChange={(e) => setPw(e.target.value)}
            value={pw}
          />
          <S.Button onClick={handleRegister}>회원가입</S.Button>
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

export default Register;
