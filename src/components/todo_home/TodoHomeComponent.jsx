import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { Button, Flex, Heading } from "../../common";
import { blue } from "@mui/material/colors";
import ArrowCircleRightRoundedIcon from "@mui/icons-material/ArrowCircleRightRounded";

const TodoHomeComponent = () => {
  const Navigate = useNavigate();
  return (
    <Flex width="100%" height="100vh" fd="column" jc="center" ai="center">
      <Heading color=" #b7cee8" fs="45" ls="0.1" po="reletive">
        MY TODO LIST
      </Heading>
      <HomeContainer>
        <Button
          bc="#b7cee8"
          bd="solid 2px #b7cee8"
          br="12px"
          width="80%"
          height="200px"
          onClick={() => {
            Navigate("/todo_form");
          }}
        >
          <BtnTitle color="white">Todo 등록하기</BtnTitle>
          <ArrowCircleRightRoundedIcon sx={{ color: blue[50] }} />
        </Button>
        <Button
          bc="white"
          bd="solid 2px #D8DBE2"
          br="12px"
          width="80%"
          height="200px"
          mg="30"
          onClick={() => {
            Navigate("/todo_list");
          }}
        >
          <BtnTitle color="#b7cee8">Todo List 보기</BtnTitle>
          <ArrowCircleRightRoundedIcon sx={{ color: blue[100] }} />
        </Button>
      </HomeContainer>
    </Flex>
  );
};

const HomeContainer = styled.div`
  width: 100%;
  height: 50%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`;

const BtnTitle = styled.h2`
  color: ${(props) => props.color};
  font-size: 25px;
  letter-spacing: 0.02em;
  font-weight: 700;
`;

export default TodoHomeComponent;
