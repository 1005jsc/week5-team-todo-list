import styled from "styled-components";

export const Heading = styled.h1`
  background-color: ${({ bg }) => (bg ? bg : "")};
  border: ${({ bd }) => (bd ? bd : "")};
  width: ${({ width }) => (width ? width : "")}px;
  height: ${({ height }) => (height ? height : "")}px;
  border-radius: ${({ br }) => (br ? br : "")}px;
  padding: ${({ pd }) => (pd ? pd : "")}px;
  margin: ${({ mg }) => (mg ? mg : "")}px;
  color: ${({ color }) => (color ? color : "")};
  font-size: ${({ fs }) => (fs ? fs : "")}px;
  text-align: ${({ ta }) => (ta ? ta : "")};
  letter-spacing: ${({ ls }) => (ls ? ls : "")}em;
  // 가상 요소를 props로 넘겨주고 싶다면?
  animation: ${({ Typing }) => (Typing ? Typing : "")} 2s steps(22),
    ${({ Blink }) => (Blink ? Blink : "")} 0.5s step-end infinite alternate;
  border-right: ${({ bdr }) => (bdr ? bdr : "")};
  border-bottom: ${({ bdb }) => (bdb ? bdb : "")};
  overflow: ${({ ovf }) => (ovf ? ovf : "visible")};
`;
