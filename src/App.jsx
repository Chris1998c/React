

import { Colors } from "./Colors";
import "./App.css";




function App() {

  const colorList = ['Red', 'Blue', 'Yellow'];

  return (
    <div className="App">
    <Colors items={colorList}/>
    </div>
  )
}


export default App;