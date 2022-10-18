import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Box, Flex, P, Button } from "../../common";
import { __delTodos, __getTodos } from "../../redux/modules/todoSlice";
import { useNavigate } from "react-router-dom";

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
    <Flex fd="column">
      <h1>내 할일</h1>
      {todos.map((todo) => (
        <Box key={todo.id}>
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
  );
};

export default TodoList;
