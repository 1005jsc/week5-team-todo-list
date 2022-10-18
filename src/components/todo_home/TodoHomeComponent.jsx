import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "../../common";

const TodoHomeComponent = () => {
  const Navigate = useNavigate();
  return (
    <>
      <Button
        onClick={() => {
          Navigate("/todo_form");
        }}
      >
        Todo 등록하기
      </Button>
      <Button
        onClick={() => {
          Navigate("/todo_list");
        }}
      >
        Todo 리스트 보기
      </Button>
    </>
  );
};

export default TodoHomeComponent;
