import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Box, Flex, P, Button, Heading } from "../../common";
import { __delTodos, __getTodos } from "../../redux/modules/todoSlice";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const TodoList = () => {
  const dispatch = useDispatch();
  const { isLoading, error, todos } = useSelector((state) => state.todos);
  const Navigate = useNavigate();

  useEffect(() => {
    dispatch(__getTodos());
  }, [dispatch]);

  if (isLoading) {
    return <div>로딩 중..</div>;
  }
  if (error) {
    return <div>{error.message}</div>;
  }

  return (
    <ListContainer>
      <Heading ta="center" mg="10">
        Todo List
      </Heading>
      <Flex
        width="1000px"
        height="auto"
        fr="wrap"
        jc="space-between"
        mg="0 auto"
      >
        {todos.map((todo) => (
          <Box
            key={todo.id}
            bgimg="../../images/bg2"
            width="475px"
            height="200px"
            border="solid 1px silver"
            br="10"
            mg="10px 5px 15px 20"
          >
            <P
              mg="10px 0 0 0"
              onClick={() => {
                Navigate(`/todo_detail/${todo.id}`);
              }}
            >
              {todo.title}
            </P>
            <P fs="10">작성자 : {todo.user}</P>
            <Button onClick={() => dispatch(__delTodos(todo.id))}>
              삭제하기
            </Button>
          </Box>
        ))}
      </Flex>
    </ListContainer>
  );
};

const ListContainer = styled.div`
  width: 100%;
  height: auto;
  background-image: url("../../images/bg1.jpg");
`;

export default TodoList;
