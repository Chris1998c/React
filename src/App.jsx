import { Colors } from "./Colors";
import "./App.css";




function App() {

  const colorList = [
    { id:1, name: 'Red' },
    { id:2, name: 'Blue' },
    { id:4, name: 'Yellow' },
  ];

  return (
    <div className="App">
    <Colors items={colorList}/>
    </div>
  )
}


export default App;