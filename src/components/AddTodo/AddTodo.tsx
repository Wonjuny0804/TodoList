import React, { MouseEvent, useState } from 'react';
import { Button } from '../index';
import {ReactComponent as Add} from '../Button/assets/Add.svg'; 
import styles from './AddTodo.module.scss';
import classNames from "classnames";
import { Todo } from "../../core/index";

interface AddTodoProps {
    className?: string;
    addTodo: React.Dispatch<React.SetStateAction<Array<Todo>>>;
    currentTodos: Array<Todo>;
}

function AddTodo({ className, addTodo, currentTodos }: AddTodoProps):JSX.Element {

    const [writtenTodo, setWrittenTodo] = useState<string>("");

    const handleAddTodoClick = () => {
        if (writtenTodo === "") return;

        const currentTodosID = currentTodos.map(todo => todo.id);
        if (currentTodosID.length === 0) {
            addTodo([{ id: 1, todo: writtenTodo, done: false }]);
        } else {
            const maxTodoID = Math.max(...currentTodosID);
            addTodo([...currentTodos, { id: maxTodoID + 1, todo: writtenTodo, done: false}]);
        }

    }

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const target = e.target as HTMLInputElement;
        const value = target.value;

        setWrittenTodo(value);
    }
    
    return (
        <section className={className ? classNames(styles.addTodoWrapper, className) : styles.addTodoWrapper}>
            <h2 className={styles.heading}>Add</h2>
            <input 
                type="text" 
                className={styles.addTodoInput}
                onChange={handleInputChange}
            />
            <Button
                type="button"
                value=""
                disabled={false}
                name="todo"
                icon={Add}
                onClick={handleAddTodoClick}
                style={styles.addTodoButton}
            />
        </section>
    )
}

export default AddTodo;