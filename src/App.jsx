import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Welcome from './Welcome'; 

function App() {
  const name = "Christian"; 

  return (
    <BrowserRouter>
      <Route path="/" render={() => <Welcome name={name} />} />
    </BrowserRouter>
  );
}

export default App;