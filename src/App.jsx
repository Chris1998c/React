import { Route, Routes } from "react-router-dom"
import { Counter } from "./Counter"
import { Welcome } from "./Welcome"

function App() {

  return (
    <Routes>
      <Route path="/" element={<Welcome name="Christian"/>}/>
      <Route path="/counter" element={<Counter initialValue={0} incrementAmount={1}/>}/>
    </Routes>
  )
}

export default App
