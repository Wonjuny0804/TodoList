import React, { FC } from "react";
import { Icon } from "../index";
import styles from "./TodoItem.module.scss";
import classNames from "classnames";

interface TodoItemProps {
  todo: string;
  cleared: boolean;
  setCleared: React.Dispatch<React.SetStateAction<boolean>>;
}

const TodoItem: FC<TodoItemProps> = ({ todo, cleared, setCleared}): JSX.Element => {
  
  const handleTodoCleared = () => {
    setCleared(!cleared);
  }
  
  return (
  <div className={cleared ? classNames(styles.itemWrapper, styles.checked) : styles.itemWrapper}>
    <label className={cleared ? classNames(styles.label, styles.checked) : styles.label}>{todo}</label>
    <div onClick={handleTodoCleared} className={cleared ? classNames(styles.checkbox, styles.checked) : styles.checkbox}>
      {cleared && <Icon name="checked"/>}
    </div>
  </div>
  )
}

export default TodoItem;