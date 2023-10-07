import React, { useState } from 'react';
import CounterDisplay from './CounterDisplay';

function Counter({ initialValue, incrementAmount }) {
  const [count, setCount] = useState(initialValue);

  const incrementCounter = () => {
    setCount(count + incrementAmount);
  };

  return (
    <div>

      <CounterDisplay count={count} />
      <button onClick={incrementCounter}>Increment by {incrementAmount}</button>
    </div>
  );
}

export default Counter;