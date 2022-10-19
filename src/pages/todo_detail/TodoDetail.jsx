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
  padding-right: 40px;
  position: relative;
  padding-left: 40px;
`;
