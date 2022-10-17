import styled from "styled-components";

export const Button = styled.button`
  background-color: ${({ bc }) => (bc ? bc : "")};
  background-image: url(${({ bgimg }) => (bgimg ? bgimg : "")});
  background-position: center center;
  background-size: contain;
  background-repeat: no-repeat;
  border: ${({ bd }) => (bd ? bd : "")};
  width: ${({ width }) => (width ? width : "")}px;
  height: ${({ height }) => (height ? height : "")}px;
  border-radius: ${({ br }) => (br ? br : "")};
  padding: ${({ pd }) => (pd ? pd : "")}px;
  margin: ${({ mg }) => (mg ? mg : "")}px;
  color: ${({ color }) => (color ? color : "")};
  cursor: pointer;
  &:hover {
    opacity: 0.8;
  }
`;
