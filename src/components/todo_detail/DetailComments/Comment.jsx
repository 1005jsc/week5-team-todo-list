import React, { useState } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { __delComment } from "../../../redux/modules/commentsSlice";

const Comment = ({ comment, handleCommentFocus, focusedId }) => {
  const dispatch = useDispatch();

  const handleToggle = () => {
    if (!focusedId) {
      handleCommentFocus(comment.id);
    } else {
      if (focusedId === comment.id) {
        console.log("취소");
        handleCommentFocus(undefined);
      } else {
        console.log("1 아무것도 안함");
      }
    }
  };

  const handleDelete = () => {
    if (!focusedId) {
      dispatch(__delComment(comment.id));
    } else {
      if (focusedId === comment.id) {
        console.log("저장");
      } else {
        console.log("2 아무것도 안함");
      }
    }
  };
  // console.log("comment.jsx");
  console.log(comment);

  return (
    <>
      <CommentDiv>
        <NameSpan>{comment.name}</NameSpan>

        <CommentSpan>{comment.desc}</CommentSpan>

        <ButtonsDiv>
          <Buttons
            color={
              focusedId
                ? focusedId === comment.id
                  ? "orange"
                  : "#ebe8e8"
                : "orange"
            }
            onClick={handleToggle}
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
            onClick={handleDelete}
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

const ButtonsDiv = styled.div``;
const Buttons = styled.button`
  background-color: ${(props) => props.color};
`;
