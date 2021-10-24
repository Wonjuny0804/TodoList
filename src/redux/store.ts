import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "./todoSlice";
import { Todo } from "../core/index";


export const store = configureStore({
  reducer: {
    todos: todoReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const selectTodos = (state: RootState): Todo[] => state.todos.todos;

export default store;