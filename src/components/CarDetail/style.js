import styled from "styled-components";

export const Layout = styled.div`
  width: 30vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px 21px 40px 21px;
  border-radius: 15px;
  border: 1px solid #dadbdc;
  background-color: #fff;
`;

export const Header = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

export const Left = styled.div`
  display: flex;
  flex-direction: column;
`;

export const CarName = styled.p`
  color: #05141f;
  font-size: 24px;
  font-weight: 400;
  line-height: 34.32px;
`;

export const Rank = styled.div`
  border-radius: 15px;
  background-color: #05141f;
  color: #fff;
  font-size: 14px;
  font-weight: 400;
  line-height: 25px;
  padding: 0 17px 0 17px;
  display: flex;
  justify-content: center;
  align-items: center;
  object-fit: contain;
  height: 32px;
`;

export const CarSpecifications = styled.div`
  display: flex;
`;

export const CarSpecification = styled.p`
  color: #697278;
  font-size: 16px;
  font-weight: 400;
  line-height: 28px;
`;

export const CarImg = styled.img`
  padding-top: 32px;
  width: 24vw;
`;

export const CarFeatures = styled.div`
  padding-top: 32px;
  padding-bottom: 24px;
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const CarFeature = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

export const CarKey = styled.p`
  color: #05141f;
  font-size: 16px;
  font-weight: 400;
  line-height: 22.88px;
`;

export const CarValue = styled.p`
  color: #37434b;
  font-size: 16px;
  font-weight: 400;
  line-height: 28px;
  text-align: right;
`;

export const Footer = styled.div`
  margin-top: 24px;
  padding-top: 24px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-top: 1px solid #dadbdc;
  justify-content: space-between;
`;

export const CarPrice = styled.div`
  display: flex;
  align-items: center;
  margin-left: auto;
`;

export const Money = styled.p`
  color: #05141f;
  text-align: right;
  font-size: 28px;
  font-weight: 400;
  line-height: 39.76px;
`;

export const Won = styled.p`
  color: #05141f;
  text-align: right;
  font-size: 16px;
  font-weight: 400;
  line-height: 22.72px;
`;

export const Buttons = styled.div`
  display: flex;
  gap: 8px;
  padding-top: 48px;
`;

export const Button = styled.button`
  background-color: ${(props) =>
    props.color === "black" ? "#05141f" : "#fff"};
  color: ${(props) => (props.color === "black" ? "#fff" : "#05141f")};
  border: 1px solid #05141f;
  border-radius: 5px;
  padding: 16px 24px;
  cursor: pointer;
  &:hover {
    opacity: 0.8;
  }
`;
