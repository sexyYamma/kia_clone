import React from 'react';
import styled from 'styled-components';
import Logo from '../../assets/Logo';


const Header = () => {
  return (
    <Layout>
      <Nav>
        <NavText>차량</NavText>
        <NavText>구매</NavText>
        <NavText>체험</NavText>
        <NavText>이벤트</NavText>
        <NavText>고객지원</NavText>
        <NavText>Discover Kia</NavText>
      </Nav>
      <LogoLayout>
        <Logo />
      </LogoLayout>
      <RightNav>
        <NavText>KR</NavText>
        <NavText>통합검색</NavText>
        <NavText>로그인</NavText>
      </RightNav>
    </Layout>
  );
};

const Layout = styled.header`
  width: 100%;
  height: 80px;
  position: fixed;
`
const Nav = styled.nav`
  display: flex;
  gap: 40px;
  position: absolute;
  bottom: 30%;
  margin-left: 50px;
`
const NavText = styled.p`
  color: #FFF;
  font-family: Arial;
  font-size: 18px;
  font-weight: 400;
  line-height: 21.6px;
`
const LogoLayout = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
`
const RightNav = styled.nav`
  display: flex;
  position: absolute;
  right: 0;
  margin-right: 50px;
  gap: 40px;
  bottom: 30%;
`

export default Header;