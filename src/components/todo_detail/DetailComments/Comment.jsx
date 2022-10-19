import React from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { __delComment } from "../../../redux/modules/commentsSlice";

const Comment = ({ comment }) => {
  const dispatch = useDispatch();
  return (
    <>
      <CommentDiv>
        <NameSpan>{comment.name}</NameSpan>

        <CommentSpan>{comment.desc}</CommentSpan>

        <ButtonsDiv>
          <Buttons>수정</Buttons>
          <Buttons
            onClick={() => {
              console.log("hi");
              dispatch(__delComment(comment.id));
            }}
          >
            삭제
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
`;
const CommentSpan = styled.span``;

const ButtonsDiv = styled.div``;
const Buttons = styled.button``;
