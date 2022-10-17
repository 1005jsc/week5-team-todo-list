import styled from "styled-components";

export const P = styled.p`
  background-color: ${({ bc }) => (bc ? bc : "")};
  width: ${({ width }) => (width ? width : "")}px;
  height: ${({ height }) => (height ? height : "")}px;
  border: ${({ bd }) => (bd ? bd : "")};
  border-radius: ${({ br }) => (br ? br : "")};
  padding: ${({ pd }) => (pd ? pd : "")}px;
  margin: ${({ mg }) => (mg ? mg : "")}px;
  color: ${({ color }) => (color ? color : "")};
  font-size: ${({ fs }) => (fs ? fs : "")}px;
  text-align: ${({ ta }) => (ta ? ta : "")};
  letter-spacing: ${({ ls }) => (ls ? ls : "")}em;
  line-height: ${({ lh }) => (lh ? lh : "18px")};
  color: ${({ color }) => (color ? color : "")};
`;
