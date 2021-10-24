import React, { MouseEvent, useState, useRef, useCallback } from 'react';
import { Button } from '../index';
import {ReactComponent as Add} from '../Button/assets/Add.svg'; 
import styles from './AddTodo.module.scss';
import classNames from "classnames";
import { Todo } from "../../core/index";
import { addTodo } from "../../redux/todoSlice";

interface AddTodoProps {
    className?: string;
    setTodo: React.Dispatch<any>;
    currentTodos: Array<Todo>;
}

function AddTodo({ className, setTodo, currentTodos }: AddTodoProps):JSX.Element {

    const [writtenTodo, setWrittenTodo] = useState<string>("");
    const inputRef = useRef<HTMLInputElement>(null);

    const handleAddTodoClick = useCallback(() => {
        if (writtenTodo === "") return;


        setTodo(addTodo(writtenTodo));

        if (inputRef.current) {
            inputRef.current.value = "";
            setWrittenTodo("");
        }
    }, [currentTodos, setTodo, addTodo, writtenTodo]);

    const handleInputChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        const target = e.target as HTMLInputElement;
        const value = target.value;

        setWrittenTodo(value);
    },[setWrittenTodo]);

    const handlePressEnter = useCallback((e: React.KeyboardEvent) => {
        if (e.key !== "Enter") return;

        setTodo(addTodo(writtenTodo));        
        
        if (inputRef.current) {
            inputRef.current.value = "";
            setWrittenTodo("");
        }
    }, [setWrittenTodo, setTodo, addTodo, currentTodos, writtenTodo]);
    
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