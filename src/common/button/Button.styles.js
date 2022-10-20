import styled from "styled-components";

export const Button = styled.button`
  background-color: ${({ bc }) => (bc ? bc : "")};
  background-image: url(${({ bgimg }) => (bgimg ? bgimg : "")});
  background-position: center center;
  background-size: contain;
  background-repeat: no-repeat;
  border: ${({ bd }) => (bd ? bd : "")};
  width: ${({ width }) => (width ? width : "")};
  height: ${({ height }) => (height ? height : "")};
  border-radius: ${({ br }) => (br ? br : "")};
  padding: ${({ pd }) => (pd ? pd : "")}px;
  letter-spacing: ${({ ls }) => (ls ? ls : "")}em;
  margin: ${({ mg }) => (mg ? mg : "")}px;
  color: ${({ color }) => (color ? color : "")};
  box-shadow: ${({ bs }) => (bs ? bs : "")};
  font-size: ${({ fs }) => (fs ? fs : "")}px;
  position: ${({ po }) => (po ? po : "static")};
  bottom: ${({ bt }) => (bt ? bt : "")};
  left: ${({ lf }) => (lf ? lf : "")};
  cursor: pointer;
  &:hover {
    opacity: 0.8;
  }
`;
