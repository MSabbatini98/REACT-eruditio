import { ACTIONS } from "./page.tsx";

export default function Todo({ todo, dispatch }) {
  return (
    <div className="todo_item">
        <div className="testo">
            <p style={{color: todo.complete ? "#AAA" : "#000" }}>
                {todo.name}
            </p>
        </div>
        <div className="buttons">
            <button onClick={() => dispatch({type: ACTIONS.DELETE_TODO, payload: {id: todo.id}})}>Delete</button>
            <button onClick={() => dispatch({type: ACTIONS.TOGGLE_TODO, payload: {id: todo.id}})}>Toggle</button>
        </div>
    </div>
  );
}