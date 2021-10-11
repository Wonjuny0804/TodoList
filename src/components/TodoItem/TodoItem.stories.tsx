import TodoItem from "./TodoItem";
import { Meta } from "@storybook/react";
import { useState } from "react";

export default {
  title: "component/TodoItem",
  component: TodoItem
} as Meta;

export const SampleTodoItem = (): JSX.Element => {
  const [cleared, setCleared] = useState<boolean>(false);

  return <TodoItem todo="study React" cleared={cleared} setCleared={setCleared}/>
}