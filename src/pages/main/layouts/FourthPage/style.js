import styled from "styled-components";

export const Layout = styled.div`
  width: 100%;
  padding-bottom: 90pt;
`
export const Title = styled.h2`
  color: #05141f;
  font-family: Arial;
  font-size: 42px;
  font-weight: 600;
  line-height: 1.29;
  text-align: center;
`
export const NewsLayout = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 4pc auto 5pc;
  max-width: 1340px;
  position: relative;
  width: 100%;
`
export const NewsContent = styled.div`
  background-color: #697278;
  padding: 5pc 4pc 4pc;
  position: relative;
  width: 50%;
`
export const Cate = styled.div`
  color: #fff;
  font-family: Kia Signature Bold, Arial, sans-serif, Hevetica;
  font-size: 18px;
  font-weight: 600;
  line-height: 1.67;
`
export const Tits = styled.div`
  color: #fff;
  font-family: Arial;
  font-size: 24px;
  font-weight: 600;
  line-height: 1.5;
  margin-top: 1pc;
`
export const DetailBtn = styled.button`
  position: absolute;
  bottom: 4pc;
  left: 4pc;
  background-color: #fff;
  border: 1px solid #9fa5a9;
  color: #05141f;
  font-family: Arial;
  font-size: 14px;
  font-weight: 600;
  line-height: 1;
  min-width: 88px;
  padding: 1pc 24px;
  text-align: center;
  z-index: 1;
  cursor: pointer;
`
export const NewsImgLayout = styled.div`
  overflow: hidden;
  width: 50%;
`
export const NewsImg = styled.img`
  height: 100%;
  object-fit: cover;
  object-position: top center;
  position: relative;
  width: 100%;
`
export const NewsListLayout = styled.ul`
  margin: 5pc auto 90pt;
  width: auto;
  display: flex;
  justify-content: space-between;
  max-width: 1340px;
  position: relative;
  list-style: none;

  & > li {
    width: calc(33.33333% - 75pt);
    word-break: keep-all;
  }
`
export const Cates = styled.p`
  color: #697278;
  font-family: Arial;
  font-size: 18px;
  font-weight: 700;
  line-height: 1.43;
  margin-bottom: 1pc;
`
export const Preview = styled.p`
  color: #05141f;
  font-family: Arial;
  font-size: 18px;
  font-weight: 700;
  line-height: 1.67;
  margin-top: 1pc;
`