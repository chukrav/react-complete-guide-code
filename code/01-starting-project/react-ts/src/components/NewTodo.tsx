import React from "react";
import {useRef} from 'react';

const NewTodo: React.FC<{onAddTodo: (text: string) => void }> = (props) => {

    const todoTextInputRef = useRef<HTMLInputElement > (null);

    const submitHendler = (event: React.FormEvent ) => {
        event.preventDefault();

        const enteredText = todoTextInputRef.current!.value;
        if(enteredText.trim().length === 0){
            //throw
            return;
        }

        props.onAddTodo(enteredText);

    };


    return (<form onSubmit={submitHendler} >
        <label htmlFor="text">Todo text</label>
        <input type="text" id="text" ref={todoTextInputRef} />
        <button>Add Todo</button>
    </form>);
};

export default NewTodo;