import styled from "styled-components";
import "./App.css";
import Router from "./shared/Rounter";

function App() {
  return (
    <>
      <Container>
        <Router />
      </Container>
    </>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  height: 100vh;
  width: 100%;
`;

export default App;
