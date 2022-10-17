import styled from "styled-components";

export const Box = styled.div`
  display: ${({ dp }) => (dp ? dp : "")};
  grid-template-columns: ${({ gtc }) => (gtc ? gtc : "")};
  background-color: ${({ bg }) => (bg ? bg : "")};
  height: ${({ height }) => (height ? height : "")};
  width: ${({ width }) => (width ? width : "")};
  border-radius: ${({ br }) => (br ? br : "")}px;
  padding: ${({ pd }) => (pd ? pd : "")}px;
  margin: ${({ mg }) => (mg ? mg : "")}px;
  overflow: ${({ overflow }) => (overflow ? overflow : "")};
  box-shadow: ${({ bs }) => (bs ? bs : "")};
  transition: ${({ tf }) => (tf ? "transform 3000ms" : "")};
  /* hover */
  &:hover {
    transform: ${({ tf }) => (tf ? tf : "")};
  }
  /* scroll */
  &::-webkit-scrollbar {
    display: none; /* Chrome , Safari , Opera */
  }
`;
