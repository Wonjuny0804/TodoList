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

  const divRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  const [mouseHovered, setMouseHovered] = useState<boolean>(false);
  
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

  const handelMouseOver = useCallback(() => {
    setMouseHovered(true);
  }, [setMouseHovered]);

  const handleMouseOut = useCallback(() => {
    setMouseHovered(false);
  }, [setMouseHovered])

  
  return (
    <AnimatePresence>
      <div className={styles.componentWrapper}>
        <div 
          className={todo.done ? classNames(styles.itemWrapper, styles.checked) : styles.itemWrapper}
          ref={divRef}
          onMouseOver={handelMouseOver}
          onMouseOut={handleMouseOut}
        >
          <label className={todo.done ? classNames(styles.label, styles.checked) : styles.label}>{todo.todo}</label>
          <div 
            onClick={handleTodoCleared} 
            className={todo.done ? classNames(styles.checkbox, styles.checked) : styles.checkbox}
          >
            {todo.done && <Icon name="checked"/>}
          </div>
        </div>
        <motion.button 
          type="button"
          className={mouseHovered ? classNames(styles.deleteButton, styles.hovered) : styles.deleteButton}
          // className={styles.hovered}
          variants={variants}
          ref={buttonRef}
        >
          remove
        </motion.button>
      </div>
  </AnimatePresence>
  )
}

export default TodoItem;