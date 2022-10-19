import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Box, Flex, P, Button } from "../../common";
import { __delTodos, __getTodos } from "../../redux/modules/todoSlice";
import { useNavigate } from "react-router-dom";
import { __delComment } from "../../redux/modules/commentsSlice";

const TodoList = () => {
  const dispatch = useDispatch();
  const { isLoading, error, todos } = useSelector((state) => state.todos);
  const { comments } = useSelector((state) => state.comments);
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(__getTodos());
  }, [dispatch]);

  if (isLoading) {
    return <div>로딩 중..</div>;
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
    <Flex fd="column">
      <h1>내 할일</h1>
      {todos.map((todo) => (
        <Box key={todo.id}>
          <P
            onClick={() => {
              navigate(`/todo_detail/${todo.id}`);
            }}
            mg="10px 0 0 0"
          >
            {todo.title}
          </P>
          <P
            onClick={() => {
              navigate(`/todo_detail/${todo.id}`);
            }}
            fs="10"
          >
            작성자 : {todo.user}
          </P>
          <Button
            onClick={() => {
              console.log("리스트 삭제");
              handleCommentsDelete(todo.id);
              dispatch(__delTodos(todo.id));
            }}
          >
            삭제하기
          </Button>
        </Box>
      ))}
    </Flex>
  );
};

export default TodoList;
