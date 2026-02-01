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
      <a href="/basic-useReducer" className="floating-square floating-square-right">Counter</a>

      <h1>React Sandbox</h1>
      <div className="Intro" >
        <p>Let's learn how to use react and it's components. In particular <i>useReduder </i></p>
      </div>
      </body>
    </html>
  );
}
