import { configureStore } from '@reduxjs/toolkit';
import { counterReducer } from '../modules/counterSlice';
import { todosReducer } from '../modules/todosSlice';

const store = configureStore({
  reducer: {},
});
export default store;
