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
  margin-left: 20px;
  width: 15%;
  height: 1000px;
`;

const Nav = styled.nav`
  background-color: #d8dbe2;
  display: flex;
  /* border-radius: 10px; */
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  height: 100%;
  box-shadow: 0px 0px 5px 0px #4b636e;
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
  font-size: 17px;
  font-weight: 700;
  padding: 25px 0 0 0;
  cursor: pointer;
  :hover {
    width: 110%;
    background-color: #b7cee8;
    color: white;
    text-align: center;
    box-shadow: 0.5px 0.5px 0px 0.5px #b0bec5;
  }
`;

const Mark = styled.div`
  border-radius: 10px;
  border: solid 1px #d8dbe2;
  margin: 30px;
`;

export default TodoNavbar;
