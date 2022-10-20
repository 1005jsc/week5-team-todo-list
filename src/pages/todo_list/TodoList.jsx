import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Box, Flex, P, Button, Heading } from "../../common";
import { __delTodos, __getTodos } from "../../redux/modules/todoSlice";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import DeleteRoundedIcon from "@mui/icons-material/DeleteRounded";
import PendingIcon from "@mui/icons-material/Pending";
import { __delComment } from "../../redux/modules/commentsSlice";

const TodoList = () => {
  const dispatch = useDispatch();
  const { isLoading, error, todos } = useSelector((state) => state.todos);
  const { comments } = useSelector((state) => state.comments);
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

  const handleCommentsDelete = (id) => {
    const yes = comments.filter((val) => val.todoId !== id);

    yes.forEach((val) => {
      dispatch(__delComment(val.id));
    });
  };

  return (
    <Flex width="100%" height="50vh" fd="column" jc="center" ai="center">
      <Heading color=" #b7cee8" fs="45" ls="0.1">
        MY TODO LIST
      </Heading>
      <ListContainer>
        <Flex width="100%" jc="center" fr="wrap">
          {todos.map((todo) => (
            <TodoCard key={todo.id}>
              <Box
                onClick={() => {
                  Navigate(`/todo_detail/${todo.id}`);
                }}
              >
                <P mg="40" fs="25" fw="700" ta="center">
                  {todo.title}
                </P>
                <P fs="19" mg="30" ta="center">
                  작성자 : {todo.user}
                </P>
              </Box>
              <Button
                br="10px"
                po="absolute"
                width="75px"
                pd="5"
                bt="20px"
                lf="40%"
                onClick={() => dispatch(__delTodos(todo.id))}
              >
                <DeleteRoundedIcon />
              </Button>
            </TodoCard>
          ))}
        </Flex>
      </ListContainer>
    </Flex>
  );
};

const ListContainer = styled.div`
  width: 100%;
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
  position: relative;
  width: 340px;
  height: 220px;
  margin: 15px;
  color: #3d3d3d;
  border: solid 3px #b7cee8;
  border-radius: 10px;
  cursor: pointer;
  :hover {
    opacity: 0.8;
  }
`;

export default TodoList;
