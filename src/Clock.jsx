import React from 'react';
import { useLanguage } from './LanguageContext';

const greetings = {
  en: <h3>Hello</h3>,
  it: <h3>Ciao</h3>,
  es: <h3>Hola</h3>,

};
export function Clock(){
  const { language, setLanguage } = useLanguage();

  const handleLanguageChange = (e) => {
    setLanguage(e.target.value);
  };

  return (
    <div>
      <h2>Clock and Greeting</h2>
      <div>
         {greetings[language]}
        <h2 > {new Date().toLocaleTimeString(language)}</h2>
      </div>
      <select onChange={handleLanguageChange}>
        <option value="en">English</option>
        <option value="it">Italiano</option>
        <option value="es">Spanish</option>
      </select>
    </div>
  );
};

