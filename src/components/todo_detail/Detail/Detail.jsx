import React, { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { __getTodos } from "../../../redux/modules/todoSlice";
import DetailBody from "../DetailBody/DetailBody";
import Comments from "../DetailComments/Comments";
import DetailFixButton from "../DetailFixButton";
import DetailHeader from "../DetailHeader/DetailHeader";

const Detail = ({}) => {
  let params = useParams();
  const dispatch = useDispatch();
  const { isLoading, error, todos } = useSelector((state) => state.todos);
  const getSelectedTodo = (id) => {
    return todos.find((todo) => todo.id === parseInt(id));
  };

  const [todo, setTodo] = useState();

  useEffect(() => {
    dispatch(__getTodos());
  }, [dispatch]);

  useEffect(() => {
    setTodo(getSelectedTodo(params.id));
  }, [todos]);

  if (isLoading) {
    return <div>로딩 중....</div>;
  }

  if (error) {
    return <div>{error.message}</div>;
  }

  return (
    <>
      <DetailHeader todo={todo} />
      <DetailBody todo={todo} />
      <DetailFixButton id={params.id} />
      <Comments />
    </>
  );
};
export default Detail;
