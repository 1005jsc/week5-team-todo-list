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
      <FixButton onClick={handleClick}>내용 수정</FixButton>
    </>
  );
};
export default DetailFixButton;

const FixButton = styled.button`
  position: relative;
  right: -87%;
  font-size: 16px;
  width: 120px;
  height: 40px;
  margin: 30px;

  border-radius: 10px;
  background-color: ${(props) => props.theme.LIGHT_GREY}; ;
`;
