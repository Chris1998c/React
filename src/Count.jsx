import React, { useState } from 'react';


/* meglio usare una funzione perchè si lavora con il numero precedente in questo caso,oppurecome è stato spiegato a lezione, il prev, cioè lo stato precedente, così da evitare problemi con l'asincrono*/

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