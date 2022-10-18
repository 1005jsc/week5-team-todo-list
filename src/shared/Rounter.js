import { BrowserRouter, Route, Routes } from "react-router-dom";
import Detail from "../components/todo_detail/Detail/Detail";
import DetailFix from "../components/todo_detail/DetailFix/DetailFix";
import TodoForm from "../components/todo_form/TodoForm";
import TodoDetail from "../pages/todo_detail/TodoDetail";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<TodoForm />} />
        <Route path="/todo_detail" element={<TodoDetail />}>
          <Route path=":id" element={<Detail />} />
          <Route path="todo_fix/:id" element={<DetailFix />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
