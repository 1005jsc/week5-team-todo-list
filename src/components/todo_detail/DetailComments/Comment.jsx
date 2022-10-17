import React from "react";
import styled from "styled-components";

const Comment = ({}) => {
  return (
    <>
      <CommentDiv>
        <NameSpan>sdf</NameSpan>

        <CommentSpan>안녕안녕나는 조재신이야</CommentSpan>

        <ButtonsDiv>
          <Buttons>수정</Buttons>
          <Buttons>삭제</Buttons>
        </ButtonsDiv>
      </CommentDiv>
    </>
  );
};
export default Comment;

const CommentDiv = styled.div`
  width: 100%;
  border: 1px solid grey;
  height: 30px;
`;

const NameSpan = styled.span``;
const CommentSpan = styled.span``;

const ButtonsDiv = styled.div``;
const Buttons = styled.button``;
