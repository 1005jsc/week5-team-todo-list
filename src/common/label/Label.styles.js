import styled from "styled-components";

export const Label = styled.label`
  background-color: ${({ bg }) => (bg ? bg : "")};
  color: ${({ cl }) => (cl ? cl : "")};
  display: flex;
  align-items: center;
`;
