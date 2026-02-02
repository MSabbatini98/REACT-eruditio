"use client";
import React, { useReducer, useState } from "react";
import Todo from "./Todo.js";

export const ACTIONS = {
  ADD_TODO: "add-todo",
  TOGGLE_TODO: "toggle-todo",
  DELETE_TODO: "delete-todo",
};

interface Todo {
  id: number;
  name: string;
  complete: boolean;
}

function reducer(todos: Todo[], action: any): Todo[] {
  switch (action.type) {
    case ACTIONS.ADD_TODO:
      return [...todos, newTodo(action.payload.name)];

    case ACTIONS.TOGGLE_TODO:
      return todos.map((todo) => {
        if (todo.id === action.payload.id) {
          return { ...todo, complete: !todo.complete };
        }
        return todo;
      });
          
      case ACTIONS.DELETE_TODO:
      return todos.filter(todo => todo.id !== action.payload.id);

    default:
      return todos;
  }
}

function newTodo(name: string) {
  return { id: Date.now(), name: name, complete: false };
}

export default function TodoList() {
  const [todos, dispatch] = useReducer(reducer, []);
  const [name, setName] = useState("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const trimmed = name.trim();
    if (!trimmed) return; // do not submit empty or whitespace-only todos
    dispatch({ type: ACTIONS.ADD_TODO, payload: { name: trimmed } });
    setName("");
  }

  // console.log(todos);

  return (
    <html suppressHydrationWarning>
      <body>
        <h1 className="todo">Todo List</h1>
        <div className="container ">
          <form className="todo_form" onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="New Todo"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <button type="submit">Add Todo</button>
          </form>
          <div className="todo_list">
            {todos.map((todo: Todo) => {
              return <Todo key={todo.id} todo={todo} dispatch={dispatch} />;
            })}
          </div>
        </div>
      </body>
    </html>
  );
}
