import React from "react";
import {useRef} from 'react';

const NewTodo = () => {

    const todoTextInputRef = useRef<HTMLInputElement > (null);

    const submitHendler = (event: React.FormEvent ) => {
        event.preventDefault();

        const enteredText = todoTextInputRef.current?.value;
        if(enteredText?.trim.length === 0){
            //throw
            return;
        }

    };


    return (<form onSubmit={submitHendler} >
        <label htmlFor="text">Todo text</label>
        <input type="text" id="text" ref={todoTextInputRef} />
        <button>Add Todo</button>
    </form>);
};

export default NewTodo;