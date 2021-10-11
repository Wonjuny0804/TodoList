import TodoItem from "./TodoItem";
import { Meta } from "@storybook/react";
import { useState } from "react";
import { Todo } from "../../core/index";

export default {
  title: "component/TodoItem",
  component: TodoItem
} as Meta;

export const SampleTodoItem = (): JSX.Element => {
  const [todos, setTodos] = useState<Array<Todo>>([]);

  return <TodoItem todo={{ id: 1, todo: "Do something", done: false }} setTodo={setTodos} allTodos={todos}/>
}