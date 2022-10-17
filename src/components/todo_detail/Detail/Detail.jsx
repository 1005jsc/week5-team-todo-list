import React from "react";
import DetailBody from "../DetailBody/DetailBody";
import Comments from "../DetailComments/Comments";
import DetailFixButton from "../DetailFixButton";
import DetailHeader from "../DetailHeader/DetailHeader";

const Detail = ({}) => {
  return (
    <>
      <DetailHeader />
      <DetailBody />
      <DetailFixButton />
      <Comments />
    </>
  );
};
export default Detail;
