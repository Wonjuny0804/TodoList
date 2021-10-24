import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Todo } from "../core/index";

interface TodoSliceState {
  todos: Todo[];
}

const initialState: TodoSliceState = {
  todos: [],
}

export const todoSlice = createSlice({
  name: "todolist",
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<string>) => {
      state.todos = [
      ...state.todos,
      {
        id: state.todos.length + 1,
        todo: action.payload,
        done: false
      }
    ]},
    removeTodo: (state, action: PayloadAction<number>) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload)
    },
    completeTodo: (state, action) => {
      state.todos = state.todos.map(todo => {
        if (todo.id !== action.payload) return todo;

        return {
          ...todo,
          done: !todo.done
        }
      })
    }
  }
});

export const { addTodo, removeTodo, completeTodo } = todoSlice.actions;
export default todoSlice.reducer;