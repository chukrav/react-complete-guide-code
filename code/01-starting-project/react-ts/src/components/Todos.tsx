import React, {useContext} from "react";
import TodoItem from "./TodoItem";
import clacces from './Todos.module.css';
import {TodosContext } from '../store/todo-context';

const Todos: React.FC = () => {
  const todosCtx = useContext(TodosContext);

  return (
    <ul className={clacces.todos}>
      {todosCtx.items.map((item) => (
        // <li key={item.id}>{item.text}</li>
        <TodoItem
          key={item.id}
          text={item.text}
          onRemoveTodo={todosCtx.removeTodo.bind(null,item.id)}
        />
      ))}
    </ul>
  );
}

export default Todos;
