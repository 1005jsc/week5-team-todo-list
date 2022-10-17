import React from "react";
import styled from "styled-components";

const DetailFix = ({}) => {
  return (
    <>
      <h1>제목</h1>
      <Form>
        <TextArea />

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
