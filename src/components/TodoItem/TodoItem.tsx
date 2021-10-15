import React, { FC, useCallback, useRef, useState } from "react";
import { Icon } from "../index";
import styles from "./TodoItem.module.scss";
import classNames from "classnames";
import { Todo } from "../../core";
import { motion, AnimatePresence } from "framer-motion";
import { variants } from "../../Animation/variants";

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
    <AnimatePresence>
      <div 
        className={todo.done ? classNames(styles.itemWrapper, styles.checked) : styles.itemWrapper}
      >
        <motion.button 
        type="button"
        className={todo.done ? classNames(styles.deleteButton, styles.completeDelete) : styles.deleteButton}
        variants={variants}
        >
          <Icon name={todo.done ? "deleteCompleted" : "delete"} />
        </motion.button>
        <label className={todo.done ? classNames(styles.label, styles.checked) : styles.label}>{todo.todo}</label>
        <div 
          onClick={handleTodoCleared} 
          className={todo.done ? classNames(styles.checkbox, styles.checked) : styles.checkbox}
        >
          {todo.done && <Icon name="checked"/>}
        </div>
    </div>
  </AnimatePresence>
  )
}

export default TodoItem;