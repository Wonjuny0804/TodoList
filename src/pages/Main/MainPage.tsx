import styles from "./MainPage.module.scss";
import React, { FC, useState } from "react"; 
import { AddTodo, Date, Icon, Signature } from "../../components";
import { Todo } from "../../core/index";
import TodoItem from "../../components/TodoItem/TodoItem";

interface MainPageProps {
  today: Date;
}

const MainPage: FC<MainPageProps> = ({ today }) => {

  const [todos, setTodos] = useState<Array<Todo>>([]);

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
          {todos.map((todo) => <TodoItem key={todo.todo} todo={todo} setTodo={setTodos} allTodos={todos}/>)}
        </div>
      </div>
      <AddTodo addTodo={setTodos} currentTodos={todos}/>
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