import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { Button } from "../../common/button/Button.styles";

const DetailFixButton = ({}) => {
  const navigate = useNavigate();

  const handleClick = (e) => {
    e.preventDefault();
    navigate(`todo_fix`);
  };

  return (
    <>
      <FixButton onClick={handleClick}>수정</FixButton>
    </>
  );
};
export default DetailFixButton;

const FixButton = styled.button`
  font-size: 14px;
  width: 90%;
  margin: 30px;
`;
