import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const DetailFixButton = ({ id }) => {
  const navigate = useNavigate();

  const handleClick = (e) => {
    e.preventDefault();
    navigate(`/todo_detail/todo_fix/${id}`);
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
