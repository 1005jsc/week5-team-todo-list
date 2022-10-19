import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import {
  __addComment,
  __getComments,
} from "../../../redux/modules/commentsSlice";
import Comment from "./Comment";

const Comments = ({}) => {
  let params = useParams();
  const { isLoading, error, comments } = useSelector((state) => state.comments);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(__getComments());
  }, [dispatch]);

  const [comment, setComment] = useState({
    name: "",
    desc: "",
  });

  const [focusedId, setFocusedId] = useState(undefined);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!focusedId) {
      console.log(focusedId);
      dispatch(__addComment({ todoId: params.id, ...comment }));
      setComment({
        name: "",
        desc: "",
      });
    } else {
      console.log("지금은 안돼용");
    }
  };

  if (isLoading) {
    return <div>로딩 중....</div>;
  }

  if (error) {
    return <div>{error.message}</div>;
  }

  const handleCommentFocus = (id) => {
    setFocusedId(id);
  };

  // console.log("comments.jsx");

  return (
    <>
      <CommentsDiv>
        <TitleSpan>눌러서 댓글내리기</TitleSpan>
        <CommentsForm onSubmit={handleSubmit}>
          <Input
            type="text"
            name="name"
            onChange={(e) =>
              setComment((prevState) => ({
                ...prevState,
                name: e.target.value,
              }))
            }
            value={comment.name}
            placeholder="이름 (5자 이내)"
          />
          <InputComments
            type="text"
            name="desc"
            value={comment.desc}
            onChange={(e) =>
              setComment((prevState) => ({
                ...prevState,
                desc: e.target.value,
              }))
            }
            placeholder="댓글을 추가하세요. (100자 이내)"
          />
          <FormButton>추가하기</FormButton>
        </CommentsForm>

        <CommentsLists>
          {comments &&
            !isLoading &&
            comments.map((val, index) => {
              return (
                <Comment
                  key={index}
                  comment={val}
                  focusedId={focusedId}
                  handleCommentFocus={handleCommentFocus}
                />
              );
            })}
        </CommentsLists>
      </CommentsDiv>
    </>
  );
};
export default Comments;

const CommentsDiv = styled.div`
  width: 100%;
  border: 1px solid grey;
`;

const TitleSpan = styled.span``;

const CommentsForm = styled.form`
  display: flex;
  align-items: center;

  width: 100%;
  height: 30px;
  margin: 30px 0;
`;

const Input = styled.input`
  flex: 1;
  margin: 20px;
`;

const InputComments = styled(Input)`
  flex: 5;
`;

const FormButton = styled.button`
  flex: 1;
`;

const CommentsLists = styled.div``;
