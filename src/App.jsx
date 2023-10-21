import React from 'react';
import { LanguageProvider } from './LanguageContext';
import { Clock } from './Clock';

function App(){
  return (
    <LanguageProvider>
      <div>
        <h1>Language Selector</h1>
        <Clock/>
      </div>
    </LanguageProvider>
  );
};

export default App;