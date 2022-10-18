import { configureStore } from "@reduxjs/toolkit";
import getTodos from "../modules/getTodosSlice";

import todos from "../modules/todoSlice";

const store = configureStore({
  reducer: { todos },
});

export default store;
