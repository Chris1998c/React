import React, { useState } from 'react';

function Counter() {

  const [counter, setCounter] = useState(0);


  const incrementCounter = () => {
    setCounter(counter + 1);
  };

  return (
    <div>
      <h1>Counter= {counter}</h1>
      <button onClick={incrementCounter}>Increment</button>
    </div>
  );
}

export default Counter;