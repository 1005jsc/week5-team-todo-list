import { __getTodos, __addTodos } from "../../redux/modules/todoSlice";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Box, Label, Input, Button } from "../../common";

const TodoForm = () => {
  /** Todo */
  const [todo, setTodo] = useState({
    user: "",
    title: "",
    desc: "",
  });
  const { user, title, desc } = todo;
  /** Redux Dispatch */
  const dispatch = useDispatch();

  return (
    <Box>
      <Label htmlFor="user">작성자</Label>
      <Input
        type="text"
        placeholder="작성자"
        id="user"
        value={user}
        onChange={(e) =>
          setTodo((prevState) => ({ ...prevState, user: e.target.value }))
        }
      />
      <Label htmlFor="title">제목</Label>
      <Input
        type="text"
        placeholder="제목"
        id="title"
        value={title}
        onChange={(e) =>
          setTodo((prevState) => ({ ...prevState, title: e.target.value }))
        }
      />
      <Label htmlFor="desc">내용</Label>
      <Input
        type="text"
        placeholder="내용"
        id="desc"
        value={desc}
        onChange={(e) =>
          setTodo((prevState) => ({ ...prevState, desc: e.target.value }))
        }
      />
      <Button
        onClick={() => {
          dispatch(__addTodos(todo));
          setTodo({ user: "", title: "", desc: "" });
        }}
      >
        제출
      </Button>
    </Box>
  );
};

export default TodoForm;
