import { BrowserRouter, Route, Routes, Outlet } from "react-router-dom";
import TodoHome from "../pages/todo_home/TodoHome";
import TodoList from "../pages/todo_list/TodoList";
import TodoNavbar from "../components/todo_nav/TodoNavbar";
import TodoForm from "../components/todo_form/TodoForm";
import TodoDetail from "../pages/todo_detail/TodoDetail";
import Detail from "../components/todo_detail/Detail/Detail";
import DetailFix from "../components/todo_detail/DetailFix/DetailFix";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<TodoNav />}>
          <Route path="" element={<TodoHome />} />
          <Route path="todo_form" element={<TodoForm />} />
          <Route path="todo_list" element={<TodoList />} />
          <Route path="todo_detail" element={<TodoDetail />}>
            <Route path=":id" element={<Detail />} />
            <Route path="todo_fix/:id" element={<DetailFix />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

function TodoNav() {
  return (
    <>
      <TodoNavbar />
      <Outlet></Outlet>
    </>
  );
}

export default Router;
