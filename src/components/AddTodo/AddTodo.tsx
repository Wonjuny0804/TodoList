import React, { KeyboardEvent, MouseEvent } from 'react';
import { Button } from '../index';
import {ReactComponent as Add} from '../Button/assets/Add.svg'; 
import styles from './AddTodo.module.scss';

function AddTodo() {

    const handleAddTodoClick = (event: MouseEvent) => {
        console.log(event.target)
    }

    const handleInputOnKeyDown = (event: KeyboardEvent) => {
        console.log(event.target)
    }
    
    return (
        <section className={styles.addTodoWrapper}>
            <h2 className={styles.heading}>Add</h2>
            <input 
                type="text" 
                className={styles.addTodoInput}
                onKeyDown={handleInputOnKeyDown}
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