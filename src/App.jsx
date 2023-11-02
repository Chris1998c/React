import { Route, Routes } from "react-router-dom"
import { Welcome } from "./Welcome"

function App() {

  return (
    <Routes>
      <Route path="/" element={<Welcome name="Christian"/>}/>
    </Routes>
  )
}

export default App