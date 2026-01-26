'use client'
import React, {useState} from "react";

export default function Home() {
  const [count, setCount] = useState(0);

  function increment() {
    setCount(prevCount => prevCount + 1);
  }
  function decrement() {
    setCount(prevCount => prevCount - 1);
  }
  return (
    <html suppressHydrationWarning>
      <body suppressHydrationWarning >
        
      <h1>Count: {count}</h1>
      
      <div className="container" >
        <button onClick={increment}>+</button>
        
        <button onClick={decrement}>-</button>
      </div>
      </body>
    </html>
  );
}
