import React, { MouseEvent, useState, useRef, useCallback } from 'react';
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
    const inputRef = useRef<HTMLInputElement>(null);

    const handleAddTodoClick = useCallback(() => {
        if (writtenTodo === "") return;

        const currentTodosID = currentTodos.map(todo => todo.id);
        if (currentTodosID.length === 0) {
            addTodo([{ id: 1, todo: writtenTodo, done: false }]);
        } else {
            const maxTodoID = Math.max(...currentTodosID);
            addTodo([...currentTodos, { id: maxTodoID + 1, todo: writtenTodo, done: false}]);
        }

        if (inputRef.current) {
            inputRef.current.value = "";
            setWrittenTodo("");
        }
    }, [currentTodos, addTodo, writtenTodo]);

    const handleInputChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        const target = e.target as HTMLInputElement;
        const value = target.value;

        setWrittenTodo(value);
    },[setWrittenTodo]);

    const handlePressEnter = useCallback((e: React.KeyboardEvent) => {
        if (e.key !== "Enter") return;

        const currentTodosID = currentTodos.map(todo => todo.id);
        if (currentTodosID.length === 0) {
            addTodo([{ id: 1, todo: writtenTodo, done: false }]);
        } else {
            const maxTodoID = Math.max(...currentTodosID);
            addTodo([...currentTodos, { id: maxTodoID + 1, todo: writtenTodo, done: false}]);
        }
        
        if (inputRef.current) {
            inputRef.current.value = "";
            setWrittenTodo("");
        }
    }, [setWrittenTodo, addTodo, currentTodos, writtenTodo]);
    
    return (
        <section className={className ? classNames(styles.addTodoWrapper, className) : styles.addTodoWrapper}>
            <h2 className={styles.heading}>Add</h2>
            <input 
                type="text" 
                className={styles.addTodoInput}
                onChange={handleInputChange}
                onKeyUp={handlePressEnter}
                ref={inputRef}
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