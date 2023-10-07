import React, { useState } from 'react';
import CounterDisplay from './CounterDisplay';

function Counter({ initialValue, incrementAmount, decrementAmount }) {
    const [count, setCount] = useState(initialValue);
  
    const incrementCounter = () => {
      setCount(count + incrementAmount);
    };
  
    const decrementCounter = () => {
      setCount(count - decrementAmount);
    };
  
    const resetCounter = () => {
      setCount(initialValue);
    };
  
    return (
      <div>
        <CounterDisplay count={count} />
  
        <button onClick={incrementCounter}>Increment by {incrementAmount}</button>
        <button onClick={decrementCounter}>Decrement by {decrementAmount}</button>
        <button onClick={resetCounter}>Reset</button>
      </div>
    );
  }

export default Counter;