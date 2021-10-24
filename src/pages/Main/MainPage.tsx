import styles from "./MainPage.module.scss";
import React, { FC, useState } from "react"; 
import { AddTodo, Date, Icon, Signature } from "../../components";
import { Todo } from "../../core/index";
import TodoItem from "../../components/TodoItem/TodoItem";
import { useDispatch, useSelector, Provider } from "react-redux";
import store, { selectTodos } from "../../redux/store"

interface MainPageProps {
  today: Date;
}

const MainPage: FC<MainPageProps> = ({ today }) => {

  const todos = useSelector(selectTodos);
  const dispatch = useDispatch();

  return (
  <main className={styles.mainContentWrapper}>
    <Date month={today.getMonth()} day={today.getDay()} date={today.getDate()} />
    <section className={styles.appWrapper}>
      <div>
        <div className={styles.appHead}>
          <h1 className={styles.appTitle}>Todo List</h1>
          <Icon name="logo"/>
        </div>
        <div className={styles.todosWrapper}>
          {todos.map((todo) => <TodoItem key={todo.id} todo={todo} setTodo={dispatch} allTodos={todos}/>)}
        </div>
      </div>
      <AddTodo setTodo={dispatch} currentTodos={todos}/>
    </section>
    <section className={styles.signature}>
      <Signature
        first_name="Wonjun" 
        last_name="Jang" 
        occupation="Frontend Engineer" 
        description={["Creative Tech Enthusiast", "intereeted in Art"]}
      />
    </section>
  </main>
  )
}

export default MainPage;