import styled from "styled-components"

export const BoxLayout = styled.div`
  background-color: #f8f8f8;
  height: 244px;
  padding: 24px;
  position: relative;
  text-align: left;
  transition: all .4s;
  width: calc(33.33333% - 8px);
`
export const IconLayout = styled.div`
  text-align: left;
`
export const Icon = styled.img`
  height: 2pc;
  width: 2pc;
`
export const TextLayout = styled.div`
  color: #05141f;
  font-family: Arial;
  font-size: 18px;
  font-weight: 600;
  line-height: 1.43;
  margin-top: 9pt;
  overflow-wrap: break-word;
  word-break: keep-all;
`
export const Text = styled.span`
  color: #05141f;
  font-family: Arial;
  font-size: 18px;
  font-weight: 500;
  letter-spacing: normal;
  line-height: 1.43;
  margin-top: 9pt;
  overflow-wrap: break-word;
  word-break: keep-all;
`
export const Arrow = styled.img`
  height: 24px;
  position: absolute;
  right: 2pc;
  bottom: 24px;
  width: 24px;
`