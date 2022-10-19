import React from "react";
import styled from "styled-components";

const DetailBody = ({ todo }) => {
  return (
    <DetailBodySection>
      <TitleH1>{todo ? todo.title : ""}</TitleH1>
      <UserSpan>{todo ? todo.user : ""}</UserSpan>
      <DescDiv>{todo ? todo.desc : ""}</DescDiv>
    </DetailBodySection>
  );
};
export default DetailBody;

const DetailBodySection = styled.section`
  width: 100%;
  padding: 20px 100px;
`;

const TitleH1 = styled.h1`
  font-size: 30px;
  ${(props) => {
    return props.theme.BLUE_4;
  }}
`;

const UserSpan = styled.span`
  ${(props) => props.theme.BLUE_4};
  font-size: 22px;
`;
const DescDiv = styled.div`
  border: 1px solid ${(props) => props.theme.GREY};
  min-height: 200px;
  width: 100%;
  margin: auto;
  margin-top: 30px;
  padding: 20px;
  border-radius: 20px;
`;
