import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "../../common";
import { Header } from "../../common/header/Header.styles";

const TodoNavbar = () => {
  const Navigate = useNavigate();
  return (
    <Header bg="skyblue">
      <Button
        onClick={() => {
          Navigate("/");
        }}
      >
        홈
      </Button>
    </Header>
  );
};

export default TodoNavbar;
