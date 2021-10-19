import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Todo } from "../core/index";

const initialState: Array<Todo> = [];

export const todoSlice = createSlice({
  name: "todolist",
  initialState,
  reducers: {
    add: (state) => {console.log(state)},
    remove: (state) => {console.log(state)},
    complete: (state) => {console.log(state)}
  }
});

export const { add, remove, complete } = todoSlice.actions;
export default todoSlice.reducer;