import { BrowserRouter, Route, Routes, Outlet } from "react-router-dom";
import TodoHome from "../pages/todo_home/TodoHome";
import TodoList from "../pages/todo_list/TodoList";
import TodoNavbar from "../components/todo_nav/TodoNavbar";
import TodoForm from "../components/todo_form/TodoForm";


const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<TodoNav />}>
          <Route path="" element={<TodoHome />} />
          <Route path="todo_form" element={<TodoForm /} />
          <Route path="todo_list" element={<TodoList />} />
          <Route path="todo_list/:id" element={"상세페이지 들어갈부분"} />
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
