import { BrowserRouter, Route, Routes } from "react-router-dom";
import TodoForm from "../components/todo_form/TodoForm";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<TodoForm />} />
        <Route path="/todo_detail" element={<div>테스트</div>} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
