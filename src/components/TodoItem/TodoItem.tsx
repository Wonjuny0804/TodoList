import React, { FC, useCallback, useRef, useState } from "react";
import { Icon } from "../index";
import styles from "./TodoItem.module.scss";
import classNames from "classnames";
import { Todo } from "../../core";
import { motion, AnimatePresence } from "framer-motion";
import { variants } from "../../Animation/variants";
import { addTodo, removeTodo, completeTodo } from "../../redux/todoSlice";

interface TodoItemProps {
  todo: Todo;
  setTodo: React.Dispatch<any>;
  allTodos: Array<Todo>;
}

const TodoItem: FC<TodoItemProps> = ({ todo, setTodo, allTodos}): JSX.Element => {
  
  const handleTodoCleared = useCallback(() => {
    return setTodo(completeTodo(todo.id))
  }, [allTodos, todo]);

  const handleDeleteClick = useCallback(() => {
    return setTodo(removeTodo(todo.id));
  }, [allTodos, todo]);

  
  return (
    <AnimatePresence>
      <motion.div 
        className={todo.done ? classNames(styles.itemWrapper, styles.checked) : styles.itemWrapper}
        variants={variants}
        initial="hidden"
        animate="visible"
      >
        <motion.button 
        type="button"
        className={todo.done ? classNames(styles.deleteButton, styles.completeDelete) : styles.deleteButton}
        variants={variants}
        onClick={handleDeleteClick}
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
    </motion.div>
  </AnimatePresence>
  )
}

export default TodoItem;