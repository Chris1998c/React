import React, { useState } from 'react';



function Counter({initialValue, incrementAmount}) {

  const [counter, setCounter] = useState(initialValue);


  const incrementCounter = () => {
    setCounter(counter + incrementAmount);
  };

  return (
    <div>
      <h1>Counter= {counter}</h1>
      <button onClick={incrementCounter}>Increment by {incrementAmount}</button>
    </div>
  );
}

export default Counter;