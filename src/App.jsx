import React from 'react';
import { LanguageProvider } from './LanguageContext';
import { Clock } from './Clock';

 // Se provo a rimuovere  il Provider del Context cioè LanguageProvider che avvolge il componente Clock, il componente Clock perderà l'accesso al LanguageContext, e il codice smetterà di funzionare.
// Nel componente Clock, l' useContext cerca di accedere al LanguageContext per selezionare la lingua  e visualizzare il messaggio nella lingua corretta. Se rimuovi il LanguageProvider, il LanguageContext non fuonzionerà più.

function App(){
  return (
      <div>
        <h1>Language Selector</h1>
        <Clock/>
      </div>
  );
};
export default App;