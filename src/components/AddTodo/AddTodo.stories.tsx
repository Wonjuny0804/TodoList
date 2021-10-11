import AddTodo from "./AddTodo";
import { Meta } from "@storybook/react";

export default {
  title: "component/AddTodo",
  component: AddTodo
} as Meta;

export const AddTodoTest = ():JSX.Element => {
  return <AddTodo />
}

