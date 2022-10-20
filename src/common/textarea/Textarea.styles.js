import styled from "styled-components";

export const Textarea = styled.textarea`
  display: block;
  outline: none;
  background-color: ${({ bg }) => (bg ? bg : "")};
  border: ${({ bd }) => (bd ? bd : "")};
  width: ${({ width }) => (width ? width : "")};
  height: ${({ height }) => (height ? height : "")}px;
  border-radius: ${({ br }) => (br ? br : "")}px;
  padding: ${({ pd }) => (pd ? pd : "")}px;
  margin: ${({ mg }) => (mg ? mg : "")}px;
  color: ${({ color }) => (color ? color : "")};
  font-size: ${({ fs }) => (fs ? fs : "")}px;
  resize: none;
`;
