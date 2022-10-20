import { __addTodos } from "../../redux/modules/todoSlice";
import { useState } from "react";
import { useDispatch } from "react-redux";
import {
  Box,
  Label,
  Input,
  Button,
  Flex,
  Textarea,
  Heading,
} from "../../common";
import { useNavigate } from "react-router-dom";

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
  const navigate = useNavigate();

  return (
    <Flex width="100%" height="100vh" fd="column" jc="center" ai="center">
      <Heading color=" #b7cee8" fs="45" ls="0.1">
        MY TODO LIST
      </Heading>
      <Flex jc="center" ai="center" width="80%">
        <Box
          width="95%"
          height="900px"
          pd="40"
          border="4px solid #b7cee8"
          br="20"
        >
          <Flex height="100%" fd="column" jc="center" ai="center">
            <Label
              htmlFor="user"
              color="#555555"
              fs="21"
              pd="10px"
              width="90%"
              ls="0.05"
            >
              username
            </Label>
            <Input
              type="text"
              placeholder="작성자"
              id="user"
              value={user}
              onChange={(e) =>
                setTodo((prevState) => ({ ...prevState, user: e.target.value }))
              }
              width="90%"
              height="60"
              br="15"
              bd="1px solid #dedede"
              fs="18"
              color="#555555"
              pd="20"
            />
            <Label
              htmlFor="title"
              color="#555555"
              fs="21"
              pd="10px"
              width="90%"
              mg="10px 0 0 0"
              ls="0.05"
            >
              제목
            </Label>
            <Input
              type="text"
              placeholder="제목"
              id="title"
              value={title}
              onChange={(e) =>
                setTodo((prevState) => ({
                  ...prevState,
                  title: e.target.value,
                }))
              }
              width="90%"
              height="60"
              br="15"
              bd="1px solid #dedede"
              fs="21"
              color="#555555"
              pd="20"
            />
            <Label
              htmlFor="desc"
              color="#555555"
              fs="21"
              pd="10px"
              width="90%"
              mg="10px 0 0 0"
              ls="0.05"
            >
              내용
            </Label>
            <Textarea
              id="desc"
              value={desc}
              onChange={(e) =>
                setTodo((prevState) => ({ ...prevState, desc: e.target.value }))
              }
              width="90%"
              height="400"
              br="15"
              bd="1px solid #dedede"
              fs="21"
              color="#555555"
              pd="20"
            />
            <Button
              mg="30px 0 0 0"
              pd="15"
              width="110px"
              bc="#b7cee8"
              br="10px"
              fs="19"
              ls="0.1"
              color="#ffffff"
              onClick={() => {
                dispatch(__addTodos(todo));
                setTodo({ user: "", title: "", desc: "" });
                navigate("/todo_list");
              }}
            >
              제출
            </Button>
          </Flex>
        </Box>
      </Flex>
    </Flex>
  );
};

export default TodoForm;
