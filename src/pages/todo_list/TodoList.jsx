import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Box, Flex, P, Button, Heading } from "../../common";
import { __delTodos, __getTodos } from "../../redux/modules/todoSlice";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import DeleteRoundedIcon from "@mui/icons-material/DeleteRounded";
import PendingIcon from "@mui/icons-material/Pending";

const TodoList = () => {
  const dispatch = useDispatch();
  const { isLoading, error, todos } = useSelector((state) => state.todos);
  const Navigate = useNavigate();

  useEffect(() => {
    dispatch(__getTodos());
  }, [dispatch]);

  if (isLoading) {
    return <PendingIcon sx={{ fontSize: 80, margin: "0 auto" }} />;
  }
  if (error) {
    return <div>{error.message}</div>;
  }

  return (
    <ListContainer>
      <TodoTitle>Todo List</TodoTitle>
      <Flex
        width="100%"
        height="auto"
        fr="wrap"
        // jc="center"
        ai="flex-start"
        mg="0 auto"
      >
        {todos.map((todo) => (
          <TodoCard>
            <Box
              mg="13"
              onClick={() => {
                Navigate(`/todo_detail/${todo.id}`);
              }}
            >
              <P mg="40" fs="25" fw="700" ta="center">
                {todo.title}
              </P>
              <P fs="15" mg="30">
                작성자 : {todo.user}
              </P>
            </Box>
            <Button
              br="10px"
              mg="0 0 0 100px"
              onClick={() => dispatch(__delTodos(todo.id))}
            >
              <DeleteRoundedIcon />
            </Button>
          </TodoCard>
        ))}
      </Flex>
    </ListContainer>
  );
};

const ListContainer = styled.div`
  width: 80%;
  height: auto;
  align-self: flex-start;
`;

const TodoTitle = styled.h1`
  width: 30%;
  background-color: #b7cee8;
  color: #263238;
  border-radius: 10px;
  display: block;
  text-align: center;
  margin: 0 auto 20px auto;
`;

const TodoCard = styled.div`
  width: 45%;
  height: 200;
  margin: 10px 0 10px 35px;
  color: #263238;
  border: solid 3px #b7cee8;
  border-radius: 10px;
  box-shadow: 0px 1px 1px 0px #b0bec5;
  cursor: pointer;
  :hover {
    color: black;
    border: solid 3px #9cbbdf;
  }
`;

export default TodoList;
