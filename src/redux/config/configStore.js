import { configureStore } from "@reduxjs/toolkit";
import getTodos from "../modules/getTodosSlice";

const store = configureStore({
  reducer: {
    getTodos: getTodos,
  },
});

export default store;
