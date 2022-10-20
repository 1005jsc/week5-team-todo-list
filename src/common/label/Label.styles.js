import styled from "styled-components";

export const Label = styled.label`
  background-color: ${({ bg }) => (bg ? bg : "")};
  color: ${({ cl }) => (cl ? cl : "")};
  display: flex;
  align-items: center;
  color: ${({ color }) => (color ? color : "")};
  padding: ${({ pd }) => (pd ? pd : "")};
  margin: ${({ mg }) => (mg ? mg : "")};
  font-size: ${({ fs }) => (fs ? fs : "")}px;
  text-align: ${({ ta }) => (ta ? ta : "")};
  letter-spacing: ${({ ls }) => (ls ? ls : "")}em;
  width: ${({ width }) => (width ? width : "")};
  height: ${({ height }) => (height ? height : "")}px;
`;
