import { BrowserRouter, Route, Routes } from "react-router-dom";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/todo_detail" element={<div>테스트</div>} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
