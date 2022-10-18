import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Box, Flex, P } from "../../common";
import { __getTodos } from "../../redux/modules/getTodosSlice";

const TodoList = () => {
  const dispatch = useDispatch();
  const { isLoading, error, todos } = useSelector((state) => state.getTodos);

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
    <Flex fd="column">
      <h1>내 할일</h1>
      {todos.map((todo) => (
        <Box key={todo.id}>
          <P mg="10px 0 0 0">{todo.title}</P>
          <P fs="10">작성자 : {todo.name}</P>
        </Box>
      ))}
    </Flex>
  );
};

export default TodoList;
