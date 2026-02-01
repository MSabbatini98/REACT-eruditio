'use client'
import React, {useReducer, useState} from "react";

function reducer(todos, action) {
  switch (action.type) {
    case ACTIONS.ADD_TODO:
      return [...todos, newTodo(action.payload.name) ];
    default:
      return todos;
  }
}

function newTodo(name: string) {
  return {id: Date.now(), name: name, complete: false};
}

const ACTIONS = {
    ADD_TODO: 'add-todo'
}
export default function TodoList() {
  const [todos, dispatch] = useReducer(reducer, []);
  const [name, setName] = useState('');



    function handleSubmit(e: React.FormEvent) {
        e.preventDefault();
        dispatch({type: ACTIONS.ADD_TODO, payload: {name: name}});
        setName('');
    }

    console.log(todos);

  return (
    <html suppressHydrationWarning>
      <body >
        <h1 className="todo">Todo List</h1>
        <div className="todo_container">
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="New Todo" value={name} onChange={e => setName(e.target.value)}/>
                <button type="submit">Add Todo</button>
            </form>
        </div>
      </body>
    </html>
  );
}

