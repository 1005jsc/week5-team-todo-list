import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import {
  __addTodos,
  __fixTodo,
  __getTodos,
} from "../../../redux/modules/todoSlice";

const DetailFix = ({}) => {
  const navigate = useNavigate();
  let params = useParams();
  const dispatch = useDispatch();
  const { isLoading, error, todos } = useSelector((state) => state.todos);

  const getSelectedTodo = (id) => {
    return todos.find((todo) => todo.id === parseInt(id));
  };
  const todo = getSelectedTodo(params.id);

  const [textArea, setTextArea] = useState(todo?.desc); // 여기도 문제 있음 매니저님에게 물어보셈

  useEffect(() => {
    dispatch(__getTodos());
    setTextArea(todo?.desc);
  }, [dispatch]);

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log({ ...todo, desc: textArea });
    dispatch(__fixTodo({ id: params.id, desc: textArea }));
    setTextArea("");
    navigate(`/todo_detail/${params.id}`);
  };

  const handleChange = (e) => {
    setTextArea(e.target.value);
  };

  if (isLoading) {
    return <div>로딩 중....</div>;
  }

  if (error) {
    return <div>{error.message}</div>;
  }

  return (
    <>
      <h1>{todo?.title}</h1>
      <Form onSubmit={handleSubmit}>
        <TextArea onChange={handleChange} value={textArea} />

        <FormButton>저장</FormButton>
      </Form>
    </>
  );
};
export default DetailFix;

const Form = styled.form`
  /* padding: 20px; */
  margin: 20px;
`;

const TextArea = styled.textarea`
  width: 100%;
`;

const FormButton = styled.button`
  width: 100%;
  background-color: transparent;
  border: 1px solid grey;
`;
