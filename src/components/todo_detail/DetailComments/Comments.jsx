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

  const commentsWithId = comments.filter((val) => val.todoId === params.id);

  const [comment, setComment] = useState({
    name: "",
    desc: "",
  });

  const [focusedId, setFocusedId] = useState(undefined);

  const handleSubmit = () => {
    if (!focusedId) {
      dispatch(__addComment({ id: Date.now(), todoId: params.id, ...comment }));
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

  return (
    <>
      <CommentsDiv>
        <TitleSpan>댓글</TitleSpan>
        <CommentsForm
          onSubmit={(e) => {
            e.preventDefault();
          }}
        >
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
          <FormButton
            onClick={(e) => {
              e.preventDefault();
              handleSubmit();
            }}
          >
            추가하기
          </FormButton>
        </CommentsForm>

        <CommentsLists>
          {commentsWithId &&
            !isLoading &&
            commentsWithId.map((val, index) => {
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
  width: 96%;
  min-height: 200px;
  margin: auto;
  margin-top: 80px;

  border: 1px solid ${(props) => props.theme.GREY};
  padding: 60px 100px;
  background-color: ${(props) => props.theme.BLUE_1};
  border-radius: 12px;
`;

const TitleSpan = styled.span`
  ${(props) => props.theme.BLUE_4};
  font-size: 32px;
  font-weight: 600;
  color: ${(props) => props.theme.BLUE_4};
`;

const CommentsForm = styled.form`
  display: flex;
  align-items: center;

  width: 100%;
  height: 60px;
  margin: 30px 0;
`;

const Input = styled.input`
  flex: 1;
  margin: 0 10px;
  height: 40px;
  border-radius: 6px;
  border: 1px solid ${(props) => props.theme.LIGHT_GREY};
  font-size: 14px;
  padding-left: 10px;
`;

const InputComments = styled(Input)`
  flex: 5;
`;

const FormButton = styled.button`
  flex: 1;
  margin-left: 30px;
  max-width: 100px;
  height: 30px;
  font-size: 16px;
  border-radius: 7px;
  color: ${(props) => props.theme.BLUE_4};
`;

const CommentsLists = styled.div``;
