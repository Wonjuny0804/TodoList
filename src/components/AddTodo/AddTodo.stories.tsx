import AddTodo from "./AddTodo";
import { Meta } from "@storybook/react";
import { useState } from "react";
import { Todo } from "../../core/index";

export default {
  title: "component/AddTodo",
  component: AddTodo
} as Meta;

export const AddTodoTest = ():JSX.Element => {
 const [todos, setTodos] = useState<Array<Todo>>([]);
  return <AddTodo addTodo={setTodos} currentTodos={todos}/>
}

