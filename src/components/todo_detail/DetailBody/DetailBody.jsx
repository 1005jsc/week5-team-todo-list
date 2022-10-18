import React from "react";

const DetailBody = ({ todo }) => {
  return (
    <>
      <h1>{todo ? todo.title : ""}</h1>
      <div>{todo ? todo.desc : ""}</div>
    </>
  );
};
export default DetailBody;
