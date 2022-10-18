import React from "react";
import styled from "styled-components";
import Comment from "./Comment";

const Comments = ({}) => {
  return (
    <>
      <CommentsDiv>
        <TitleSpan>눌러서 댓글내리기</TitleSpan>
        <CommentsForm>
          <Input type="text" placeholder="이름 (5자 이내)" />
          <InputComments
            type="text"
            placeholder="댓글을 추가하세요. (100자 이내)"
          />
          <FormButton>추가하기</FormButton>
        </CommentsForm>

        <CommentsLists>
          <Comment />
          <Comment />
          <Comment />
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
