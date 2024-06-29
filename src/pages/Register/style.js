import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
`;

export const Header = styled.div`
  width: 100%;
  height: 80px;
  border-bottom: 1px solid #dedede;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const LogoLayout = styled.div`
  cursor: pointer;
`

export const Layout = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 56px;
`;

export const Inputs = styled.div`
  padding-top: 52px;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;
export const Input_Title = styled.p`
  font-weight: 600;
  font-size: 16px;
  color: #595959;
`;
export const Input_Box = styled.input`
  padding: 12px 354px 13px 12px;
  border: 1px solid #ced4da;
  &::placeholder {
    color: #595959;
  }
  font-size: 16px;
  outline: none;
  &:focus {
    border: 1px solid #01a7cf;
  }
`;

export const Button = styled.div`
  padding: 18px 0;
  display: flex;
  justify-content: center;
  background-color: #05141f;
  font-size: 16px;
  color: #fff;
  margin-top: 4px;
  cursor: pointer;
`;

export const Nav = styled.div`
  width: 100%;
  display: flex;
  margin-top: 12px;
  justify-content: space-between;
`;
export const Left = styled.div`
  display: flex;
  gap: 8px;
`;
export const Item = styled.p`
  color: #595959;
  font-size: 16px;
  font-weight: 600;
`;

export const Footer = styled.div`
  width: 100%;
  margin-top: 12px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const Footer_Big = styled.div`
  display: flex;
  gap: 8px;
`;
export const Footer_Small = styled.p`
  margin-top: 8px;
  color: #828282;
  font-size: 16px;
  font-weight: 400;
`;
