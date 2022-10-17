import styled from "styled-components";

export const Header = styled.div`
  background-color: ${({ bg }) => (bg ? bg : "")};
  border: ${({ bd }) => (bd ? bd : "")};
  width: ${({ width }) => (width ? width : "")}px;
  height: ${({ height }) => (height ? height : "")}px;
  border-radius: ${({ br }) => (br ? br : "")}px;
  padding: ${({ pd }) => (pd ? pd : "")}px;
  margin: ${({ mg }) => (mg ? mg : "")}px;
  color: ${({ color }) => (color ? color : "")};
`;
