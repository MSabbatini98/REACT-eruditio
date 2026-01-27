'use client'
import React, {useState , useReducer} from "react";

const ACTIONS = {
  INCREMENT: 'increment',
  DECREMENT: 'decrement'    
}

//   const ERRORS = {
//   GENERIC: 'An eerror has occurred.'
// }
function reducerFunction(state: { count: number; }, action: { type: string; }) {
  switch (action.type) {
    case ACTIONS.INCREMENT:
      return {count: state.count + 1};
    case ACTIONS.DECREMENT:
      return {count: state.count - 1};
    default:
      return state;
      //throw new Error(ERRORS.GENERIC);
  }
}


export default function Home() {
  //const [count, setCount] = useState(0);
  const [state, dispatch] = useReducer(reducerFunction, {count: 0});


  function increment() {
    // setCount(prevCount => prevCount + 1);
    dispatch({type: ACTIONS.INCREMENT});
  }
  function decrement() {
    // setCount(prevCount => prevCount - 1);
    dispatch({type: ACTIONS.DECREMENT}); 
  }
  

  return (
    <html suppressHydrationWarning>
      <body suppressHydrationWarning >
      <a href="/todo-list" className="floating-square">To Do List</a>

      <h1>Count: {state.count}</h1>
      <div className="container" >
        <button onClick={increment}>+</button>
        
        <button onClick={decrement}>-</button>
      </div>
      </body>
    </html>
  );
}
