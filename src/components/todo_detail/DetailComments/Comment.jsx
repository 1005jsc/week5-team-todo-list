import React, { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import {
  __delComment,
  __fixComment,
  __getComments,
} from "../../../redux/modules/commentsSlice";

const Comment = ({ comment, handleCommentFocus, focusedId }) => {
  const dispatch = useDispatch();

  const buttonRef = useRef();

  const [commentChange, setCommentChange] = useState(comment.desc);

  let yes = useRef();

  const handleButton1 = (e) => {
    e.preventDefault();
    if (!focusedId) {
      yes.current = commentChange;

      handleCommentFocus(comment.id);
    } else {
      if (focusedId === comment.id) {
        setCommentChange(yes.current);
        handleCommentFocus(undefined);
      }
    }
  };

  const handleButton2 = (e) => {
    e.preventDefault();
    if (!focusedId) {
      dispatch(__delComment(comment.id));
      handleCommentFocus(undefined);
    } else {
      if (focusedId === comment.id) {
        buttonRef.current.click();
        handleCommentFocus(undefined);
      } else {
      }
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setCommentChange(commentChange);
    dispatch(__fixComment({ id: comment.id, desc: commentChange }));
    handleCommentFocus(undefined);
  };

  return (
    <>
      <CommentDiv>
        <NameSpan>{comment.name}</NameSpan>

        {focusedId === comment.id ? (
          <>
            <CommentForm onSubmit={handleSubmit}>
              <CommentInput
                type="text"
                value={commentChange}
                onChange={(e) => {
                  setCommentChange(e.target.value);
                }}
              />
              <GhostButton ref={buttonRef}></GhostButton>
            </CommentForm>
          </>
        ) : (
          <CommentSpan>{commentChange}</CommentSpan>
        )}

        <ButtonsDiv>
          <Buttons
            color={
              focusedId
                ? focusedId === comment.id
                  ? "orange"
                  : "#ebe8e8"
                : "orange"
            }
            onClick={handleButton1}
          >
            {focusedId === comment.id ? "취소" : "수정"}
          </Buttons>
          <Buttons
            color={
              focusedId
                ? focusedId === comment.id
                  ? "orange"
                  : "#ebe8e8"
                : "orange"
            }
            onClick={handleButton2}
          >
            {focusedId === comment.id ? "저장" : "삭제"}
          </Buttons>
        </ButtonsDiv>
      </CommentDiv>
    </>
  );
};
export default Comment;

const CommentDiv = styled.div`
  width: 100%;
  border: 1px solid grey;
  height: 60px;

  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  padding: 0 20px;
`;

const NameSpan = styled.span`
  position: absolute;
  font-size: 9px;
  top: 10px;
  background-color: grey;
`;
const CommentSpan = styled.span``;

const CommentForm = styled.form``;
const CommentInput = styled.input``;
const GhostButton = styled.button`
  display: none;
`;

const ButtonsDiv = styled.div``;
const Buttons = styled.button`
  background-color: ${(props) => props.color};
`;
