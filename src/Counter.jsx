import { useState,} from "react";


export function Counter() {

    const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };


  const counterStyle = {
    fontSize: '30px',
    backgroundColor: 'yellow',
    padding: '25px',
    border: '1px solid black',
    display: 'inline-block',
  };


  return (
    <div>
      <h1>Counter</h1>
      <button onClick={increment}>Increment</button>
      <span style={counterStyle}>{count}</span>
      <button onClick={decrement}>Decrement</button>
      
    </div>
  );
};
