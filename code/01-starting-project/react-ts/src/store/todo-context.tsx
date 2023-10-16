import React, { useState } from 'react';
import Todo from '../models/todo';

const TodoContext = React.createContext<{
    items: Todo [];
    addTodo: () => void;
    removeTodo: (id: string) => void;
}> ({
    items: [],
    addTodo: () => {},
    removeTodo: (id:string ) => {},
});

const TodoContextProvider: React.FC = (props) => {
  const [todos, setTodos] = useState<Todo[]>([]);

  const addTodoHandler = (todoText: string) => {
    const newTodo = new Todo(todoText);
    setTodos((prevTodos) => {
      return prevTodos.concat(newTodo);
    });
  };

  const removeTodoHandler = (todoId: string) => {
    setTodos((prevTodos) => {
      return prevTodos.filter((todo) => todo.id !== todoId);
    });
  };

  const contextValue: {
    items: Todo[],
    addTodo: () => void,
    removeTodo: (id:string ) => void,
  } = {
    items: todos,
    addTodo: addTodoHandler,
    removeTodo: removeTodoHandler,
  };

  return <TodoContext.Provider value={contextValue} > {props.children}</TodoContext.Provider>;
};