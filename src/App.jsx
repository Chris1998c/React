import React from 'react';
import AlertClock from './AlertClock';

function App() {
  const Click = () => {
    const clock = Date();
    alert(`L'ora corrente è: ${clock}`);
  };

  return (
    <div >
      <h1>Clock alert</h1>
      <AlertClock onButtonClick={Click} />
    </div>
  );
}

export default App;