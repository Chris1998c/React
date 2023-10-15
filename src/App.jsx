import { FocusableInput } from "./FocusableInput";
import "./App.css";
import { StrictMode } from "react";



function App() {
  return (
    <div className="App">
    <StrictMode>
      <FocusableInput />
    </StrictMode>
    </div>
  )
}


export default App;