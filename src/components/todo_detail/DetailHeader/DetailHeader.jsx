import React from "react";
import { useNavigate } from "react-router-dom";

import styled from "styled-components";

const DetailHeader = ({ todo }) => {
  const navigate = useNavigate();

  return (
    <>
      <HeaderDiv>
        <TitleSpan>NOTE</TitleSpan>

        <GoBack
          onClick={() => {
            navigate("/todo_list");
          }}
        >
          Go Back
        </GoBack>
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

  margin-top: 30px;
`;

const TitleSpan = styled.span`
  color: ${(props) => {
    return props.theme.BLUE_4;
  }};

  font-size: 36px;
`;

const GoBack = styled.button`
  background-color: transparent;
  color: ${(props) => {
    return props.theme.BLUE_4;
  }};

  font-size: 36px;
  &:hover {
    cursor: pointer;
  }
`;
