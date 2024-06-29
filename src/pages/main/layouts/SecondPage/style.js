import styled from "styled-components";

export const Layout = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Header = styled.div`
  padding-top: 120px;
  width: 100%;
  border-bottom: 1px solid #dadbdc;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const Title = styled.p`
  color: #05141f;
  text-align: center;
  font-size: 42px;
  font-weight: 400;
  line-height: 54.18px;
`;

export const Type = styled.div`
  padding-top: 40px;
  display: flex;
  gap: 48px;
`;

export const NavText = styled.button`
  color: ${({ isSelected }) => (isSelected ? "#05141F" : "#697278")};
  font-family: Arial;
  font-size: 20px;
  font-weight: 400;
  border: none;
  background-color: transparent;
  border-bottom: ${({ isSelected }) =>
    isSelected ? "2px solid black" : "none"};
  cursor: pointer;
`;

export const Cars = styled.div`
  padding-top: 72px;
  width: 100%;
  display: flex;
  justify-content: center;
  gap: 24px;
  flex-wrap: wrap;
`;

export const Notice = styled.p`
  padding-top: 36px;
  color: #697278;
  font-size: 14px;
  font-weight: 400;
  line-height: 26.04px;
`;
