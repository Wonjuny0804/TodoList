import React, { FC, useCallback } from "react";
import { Icon } from "../index";
import styles from "./TodoItem.module.scss";
import classNames from "classnames";
import { Todo } from "../../core";

interface TodoItemProps {
  todo: Todo;
  setTodo: React.Dispatch<React.SetStateAction<Array<Todo>>>;
  allTodos: Array<Todo>;
}

const TodoItem: FC<TodoItemProps> = ({ todo, setTodo, allTodos}): JSX.Element => {
  
  const handleTodoCleared = useCallback(() => {
    const newTodos = allTodos.map((prevTodo) => {
      if (prevTodo.id !== todo.id) return prevTodo;

      return {
        ...prevTodo,
        done: !prevTodo.done
      } 
    });

    setTodo(newTodos);
  }, [allTodos, todo]);

  
  return (
  <div className={todo.done ? classNames(styles.itemWrapper, styles.checked) : styles.itemWrapper}>
    <label className={todo.done ? classNames(styles.label, styles.checked) : styles.label}>{todo.todo}</label>
    <div onClick={handleTodoCleared} className={todo.done ? classNames(styles.checkbox, styles.checked) : styles.checkbox}>
      {todo.done && <Icon name="checked"/>}
    </div>
  </div>
  )
}

export default TodoItem;