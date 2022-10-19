import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { Button } from "../../common";
import { blue } from "@mui/material/colors";
import ArrowCircleRightRoundedIcon from "@mui/icons-material/ArrowCircleRightRounded";

const TodoHomeComponent = () => {
  const Navigate = useNavigate();
  return (
    <HomeContainer>
      <Button
        bc="#b7cee8"
        bd="solid 2px #b7cee8"
        br="10px"
        width="80%"
        height="200px"
        mg="30"
        bs="0px 1px 1px 0px #b0bec5"
        onClick={() => {
          Navigate("/todo_form");
        }}
      >
        <BtnTitle color="white">Todo 등록하러가기</BtnTitle>
        <ArrowCircleRightRoundedIcon sx={{ color: blue[50] }} />
      </Button>
      <Button
        bc="white"
        bd="solid 2px #D8DBE2"
        br="10px"
        width="80%"
        height="200px"
        mg="30"
        bs="0.5px 0.5px 0px 0.5px #b0bec5"
        onClick={() => {
          Navigate("/todo_list");
        }}
      >
        <BtnTitle color="#b7cee8">Todo 리스트보기</BtnTitle>
        <ArrowCircleRightRoundedIcon sx={{ color: blue[100] }} />
      </Button>
    </HomeContainer>
  );
};

const HomeContainer = styled.div`
  width: 80%;
  height: 100%;
  margin-bottom: 200px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const BtnTitle = styled.h2`
  color: ${(props) => props.color};
  font-weight: 700;
`;

export default TodoHomeComponent;
