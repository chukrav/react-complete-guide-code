import React from "react";
import {useRef,useContext } from 'react';

import classes from './NewTodo.module.css';
import {TodosContext} from '../store/todo-context';

const NewTodo: React.FC = () => {
    const todoCtx = useContext(TodosContext);

    const todoTextInputRef = useRef<HTMLInputElement > (null);

    const submitHendler = (event: React.FormEvent ) => {
        event.preventDefault();

        const enteredText = todoTextInputRef.current!.value;
        if(enteredText.trim().length === 0){
            //throw
            return;
        }

        todoCtx.addTodo(enteredText);

    };


    return (<form onSubmit={submitHendler} className={classes.form} >
        <label htmlFor="text">Todo text</label>
        <input type="text" id="text" ref={todoTextInputRef} />
        <button>Add Todo</button>
    </form>);
};

export default NewTodo;