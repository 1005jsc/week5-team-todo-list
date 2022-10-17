import styled from "styled-components";
// import DetailBody from "../../components/todo_detail/DetailBody/DetailBody";
// import DetailFixButton from "../../components/todo_detail/DetailFixButton";
// import Comments from "../../components/todo_detail/DetailComments/Comments";
// import DetailHeader from "../../components/todo_detail/DetailHeader/DetailHeader";
import { Outlet } from "react-router-dom";

const TodoDetail = ({}) => {
  return (
    <LayoutDiv>
      <Outlet />
    </LayoutDiv>
  );
};
export default TodoDetail;

const LayoutDiv = styled.div`
  padding-right: 20px;
  padding-left: 20px;
  border: 1px solid black;
`;
