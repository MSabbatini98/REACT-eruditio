'use client'
import React, {useReducer, useState} from "react";

function reducer(state, action) {

}

const ACTIOS = {
    ADD_TODO: 'add-todo'
}
export default function TodoList() {
  const [todos, dispatch] = useReducer(reducer, []);
  const [name, setName] = React.useState('');



    function handleSubmit(e: React.FormEvent) {
        e.preventDefault();
        dispatch({type: ACTIOS.ADD_TODO, payload: name});
        setName('');
    }


  return (
    <html >
      <body >
        <h1>Todo List</h1>
        <div className="container">
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="New Todo" value={name} onChange={e => setName (e.target.value)}/>
                <button type="submit">Add Todo</button>
            </form>
        </div>
      </body>
    </html>
  );
}

