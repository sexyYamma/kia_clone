import React, { useState } from 'react';
import styled from 'styled-components';
import WhiteLogo from '../../assets/WhiteLogo';
import { Link, useNavigate } from 'react-router-dom';

const Header = ({ type }) => {
  const navigate = useNavigate();
  const [headerState, setHeaderState] = useState(type);
  return (
    <Layout headerState={headerState}>
      <Nav>
        <NavText headerState={headerState} to='/vehicles'>차량</NavText>
        <NavText headerState={headerState}>구매</NavText>
        <NavText headerState={headerState}>체험</NavText>
        <NavText headerState={headerState}>이벤트</NavText>
        <NavText headerState={headerState}>고객지원</NavText>
        <NavText headerState={headerState}>Discover Kia</NavText>
      </Nav>
      <LogoLayout onClick={() => { navigate('/') }}>
        <WhiteLogo color={headerState === "white" ? '#FFF' : '#000'} />
      </LogoLayout>
      <RightNav>
        <NavText headerState={headerState}>KR</NavText>
        <NavText headerState={headerState}>통합검색</NavText>
        <NavText headerState={headerState}>로그인</NavText>
      </RightNav>
    </Layout>
  );
};

const Layout = styled.header`
  width: 100%;
  height: 80px;
  position: absolute;
  top: 0;
  display: flex;
  justify-content: center;
`;

const Nav = styled.nav`
  display: flex;
  gap: 50px;
  position: absolute;
  bottom: 30%;
  margin-left: 50px;
  left: 0;
`;

const NavText = styled(Link)`
  color: ${({ headerState }) => (headerState === "white" ? '#FFF' : '#000')};
  font-family: Arial;
  font-size: 18px;
  font-weight: 400;
  line-height: 21.6px;
  text-decoration: none;
`;

const LogoLayout = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  cursor: pointer;
`;

const RightNav = styled.nav`
  display: flex;
  position: absolute;
  right: 0;
  margin-right: 50px;
  gap: 40px;
  bottom: 30%;
`;

export default Header;
