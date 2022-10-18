import styled from "styled-components";
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
