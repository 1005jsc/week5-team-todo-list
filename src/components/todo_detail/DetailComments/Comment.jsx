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
                  ? "#90b4dc"
                  : "#ebe8e8"
                : "#90b4dc"
            }
            onClick={handleButton1}
          >
            {focusedId === comment.id ? "취소" : "수정"}
          </Buttons>
          <Buttons
            color={
              focusedId
                ? focusedId === comment.id
                  ? "#90b4dc"
                  : "#ebe8e8"
                : "#90b4dc"
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
  width: 98%;
  border: 1px solid ${(props) => props.theme.LIGHT_GREY};
  min-height: 60px;
  background-color: white;
  display: flex;
  margin: auto;
  margin-bottom: 8px;

  align-items: center;
  position: relative;
  padding: 0 20px;
  border-radius: 8px;
`;

const NameSpan = styled.span`
  font-size: 14px;
  flex: 1;
`;
const CommentSpan = styled.span`
  flex: 10;
`;

const CommentForm = styled.form`
  flex: 10;
`;
const CommentInput = styled.input`
  width: 98%;
  font-size: 15px;
  height: 36px;
  padding-left: 6px;
  border-radius: 6px;
  border: 1px solid ${(props) => props.theme.LIGHT_GREY};
`;
const GhostButton = styled.button`
  display: none;
`;

const ButtonsDiv = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
`;
const Buttons = styled.button`
  width: 40px;
  height: 40px;
  border-radius: 10px;
  background-color: ${(props) => props.color};
  margin: 0 3px;
  color: #1e262e;
  /* ${(props) => props.theme.BLUE_4}; */
`;
