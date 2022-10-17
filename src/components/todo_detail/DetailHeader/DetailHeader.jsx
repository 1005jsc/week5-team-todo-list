import React from "react";
import styled from "styled-components";

const DetailHeader = ({}) => {
  return (
    <>
      <HeaderDiv>
        <IdSpan>id: (2)</IdSpan>
        <GoBack>이전으로</GoBack>
      </HeaderDiv>
    </>
  );
};
export default DetailHeader;

const HeaderDiv = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const IdSpan = styled.span`
  font-size: 20px;
`;

const GoBack = styled.button`
  background-color: transparent;
  &:hover {
    cursor: pointer;
  }
`;
