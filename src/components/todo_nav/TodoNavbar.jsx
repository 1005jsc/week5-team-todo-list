import React from "react";
import { useNavigate } from "react-router-dom";
import AirplaneTicketIcon from "@mui/icons-material/AirplaneTicket";
import styled from "styled-components";

const TodoNavbar = () => {
  const Navigate = useNavigate();
  return (
    <NavContainer>
      <Nav>
        <Mark
          onClick={() => {
            Navigate("/");
          }}
        >
          <AirplaneTicketIcon sx={{ fontSize: 80 }} />
        </Mark>
        <Menu>
          <MenuItem
            onClick={() => {
              Navigate("/");
            }}
          >
            HOME
          </MenuItem>
          <MenuItem
            onClick={() => {
              Navigate("/todo_form");
            }}
          >
            ADD TODO
          </MenuItem>
          <MenuItem
            onClick={() => {
              Navigate("/todo_list");
            }}
          >
            TODO LIST
          </MenuItem>
        </Menu>
      </Nav>
    </NavContainer>
  );
};

const NavContainer = styled.div`
  margin-left: 25px;
  min-width: 10%;
  max-width: 20%;
  height: 100vh;
`;

const Nav = styled.nav`
  background-color: #d8dbe2;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  height: 100%;
  box-shadow: 0px 0px 6px 0px #8f8f8f;
`;

const Menu = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
`;
const MenuItem = styled.div`
  display: flex;
  justify-content: center;
  text-align: center;
  width: 100%;
  height: 80px;
  font-size: 19px;
  letter-spacing: 0.03em;
  font-weight: 700;
  color: #464646;
  padding: 25px 0 0 0;
  margin-bottom: 10px;
  cursor: pointer;
  :hover {
    width: 110%;
    padding: 25px 0 0 0;
    margin-bottom: 10px;
    background-color: #b7cee8;
    color: white;
    text-align: center;
    box-shadow: 0px 0px 6px 0px #afbbc1;
  }
`;

const Mark = styled.div`
  border-radius: 10px;
  border: solid 1px #d8dbe2;
  margin: 40px;
`;

export default TodoNavbar;
